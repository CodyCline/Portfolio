import React from 'react'
import { NavLink } from 'react-router-dom';
import Aux from '../../hoc/_Aux';
import Icon from '@mdi/react';
import { mdiLinkedinBox, mdiGithubFace, mdiPhoneInTalk, mdiEmail, mdiStackOverflow } from '@mdi/js';

const socialmediaIconSet = () => {
    return (
        <Aux>
            <a href="http://google.com" target='_blank' rel="noopener noreferrer">
                <button className="mdc-icon-button material-icons">
                    <Icon                    
                        path={mdiGithubFace}
                        color="#F5F6FD"
                    />
                </button>
            </a>
            <a href="http://google.com" target='_blank' rel="noopener noreferrer">
                <button className="mdc-icon-button material-icons">
                    <Icon                    
                        path={mdiLinkedinBox}
                        color="#0077B5"
                    />
                </button>
            </a>
            <NavLink to="/contact">
                <button className="mdc-icon-button material-icons">
                    <Icon                    
                        path={mdiEmail}
                        color="#F5F6FD"
                    />
                </button>
            </NavLink>
            <a href="tel:+11234567890" target='_blank' rel="noopener noreferrer">
                <button className="mdc-icon-button material-icons">
                    <Icon                    
                        path={mdiPhoneInTalk}
                        color="#F5F6FD"
                    />
                </button>
            </a>
            <a href="http://google.com" target='_blank' rel="noopener noreferrer">
                <button className="mdc-icon-button material-icons">
                    <Icon                    
                        path={mdiStackOverflow}
                        color="#F48024"
                    />
                </button>
            </a>
            
        </Aux>
    );
}

export default socialmediaIconSet;