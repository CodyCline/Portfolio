import React from 'react'
import Aux from '../../hoc/_Aux';
import Icon from '@mdi/react';
import { mdiLinkedinBox, mdiGithubFace, mdiPhoneInTalk, mdiEmail } from '@mdi/js';

const socialmediaIconSet = () => {
    return (
        <Aux>
            <a href="http://google.com" target='_blank' rel="noopener noreferrer">
                <button class="mdc-icon-button material-icons">
                    <Icon                    
                        path={mdiGithubFace}
                        color="#333333"
                    />
                </button>
            </a>
            <a href="http://google.com" target='_blank' rel="noopener noreferrer">
                <button href="http://google.com" class="mdc-icon-button material-icons">
                    <Icon                    
                        path={mdiLinkedinBox}
                        color="#0077B5"
                    />
                </button>
            </a>
            <a href="http://google.com" target='_blank' rel="noopener noreferrer">
                <button href="http://google.com" class="mdc-icon-button material-icons">
                    <Icon                    
                        path={mdiEmail}
                        color="#626262"
                    />
                </button>
            </a>
            <a href="http://google.com" target='_blank' rel="noopener noreferrer">
                <button href="http://google.com" class="mdc-icon-button material-icons">
                    <Icon                    
                        path={mdiPhoneInTalk}
                        color="#626262"
                    />
                </button>
            </a>
            
        </Aux>
    );
}

export default socialmediaIconSet;