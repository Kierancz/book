MyComponents.Task = React.createClass({

  render: function() {
    return (
      <li className="collection-item">
        <i className="material-icons">label_outline</i><b> {this.props.task.name} </b>
          <p>
          <br>Priority: {this.props.task.priority} </br>
          <br>Deadline: {this.props.task.deadline} </br>
          <br>Type: {this.props.task.type} </br>
          <br>Assigned: {this.props.task.assigned} </br>
          </p>
      </li>
    );
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <ul className="collection">
        {taskElements}
      </ul>
    );
  }
});
