import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        name: "John Doe", 
        location: "Default",
        bio: "Default",
      }
    }

    console.log("Parent Constructor");
  }

  async componentDidMount(){
    console.log("Parent Component Did Mount");

    // const data = await fetch("https://api.github.com/users/meenalphartiyal");
    // const userInfo = await data.json();

    const userInfo = {
      name: "Meenal Phartiyal",
      location: "Delhi", 
      bio: "Software Engineer",
    };

    this.setState({
      user: userInfo,
    });
  }

  render(){
    console.log("Parent Render");

    return(
      <div className='mx-10'>
        <h1 className="text-3xl font-semibold">About Us</h1>
        <UserClass user={this.state.user}/>
      </div>
    );
  }
}

export default About;