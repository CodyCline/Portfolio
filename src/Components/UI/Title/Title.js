import React from 'react';
import Aux from '../../../hoc/_Aux';

const title = (props) => {
    let styles = {
        textAlign: props.orientation,
        color: '#F5F6FD'
    }
    return (
        <Aux>
            <h1 style={styles}>{props.text}</h1>
        </Aux>
    );
}

export default title;