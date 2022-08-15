import React from 'react';
import style from './Search.module.css';
import icon from './icons8-search-30.png';

const Search = () => {
    return (
        <div className={style.form}>
            <form className={style.search__form}>
                <input type="text" placeholder='Search ...' className={style.search__input}/>
            </form>
            <img src={icon} className={style.search__icon} onClick={(e) => console.log(e.target)}/>
        </div>
    );
};

export default Search;