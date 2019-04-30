import React, {Component} from 'react';
import style from './App.module.css';
import Navbar from '../component/Navbar/Navbar';
import Temperature from '../component/Temperature/Temperature';
import Today from '../component/Today/Today';
import Conditions from '../component/Conditions/Conditions';
import CardList from '../component/CardList/Cardlist';

class App extends Component{
  constructor(){
    super();
    this.state = {
      currentDate: "",
      currentConditions: {},
      forecast: [],
      currentTemp: 0,
      hourlyTemps: []
    }
  }

  componentDidMount(){
    this.getCurrentDate();
    this.interval = setInterval(function() {
      this.getCurrentDate()
    }.bind(this), 60000);
    this.getWeather();
  }

  getWeather = () =>{
    fetch("https://api.apixu.com/v1/forecast.json?key=f20edac2fb21459a95e131316192904&q=detroit&days=4")
        .then(response => response.json())
        .then(data =>{
          fetch("https://api.apixu.com/v1/history.json?key=f20edac2fb21459a95e131316192904&q=detroit&dt=2019-04-30")
          .then(response => response.json())
          .then(data => {
            const hourly = data.forecast.forecastday[0].hour.map((val, index) => {
              if(index % 3 === 0){
                return {temp: Math.floor(val.temp_f), time: index};
              }
            }).filter(val => val !== undefined).filter((val,index)=> index  < 6);
            delete hourly[0].time;
            this.setState({hourlyTemps: hourly});
          })
          .catch(error => console.log(error));
            this.setState({currentConditions: data, currentTemp: Math.floor(data.current.temp_f), forecast: data.forecast.forecastday}); 
        }) 
        .catch( error => this.setState({weather: 72}));
  }
  
  getCurrentDate = () =>{
    const date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    this.setState({currentDate: ` ${date.getDate()} ${months[date.getMonth() - 1]}, ${date.getHours()}:${date.getMinutes()}`});
  }
  
  render(){
    return (
      <div className={style.app}>
        <section className={style.appFrame}>
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
        </section>
      </div>
    );
  }
}
  

export default App;
