import React, { useState, useEffect } from "react";
import { Layout, Menu, Switch, Avatar } from "antd";
import "./Home.css";
import { Link } from "react-router-dom";
import DetailOfFilms from "../components/Film/DetailOfFilm";
const { Content, Footer, Sider, Header } = Layout;

const DetailOfFilm = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  const menuItems = [
    {
      key: "1",
      label: "Home",
      to: "/",
    },
    {
      key: "2",
      label: "About Us",
      to: "/about",
    },
    {
      key: "3",
      label: "News",
      to: "/news",
    },
    {
      key: "4",
      label: "Contact",
      to: "/contact",
    },
  ];

  return (
    <>
      <Layout className="container">
        <Sider theme={darkMode ? "dark" : "light"}>
          <Menu
            theme={darkMode ? "dark" : "light"}
            mode="inline"
            defaultSelectedKeys={["3"]}
          >
            {menuItems.map(({ key, label, to }) => (
              <Menu.Item key={key}>
                <Link to={to}>{label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              backgroundColor: darkMode ? "#001529" : "white", // Set the background color based on darkMode
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link to={"/profile"}>
              <Avatar
                size={40}
                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/374852207_3473181502955513_5066250399042915797_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=hJquAR0L6EQAX9h8d3h&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfBRZOHsFkfU3nxYBr41TI_BMlaeq4bBb07-IvaQNOspDA&oe=6508CF2A"
                alt="Profile Picture"
                style={{ marginLeft: "20px" }}
              />
            </Link>

            <div className="theme-switch-container">
              <Switch
                checked={darkMode}
                onChange={handleThemeChange}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
            </div>
          </Header>

          <Content>
            <div
              style={{
                padding: "24px 0 24px 24px",
                background: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "inherit",
              }}
            >
              <DetailOfFilms />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              background: darkMode ? "#333" : "white",
            }}
          >
            <p style={{ color: darkMode ? "white" : "#333" }}>
              Lab 1 ©2023 Created by Wuan
            </p>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default DetailOfFilm;
