import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Card from "./Card";

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputField({ value, setValue }: Props) {
  const [post, setPost] = useState<Post[] | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    axios.get(baseURL).then((response) => {
      setPost(
        response.data
          ? response.data.filter((element: { body: string | string[] }) =>
              element.body.includes(value)
            )
          : null
      );

      console.log(response.data);
    });
  };

  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a word to search"
        />
        <button type="button" onClick={handleSubmit}>
          Go
        </button>
      </form>

      <div>
        <Card paragraphs={post} />
      </div>
    </div>
  );
}
