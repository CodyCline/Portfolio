import React from 'react';
import Aux from '../../hoc/_Aux'
import Modal from '../Modal/Modal';
import './GalleryItem.scss';

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
                <div className="mdc-ripple-surface">
                    <img className="Gallery-Frame"  onClick={this.onImageOpen} alt="gallery" src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg"></img>
                </div>
                <Modal show={this.state.imageOpen} modalClosed={this.onImageClose}>
                    <img style={{height: '100%', width:'100%'}} onClick={this.onImageClose} alt="gallery" src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg"></img>
                </Modal>
            </Aux>
        );
    }
}

export default Gallery;