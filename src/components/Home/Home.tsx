import "./../../components/Home/Home.css";
import React from "react";
import StartProfile from "../StartProfile/StartProfile";
const TAG = "HOME";
type HomeProps = {
  prop1?: any;
};
const Home: React.FC<HomeProps> = ({ prop1 }) => {
  console.log(TAG, "Home start");
  return (
    <div className="Home">
      <StartProfile />
    </div>
  );
};
export default Home;
