'use client'

import Card from './Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard(){
    const [clientCards, setClientCards] = useState({
        title: [],
        description: [],
        fullname: []
    })
    const [databaseList, setDatabaseList] = useState({
        id: [],
        title: [],
        description: [],
        fullname: []
    })

    useEffect(() => {
        axios.get('http://localhost:5000/data').then(
            response => response.data
        ).then(data => {
            const idArray = data.map(item => item.id);
            const titleArray = data.map(item => item.title);
            const descriptionArray = data.map(item => item.description);
            const fullnameArray = data.map(item => item.fullname);

            setDatabaseList({
                id: idArray,
                title: titleArray,
                description: descriptionArray,
                fullname: fullnameArray
            })
        })
    }, [])

    useEffect(() => {
        setClientCards({
            title: databaseList.title,
            description: databaseList.description,
            fullname: databaseList.fullname,
        })
    }, [databaseList])

    console.log(clientCards)
    return(
        <div className="post-comp">
            <div>
                <input placeholder="Search..." className="inputs"/>
            </div>
            <div id='cards-side'>
                {clientCards.title.map((item, index) => {
                    return(
                        <Card title={item} description={clientCards.description[index]} fullname={clientCards.fullname[index]}/>
                    )
                })}
            </div>
        </div>
    )
}