import React from 'react';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import Aux from '../../hoc/_Aux';

const profileDetails = () => {
    return (
        <Aux>
            <h1>Hi, i'm Cody Cline</h1>
            <h3>Full Stack Developer based in Greater Seattle, WA </h3>
            <hr/> 
        </Aux>
    );
}

export default profileDetails;