'use client'

import Card from './Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard({ cards, setCards}){
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
        setCards({
            title: databaseList.title,
            description: databaseList.description,
            fullname: databaseList.fullname,
        })
    }, [databaseList])

    return(
        <div className="post-comp">
            <div>
                <input placeholder="Search..." className="inputs"/>
            </div>
            <div id='cards-side'>
                {cards.title.map((item, index) => {
                    return(
                        <Card title={item} description={cards.description[index]} fullname={cards.fullname[index]}/>
                    )
                })}
            </div>
        </div>
    )
}