import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import GalleryItem from '../../Components/GalleryItem/GalleryItem';
import ProjectIconSet from '../../Components/IconSets/ProjectIconSet';
import Icon from '@mdi/react';
import { mdiKeyboardBackspace } from '@mdi/js';
import  Card, { CardPrimaryContent} from '@material/react-card';

class ProjectPage extends React.Component {
    render() {
        return (
        <Grid>
            <Row>
                <Cell desktopColumns={4} />
                <Cell desktopColumns={4} align="middle"><h2 style={{textAlign: 'center'}}>Project XXXXX</h2></Cell>
                <Cell desktopColumns={4} />
            </Row>
            <Row>
                <Cell desktopColumns={2}/>
                <Cell desktopColumns={8}>
                    <Icon path={mdiKeyboardBackspace} size={1.5} onClick={this.props.history.goBack} color="#626262"/>
                    <hr/>
                </Cell>                
                <Cell desktopColumns={2}/>
            </Row>
            <Row>
                <Cell desktopColumns={2}></Cell>
                    <Cell desktopColumns={2}>
                            <GalleryItem/>
                    </Cell>
                    <Cell desktopColumns={2}>
                            <GalleryItem/>
                    </Cell>
                    <Cell desktopColumns={2}>
                            <GalleryItem/>
                    </Cell>
                    <Cell desktopColumns={2}>
                            <GalleryItem/>
                    </Cell>
                <Cell desktopColumns={2}/>
            </Row>
            <Row>
                <Cell desktopColumns={2}></Cell>
                <Cell desktopColumns={8}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Cell>
                <Cell desktopColumns={2}></Cell>
            </Row>
            <Row>
                <Cell desktopColumns={2}></Cell>
                <Cell desktopColumns={8}>
                    <p>Expansion Panel of Bug Logs</p>
                </Cell>
                <Cell desktopColumns={2}></Cell>
            </Row>
            <Row>
                <Cell desktopColumns={2}></Cell>
                <Cell desktopColumns={8}>
                    <p>Expansion Panel of Tests, Dev procedures</p>
                </Cell>
                <Cell desktopColumns={2}></Cell>
            </Row>
            <Row>
                <ProjectIconSet projectURL="https://www.google.com" sourceURL="http://github.com/CodyCline"/>
            </Row>
        </Grid>       

        // <p>*picture gallery</p>
        // <p>*paragraphs of explaining text</p>
        // <p>*log of bugs from Airtable</p>
        // <p>*log of tests and changelog</p>
        // <p>*github and website link</p>
        // <p>*footer</p>

        );
    }
}

export default withRouter(ProjectPage);