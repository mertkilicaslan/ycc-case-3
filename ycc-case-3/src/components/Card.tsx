import React from "react";
import { Post } from "./InputField";

interface Props {
  paragraphs: Post[] | null;
}

const Card: React.FC<Props> = ({ paragraphs }) => (
  <div style={{ width: "%90", padding: "20px", background: "#fff" }}>
    {paragraphs === null ? (
      ""
    ) : (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          flexDirection: "row",
          padding: "20px",
        }}
      >
        {paragraphs.map((paragraph) => (
          <div key={paragraph.id} style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              {paragraph.id}. {paragraph.title}
            </h3>
            <p style={{ fontSize: "16px" }}>{paragraph.body}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Card;
