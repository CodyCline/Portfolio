import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import Spacer from '../../UI/Spacer/Spacer';
import Icon from '@mdi/react';
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


class BackendSkills extends React.Component {
    render () {
        return (
            <Card  outlined>
                <Row>
                    <Cell desktopColumns={4}/>
                    <Cell desktopColumns={4}><h2>My back-end skills</h2></Cell>
                    <Cell desktopColumns={4}><h2>My back-end skills</h2></Cell>
                </Row>
                {/* Next row */}
                <Row>
                    <Cell desktopColumns={1}></Cell>
                    <Cell desktopColumns={2}>
                        <Icon path={mdiLanguageJavascript} color="#F5DE19" size={2} />
                        JavaScript
                    </Cell>
                    <Cell desktopColumns={2}>
                        <Icon path={mdiReact} color="#61DBFB" size={2} />
                        React.js
                    </Cell>
                    <Cell desktopColumns={2}>
                        <Icon path={mdiWebpack} color="#8ED6FB" size={2} />
                        Webpack
                    </Cell>
                    <Cell desktopColumns={2}>
                        <Icon path={mdiJquery} color="#0968AC" size={2} /> 
                        Jquery
                    </Cell>
                </Row>
                <Spacer height="1em"/>
                <Row>
                    <Cell desktopColumns={1}/>
                    <Cell desktopColumns={2}>
                        <Icon path={mdiLanguageHtml5} color="#E54C21" size={2} />
                        HTML5
                    </Cell>
                    <Cell desktopColumns={2}>
                        <Icon path={mdiLanguageCss3} color="#3060A2" size={2} />
                        CSS3
                    </Cell>
                    <Cell desktopColumns={2}>
                        <Icon path={mdiSass} color="#CE679A" size={2} />
                        Sass
                    </Cell>
                    <Cell desktopColumns={2}>
                        <Icon path={mdiMaterialDesign} color="#757575" size={2} />
                        Material Design
                    </Cell>                    
                    
                </Row>
                <Spacer height="2.5em"/>
            </Card>
        );
    }
}



export default BackendSkills;