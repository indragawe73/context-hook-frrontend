import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import MainNavigation from './../../components/Navigation/MainNavigation';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';

import { API_LINK } from './../../actions/api'

import './More.css';

const More = (props) => {
  const history = useHistory();
  const listNo = props.match.params.id
  const pageName = props.match.params.page
  const [dataList, setDataList] = useState(null);


  const getData = async () => {
    let apiLink = null;
    if(pageName === 'movie') {
      apiLink = `${API_LINK}films/${listNo}/`
    } else if (pageName === 'vehicles') {
      apiLink = `${API_LINK}vehicles/${listNo}/`
    } else if (pageName === 'starships') {
      apiLink = `${API_LINK}starships/${listNo}/`
    } 
    const res = await axios(apiLink);
    const result = await res.data
    setDataList(result)
  };

  const refreshData = (item, type) => {
    setDataList(null)
    if (type === "movie"){
      history.push(`/more/movie/${item.replace("http://swapi.dev/api/films/", "")}`)
    }
    else if (type === "vehicles"){
      history.push(`/more/vehicles/${item.replace("http://swapi.dev/api/vehicles/", "")}`)
    }
    else if (type === "starships"){
      history.push(`/more/starships/${item.replace("http://swapi.dev/api/starships/", "")}`)
    }
  };


  useEffect (() => {
    getData()
  }, [pageName])

  return (
    <div>
      <MainNavigation logo="SWAPI" imageLogo={false} type="2"/>
      <div className="list_area">
        <div className="wrap_list">
          
          { dataList ? 
              pageName === 'movie' ?
                <div className="title_name">{dataList.title}</div> 
              : <div className="title_name">{dataList.name}</div>
          :null}

          <MovieCard dataList={dataList} type={pageName}/>
          
          { dataList && <div className="title_movie">{dataList.name} Movies</div> }

          { dataList ?
              pageName !== 'movie' &&
                dataList.films ?
                  dataList.films.map((item, index) => (
                    <div onClick={() => refreshData(item, "movie")}>
                      <MovieList status="movie"  />
                    </div>
                  ))
                :null
            : null
          }

          { dataList ? 
              pageName === 'movie' && <div className="title_movie">{dataList.title} Vehicles</div>
            : null
          }

          { dataList ?
              pageName === 'movie' &&
                dataList.vehicles ?
                  dataList.vehicles.map((item, index) => (
                    <div onClick={() => refreshData(item, "vehicles")}>
                      <MovieList status="vehicles"  />
                    </div>
                  ))
                :null
            : null
          }

          { dataList ? 
              pageName === 'movie' &&
              <div className="title_movie">{dataList.title} Starships</div> 
            : null
          }

          { dataList ?
              pageName === 'movie' &&
                dataList.vehicles ?
                  dataList.starships.map((item, index) => (
                    <div onClick={() => refreshData(item, "starships")}>
                      <MovieList status="starships"  />
                    </div>
                  ))
                :null
            : null
          }

        </div>
      </div>
    </div>
  );
};

export default More;
