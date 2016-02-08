MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <div className="container">
            <a href="index.html" className="brand-logo">Kieran Czerwinski</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#skills-heading"><i className="small material-icons">build</i>Skills</a></li>
              <li><a href="#tasks-heading"><i className="small material-icons">assignment</i>Tasks</a></li>
              <li><a href="#cities-heading"><i className="small material-icons">business</i>Cities</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="#skills-heading"><i className="small material-icons">build</i>Skills</a></li>
              <li><a href="#tasks-heading"><i className="small material-icons">assignment</i>Tasks</a></li>
              <li><a href="#cities-heading"><i className="small material-icons">business</i>Cities</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
