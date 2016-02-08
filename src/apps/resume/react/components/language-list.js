MyComponents.Language = React.createClass({

  render: function() {
    return (
      <li className="collection-item">
        <span className="title"><b>{this.props.language}</b></span>
      </li>
    );
  }

});

MyComponents.LanguageList = React.createClass({
  render: function() {

    var languageElements = this.props.languages.map(function(s,i){
      return <MyComponents.Language language={s} key={i}/>
    })

    return (
      <ul className="collection">
        {languageElements}
      </ul>
    );
  }
});