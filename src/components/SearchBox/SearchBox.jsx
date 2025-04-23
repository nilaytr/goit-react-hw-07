import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useState } from 'react';
import css from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("");
    
    const handleChange = e => {
        const value = e.target.value;
        setFilter(value);
        dispatch(changeFilter(value));
    };

    return (
        <div className={css.searchBox}>
            <p className={css.searchTitle}>Find contacts by name</p>
            <input
                type="text"
                value={filter}
                placeholder="Enter name"
                onChange={handleChange} />
        </div>
    );
}

export default SearchBox