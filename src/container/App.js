import React, {Component} from 'react';
import style from './App.module.css';
import Navbar from '../component/Navbar/Navbar';
import Temperature from '../component/Temperature/Temperature';
import Today from '../component/Today/Today';
import Conditions from '../component/Conditions/Conditions';
import CardList from '../component/CardList/Cardlist';
import FadeLoader from 'react-spinners/FadeLoader';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentDate: "",
      currentConditions: {},
      forecast: [],
      currentTemp: 0,
      hourlyTemps: [],
      long: 0,
      lat: 0
    }
  }
  getCurrentDate = () =>{
    const date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    this.setState({currentDate: ` ${date.getDate()} ${months[date.getMonth()]}, ${date.getHours()}:${date.getMinutes()}`});
  }
  
  componentDidMount(){
    this.getCurrentDate();
    this.interval = setInterval(function() {
      this.getCurrentDate()
    }.bind(this), 60000);
    this.getLocation();
  }

getLocation = ()=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.getWeather(position.coords.latitude, position.coords.longitude);
    }, ()=>{
      this.getWeather();
    });
    
  }
}

  getWeather = (lat=42.331429, long=-83.045753) =>{
    fetch(`https://api.apixu.com/v1/forecast.json?key=f20edac2fb21459a95e131316192904&q=${lat},${long}&days=4`)
        .then(response => response.json())
        .then(data =>{
          fetch("https://api.apixu.com/v1/history.json?key=f20edac2fb21459a95e131316192904&q=detroit&dt=2019-05-28")
          .then(response => response.json())
          .then(data => {
            const hourly = data.forecast.forecastday[0].hour.map((val, index) => {
                return {temp: Math.floor(val.temp_f), time: `${index}:00`};
            }).filter(val => val !== undefined);
            // delete hourly[0].time;
            this.setState({hourlyTemps: hourly});
          })
          .catch(error => console.log(error));
            this.setState({currentConditions: data, currentTemp: Math.floor(data.current.temp_f), forecast: data.forecast.forecastday}); 
        }) 
        .catch( error => this.setState({weather: 72}));
  }
  
  
  render(){
    return (
      <section className={style.app}>
        <div className={style.appFrame}>
        {Object.entries(this.state.currentConditions).length !== 0 ? 
        <div className={style.appFrameInner}>
        <Navbar currentDate={this.state.currentDate}/>
        <div>
          <div className={`${style.cardWrapper} ${style.border}`}>
            <Today hourlyTemps={this.state.hourlyTemps}/>
            <div className={style.cardWrapperInner}>
              <Temperature currentTemp={this.state.currentTemp} currentConditions={this.state.currentConditions}/>
              <Conditions currentConditions={this.state.currentConditions}/>
            </div>
            </div>
            <CardList forecast={this.state.forecast}/>
          </div>
      </div>
      :<div className={style.loading}>
      <FadeLoader
        sizeUnit={"px"}
        size={50}
        color={'#8884d8'}
        loading={this.state.loading}
      />
    </div> 
      }  
        </div>
      </section>
    );
  }
}
  

export default App;
