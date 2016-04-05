class UserApp extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar 
          data={this.props.data} 
          actions={this.props.actions}
          user={this.props.data.user} 
        />
        <div className="container">
          <MyComponents.User 
            data={this.props.data} 
            actions={this.props.actions}
            user={this.props.data.user}
          />
        </div>
      </div>
    );
  }
}

MyComponents.UserApp = UserApp
