import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta} from '@material/react-list';
import ProfileDetails from '../../Components/ProfileIntro/ProfileDetails';
import MaterialIcon from '@material/react-material-icon';
import Avatar from '../../Components/ProfileIntro/Avatar';
import Divider from '../../Assets/Divider/Divider';

class Home extends React.Component {
    render () {
        return (
            <Grid>
                <Row>
                    <Cell desktopColumns={1}></Cell>
                </Row>
                <Row >
                    <Cell desktopColumns={2}></Cell>
                    <Cell desktopColumns={2}><Avatar/></Cell>
                    <Cell desktopColumns={1}></Cell>
                    <Cell desktopColumns={4}><ProfileDetails/></Cell>
                    <Cell desktopColumns={3} align="top"></Cell>
                    <Divider color="blue" />
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