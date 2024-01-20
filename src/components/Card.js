import React from 'react';

const Card = (props) => {
    const { name, email, id } = props;
    /* This means Destructuring
        const name = props.name;
        const email = props.email;
        const id = props.id;
    */
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
