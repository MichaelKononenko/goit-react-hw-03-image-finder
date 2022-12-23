import PropTypes from 'prop-types';

export const Modal = ({image}) => {
    console.log('hi');
    return (
        <div className="modal">
        {image}
        </div>
    )
}

Modal.propTypes = {
    image: PropTypes.string.isRequired,
}