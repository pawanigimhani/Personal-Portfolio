import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminAbout from "./adminAbout";
import AdminIntro from "./adminIntro";
import { useSelector } from "react-redux";
import AdminpProj from "./adminProjects";
import AdminContact from "./adminContact";
import AdminBlog from "./adminBlogs";

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-semibold mt-5 ml-5">Admin Panel</h1>
        <h1
          className="flex text-xl font-semibold mt-5 ml-5 underline cursor-pointer mr-5"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>
      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="About" key="1">
              <AdminAbout />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Intro" key="2">
              <AdminIntro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Projects" key="3">
              <AdminpProj />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Blogs" key="4">
              <AdminBlog />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Contact" key="5">
              <AdminContact />
            </Tabs.TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
