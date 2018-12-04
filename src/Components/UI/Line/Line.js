import React from 'react';

const line = (props) => {
    let styles = {
        fill: props.color,
        width: props.width,
        height: props.height
    }
    return (
            <svg height="10" width={props.children}>
                <rect style={styles}  />
            </svg>
            
        
    );
}

export default line;