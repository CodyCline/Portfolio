import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer from '@material/react-drawer';
import List, {ListItem, ListItemText, ListItemGraphic} from '@material/react-list';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';


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
                        <ListItemGraphic graphic={<MaterialIcon icon='home'/>} />
                        <ListItemText primaryText='Home' />
                    </ListItem>
                    <ListItem onClick={this.handleRedirect}>
                        <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
                        <ListItemText primaryText='Projects' />
                    </ListItem>
                    <ListItem onClick={this.handleRedirect}>
                        <ListItemGraphic graphic={<MaterialIcon icon='mail'/>} />
                        <ListItemText primaryText='Contact' />
                    </ListItem>
                
                </List>
            </Drawer>
            <div ref={this.mainContentEl}>
                <TopAppBar
                    title='Cody Cline'
                    navigationIcon={<MaterialIcon 
                    icon='menu'
                    onClick={this.onDrawerOpen}
                    />}
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