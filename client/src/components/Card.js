import React from "react";
import { Card } from "antd";
import "../css/Card.css";

function Cards({ data }) {
  const { Meta } = Card;
  return (
    <Link to={data.goto}>
      <div className="card">
        <Card
          hoverable
          style={{ width: 350, margin: "auto", paddingLeft: 15 }}
          cover={<img alt="example" src={data.imgUrl} />}
        >
          <Meta title={data.title} description={data.desc} />
        </Card>
      </div>
    </Link>
  );
}

export default Cards;
