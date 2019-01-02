import React from 'react';
import Aux from '../../../hoc/_Aux';

const textBlock = (props) => {
    let styles = {
        textAlign: props.orientation,
        color: 'white'
    }

    return ( 
        <Aux>
            <p style={styles}>{props.text}</p>
        </Aux>
    );
}

export default textBlock;