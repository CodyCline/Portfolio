import React from 'react';
import { withRouter } from 'react-router-dom';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer from '@material/react-drawer';
import List, {ListItem, ListItemText, ListItemGraphic} from '@material/react-list';
import Icon from '@mdi/react';
import Footer from '../Footer/Footer';
import { mdiMenu, mdiHome, mdiFolder, mdiEmail } from '@mdi/js';
import './Layout.scss'



class Layout extends React.Component {
    state = {
        open: false
    }
    
    mainContentEl = React.createRef();

    onDrawerOpen = () => {
        this.setState({open:true})
        
    } 
        
    navigateHome = () => {
        this.props.history.push("/");
        this.onDrawerClose();
    }

    navigateProjects = () => {
        this.props.history.push("/projects");
        this.onDrawerClose();
    }

    navigateContact = () => {
        this.props.history.push("/contact");
        this.onDrawerClose();
    }

    onDrawerClose = () => {
        this.setState({open: false});
    }

    onListItemClick = () => this.onDrawerClose();
    
    render () {
        return(
        <div>
            <Drawer
                modal
                open={this.state.open}
                onClose={this.onDrawerClose}
            >
                <List>
                    <ListItem onClick={this.navigateHome}>
                        <ListItemGraphic graphic={<Icon path={ mdiHome } color="#626262" />} />
                        <ListItemText primaryText='Home' />
                    </ListItem>
                    <ListItem onClick={this.navigateProjects}>
                        <ListItemGraphic graphic={<Icon path={ mdiFolder } color="#626262" />} />
                        <ListItemText primaryText='Projects' />
                    </ListItem>
                    <ListItem onClick={this.navigateContact}>
                        <ListItemGraphic graphic={<Icon path={ mdiEmail } color="#626262" />} />
                        <ListItemText primaryText='Contact' />
                    </ListItem>
                
                </List>
            </Drawer>
            <div ref={this.mainContentEl}>
                <TopAppBar
                    title={<p onClick={this.navigateHome} className="my-name">Cody Cline</p>}
                    navigationIcon={
                        <Icon 
                            path={ mdiMenu } 
                            onClick={this.onDrawerOpen} 
                            color="#FFFFFF"
                            size={2} 
                        />
                    }
                    className="bar-fill"
                />
                <TopAppBarFixedAdjust style={{backgroundColor: '#212121'}}>
                    {this.props.children}
                    <Footer/> 
                </TopAppBarFixedAdjust>
                              
            </div>
        </div>
        );
    }
}

export default withRouter(Layout);