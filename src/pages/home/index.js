import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

import MainNavigation from './../../components/Navigation/MainNavigation'
import SearchArea from './components/SearchArea'
import Card from './components/Card'
import HomeSkeletonLoading from './components/HomeSkeletonLoading'

import { addPeople, setLoadData } from './../../actions'
import { Store } from './../../store/Store'
import { API_LINK } from './../../actions/api'

import './Home.css';

const Home = () => {

  const { state, dispatch } = useContext(Store);
  const [page, setPage] = useState(state.pageData);
  const [listPeople, setListPeople] = useState([]);
  const [infinit, setInfinit] = useState(state.loadData);

  const getPeople = async () => {
    const apiLink = `${API_LINK}people/?page=${page}`;
    const res = await axios(apiLink);
    const result = await res.data.results
    
    setListPeople([...listPeople , result].flat())
    setPage(parseInt(page) + 1)

    if(listPeople.length > 71) {
      setInfinit(false)
      setLoadData(false, dispatch)
    }

    addPeople(result, dispatch)
  };

  const reloadData = () => {
    if(infinit) {
      setTimeout(() => {
        getPeople()
      }, 2000);
    }
  };

  useEffect (() => {
      setInfinit(state.loadData)
  }, [state.loadData])

  useEffect (() => {
      setPage(state.pageData)
  }, [state.pageData])

  useEffect (() => {
      getPeople()
      setLoadData(true, dispatch)
  }, [])

  return (
    
    <React.Fragment>
      <MainNavigation logo="SWAPI" imageLogo={false} />
      <SearchArea />
      <div className="list_area">
        <div className="wrap_list">
          <InfiniteScroll
            initialLoad={false}
            loadMore={reloadData}
            hasMore={infinit}
            loader={(
              <HomeSkeletonLoading />
            )}
          >
            {state.peopleList ?
              state.peopleList.map((item, index) => (
                
                <React.Fragment  key={index}>
                  <NavLink to={`/detail/${index}`}>
                    <Card data={item} />
                  </NavLink>
                </React.Fragment>
              ))
              : <div>null</div>
            }

          </InfiniteScroll>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
