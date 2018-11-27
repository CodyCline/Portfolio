import React from 'react';

const line = (props) => {
    return (
            <svg height="10" width={props.children}>
                <rect width="275" height="5" style={{"fill": "{props.color}"}} />
            </svg>
            
        
    );
}

export default line