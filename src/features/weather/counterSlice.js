import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'weather',
  initialState: {
    value: 0,
    weather: ''
  },
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload
    }
  },
});

export const { setWeather } = counterSlice.actions;

export const getWeather = () => dispatch => {
  navigator.geolocation.getCurrentPosition((coords) => {
    const {latitude, longitude} = coords.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&appid=faeae86a90eb7bea7a1511c602c07c02&units=metric&lat=${latitude}&lon=${longitude}`)
      .then(res => res.json())
      .then(res => {
        dispatch(setWeather(res))
      })
  })
}

export const selectWeather = state => state.counter.weather;

export default counterSlice.reducer;
