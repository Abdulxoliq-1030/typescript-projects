import axios from "axios";
import React, { useEffect, useState } from "react";
import cls from "./style.module.scss";

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = () => {
  const [data, setData] = useState([]);

  async function getComments() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return setData(data);
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className={cls.wrap}>
      {data.map(({ id, name, body, email }) => (
        <div key={id} className={cls.wrapper}>
          <h1>{name}</h1>
          <div className={cls.footer}>
            <h3>{email}</h3>
            <h3>{body}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
