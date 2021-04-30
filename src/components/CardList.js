import React from 'react';
import Card from './Card.js'

const CardList = ({robots}) => {
    let stylingObject = {
        div: {
            'display': 'flex',
            'flexWrap' : 'wrap',
            'justifyContent': 'center',
        }
    }
    return (
        <div style={stylingObject.div}>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={user.id} 
                            name={user.name} 
                            email={user.email}
                        />
                    )
                })
            }
        </div>  
    );
}

export default CardList;