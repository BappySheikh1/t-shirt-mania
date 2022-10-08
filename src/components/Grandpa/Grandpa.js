import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father'
import Aunty from "../Aunty/Aunty"
import Uncle from "../Uncle/Uncle"


export const RingCotext = createContext('Matir Ring')
export const MoneyContext=createContext(555)
const Grandpa = () => {
    const [house, setHouse]=useState(1);
    const [money, setMoney]=useState(555)
    // const ring ='diamond ring'
    return (
        <RingCotext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money,setMoney]}>
           <div className='grandpa'>
            <h2>Granpa</h2>
            <section className='flex'>
                <Father house={house} />
                <Uncle  house={house} />
                <Aunty  house={house} />
            </section>
        </div>
        </MoneyContext.Provider>
        </RingCotext.Provider>
        
    );
};

export default Grandpa;