import React, { createContext } from 'react';
import './Grandpa.css'
import Father from '../Father/Father'
import Aunty from "../Aunty/Aunty"
import Uncle from "../Uncle/Uncle"


const RingCotext = createContext('Matir Ring')
const Grandpa = () => {
    const house = 7;
    const ring ='diamond ring'
    return (
        <div className='grandpa'>
            <h2>Granpa</h2>
            <section className='flex'>
                <Father house={house} ring={ring}/>
                <Uncle  house={house} />
                <Aunty  house={house} ring={ring}/>
            </section>
        </div>
    );
};

export default Grandpa;