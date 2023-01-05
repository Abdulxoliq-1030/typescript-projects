import React from "react";
import { useSearchUsersQuery } from "../store/github/github-api";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { isLoading, isError, data } = useSearchUsersQuery("abdulxoliq");

  return <h1>Home Page</h1>;
};

export default HomePage;
