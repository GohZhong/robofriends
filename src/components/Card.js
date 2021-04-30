import React from 'react';

const Card = (props) => {
    const {name, email, id} = props
    return (
        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5" style= {{'width': 'fit-content', 'height':'fit-content', 'padding':'0px 5px'}}>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <div>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;