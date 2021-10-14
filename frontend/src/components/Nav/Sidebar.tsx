import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  background-color: #f9f9f9;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 300px;
  z-index: 1;
  height: 100vh;
  background-color: #dcdcdc;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
`;

const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;
`;

const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon to="#" onClick={showSidebar}>
          <MenuIcon />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#" onClick={showSidebar}>
            <CloseIcon />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
