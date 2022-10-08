import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt,handleAddToCart}) => {
    const {picture,name,price}=tShirt
    return (
        <div className='tShirt-single'>
            <img src={picture} alt="" />
                <h2> {name}</h2>
                <h4>Price: {price}</h4>
             <button onClick={()=>handleAddToCart(tShirt)}>Buy This</button>
        </div>
    );
};

export default TShirt;