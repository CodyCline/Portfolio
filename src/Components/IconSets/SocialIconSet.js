import React from 'react'
import Aux from '../../hoc/_Aux';
import Icon from '@mdi/react';
import { mdiLinkedinBox, mdiGithubFace, mdiPhoneInTalk, mdiEmail } from '@mdi/js';

const socialmediaIconSet = () => {
    return (
        <Aux>
            <Icon
                style={{padding: '0.33em'}} 
                path={mdiGithubFace}
                size={1.5}
                color="#333"
            />
            <Icon
                style={{padding: '0.33em'}}  
                path={mdiLinkedinBox}
                size={1.5}
                color="#0077B5"
            />
            <Icon 
                style={{padding: '0.33em'}} 
                path={ mdiPhoneInTalk }
                size={1.5}
                color="#626262"
            />
            <Icon 
                style={{padding: '0.33em'}} 
                path={ mdiEmail }
                size={1.5}
                color="#626262"
            />
        </Aux>
    );
}

export default socialmediaIconSet;