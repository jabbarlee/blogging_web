'use client'

import Post from './components/Post'
import Dashboard from './components/Dashboard'
import { useState } from 'react'
import axios from 'axios'

export default function Home(){
    const [clientCards, setClientCards] = useState({
        title: [],
        description: [],
        fullname: []
    })

    return (
        <div id="wrapper">
            <Post setCards={setClientCards}/>
            <Dashboard cards={clientCards} setCards={setClientCards}/>
        </div>
    )
}