import React from 'react';
import { withRouter } from 'react-router-dom';
import Card, {
    CardActionButtons,
    CardActions,
    CardPrimaryContent,
    CardMedia
} from "@material/react-card";
import Button from '@material/react-button';
import Line from '../UI/Line/Line';


class ProjectCard extends React.Component {
    onProjectNavigate = () => {
        this.props.history.push("/project-testxxx");
    }

    render () {
        return (
            <Card outlined className="card-configuration">
                <CardPrimaryContent onClick={this.onProjectNavigate}>
                    <CardMedia wide imageUrl="https://www.xmple.com/wallpaper/blue-linear-gradient-purple-1920x1080-c2-8a2be2-00ced1-a-90-f-14.svg">
                    </CardMedia>
                    <Line height="5" width="400" color="#304FFE"/>
                    <div style={{padding: '0 0.8em 0.8em 0.8em'}}>
                        <h2>Project: Lorem Ipsem</h2>
                        <p>{this.props.supportText}</p>
                    </div>
                </CardPrimaryContent>
                <CardActions>                
                    <CardActionButtons>
                        <Button className="card-button">visit</Button>
                        <Button className="card-button">source code</Button>
                    </CardActionButtons>
                </CardActions>
                
                
                {/* <CardActions>                
                    <CardActionButtons>
                        <Button onClick={this.onProjectNavigate}>SEE MORE</Button>
                    </CardActionButtons>
                    <CardActionIcons>
                        <Icon                    
                            path={mdiStarOutline}
                            color="#626262"
                            size={2}
                        />
                    </CardActionIcons>
                </CardActions> */}
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