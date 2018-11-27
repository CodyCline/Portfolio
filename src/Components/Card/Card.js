import React from 'react';
import Button from '@material/react-button';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from "@material/react-card";
import MaterialIcon from '@material/react-material-icon';
import Line from '../../Assets/SVG-Shapes/Line/Line';
import { withRouter } from 'react-router-dom';

class ProjectCard extends React.Component {
    onProjectNavigate = () => {
        this.props.history.push("/");
    }

    render () {
        return (
            <Card >
                <CardPrimaryContent>
                    {/* <CardMedia imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a8/Purple.svg" /> */}
                    {/* <img alt="card" style={{"height": '10em'}} src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Purple.svg"></img> */}
                    <h1>Project: XXXXX</h1>
                    <p>CMS for Developer Projects allows users to manage their developer projects</p>
                </CardPrimaryContent>
                <Line></Line>
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