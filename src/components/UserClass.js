import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "blank",
        location: "default",
        avatar_url: "http://dummy-photo.com",
      },
    };
    console.log(props);
    console.log(this.props.name + "Child Constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount called");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json, "JSON");

    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("child ComponentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }

  render() {
    console.log("Child render");
    const { name, location, login, avatar_url } = this.state.userInfo;
    debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
