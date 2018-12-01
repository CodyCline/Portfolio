import React from 'react';
import Aux from '../../hoc/_Aux'
import Modal from '../Modal/Modal';

class Gallery extends React.Component {
    

    state = {imageOpen: false}

    onImageOpen = () => {
        this.setState({imageOpen: true})
    }
    onImageClose = () => {
        this.setState({imageOpen: false})
    }


    render () {
        return (
            <Aux>
                <img style={{height: '8em', width:'8em'}} onClick={this.onImageOpen} alt="gallery" src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg"></img>
                <Modal show={this.state.imageOpen} modalClosed={this.onImageClose}>
                    <img style={{height: '100%', width:'100%'}} onClick={this.onImageClose} alt="gallery" src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg"></img>
                </Modal>

            </Aux>
        );
    }
}

export default Gallery;