import React, { useState, useContext } from 'react'
import axios from 'axios';

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { API_LINK } from './../../../actions/api'
import { searchPeople, setLoadData, setPageData } from './../../../actions'
import { Store } from './../../../store/Store'

import './SearchArea.css';

const SearchArea = () => {

  const { dispatch } = useContext(Store);
  const [searchVal, setSearchVal] = useState('');

  let searchValue = () => {
    findPeople()
    setLoadData(false, dispatch)
  }

  let changeValue = (e) => {
    setSearchVal(e)
    if (e.trim().length === 0) {
      findPeople()
      setLoadData(true, dispatch)
      setPageData(1, dispatch)
    }
  }

  let keyPress = (e) => {
    if(e.keyCode === 13){
       findPeople()
       setLoadData(false, dispatch)
    }
  }

  const findPeople = async () => {

    const apiLink = `${API_LINK}people/?search=${searchVal}`;
    const res = await axios(apiLink);
    const result = await res.data.results

    searchPeople(result, dispatch)
  };

  return (
    <div className="search_area">
      <div className="wrap_search">
        <label className="searchTitle">Search your Star Wars here!</label>
        <div className="wrap_searchBox">
          <input className="searchBox" 
                 value={searchVal} 
                 onChange={e => changeValue(e.target.value)} 
                 onKeyDown={keyPress}
                 type="text" />
          <div className="wrap_searchIcon" onClick={() => searchValue()}>
            <FontAwesomeIcon className="search_icon" icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
