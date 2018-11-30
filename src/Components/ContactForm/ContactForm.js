import React from 'react';
import Aux from '../../hoc/_Aux';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, {HelperText, Input} from '@material/react-text-field';
import Button from '@material/react-button'
import Icon from '@mdi/react'
import { mdiLinkedinBox, mdiGithubFace, mdiPhone, mdiEmail } from '@mdi/js'

class ContactForm extends React.Component {
    state = {}

    render() {
        return (
        <Grid>
            <Row>
                <Cell desktopColumns={3}/>
                <Cell desktopColumns={3}>
                    <TextField
                        outlined
                        label='First Name *'
                        helperText={<HelperText>Required</HelperText>}
                    >
                        <Input/>
                    </TextField>                    
                </Cell>
                <Cell desktopColumns={3}>
                    <TextField
                        outlined
                        label='Last Name *'
                        helperText={<HelperText>Required</HelperText>}
                    >
                        <Input/>
                    </TextField>
                </Cell>
                <Cell desktopColumns={3}/>
            </Row>
            <Row>
                <Cell desktopColumns={3}/>
                <Cell desktopColumns={3}>
                    <TextField
                        outlined
                        label='Email *'
                        helperText={<HelperText>Required</HelperText>}
                    >
                        <Input/>
                    </TextField>                    
                </Cell>
                <Cell desktopColumns={3}>
                    <TextField
                        outlined
                        label='Phone'
                        helperText={<HelperText>Fully Optional</HelperText>}
                    >
                        <Input/>
                    </TextField>
                </Cell>
                <Cell desktopColumns={3}/>
            </Row>
            <Row>
                <Cell desktopColumns={3} />
                <Cell desktopColumns={6}>
                    <TextField 
                        outlined
                        label='Subject *'
                        helperText={<HelperText>Required</HelperText>}
                    >
                        <Input/>
                    </TextField>
                </Cell>
                <Cell desktopColumns={6}/>
            </Row>
            <Row>
                <Cell desktopColumns={3}/>
                <Cell desktopColumns={6}>
                    <TextField
                        outlined
                        textarea
                        label='Message *'
                        helperText={<HelperText>Required</HelperText>}
                        
                    >
                        <Input/>
                    </TextField>
                </Cell>
                <Cell desktopColumns={3}/>
            </Row>
            <Row>
                <Cell desktopColumns={3} />
                <Cell desktopColumns={3}>
                    <Button raised>send!</Button>
                </Cell>
                <Cell desktopColumns={6} />
            </Row>

        </Grid>
        );
    }
}

export default ContactForm