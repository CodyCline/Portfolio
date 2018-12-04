import React from 'react';
import Aux from '../../../hoc/_Aux';

const title = (props) => {
    return (
        <Aux>
            <h1 style={{textAlign: 'center'}}>{props.text}</h1>
        </Aux>
    );
}

export default title;