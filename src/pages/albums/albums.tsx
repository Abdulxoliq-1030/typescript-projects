import axios from "axios";
import React, { useEffect, useState } from "react";
import cls from "./style.module.scss";

interface AlbumsProps {}

const Albums: React.FC<AlbumsProps> = () => {
  const [data, setData] = useState([]);

  async function getAlbum() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    return setData(data);
  }

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <div className={cls.wrapper}>
      {data.map(({ id, title }) => (
        <div key={id} className={cls.item}>
          <h2>{id}</h2>
          <h1>{title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Albums;
