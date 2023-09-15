import React from "react";
import { Typography, Space, Row, Col } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "./AboutUs.css";
const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ height: "85vh" }}>
      <div className="about-us-container">
        <Title>About Us</Title>
        <Paragraph style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
          velit ut quam viverra pulvinar. Phasellus ultricies ipsum at augue
          convallis, eget suscipit velit aliquam.
        </Paragraph>
        <Paragraph style={{ color: "white" }}>
          Follow us on social media:
          <Space style={{ marginLeft: "5px" }}>
            <FacebookOutlined />
            <InstagramOutlined />
          </Space>
        </Paragraph>
        <Paragraph style={{ color: "white" }}>
          Contact us at:
          <Space>
            <PhoneOutlined />
            +1 (123) 456-7890
          </Space>
        </Paragraph>
      </div>
    </div>
  );
};

export default AboutUs;
