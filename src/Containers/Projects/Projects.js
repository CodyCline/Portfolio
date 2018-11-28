import React from 'react';
import ProjectCard from '../../Components/Card/Card';
import {Cell, Grid, Row} from '@material/react-layout-grid';


const projects = () => {
    return (
        <Grid>
            <Row>
                <Cell align="left"/>
                <Cell align="middle"><h1>Projects & Client Work</h1></Cell>
                <Cell align="right"/>
            </Row>
            <Row>
                <Cell align="middle" desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                </Cell>
                <Cell align="middle" desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                </Cell>
                <Cell align="middle" desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                </Cell>
                <Cell align="middle" desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                </Cell>
            </Row>
        </Grid>
    );
}

export default projects;