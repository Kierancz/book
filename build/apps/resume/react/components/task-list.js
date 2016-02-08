MyComponents.Task = React.createClass({

  render: function() {
    return (
      <li className="collection-item">
        <div className="card">
          <div className="card-content">
            <span className="card-title">
              <h4> {this.props.task.name} </h4>
            </span>
            <p>
            <br></br><i className="tiny material-icons">assessment</i><b>Priority: </b>{this.props.task.priority} 
            <br></br><i className="tiny material-icons">today</i><b>Deadline: </b>{this.props.task.deadline}
            <br></br><i className="tiny material-icons">label_outline</i><b>Type: </b>{this.props.task.type}
            <br></br><i className="tiny material-icons">assignment_ind</i><b>Assigned: </b>{this.props.task.assigned}
            </p>
          </div>
        </div>
      </li>
    );
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {
    console.log("this.props", this.props.tasks)
    var taskElements = this.props.tasks.map(function(t,i){
      if(t.assigned == ("Kieran" || "kieran" || "kierancz")){
        return <MyComponents.Task task={t} key={i}/>
      }
    })

    return (
      <ul className="collection">
        {taskElements}
      </ul>
    );
  }
});
