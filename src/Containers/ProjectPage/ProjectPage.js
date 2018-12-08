import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import GalleryItem from '../../Components/GalleryItem/GalleryItem';
import DevLogs from '../../Components/DevLog/DevLog';
import ProjectIconSet from '../../Components/IconSets/ProjectIconSet';
import Line from '../../Components/UI/Line/Line';
import Spacer from '../../Components/UI/Spacer/Spacer';

class ProjectPage extends React.Component {
    render() {
        return (
        <Grid>
            <Row>
                <Cell desktopColumns={4} />
                <Cell desktopColumns={4} align="middle">
                    <h2 style={{textAlign: 'center'}}>Project XXXXX</h2>
                    <Line width="400" height="1" color="#6200EE"/>
                    <Spacer height="2.5em"/>
                </Cell>
                <Cell desktopColumns={4} />
            </Row>
            <Row>
                <Cell desktopColumns={2}></Cell>
                    <Cell desktopColumns={2} phoneColumns={2}>
                        <GalleryItem/>
                    </Cell>
                    <Cell desktopColumns={2} phoneColumns={2}>
                            <GalleryItem/>
                    </Cell>
                    <Cell desktopColumns={2} phoneColumns={2}>
                            <GalleryItem/>
                    </Cell>
                    <Cell desktopColumns={2} phoneColumns={2}>
                            <GalleryItem/>
                    </Cell>
                <Cell desktopColumns={2}/>
                
            </Row>
            <Spacer height="2.5em"/>
            <Row>
                <Cell desktopColumns={2}></Cell>
                <Cell desktopColumns={8}>
                    <h2 style={{textAlign: 'center'}}>About this project</h2>
                    <p style={{ textAlign: "justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p style={{ textAlign: "justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Cell>
                <Cell desktopColumns={2}></Cell>
            </Row>
            <Spacer height="2.5em"/>
            <Row>
                <Cell desktopColumns={2}></Cell>
                <Cell desktopColumns={8}>
                    <DevLogs/>
                </Cell>
                <Cell desktopColumns={2}></Cell>
            </Row>
            <Spacer height="2.5em"/>
            <Row>
                <ProjectIconSet projectURL="https://www.google.com" sourceURL="http://github.com/CodyCline"/>
            </Row>
        </Grid>

        );
    }
}

export default withRouter(ProjectPage);