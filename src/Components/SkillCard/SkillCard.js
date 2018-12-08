import React from 'react';
import Aux from '../../hoc/_Aux';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
} from "@material/react-card";
import Modal from '../Modal/Modal'
import Hexagon from '../../Assets/Hexagon/Hexagon';
import Button from '@material/react-button';

class SkillCard extends React.Component {
    state = {skillOpen: true}

    onSkillDetailOpen = () => {
        this.setState({skillOpen: true})
    }
    onImageClose = () => {
        this.setState({skillOpen: false})
    }

    render () {
        return (
            <Aux>
            <Card onClick={this.onSkillDetailOpen} outlined>
                <CardPrimaryContent>
                    <Hexagon height="175" width="150" color="#FFFFFF"/>
                    <div style={{padding: '0.5em'}}>
                        <h2>Cloud</h2>
                        <p>Lorem imspem dolor ipsut nunca et al de Lorem imspem dolor ipsut nunca et al de</p>
                    </div>
                </CardPrimaryContent>
                <CardActions>                
                    <CardActionButtons>
                        <Button onClick={this.onSkillDetailOpen}>details</Button>
                    </CardActionButtons>
                </CardActions>
            </Card>
            <Modal show={this.state.skillOpen} modalClosed={this.onImageClose}>
                {this.props.component}
            </Modal>
            </Aux>
        );
    }
}

export default SkillCard;