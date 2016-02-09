MyComponents.City = React.createClass({

  render: function() {
    this.props.city.currently.icon = "img/" + this.props.city.currently.icon + ".png"
    return (
      <li className="collection-item avatar">
        <img src={this.props.city.currently.icon} alt="" className="circle"></img>
        <span className="title">{this.props.city.name.toUpperCase()}</span>
        <p><b>Temperature:</b> {this.props.city.currently.temperature} F</p>
        <p><b>Conditions:</b> {this.props.city.currently.summary}</p>
        <p><b>Humidity:</b> {this.props.city.currently.humidity}%</p>
        <p><b>Wind:</b> {this.props.city.currently.windSpeed} mph</p>
        <p><b>Daily Summary:</b> {this.props.city.daily.summary}</p>
      </li>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <ul className="collection">
        {cityElements}
      </ul>
    );
  }
});