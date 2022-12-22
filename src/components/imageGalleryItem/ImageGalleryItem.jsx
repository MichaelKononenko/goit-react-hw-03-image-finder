import PropTypes from 'prop-types';

import { Component } from "react";

const Modal = ({image, alt, onClose}) => {
    return(
        <div className="overlay" onClick={onClose} onKeyDown={onClose} tabIndex="0">
            <div className="modal">
                <img src={image} alt={alt}/>
            </div>
        </div> 
    )
}
export class ImageGalleryItem extends Component{
    state = {
        isOpen: false,
    };

    openModal = () => this.setState({isOpen:true});
    closeModal = event => {
        if((event.currentTarget === event.target) || (event.key ==="Escape")) this.setState({isOpen: false})
    };

    render(){
    const {simpleImage, largeImage, alt} = this.props;
    const {isOpen} = this.state;
    return (
        <>
         <li className="gallery-item" onClick={this.openModal}>
            <img className="gallery-item-image" src={simpleImage} alt={alt} />
        </li>
        {isOpen && <Modal image={largeImage} alt={alt} onClose={this.closeModal}/>}
        </>
    )
    }
}

Modal.propTypes ={
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose:PropTypes.func.isRequired,
}

