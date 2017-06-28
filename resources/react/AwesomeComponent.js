import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
    this.onDislike = this.onDislike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }
  
  onDislike () {
      let currentLikeCount = this.state.likesCount;
      if ( currentLikeCount === 0 ) {
          return;
      }
      this.setState({likesCount: currentLikeCount-1});
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div className='row'>
        <div className='col-md-1'>
            <button 
                className='btn btn-block btn-info' 
                onClick={this.onLike}
            >
                Like Me
            </button>
        </div>
        <div className='col-md-1'>
            <button 
                className='btn btn-block btn-warn' 
                onClick={this.onDislike}
            >
                Dislike Me
            </button>
        </div>
        </div>
      </div>
    );
  }

}

export default AwesomeComponent;