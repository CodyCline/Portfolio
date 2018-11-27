import React from 'react';
import ProjectCard from '../../Components/Card/Card';
import {Cell, Grid, Row} from '@material/react-layout-grid';


const projectPage = () => {
    return (
        <Grid className="mdc-layout-grid--align">
            <Row>
                <Cell align="middle" desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard/>
                </Cell>
                <Cell align="middle" desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard/>
                </Cell>
                <Cell align="middle" desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard/>
                </Cell>
                <Cell align="middle" desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard/>
                </Cell>
                <Cell align="middle" desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard/>
                </Cell>
            </Row>
        </Grid>
    );
}

export default projectPage;