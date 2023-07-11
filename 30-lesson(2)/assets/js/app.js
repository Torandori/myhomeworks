function App(){
  return (
    <>
      <div className="container">
        <h1 className="h1">CSS Weather Forecast <i className="wi wi-sunrise title-icon"></i></h1>
        <WeatherList />
      </div>
          <div className="container">
          <div className="text-below">Have a nice day and don't forget umbrella if you are in New Delhi now!</div>
      </div>
    </>
  )
}

function WeatherList(){
  const list = [
    {
      city: 'Lisbon',
      temp: '21',
      icon: 'wi-day-sunny',
      color: 'color1',
      width: 'half'
    },
    {
      city: 'Paris',
      temp: '11',
      icon: 'wi-night-rain-mix',
      color: 'color2',
      width: 'quarter'
    },
    {
      city: 'Belgrade',
      temp: '15',
      icon: 'wi-day-cloudy-high',
      color: 'color3',
      width: 'quarter'
    },
    {
      city: 'Venice',
      temp: '21',
      icon: 'wi-hot',
      color: 'color4',
      width: 'quarter'
    },
    {
      city: 'Tel-Avive',
      temp: '32',
      icon: 'wi-hot',
      color: 'color5',
      width: 'quarter'
    },
    {
      city: 'Cair',
      temp: '21',
      icon: 'wi-day-sunny',
      color: 'color6',
      width: 'quarter'
    },
    {
      city: 'New York',
      temp: '17',
      icon: 'wi-day-sleet-storm',
      color: 'color7',
      width: 'quarter'
    },
    {
      city: 'New-Delhi',
      temp: '17',
      icon: 'wi-rain-wind',
      color: 'color8',
      width: 'quarter'
    },
    {
      city: 'San-Francisco',
      temp: '15',
      icon: 'wi-day-sunny-overcast',
      color: 'color9',
      width: 'half'
    },
    {
      city: 'Tokyo',
      temp: '8',
      icon: 'wi-night-clear',
      color: 'color10',
      width: 'quarter'
    },
    {
      city: 'Sydney',
      temp: '25',
      icon: 'wi-night-partly-cloudy',
      color: 'color11',
      width: ''
    },
  ]

  return (
    <ul className="block-items">
      {list.map(item => <WeatherItem item={item} key={item.city}/>)}
    </ul>
  )
}

function WeatherItem(props) {
  const {city, temp, icon, color, width} = props.item;
  // console.log(props);
  return (
    <li className={'block-item ' + width + ' ' + color}>
      <div className="item-content">
        <div className="item-name">{city}</div>
        <div className="degree">{temp}&#8451; <i className={'wi ' + icon + ' item-icon'}></i></div>
      </div>
    </li>
  )
}
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);  // to create a root element for rendering React components.
root.render(<React.StrictMode><App/></React.StrictMode>); 