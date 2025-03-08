import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { name, location, bio } = this.props.user;

    return (
      <div className="my-5">
        <div>
          <div className='w-35 h-auto p-3 border-1 my-2 flex flex-col items-center justify-center'>
            <h2 className="text-xl font-semibold">
              Count 1: {this.state.count1}
            </h2>
            <div>
              <button
                type="button"
                onClick={() => {
                  this.setState({ count1: this.state.count1 + 1 });
                }}
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-bold rounded-full text-sm px-4 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => {
                  this.setState({ count1: this.state.count1 - 1 });
                }}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 font-bold rounded-full text-sm px-4 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
              -
              </button>
            </div>
          </div>
          <div className='w-25 h-auto p-3 border-1 my-2'>
            <h2 className="text-xl font-semibold my-2">Timer: {this.state.timer}</h2>
          </div>
        </div>

        <div className="w-50 h-25 p-3 border-1">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Bio: {bio}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
