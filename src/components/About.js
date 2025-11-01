import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount is called");
  }

  render() {
    console.log("parent render");
    return (
      <div className="About">
        <h1>About</h1>
        <h2>This is swiggy trial website</h2>
        <UserClass name={"Akshay (class)"} location={"Dehradun"} />
        <UserClass name={"Hariram (class)"} location={"OMR"} />
        <UserClass name={"Neeraja (class)"} location={"OMR"} />
      </div>
    );
  }
}

export default About;
