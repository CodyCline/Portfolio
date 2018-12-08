import React from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Title from '../../Components/UI/Title/Title';


const projects = () => {    
    return (
        <Grid>
            <Row>
                <Cell desktopColumns={1}/>
                <Cell desktopColumns={10}>
                    <Row>
                        <Cell desktopColumns={1} phoneColumns={4} tabletColumns={4}/>
                        <Cell desktopColumns={10} phoneColumns={4} tabletColumns={4}>
                            <Title text="Projects & Client Work" orientation="center"/>
                        </Cell>
                        <Cell desktopColumns={1} phoneColumns={4} tabletColumns={4}/>
                    </Row>
                    <Row>
                        <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}>
                            <ProjectCard height="8em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                        </Cell>
                        <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}>
                            <ProjectCard height="8em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                        </Cell>
                        <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}>
                            <ProjectCard height="8em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                        </Cell>
                    </Row>
                </Cell>
                <Cell desktopColumns={1}/>
            </Row>
        </Grid>
    );
}

export default projects;