class User extends React.Component {
  render(){
    var user = this.props.data.user;
  
    return( 
    
      <div>
        <MyComponents.Card 
          title={this.props.data.user.displayName}
          content={
            <ul className="collection">
              <li className="collection-item"><img src={user.profilePic} alt="Profile Pic" className="responsive-img"></img></li>
              <li className="collection-item"><b>Username:</b> {user.userName}</li>
              <li className="collection-item"><b>Status:</b> {user.isLoggedIn}</li>
              <li className="collection-item"></li>
            </ul>
          }
        />
      </div>
    
    )
  }
}

MyComponents.User = User
