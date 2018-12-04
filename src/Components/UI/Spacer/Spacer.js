import React from 'react';
const spacer = (props) => {
    let styles = {
        height: props.height,
        width: props.width
    }

    return(
        <div style={styles}></div>
    );
}

export default spacer;