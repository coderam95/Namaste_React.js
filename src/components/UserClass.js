import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("child Constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount is called");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log("child Render");
    return (
      <div className="userCard">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>UserName: coderam95</h3>
      </div>
    );
  }
}

export default UserClass;
