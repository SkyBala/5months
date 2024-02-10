import React from 'react';
import './rikmorti.css'
const RikMortiCards = (props) => {
    return (
        <div className='cards'>
            {
                props.data.map((item, index)=>
                    <div className='card' key={index}>
                        <img src={item.image} alt="#"/>
                        <h1>{item.name}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default RikMortiCards;