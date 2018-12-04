import React from 'react';
import { withRouter } from 'react-router-dom';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer from '@material/react-drawer';
import List, {ListItem, ListItemText, ListItemGraphic} from '@material/react-list';
import Icon from '@mdi/react';
import { mdiMenu, mdiHome, mdiFolder, mdiEmail } from '@mdi/js';


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

    handleRedirect = () => {
        this.props.history.push("/projects");
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
                    <ListItem onClick={this.handleRedirect}>
                        <ListItemGraphic graphic={<Icon path={ mdiFolder } color="#626262" />} />
                        <ListItemText primaryText='Projects' />
                    </ListItem>
                    <ListItem onClick={this.handleRedirect}>
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
                />
                <TopAppBarFixedAdjust>
                    {this.props.children}
                </TopAppBarFixedAdjust>                
            </div>
        </div>
        );
    }
}

export default withRouter(Layout);