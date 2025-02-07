import React from 'react';

class UserClass extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
      count1: 0,
      timer: 0,
    };

    console.log("Child Constructor");
  }
  componentDidMount(){
    console.log("Child Component Did Mount");

    this.interval = setInterval(() => {
      console.log("Timer Running..");
      this.setState({
        timer: this.state.timer + 1
      });
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    console.log("Child Render");
    
    const {name, location, bio} = this.props.user;
    
    return (
      <div className='user-box'>
        <div className='multiple-states'>
          <h2>Count 1: {this.state.count1}</h2>
          <div>
            <button type='button' onClick={() => {this.setState({count1: this.state.count1 + 1})}} >Increment Count 1</button>
            <button type='button' onClick={() => {this.setState({count1: this.state.count1 - 1})}} >Decrement Count 1</button>
          </div>
          <div>
            <h2>Timer: {this.state.timer}</h2>
          </div>
        </div>
        
        <div className='user-data'>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Bio: {bio}</h4>
        </div>
      </div>
    )
  }
};

export default UserClass;