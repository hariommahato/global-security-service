import Image from "next/image";
import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import logo from "../../images/logo.png";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { BiCollapseHorizontal } from "react-icons/bi";
const DashboardSidebar = () => {
  const { collapseSidebar } = useProSidebar();
  const { data } = useSession();
  return (
    <Sidebar style={{ backgroundColor: "#060047", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h5 className="text-center p-4">Dashboard</h5>

        <p>
          Welcome <span style={{ color: "blue" }}>{data?.user?.email}</span>
        </p>
        <span onClick={() => collapseSidebar()}>
          <BiCollapseHorizontal />
        </span>

        <Image src={logo} width={100} height={100} />
      </div>

      <Menu>
        <SubMenu label="AboutData">
          <MenuItem as={Link} href={`/admin/dashboard/about/add`}>
            {" "}
            Add About{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/about"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="Our Team Data">
          <MenuItem as={Link} href={`/admin/dashboard/team/add`}>
            {" "}
            Add Team{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/team"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="Carousel">
          <MenuItem as={Link} href={`/admin/dashboard/carousel/add`}>
            {" "}
            Add Carousel{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/carousel"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="Faq">
          <MenuItem as={Link} href={`/admin/dashboard/faq/add`}>
            {" "}
            Add Faq{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/faq"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="WelcomeData">
          <MenuItem as={Link} href={`/admin/dashboard/welcomedata/add`}>
            {" "}
            Add WelcomeData{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/welcomedata"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="ServicesData">
          <MenuItem as={Link} href={`/admin/dashboard/services/add`}>
            {" "}
            Add ServicesData{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/services"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="ClientData">
          <MenuItem as={Link} href={`/admin/dashboard/client/add`}>
            {" "}
            Add Client{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/client"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="UserData">
          <MenuItem as={Link} href={`/admin/dashboard/user/add`}>
            {" "}
            Add User{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/user"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="ContactData">
          <MenuItem ad={Link} href={"/admin/dashboard/contact"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="FeedbackData">
          <MenuItem ad={Link} href={"/admin/dashboard/feedback"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
      </Menu>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button
          variant="danger"
          onClick={() => {
            signOut({ redirect: true, callbackUrl: "/" });
          }}
        >
          Logout
        </Button>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
