// import "./Profile.scss";
import React from "react";
import { Avatar, Card, Typography, Col, Row } from "antd";
import { MailOutlined, SolutionOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Title, Text } = Typography;

const ProfilePage = () => {
  return (
    <div
      style={{ maxWidth: "700px", margin: "0 auto", height: "85vh" }}
      className="profile"
    >
      <Card style={{ marginBottom: "24px", fontSize: "18px" }}>
        <Meta
          avatar={
            <Avatar
              size={100}
              src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/374852207_3473181502955513_5066250399042915797_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=hJquAR0L6EQAX9h8d3h&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfBRZOHsFkfU3nxYBr41TI_BMlaeq4bBb07-IvaQNOspDA&oe=6508CF2A"
            />
          }
          title={<Title level={2}>Van Anh Quan</Title>}
        />
        <div style={{ marginLeft: "116px" }}>
          <Title style={{ marginTop: "20px" }} level={3}>
            INFORMATION
          </Title>
          <Row style={{ marginLeft: "15px" }}>
            <Col span={12}>
              <div className="infor">
                <Text style={{ fontSize: "18px" }} strong>
                  <SolutionOutlined className="profiles" />
                  ID: SE173045
                </Text>
              </div>

              <div className="infor">
                <Text style={{ fontSize: "18px" }} strong>
                  <MailOutlined className="profiles" />
                  Email: qsao2212@gmail.com
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
