import React,{Component} from 'react';
import './App.css';
import Axios from 'axios';
import DisplayWeather from './components/DisplayWeather'
import NavBar from './components/NavBar'

class App extends Component{
  state={
    cords:{
      longitude:28.7,
      latitude:85.03
    },
    data:{},
    inputLoc:''
  }


  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position=>{
      let newCords={
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      this.setState({cords:newCords});
      //console.log("Inside",this.state);//displays new values
    });
    };
    
    setTimeout(() => {

    Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.cords.latitude}&lon=${this.state.cords.longitude}&appid=55a6b2683f3c85dcb1fe4e0d4039dc0a`).then(res=>{
      console.log(res)
      let weatherData={
        location:res.data.name,
        temp:Number.parseFloat(res.data.main.temp-273).toFixed(2),
        country:res.data.sys.country,
        //weather:res.data.weather[0].main,
        desc:res.data.weather[0].description,
        wind_speed:res.data.wind.speed,
        //wind_deg:res.data.wind.deg,
        icon:res.data.weather[0].icon,
        atmp:res.data.main.pressure,
        humidity:res.data.main.humidity,
        rain:('rain')in res.data?res.data.rain['1h']:0
      }
       //console.log(weatherData)
      this.setState({data:weatherData})
    });
    }, 1400);
  };


    change=(value)=>{
      this.setState({inputLoc:value});
    }

    changeWeather=(event)=>{
      event.preventDefault();

      //Api Call
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputLoc}&appid=55a6b2683f3c85dcb1fe4e0d4039dc0a`
        console.log(url);
      Axios.get(url).then(res=>{
        console.log(res);


        let weatherData={
        location:res.data.name,
        temp:Number.parseFloat(res.data.main.temp-273).toFixed(2),
        country:res.data.sys.country,
        //weather:res.data.weather[0].main,
        desc:res.data.weather[0].description,
        wind_speed:res.data.wind.speed,
        //wind_deg:res.data.wind.deg,
        icon:res.data.weather[0].icon,
        atmp:res.data.main.pressure,
        humidity:res.data.main.humidity,
        rain:('rain')in res.data?res.data.rain['1h']:0
      }
       //console.log(weatherData)
      this.setState({data:weatherData})



      });
    
    }
  render(){
  return (
    <div className="App">
    <div className='container'>
    <NavBar changeLoc={this.change} changeWeather={this.changeWeather} />
      <DisplayWeather weatherData={this.state.data}/>
    </div>
    </div>
  );
  }
}

export default App;
