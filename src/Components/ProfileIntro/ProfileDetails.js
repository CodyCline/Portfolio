import React from 'react';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import Aux from '../../hoc/_Aux';
import Icon from '@mdi/react'
import { mdiLinkedinBox, mdiGithubFace, mdiPhone, mdiEmail } from '@mdi/js'

const profileDetails = () => {
    return (
        <Aux>
            <h1>Hi, i'm Cody Cline</h1>
            <h3>Full Stack Developer based in greater Seattle, WA </h3>
            <hr/>
            <Icon path={mdiGithubFace}
                size={1.5}
                color="#333"
            />
            <Icon path={mdiLinkedinBox}
                size={1.5}
                color="#0077B5"
            />
            <Icon path={ mdiPhone }
                size={1.5}
                color="#626262"
            />
            <Icon path={ mdiEmail }
                size={1.5}
                color="#626262"
            />
        </Aux>
    );
}

export default profileDetails;