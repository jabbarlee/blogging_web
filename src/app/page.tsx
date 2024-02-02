import Post from './components/Post'
import Dashboard from './components/Dashboard'
import { useState } from 'react'
import axios from 'axios'

export default function Home(){

    return (
        <div id="wrapper">
            <Post/>
            <Dashboard/>
        </div>
    )
}