import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'

import MainNavigation from './../../components/Navigation/MainNavigation';
import MovieList from './components/MovieList';
import DetailCard from './components/DetailCard';

import { Store } from '../../store/Store';

import './Detail.css';

const Detail = (props) => {

  const { state } = useContext(Store);
  const listNo = props.match.params.id
  const dataList = state.peopleList[listNo]

  return (
    <div>
      <MainNavigation logo="SWAPI" imageLogo={false} type="2"/>
      <div className="list_area">
        <div className="wrap_list">
          { dataList && <div className="title_name">{dataList.name}</div> }
          <DetailCard dataList={dataList}/>

          { dataList && <div className="title_movie">{dataList.name} Movies</div> }

          { dataList ?
            dataList.films.map((item, index) => (
              <NavLink to={`/more/movie/${item.replace("http://swapi.dev/api/films/", "")}`}>
                <MovieList status="movie" />
              </NavLink>
            ))
            : null
          }
          
          { dataList && <div className="title_movie">{dataList.name} Vehicles</div> }

          { dataList ?
            dataList.vehicles.map((item, index) => (
              <NavLink to={`/more/vehicles/${item.replace("http://swapi.dev/api/vehicles/", "")}`}>
                <MovieList status="vehicles" />
              </NavLink>
            ))
            : null
          }

          { dataList && <div className="title_movie">{dataList.name} Starships</div> }

          { dataList ?
            dataList.starships.map((item, index) => (
              <NavLink to={`/more/starships/${item.replace("http://swapi.dev/api/starships/", "")}`}>
                <MovieList status="starships" />
              </NavLink>
            ))
            : null
          }


        </div>
      </div>
    </div>
  );
};

export default Detail;
