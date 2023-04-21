import React, { useEffect, useState } from 'react'
import { Card } from '@/components/Card';

const characters = "https://rickandmortyapi.com/api/character"

const Consumer = () => {

    const [myData, setMyData] = useState([]);

    fetch(characters)
        .then(res => res.json())
        .then(data => setMyData(data.results))
        .catch(e => console.log(e))

    return (
        <>
            {console.log(myData)}
            {myData.map(pers => (
                <Card key={pers.id} name={pers.name} status={pers.status} species={pers.species} image={pers.image} />
            ))}
        </>
    )
}

export default Consumer