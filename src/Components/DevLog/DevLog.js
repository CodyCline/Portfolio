import React from 'react';
import Aux from '../../hoc/_Aux'

class DevLog extends React.Component {


    render () {
        return (
            <Aux>
                <iframe title="airtable-embed" className="airtable-embed" src="https://airtable.com/embed/shrxO8Udk3dUSurFd?backgroundColor=yellow" frameBorder="0" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>

            </Aux>
        );
    }
}

export default DevLog;