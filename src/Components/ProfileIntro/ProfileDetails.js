import React from 'react';
import Aux from '../../hoc/_Aux';
import Line from '../UI/Line/Line';
import SocialIconSet from '../IconSets/SocialIconSet'

const profileDetails = () => {
    return (
        <Aux>
            <h1>Hi, i'm Cody Cline</h1>
            <h3>Full Stack Developer based in greater Seattle, WA </h3>
            <Line height="1" width="400" color="#6200EE"/>    
            <SocialIconSet/>      
        </Aux>
    );
}

export default profileDetails;