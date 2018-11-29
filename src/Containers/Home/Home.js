import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta} from '@material/react-list';
import ProfileDetails from '../../Components/ProfileIntro/ProfileDetails';
import MaterialIcon from '@material/react-material-icon';
import Avatar from '../../Components/ProfileIntro/Avatar';
import Spacer from '../../Components/Spacer/Spacer';
import Tool from '../../Components/ToolList/Tool/Tool';
import Aux from '../../hoc/_Aux';

class Home extends React.Component {
    render () {
        return (
            <Grid>
                <Row >
                    <Cell desktopColumns={2}></Cell>
                    <Cell desktopColumns={2}><Avatar/></Cell>
                    <Cell desktopColumns={1}></Cell>
                    <Cell desktopColumns={4}><ProfileDetails/></Cell>
                    <Cell desktopColumns={3} align="top"></Cell>
                    <Spacer/>
                </Row>
                <Row>
                    <Cell desktopColumns={5}></Cell>
                    <Cell desktopColumns={2}>
                        <h1>About</h1>
                        <hr></hr>
                    </Cell>
                    <Cell desktopColumns={5}></Cell>
                </Row>
                <Row>
                    <Cell desktopColumns={2}></Cell>
                    <Cell desktopColumns={8}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </Cell>
                    <Cell desktopColumns={2}></Cell>
                    <Spacer />
                </Row>
                <Row>
                    <Cell desktopColumns={5}></Cell>
                    <Cell desktopColumns={3}>
                        <h1>My Toolbox</h1>
                        <hr></hr>
                    </Cell>
                    <Cell desktopColumns={4}></Cell>
                </Row>
                <Row>
                    <Cell desktopColumns={2}/>
                    <Cell desktopColumns={3}>
                        <Tool/>
                    </Cell>
                    <Cell desktopColumns={2}/>
                    <Cell desktopColumns={3}>
                        <Tool/>
                    </Cell>
                    <Cell desktopColumns={2} />
                    <Spacer/>
                </Row>
                <Row>
                    <Cell desktopColumns={5}></Cell>
                    <Cell desktopColumns={4}>
                        <h1>Projects & Client Work</h1>
                        <hr></hr>
                    </Cell>
                    <Cell desktopColumns={3}></Cell>
                </Row>

                
            </Grid>
            // <p>Introduction statement and profile</p>
            // <p>Showcase 3 services</p>
            // <p>Showcase 3 projects with see more button</p>
            // <p>Contact page</p>
            
        );
    }
}

export default Home;