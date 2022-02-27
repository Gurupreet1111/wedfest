import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../../sideBar/SidebarData";
import SubMenu from "../../sideBar/SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
background: #ff3a9c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
// background: #ff3a9c;
background: linear-gradient(#ff3a9c,#ff662b);
width: 250px;
height: 100vh;
margin:20px 120px;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Header = () => {

	const [sidebar, setSidebar] = useState(false);

	//const showSidebar = () => setSidebar(!sidebar);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<div className="header">

			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavIcon to="#">
						<FaIcons.FaBars onClick={showSidebar} />
					</NavIcon>
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to="#">
							<AiIcons.AiOutlineClose onClick={showSidebar} />
						</NavIcon>
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />;
						})}
					</SidebarWrap>
				</SidebarNav>
				
			</IconContext.Provider>

			<div className="title">
				Wedfest
			</div>

			<div className="header-links">
				<Link to="/">What's New</Link>
				<Link to="/vendor" className="free-registration">Free Register</Link>
				<Link to="/">Advertise</Link>
				<Link to="/">Login/Sign-up</Link>
			</div>

			<div className="login-div">
				<i class="fa fa-user-circle" aria-hidden="true"></i>
			</div>
		</div>
	)
}
export default Header;
