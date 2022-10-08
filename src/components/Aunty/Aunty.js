import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({house,ring}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <p><small>House: {house}</small></p>
            <section className='flex'>
             <Cousin house={house} ring={ring} />
             <Cousin house={house} ring={ring}/>
            </section>
        </div>
    );
};

export default Aunty;