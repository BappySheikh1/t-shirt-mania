import React from 'react';
import Brother from '../Grandpa/Brother';
import MySelf from "../MySelf/MySelf"
import Sister from "../Sister/Sister"

const Father = ({house,ring}) => {
    return (
        <div>
            <h4>Father</h4>
            <p>House: {house}</p>
            <section className='flex'>
            <MySelf  house={house} ring={ring} />
            <Brother house={house} />
            <Sister  house={house}/>
            </section>
        </div>
    );
};

export default Father;