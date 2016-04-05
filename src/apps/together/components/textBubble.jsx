class TextBubble extends React.Component {
  render(){
    var upVote = this.props.actions.upVoteMsg
    var downVote = this.props.actions.downVoteMsg
    var deleteMessage = this.props.actions.deleteMessage
    var attachmentStr = this.props.attachment;
    var attachmentEmbed;
    var attachment;
    console.log("this.props data: " + this.props)
    if(attachmentStr) {
      if(attachmentStr.includes('youtube')){
        attachmentEmbed = attachmentStr.replace('watch?v=', '/embed/');
        attachment = 
          <div className="video-container">
            <iframe width="853" height="480" src={attachmentEmbed} frameBorder="0" allowFullScreen></iframe>
          </div>;
      }
      else if(attachmentStr.includes('vimeo')){
        attachmentEmbed = attachmentStr.replace('https://vimeo.com/', 'https://player.vimeo.com/video/');
        attachment = 
        <div className="video-container">
          <iframe width="853" height="480" src={attachmentEmbed} frameBorder="0" allowFullScreen></iframe>
        </div>;
      }
      else if(attachmentStr.includes('jpg') || attachmentStr.includes('jpeg') || attachmentStr.includes('png') || attachmentStr.includes('gif') || attachmentStr.includes('gifv')){
        console.log('photo detected: ' + attachmentStr);
        attachment = <img className="responsive-img" src={attachmentStr}></img>;
      }
    }
    else {
      attachment = <div/>;
    }

    return (
      <div className="row">
        <div className="col s1">
          <img src={this.props.profilePic} alt="Profile Picture" className="circle responsive-img"></img>
        </div>
        <div className="bubble me">
          <b>{this.props.userName}: </b>
          {this.props.text} <div className="score">{this.props.score}<a href="#" onClick={() => upVote(this.props.chatEntry)}><b>↑ </b></a><a href="#" onClick={() => downVote(this.props.chatEntry)}><b> ↓</b></a>
            <a href="#" onClick={() => deleteMessage(this.props.chatEntry)}><b>X</b></a></div>
          {attachment}
        </div>    
      </div>
    );
  }
}
MyComponents.TextBubble = TextBubble
