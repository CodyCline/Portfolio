import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, {HelperText, Input} from '@material/react-text-field';
import Button from '@material/react-button'
import Icon from '@mdi/react'
import { mdiSend, mdiAccountCircle, mdiPhone, mdiEmail, mdiInformationOutline, mdiMessageText } from '@mdi/js'
import SnackBar from '../UI/SnackBar/SnackBar';

class ContactForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    }

    sendForm () {
        this.setState({sent: true})
    }

    render() {
        return (
        <Grid>
            <Row>
                <Cell desktopColumns={3}/>
                <Cell desktopColumns={3}>
                    <TextField
                        value={this.state.firstName}
                        onChange={(e) => this.setState({value: e.target.firstName})}
                        leadingIcon={<Icon size={1} path={mdiAccountCircle} color="#333333"/>}
                        outlined
                        label='First Name *'
                        helperText={<HelperText>Required</HelperText>}
                    >
                        <Input
                            value={this.state.firstName}
                            onChange={(e) => this.setState({firstName: e.target.value})} 
                        />
                    </TextField>                    
                </Cell>
                <Cell desktopColumns={3}>
                    <TextField
                        value={this.state.lastName}
                        onChange={(e) => this.setState({value: e.target.lastName})}
                        leadingIcon={<Icon size={1} path={mdiAccountCircle} color="#333333"/>}
                        outlined
                        label='Last Name *'
                        helperText={<HelperText>Required</HelperText>}
                    >
                        <Input
                            value={this.state.lastName}
                            onChange={(e) => this.setState({lastName: e.target.value})} 
                        />
                    </TextField>
                </Cell>
                <Cell desktopColumns={3}/>
            </Row>
            <Row>
                <Cell desktopColumns={3}/>
                <Cell desktopColumns={3}>
                    <TextField
                        leadingIcon={<Icon size={1} path={mdiEmail} color="#333333"/>}
                        outlined
                        label='Email *'
                        helperText={<HelperText>Required</HelperText>}
                    >
                        <Input
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}      
                        />
                    </TextField>                    
                </Cell>
                <Cell desktopColumns={3}>
                    <TextField
                        leadingIcon={<Icon size={1} path={mdiPhone} color="#333333"/>}
                        outlined
                        label='Phone'
                        helperText={<HelperText>Fully Optional</HelperText>}
                    >
                        <Input
                            value={this.state.phoneNumber}
                            onChange={(e) => this.setState({phoneNumber: e.target.value})} 
                        />
                    </TextField>
                </Cell>
                <Cell desktopColumns={3}/>
            </Row>
            <Row>
                <Cell desktopColumns={3} />
                <Cell desktopColumns={6}>
                    <TextField 
                        leadingIcon={<Icon size={1} path={mdiInformationOutline} color="#333333"/>}
                        outlined
                        label='Subject *'
                        helperText={<HelperText>Required</HelperText>}
                    >
                        <Input
                            value={this.state.subject}
                            onChange={(e) => this.setState({subject: e.target.value})} 
                        />
                    </TextField>
                </Cell>
                <Cell desktopColumns={6}/>
            </Row>
            <Row>
                <Cell desktopColumns={3}/>
                <Cell desktopColumns={6}>
                    <TextField
                        trailingIcon={<Icon size={1} path={mdiMessageText} color="#333333"/>}
                        outlined
                        textarea
                        label='Message *'
                        helperText={<HelperText>Required</HelperText>}
                        
                    >
                        <Input
                            value={this.state.message}
                            onChange={(e) => this.setState({message: e.target.value})} 
                        />
                    </TextField>
                </Cell>
                <Cell desktopColumns={3}/>
            </Row>
            <Row>
                <Cell desktopColumns={3} />
                <Cell desktopColumns={3}>
                    <Button outlined raised icon={<Icon size={1} path={mdiSend} color="#FFFFFF"/>}>send!</Button>
                </Cell>
                <Cell desktopColumns={6} />
            </Row>
        </Grid>
        );
    }
}

export default ContactForm