// import PropTypes from 'prop-types';

export const Searchbar = ({onSubmit}) =>{
    
    return (<header className="searchbar">
    <form className="form" onSubmit={onSubmit}>
      <button type="submit" className="form-button">🔍
        <span className="form-button-label">Search</span>
      </button>
  
      <input
        className="form-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>)
}