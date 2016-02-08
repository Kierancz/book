MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-image">
          <img className="activator" src={this.props.about.photo}></img>
          <span className="card-title">{this.props.about.name}</span>
        </div>

        <div className="card-content">
          <div className="chip">
            <img src={"img/kieran.jpg"}/>
            <a href={this.props.about.github}>My Github</a>
          </div>
          <p>
            <b>Name: </b>{this.props.about.name}<br></br>
            <b>Education: </b>{this.props.about.school}<br></br>
            <b>Major: </b>{this.props.about.major}<br></br>
            <b>Major: </b>{this.props.about.minor}<br></br>
            <b>Birth Place: </b>{this.props.about.birth}
          </p>
        </div>
      </div>
    );
  }
});
