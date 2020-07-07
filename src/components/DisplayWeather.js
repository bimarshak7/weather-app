import React from 'react';

function DisplayWeather(props){
	const {location,temp,country,desc,wind_speed,icon,atmp,humidity,rain}=props.weatherData;
	//console.log(props.cords);
	const img_url='http://openweathermap.org/img/wn/'+icon+'@2x.png'
	return(
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{temp}<sup>o</sup>C , {desc}</h1>
                    <h4>location</h4>
                    <p>{location} , {country}</p>
                </div>

                <div className="col-md-9">
                    <img className="mainImg" src={img_url} alt="weather-img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Preassure</b>(millibar)</p>
                    <h2>{atmp}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitaion-last hour</b>(mm)</p>
                    <h2>{rain}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </div>

            </div>
        </div>
		);

};

export default DisplayWeather;