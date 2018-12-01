import React from 'react';
import Button from '@material/react-button';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import Icon from '@mdi/react';
import { mdiStarOutline } from '@mdi/js';
import Line from '../../Assets/SVG-Assets/Line/Line';
import { withRouter } from 'react-router-dom';

class ProjectCard extends React.Component {
    onProjectNavigate = () => {
        this.props.history.push("/project-testxxx");
    }

    render () {
        let styles = {
            height: this.props.height
        }
        return (
            <Card outlined>
                <CardPrimaryContent onClick={this.onProjectNavigate}>
                    <img alt="card" style={styles} src="https://www.xmple.com/wallpaper/blue-linear-gradient-purple-1920x1080-c2-8a2be2-00ced1-a-90-f-14.svg"></img>
                    <h2>Project: XXXXX</h2>
                    <p>{this.props.supportText}</p>
                </CardPrimaryContent>
                <Line/>
                
                <CardActions>                
                    <CardActionButtons>
                        <Button onClick={this.onProjectNavigate}>SEE MORE</Button>
                    </CardActionButtons>
                    <CardActionIcons>
                    <Icon path={mdiStarOutline}
                        size={2}
                        color="#626262"
                    />
                    </CardActionIcons>
                </CardActions>
            </Card>
        );
    }

    
        
        // <CardMedia imageUrl='https://images.crazygames.com/gustaaf-party.png'>
        //     <img src='https://images.crazygames.com/gustaaf-party.png'></img>
            
            
        // </CardMedia>
            // {/* <img src="https://images.crazygames.com/gustaaf-party.png"/> */}
        // {/* </div> */}
    
}

export default withRouter(ProjectCard);