'use client'

import { useState } from "react"
import axios from "axios";

export default function Post(){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [name, setName] = useState();

    const clearInputs = () => {
        setTitle('');
        setName('');
        setDescription('');
    }

    const handlePublish = () => {
        axios.post('http://localhost:5000/post', {
            title,
            description,
            name,
        })
        .catch((error) => console.warn(error));

        clearInputs();
    }

    return (
        <div className="post-comp" id="post-comp">
            <div>
                <p id="post-label">Create a new post</p>
            </div>
            <div id="input-side">
                <input
                    placeholder="What's on your mind?" 
                    className="inputs" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="Description" 
                    className="inputs" 
                    id="description-input" 
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    placeholder="Full name" 
                    className="inputs" 
                    required 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div id="button-side">
                <button id="post-button" onClick={handlePublish}>Publish</button>
                <button id="clear-button" onClick={clearInputs}>Clear</button>
            </div>
        </div>
    )
}