import React from "react";
import { Row, Col } from "antd";
import "../scss/Success.scss";
import Success1 from "../assets/successstory1.jpeg";
// import Success2 from "../assets/successstory2.jpeg";
import Success3 from "../assets/success3.jpeg";
import Success4 from "../assets/successstory4.2.jpeg";
import { useParams } from "react-router-dom";

const Success = () => {
  const data = [
    {
      id: 1,
      image: Success1,
      title: "Himmashu & Yashika",
      content:
        'I"m happily married with Yashika, it"s all thanks to the sattonjanam.com. They did a great job in bringing us together and making our dreams come true. Thank you sattonjanam.com for helping in finding the best life partner.',
    },
    // {
    //   id: 2,
    //   image: Success2,
    //   title: 'Himanshu & Hema',
    //   content: 'I wanted to find the right person to share my life with, so I joined a sattonjanam.com. They really understood what I was looking for and helped me connect with potential partners who were a good match. Through this, I met Himanshu. As we talked more, we realized we were perfect for each other. The sattonjanam.com supported us all along. Thank you so much sattonjanam Team',
    // },
    {
      id: 3,
      image: Success3,
      title: "Vikrant & pooja",
      content:
        'The sattonjanam.com dedicated team took time to understand my preferences, ensuring that the potential matches aligned with my vision. Engaging conversations and thoughtful matches made the process exciting.I connected with Vikrant, With every interaction, the compatibility and connection grew stronger. The sattonjanam.com continued support made our journey smoother. I"m grateful to the sattonjanam.com, for uniting us and turning dreams into reality. This success story is a tribute to their commitment to fostering meaningful connections.',
    },
    {
      id: 4,
      image: Success4,
      title: "Pawan & Meenakshi",
      content:
        'I wanted to find the right person to marry. I got help from a sattonjanam.com they are really good at matching people. They introduced me to Pawan & We got along great and realized we were perfect for each other. With the help of their team, we got married and now we"re really happy together.Thank you sattonjanam.com for all the support.',
    },
  ];

  return (
    <div className="success">
      {data.map((item, index) => (
        <Row
          key={index}
          gutter={16}
          style={{ marginBottom: "100px" }}
          className={index % 2 === 0 ? "even-row" : "odd-row"}
        >
          {/* {index % 2 === 0 ? ( */}
          <>
            <Col xs={24} sm={24} md={12}>
              <img
                src={item.image}
                alt={`Image ${index + 1}`}
                className="custom-image"
              />
            </Col>
            <Col xs={24} sm={24} md={12}>
              <div className="content">
                <h4 className="title">{item.title}</h4>
                <p className="text">{item.content}</p>
              </div>
            </Col>
          </>
        </Row>
      ))}
    </div>
  );
};

export default Success;
