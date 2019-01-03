import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import SocialIcons from '../../Components/IconSets/SocialIconSet';
import './Footer.scss';
import StateFlag from '../../Assets/Images/us-wa-flag.png';
import USFlag from '../../Assets/Images/us-flag.png';


const footer = () => {
    const date = new Date();
    const currentDate = `${date.toLocaleString('en-us', { month: 'long' })} ${date.getFullYear()}`
    return (
            <Row className="footer" >
                <Cell desktopColumns={3}>
                {/* <div className="footer"> */}
                    <SocialIcons/>
                    
                {/* </div> */}
                </Cell>
                <Cell desktopColumns={5}/>
                <Cell desktopColumns={3}>
                    <div className="right-items">
                        <p> Cody Cline | {currentDate}</p>
                    </div>
                </Cell>
                <Cell desktopColumns={1}>
                    <img alt="flag" className="flags" src={StateFlag} />
                    <img alt="flag" className="flags" src={USFlag} />
                </Cell>
                
            </Row>
    );
}

export default footer;