import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function BeersList() {
    const [beer, setBeer] = useState([])

    const getBeer = async () => {
        setBeer(
    (await axios.get('https://ih-beers-api2.herokuapp.com/beers/')).data)
    };

    useEffect(() => {
        getBeer();
    }, []);    

    return (
        <div className='beers-list'>
        {beer.map(({image_url, name,tagline,contributed_by , _id}) => (
            <Link to={'/beers/' + _id}>
        <div className='beer-card'>
            <img src={image_url} alt=''className='beer-card--image' />
            <span className='beer-card--name'>{name}</span>
            <span className='beer-card--tagline'>{tagline}</span>
            <span className='beer-card--contributor'>{contributed_by}</span>
            </div>
            </Link>
            ))}
        </div>
    );
}

export default BeersList;