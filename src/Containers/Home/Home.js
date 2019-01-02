import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import ProfileDetails from '../../Components/ProfileIntro/ProfileDetails';
import SocialIconSet from '../../Components/IconSets/SocialIconSet';
import Avatar from '../../Components/ProfileIntro/Avatar';
import SkillCard from '../../Components/SkillCard/SkillCard';
import DesignSkills from '../../Components/SkillCard/SkillList/DesignSkills';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Button from '@material/react-button';
import Spacer from '../../Components/UI/Spacer/Spacer';
import Title from '../../Components/UI/Title/Title';
import TextBlock from '../../Components/UI/TextBlock/TextBlock';

class Home extends React.Component {
    render () {
        return (           
            <Grid>
                <Row>
                    <Cell desktopColumns={2}/>
                    <Cell desktopColumns={2}>
                        <Avatar/>
                    </Cell>
                    <Cell desktopColumns={1}></Cell>
                    <Cell desktopColumns={4}>
                        <ProfileDetails/>
                        <SocialIconSet/>
                    </Cell>
                    <Cell desktopColumns={3}/>
                </Row>
                <Spacer height="6em"/>
                <Row>
                    <Cell desktopColumns={4}></Cell>
                    <Cell desktopColumns={4}>
                        <Title text="About" orientation="center"/>
                        
                    </Cell>
                    <Cell desktopColumns={4}></Cell>
                </Row>
                <Row>
                    <Cell desktopColumns={2}></Cell>
                    <Cell desktopColumns={8}>
                        <TextBlock text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                    </Cell>
                    <Cell desktopColumns={2}></Cell>                    
                </Row>
                <Spacer height="6em"/>
                <Row>
                    <Cell desktopColumns={4}/>
                    <Cell desktopColumns={4}>
                        <Title text="My Toolbox" orientation="center"/>
                    </Cell>
                    <Cell desktopColumns={4}/>
                </Row>
                <Spacer height="2.5em"/>
                <Row>
                    <Cell desktopColumns={1}/>
                    <Cell desktopColumns={10}>
                        <Row>
                            <Cell desktopColumns={4}>
                                <SkillCard component={<DesignSkills/>}/>
                            </Cell>
                            <Cell desktopColumns={4}>
                                <SkillCard component={<DesignSkills/>}/>
                            </Cell>
                            <Cell desktopColumns={4}>
                                <SkillCard component={<DesignSkills/>}/>
                            </Cell>
                        </Row>
                    </Cell>
                    <Cell desktopColumns={1}/>
                </Row>                
                <Spacer height="6em"/>
                <Row>
                    <Cell desktopColumns={3}/>
                    <Cell desktopColumns={6}>
                        <Title text="Projects & Client Work" orientation="center"/>
                    </Cell>
                    <Cell desktopColumns={3}/>
                </Row>
                <Spacer height="2.5em"/>
                <Row>
                    <Cell desktopColumns={1}/>                    
                    <Cell desktopColumns={10}>
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
                <Spacer height="2.5em"/>
                
                <Row>                    
                    <Cell desktopColumns={5}/>
                    <Cell desktopColumns={2}>
                        <Button className="button-alternate" outlined raised>see all projects</Button>
                    </Cell>
                    <Cell desktopColumns={5}/>
                    <Spacer height="6em"/>
                </Row>
                <Row>
                    <Cell desktopColumns={4}></Cell>
                    <Cell desktopColumns={4}>
                        <Title text="Contact" orientation="center"/>
                    </Cell>
                    <Cell desktopColumns={4}></Cell>
                </Row>
                <ContactForm/>
                <Spacer height="1.0em"/>
                          
                
            </Grid>            
        );
    }
}

export default Home;