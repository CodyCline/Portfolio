import React from 'react';
import Button from '@material/react-button';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from "@material/react-card";
import MaterialIcon from '@material/react-material-icon';
import Line from '../../Assets/SVG-Assets/Line/Line';
import { withRouter } from 'react-router-dom';

class ProjectCard extends React.Component {
    onProjectNavigate = () => {
        this.props.history.push("/project-testxxx");
    }

    render () {
        return (
            <Card outlined>
                <CardPrimaryContent onClick={this.onProjectNavigate}>
                    <img alt="card" style={{"height": '8em'}} src="https://www.xmple.com/wallpaper/blue-linear-gradient-purple-1920x1080-c2-8a2be2-00ced1-a-90-f-14.svg"></img>
                    <h2>Project: XXXXX</h2>
                    <p>{this.props.supportText}</p>
                </CardPrimaryContent>
                <Line/>
                
                <CardActions>                
                    <CardActionButtons>
                        <Button onClick={this.onProjectNavigate}>SEE MORE</Button>
                    </CardActionButtons>
                    <CardActionIcons>
                        <MaterialIcon icon="star_bordered" />
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