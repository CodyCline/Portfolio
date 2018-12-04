import React from 'react';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import Hexagon from '../../../Assets/Hexagon/Hexagon';
import Button from '@material/react-button';

const skillCard = (props) => {
    return (
        
        <Card outlined>
                <CardPrimaryContent>
                    {/* <Cell> */}
                        <Hexagon height="175" width="150" color="#FFFFFF"/>
                    {/* </Cell> */}
                    <div style={{padding: '0.5em'}}>
                    <h2>Cloud </h2>
                    <p >Lorem imspem dolor ipsut nunca et al de Lorem imspem dolor ipsut nunca et al de</p>
                    </div>
                </CardPrimaryContent>
                
                
                <CardActions>                
                    <CardActionButtons>
                        <Button>details</Button>
                    </CardActionButtons>
                </CardActions>
            </Card>
    );
}

export default skillCard;