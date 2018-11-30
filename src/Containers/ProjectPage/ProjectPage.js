import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import Button from '@material/react-button';
import Icon from '@mdi/react';
import { mdiArrowAll } from '@mdi/js';
import Card from '@material/react-card';



class ProjectPage extends React.Component {
    render() {
        return (
        <Grid>
            <Row>
                <Cell align="left"><Icon path={ mdiArrowAll } size={1.5} color="#626262" onClick={this.props.history.goBack}/></Cell>
                <Cell align="middle"><h2>Project XXXXX</h2></Cell>
                <Cell align="right"/>
            </Row>
            <Row>
                <Cell align>
                    <p>*table of contents (may deprecate if unessecary</p>
                    <p>*picture gallery</p>
                    <p>*paragraphs of explaining text</p>
                    <p>*log of bugs from Airtable</p>
                    <p>*log of tests and changelog</p>
                    <p>*github and website link</p>
                    <p>*footer</p>
                </Cell>
            
            </Row>
        </Grid>       

        );
    }
}

export default withRouter(ProjectPage);