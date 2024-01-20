import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    /* key prop should have something that doesn't change.
    For example, index (or i in our case) could change if array items get moved.
    So a better key in this case would be something unique like id.
    */
    const cardsArray = robots.map((user, i) => {
        return (
            <Card
                key={robots[i].id}  // key={i} can use but not the best
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    });

    return (
        <div>
            {cardsArray}
        </div>
    );
};

export default CardList;

// Another way to write
/*
const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}  // key={i} can use but not the best
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
};

export default CardList;
*/