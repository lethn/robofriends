import React from 'react';

/* { searchfield, searchChange }
We are using destructuring: ({...})
which allows us to grab the props object and grabs its properties
*/
const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
