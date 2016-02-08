MyComponents.Framework = React.createClass({

  render: function() {
    return (
      <li className="collection-item">
        <span className="title"><b>{this.props.framework}</b></span>
      </li>
    );
  }

});

MyComponents.FrameworkList = React.createClass({
  render: function() {

    var frameworkElements = this.props.frameworks.map(function(s,i){
      return <MyComponents.Framework framework={s} key={i}/>
    })

    return (
      <ul className="collection">
        {frameworkElements}
      </ul>
    );
  }
});