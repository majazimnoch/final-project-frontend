import React, { useState } from 'react';
import './SidebarCss.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/mypage',
      name: 'Add a horse',
      icon: <FaTimes />
    },
    {
      path: '/userpage',
      name: 'Your Horses',
      icon: <FaTimes />
    },
    {
      path: '/weather',
      name: 'Weather',
      icon: <FaTimes />
    }
  ]
  return (
    <Container>
      <div style={{ width: isOpen ? '300px' : '50px' }} className="sidebar">
        <TopSection>
          <h6 style={{ display: isOpen ? 'block' : 'none' }} className="logo">Logo</h6>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggleSidebar} />
          </div>
        </TopSection>
        {
          menuItem.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <SidebarIconDiv>{item.icon}</SidebarIconDiv>
              <SidebarLinkText>
                {item.name}
              </SidebarLinkText>
            </NavLink>
          ))
        }
      </div>
      <Main>{children}</Main>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
color: #FFFFFF;
height: 100vh;
display: flex;
`
const Main = styled.main`
width:100%;
padding: 20px;
`
// const SidebarDiv = styled.div`
// background: var(--claret);
// color: var(--primaryWhite);
// height: 100vh;
// width: 300px

// ${(styling) => styling.isOpen && css`
// top: 20px; left: -100px;
// rotate: 30deg;
//   `
// }
// `
const TopSection = styled.div`
display: flex;
align-items: center;
padding: 20px 15px;
`
const SidebarIconDiv = styled.div`
`
const SidebarLinkText = styled.div`
`