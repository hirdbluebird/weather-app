import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getWeather,
  selectWeather
} from './counterSlice';
import styles from './Counter.module.css';
import logo from '../../summer.gif';

export function Weather() {
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);

  useEffect(
    () => {
      dispatch(getWeather())
    }, [dispatch, getWeather]
  )

  return (
    <div>
      <div className={styles.row}>
        {weather
          ? (
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <div className={styles.row}>
                <strong>Clouds:</strong>
                <p>{weather.clouds.all}</p>
              </div>
              <div className={styles.row}>
                <strong>Coordinates: </strong>
                <p>lon {weather.coord.lon}, lat {weather.coord.lat}</p>
              </div>
              <div className={styles.row}>
                <strong>Tempature: </strong>
                <p>{weather.main.temp} °C</p>
              </div>
              <div className={styles.row}>
                <strong>Wind: </strong>
                <p>{weather.wind.speed} meters/s</p>
              </div>
              <div className={styles.row}>
                <strong>City: </strong>
                <p>{weather.name}</p>
              </div>
              <div className={styles.row}>
                <strong>Country: </strong>
                <p>{weather.sys.country}</p>
              </div>
            </div>
          )
          : 'Pending...'
        }
      </div>
    </div>
  );
}
