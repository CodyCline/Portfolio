import React from 'react';
import Aux from '../../hoc/_Aux';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
    CardMedia,
} from "@material/react-card";
import Modal from '../Modal/Modal'
import Hexagon from '../../Assets/Hexagon/Hexagon';
import Button from '@material/react-button';
import { 
    mdiLanguageHtml5, 
    mdiLanguageCss3, 
    mdiLanguageJavascript, 
    mdiReact,
    mdiJquery,
    mdiMaterialDesign,
    mdiSass, 
    mdiWebpack
} from '@mdi/js';
import Icon from '@mdi/react';

class SkillCard extends React.Component {
    state = {skillOpen: false}

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
                    <div>
                        <Icon path={mdiLanguageJavascript} color="#F5DE19" size={2} />
                        <Icon path={mdiReact} color="#61DBFB" size={2} />
                        <Icon path={mdiWebpack} color="#8ED6FB" size={2} />
                        <Icon path={mdiLanguageCss3} color="#3060A2" size={2} />
                        <Icon path={mdiSass} color="#CE679A" size={2} />
                    </div>
                    <div style={{padding: '0.5em'}}>
                        <h2>Cloud</h2>
                        <p>Lorem imspem dolor ipsut nunca et al de Lorem imspem dolor ipsut nunca et al de</p>
                    </div>
                </CardPrimaryContent>
            </Card>
            <Modal show={this.state.skillOpen} modalClosed={this.onImageClose}>
                {this.props.component}
            </Modal>
            </Aux>
        );
    }
}

export default SkillCard;