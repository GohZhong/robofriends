import React from 'react';

const searchBox = ({ searchfield, searchChange }) => {
    return(
        <div className='pa2' style={{position: 'sticky', top:'0', 'zIndex':'100'}}>
            <input className='w5-m pa3 ba b--green bg-lightest-blue'type='search' placeholder='Search robots' onChange={searchChange}/>

        </div>    
    );
}

export default searchBox;