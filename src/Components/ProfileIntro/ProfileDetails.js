import React from 'react';
import Aux from '../../hoc/_Aux';
import SocialIconSet from '../IconSets/SocialIconSet'

const profileDetails = () => {
    return (
        <Aux>
            <h1>Hi, i'm Cody Cline</h1>
            <h3>Full Stack Developer based in greater Seattle, WA </h3>
            <hr/>      
            <SocialIconSet/>      
        </Aux>
    );
}

export default profileDetails;