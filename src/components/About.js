import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount called");
  }

  render() {
    console.log("Parent render called");
    return (
      <div className="about">
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First(class)"} location={"Dehradun (class)"} />
        <UserClass name={"Second (class)"} location={"Delhi (class)"} />
      </div>
    );
  }
}

export default About;
