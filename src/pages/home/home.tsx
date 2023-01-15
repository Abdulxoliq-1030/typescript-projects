import React from "react";
import cls from "./style.module.scss";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <div className={cls.wrapper}>
    <h1>Welcome JSONPLACEHOLDER</h1>
  </div>
);

export default Home;
