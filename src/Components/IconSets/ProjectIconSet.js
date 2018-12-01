import React from 'react'
import { Cell } from '@material/react-layout-grid'
import Aux from '../../hoc/_Aux';
import Button from '@material/react-button';
import Icon from '@mdi/react';
import { mdiEarth, mdiGithubFace} from '@mdi/js';

const projectIconSet = (props) => {
    return (
        <Aux>
            <Cell desktopColumns={4}/>
            <Cell desktopColumns={2}>
            <Button
                raised
                outlined
                href={props.projectURL} 
                target="_blank"
                icon={
                    <Icon 
                        path={mdiEarth} 
                        size={1}
                        color="#FFFFFF"
                    />
                }
            >Visit Website</Button>
            </Cell>
            <Cell desktopColumns={2}>
            <Button
                raised
                outlined
                href={props.sourceURL} 
                target="_blank"
                icon={
                    <Icon 
                        path={mdiGithubFace} 
                        size={1}
                        color="#FFFFFF"
                    />
                }
            >View Source</Button>
            </Cell>
            <Cell desktopColumns={4}/>
        </Aux>
    );
}

export default projectIconSet;