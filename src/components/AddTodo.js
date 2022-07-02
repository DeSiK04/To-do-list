import React from "react";
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";
import TextField from '@mui/material/TextField';


export default function AddTodo() {
    const [title, setTitle] = React.useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            });
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input_container">
                <TextField 
                    id="standard-basic" 
                    label="Write a todo" 
                    variant="standard"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        maxWidth:"420px",
                        width: "100vw"
                    }}
                />
                <button 
                    className="btn_container"
                >Add
                </button>
            </div>
        </form>
    );
}