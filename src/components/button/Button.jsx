import PropTypes from 'prop-types';

export const Button = ({loadMore}) => {
    return (
        <button type="button" className="load-more-button" onClick={loadMore}>Load more</button>
    )
}

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}