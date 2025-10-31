import { use, useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  useEffect(() => {
    //api call
  }, []);

  return (
    <div className="userCard">
      <h1>count = {count}</h1>
      <h1>count1 = {count1}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>User Name: coderam95</h4>
    </div>
  );
};

export default User;
