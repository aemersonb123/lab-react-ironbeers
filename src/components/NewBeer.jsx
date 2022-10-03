import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NewBeer() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewerTips, setBrewerTips] = useState('');
    const [attenuationLevel, setAtenuationLevel] = useState('');
    const [contributor, setContributor] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        const data = {
            name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewer_tips: brewerTips,
            attenuation_level: attenuationLevel,
            contributor
        }
        axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', data)
        .then((response) => {
            if(response.status !== 200) return alert(response.data.message);
            navigate("/beers")
        });
    };

    return (
        <div className='new-beer-form'>
            <input 
            value={name}
            placeholder='name...'
            type='text'
            onChange={({target}) => setName(target.value)}
            className='new-beer-input'
            />
               <input 
            value={tagline}
            placeholder='tagline...'
            type='text'
            onChange={({target}) => setTagline(target.value)}
            className='new-beer-input'
            />
               <input 
            value={description}
            placeholder='description...'
            type='text'
            onChange={({target}) => setDescription(target.value)}
            className='new-beer-input'
            />
               <input 
            value={firstBrewed}
            placeholder='first brewed...'
            type='text'
            onChange={({target}) => setFirstBrewed(target.value)}
            className='new-beer-input'
            />
               <input 
            value={brewerTips}
            placeholder='brewer tips...'
            type='text'
            onChange={({target}) => setBrewerTips(target.value)}
            className='new-beer-input'
            />
               <input 
            value={attenuationLevel}
            placeholder='attenuation level...'
            type='text'
            onChange={({target}) => setAtenuationLevel(target.value)}
            className='new-beer-input'
            />
               <input 
            value={contributor}
            placeholder='contributor...'
            type='text'
            onChange={({target}) => setContributor(target.value)}
            className='new-beer-input'
            />

            <button onClick={handleSubmit} className='new-beer-submit'>
                Continue
            </button>
        </div>
    );
}

export default NewBeer;