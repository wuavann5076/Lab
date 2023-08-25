import React from "react";
import { Layout, Menu, theme } from "antd";
import ListFilm from "../components/ListFilm";
import "./home.css";

const { Content, Footer, Sider } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: "1",
      label: "Home",
    },
    {
      key: "2",
      label: "Phim lẻ",
    },
    {
      key: "3",
      label: "Phim bộ",
    },
    {
      key: "4",
      label: "Thể loại",
    },
    {
      key: "5",
      label: "Quốc gia",
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          //   console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          //   console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={menuItems.map(({ key, icon, label }) => ({
            key,
            icon,
            label,
          }))}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <ListFilm />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Lab 1 ©2023 Created by Wuan
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
