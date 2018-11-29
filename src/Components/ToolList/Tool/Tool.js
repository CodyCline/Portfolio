import React from 'react';
import {Row, Grid, Cell} from '@material/react-layout-grid';
import Aux from '../../../hoc/_Aux';
import Hexagon from '../../../Assets/Hexagon/Hexagon';

const tool = () => {
    return (
        <Aux>
            <Cell >
                <Hexagon style={{margin: 'auto 0px'}}  height="175" width="200" color="#FFFFFF"/>
            </Cell>
            <Cell >
                <h3 style={{textAlign: 'center', margin: 'auto'}}>Service: XXX</h3>
                <hr/>
            </Cell>
            <Cell >
                <p style={{textAlign: 'justify'}}>Lorem impsem dolor ipsut Lorem impsem dolor ipsutLorem impsem dolor ipsutLorem impsem dolor ipsutLorem impsem dolor ipsutLorem impsem dolor ipsut</p>
            </Cell>
        </Aux>        
    );
}

export default tool;