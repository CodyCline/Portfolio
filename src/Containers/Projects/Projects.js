import React from 'react';
import ProjectCard from '../../Components/Card/Card';
import {Cell, Grid, Row} from '@material/react-layout-grid';


const projects = () => {    
    return (
        <Grid>
            <Row>
                <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}/>
                <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}><h1>Projects & Client Work</h1></Cell>
                <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}/>
            </Row>
            <Row>
                <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard height="8em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                </Cell>
                <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard height="8em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                </Cell>
                <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard height="8em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                </Cell>
                <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                    <ProjectCard height="8em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                </Cell>
            </Row>
        </Grid>
    );
}

export default projects;