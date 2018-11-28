import React from 'react';

const line = (props) => {
    return (
            <svg height="10" width={props.children}>
                <rect width="275" height="5" style={{fill:"#6200EE"}}  />
            </svg>
            
        
    );
}

export default line