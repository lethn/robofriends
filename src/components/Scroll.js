import React from 'react';

const Scroll = (props) => { // create components that wrap other components
    /*  We have ouble curly brackets {}: a JavaScript expression, And within this is an object
        and this object can have CSS styles, such as a property "overflowY".
        + CSS: overflow-y
        + JSX: overflowY => use this
    => *** You must camelCase for JSX ***
    */
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
