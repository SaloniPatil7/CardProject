import { useEffect, useState } from 'react';
import './Card.css'

function Card() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        let data = await fetch('http://localhost:3000/data');
        let response = await data.json();
        setData(response);
    }

    return (
        <div className='container'>
            {
                data.map((card) => {
                    return <>
                        <div className='card'>
                            <div className='photo'>
                                photo
                            </div>
                            <div className='data'>
                                <p className='name'>  {card.name}</p>
                                <p>{card.email}</p>
                                <p>{card.address}</p>
                                <p>{card.phoneNumber}</p>
                                <p>{card.link}</p>
                                <p>{card.website}</p>
                                <p>{card.company}</p>
                            </div>
                        </div>
                    </>
                })
            }

        </div>
    )
}

export default Card