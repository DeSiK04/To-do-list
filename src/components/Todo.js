import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit,
}) {
    const [newTitle, setNewTitle] = React.useState(todo.title);

    const handleChange = (e) => {
        e.preventDefault();
        if(todo.complete === true) {
            setNewTitle(todo.title);
        } else {
            todo.title = "";
            setNewTitle(e.target.value);
        }
    };

    return (
        <div className="todo">
            <input
                style={{
                    maxWidth:"410px", 
                    width: "100vw",
                    textDecoration: todo.completed && "line-through"
                }}
                type="text"
                value={todo.title === "" ? newTitle : todo.title}
                className="list"
                onChange={ handleChange }
            />
            <div className="iconsElems">
                <button className="done"
                    onClick={() => toggleComplete(todo)}
                >
                    <DoneIcon className="button_complete"/>
                </button>

                <button className="edit"
                    onClick={() => handleEdit(todo, newTitle)}
                >
                    <EditIcon className="button-edit"/>
                </button>

                <button className="delete"   
                    onClick={() => handleDelete(todo.id)}
                >
                    <DeleteForeverIcon className="button-delete"/>
                </button>
            </div>

        </div>
    );
}