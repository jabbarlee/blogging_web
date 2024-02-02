'use client'

import { useState } from "react"
import axios from "axios";

export default function Post({setCards}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    const handlePublish= () => {
        console.log(`
            Title: ${title}
            Description: ${description}
            Name: ${name}    
        `)

        setCards(prevState => ({
            title: [...prevState.title, title],
            description: [...prevState.description, description],
            fullname: [...prevState.fullname, name]
        }))

        clearInputs();
    }

    const clearInputs = () => {
        setTitle('');
        setDescription('');
        setName('');
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
                {/* <button id="clear-button" onClick={clearInputs}>Clear</button> */}
            </div>
        </div>
    )
}