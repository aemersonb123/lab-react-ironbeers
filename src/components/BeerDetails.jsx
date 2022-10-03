import axios from 'axios';
import { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function BeerDetails() {
    const [beer, setBeers] = useState([]);
    const { _id } = useParams();

    const getBeer = async () => {
        setBeers(
            (await axios.get('https://ih-beers-api2.herokuapp.com/beers/' + _id)).data 
        );
    };

    useEffect(() => {
        getBeer();
    }, []);

    return (
        <div className='beer-details'>
        <img src={beer.image_url} alt='' className='beer-details--image' />
        <div className='beer-details--info'>
        <div className='beer-details--row'>
<span className='beer-details--name'>{beer.name}</span>
<span className='beer-details--att-level'>
{beer.attenuation_level}
</span>
</div>
        <div className='beer-details--row'>
<span className='beer-details--tagline'>{beer.tagline}</span>
<span className='beer-details--first-brewed'>{beer.first_brewed}</span>
</div>
<span className='beer-details--description'>{beer.description}</span>
<span className='beer-details--contributor'>{beer.contributed_by}</span>
</div>
       </div> 
    );
}

export default BeerDetails;