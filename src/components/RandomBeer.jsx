import axios from 'axios';
import React, { useEffect, useState } from 'react';


function RandomBeer() {
 const [beer, setBeer] = useState([])

    const getBeer = async () => {
        setBeer(
    (await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')).data)
    };

    useEffect(() => {
        getBeer();
    }, []); 

    return (
        <div className='beer-details'>
            <img src={beer.image_url} alt=''className='beer-details--image' />
        <div className='beer-details--info'>
           <div className='beer-details--row'>
            <span className='beer-details--name'>{beer.name}</span>
            <span className='beer-details--att-level'>{beer.attenuation_level}</span>
            </div>
            <div className='beer-details--row'>
            <span className='beer-details--contributor'>{beer.contributed_by}</span>
            <span className='beer-details--tagline'>{beer.tagline}</span>
            </div>

            <span className='beer-details--first-brewed'>{beer.first_brewed}</span>
            <span className='beer-details--description'>{beer.description}</span>

            </div>
        </div>
    );
}

export default RandomBeer;