import PropTypes from 'prop-types';

import { ImageGalleryItem } from "components/imageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({images}) => {
    return (
        <ul className="gallery">
        {images.map(image =>{
            return(<ImageGalleryItem key={image.id} simpleImage={image.webformatURL} largeImage={image.largeImageURL} alt={image.tags}/>)
        })}
        </ul>
    )
}

ImageGallery.propTypes = {
    images:PropTypes.array.isRequired,
}