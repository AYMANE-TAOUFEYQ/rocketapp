import './search-box-styles.scss';

const SearchBox = ({ placeholder, onSearchHandler }) => (
    <div className='search-box'>
        <input id="search" type="search" placeholder={placeholder} autofocus required onChange={onSearchHandler}/>
        <button type="submit">Go</button> 
    </div>
);

export default SearchBox;