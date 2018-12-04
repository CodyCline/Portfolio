import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import ProfileDetails from '../../Components/ProfileIntro/ProfileDetails';
import Avatar from '../../Components/ProfileIntro/Avatar';
import Tool from '../../Components/ToolList/Tool/Tool';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Button from '@material/react-button';
import Spacer from '../../Components/UI/Spacer/Spacer';
import Line from '../../Components/UI/Line/Line';
import Title from '../../Components/UI/Title/Title';

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
                    <Spacer height="6em"/>
                </Row>
                <Row>
                    <Cell desktopColumns={4}></Cell>
                    <Cell desktopColumns={4}>
                        <Title text="About"/>
                        <Line height="1" width="400" color="#6200EE"/>
                    </Cell>
                    <Cell desktopColumns={4}></Cell>
                </Row>
                <Row>
                    <Cell desktopColumns={2}></Cell>
                    <Cell desktopColumns={8}>
                        <p style={{textAlign: 'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </Cell>
                    <Cell desktopColumns={2}></Cell>
                    <Spacer height="6em"/>
                </Row>
                <Row>
                    <Cell desktopColumns={4}></Cell>
                    <Cell desktopColumns={4}>
                        <Title text="My Toolbox"/>
                        <Line height="1" width="400" color="#6200EE"/>
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
                    <Spacer height="6em"/>
                </Row>
                <Row>
                    <Cell desktopColumns={4}></Cell>
                    <Cell desktopColumns={4}>
                    <Title text="Projects & Client Work"/>
                        <Line height="1" width="400" color="#6200EE"/>
                    </Cell>
                    <Cell desktopColumns={4}></Cell>
                </Row>
                <Row>
                    <Cell desktopColumns={3}></Cell>
                    <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                        <ProjectCard height="6em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                    </Cell>
                    <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                        <ProjectCard height="6em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                    </Cell>
                    <Cell desktopColumns={3}></Cell>
                    <Spacer height="2.5"/>
                    
                </Row>
                <Row>
                    <Cell desktopColumns={3}></Cell>
                    <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                        <ProjectCard height="6em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                    </Cell>
                    <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
                        <ProjectCard height="6em" supportText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                    </Cell>
                    <Cell desktopColumns={3}></Cell>
                    
                </Row>
                <Spacer height="2.5em"/>
                <Row>
                    
                    <Cell desktopColumns={5}></Cell>
                    <Cell desktopColumns={2}><Button outlined raised>see all projects</Button></Cell>
                    <Cell desktopColumns={5}></Cell>
                    <Spacer height="6em"/>
                </Row>
                <Row>
                    <Cell desktopColumns={4}></Cell>
                    <Cell desktopColumns={4}>
                    <Title text="Contact"/>
                        <Line height="1" width="400" color="#6200EE"/>
                    </Cell>
                    <Cell desktopColumns={4}></Cell>
                </Row>
                <ContactForm/>              
            </Grid>
            // <p>Introduction statement and profile</p>
            // <p>Showcase 3 services</p>
            // <p>Showcase 3 projects with see more button</p>
            // <p>Contact page</p>
            
        );
    }
}

export default Home;