import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
   


    return (
        <div className='homepage'>
       <Link to='/beers' className='page-card'>
            All Beers
        </Link>
       <Link to='/random-beer' className='page-card'>
            Random Beer
        </Link>
       <Link to='/new-beer' className='page-card'>
            New Beer
        </Link>
        </div>
    );
}

export default HomePage;