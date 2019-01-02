import React from 'react';
import Aux from '../../hoc/_Aux';
import Line from '../UI/Line/Line';
import SocialIconSet from '../IconSets/SocialIconSet'

const profileDetails = () => {
    let styles = {
        color: 'white'
    }
    return (
        
        <Aux>
            <h1 style={styles}>Hi, i'm Cody Cline</h1>
            <h3 style={styles}>Full Stack Developer based in greater Seattle, WA </h3>
            <Line height="1" width="400" color="#304FFE"/>     
        </Aux>
    );
}

export default profileDetails;