import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './component/routes';

import './App.css';
import Sidebar from "./sideBar/SideBar";

import Header from './component/header/header';
import Footer from './component/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
import Chat from "./component/home/chat/chat";
import Community from "./component/home/community/community";

import Finance from "./component/home/finance/finance";
import EventInsurance from "./component/home/eventinsurance/eventInsurance";

class App extends Component {
	render() {
		return (
			<Router>
				<div style={{
					display: "flex",
					flexDirection: "row"
				}}>

					{/* <div style={{ display: "flex", flex: 1 }}>
						<Community />
						<Chat />
					</div> */}

					<div style={{  display: "flex", flex: 1 }}>
						<div style={{
							flex: 1,
							display: "flex",
							flexDirection: "column"
						}} className='rightfixed'>
							<div style={{ flex: 1 }}><Community /></div>
							
						</div>
					</div>

					<div>
						<Header />
						<div className="App" >
							<Navigation />
						</div>
						<Footer />
					</div>

					<div style={{ flex: 1 }}>
						<div style={{
							flex: 1,
							display: "flex",
							flexDirection: "column"
						}} className='rightfixed'>
							<div style={{ flex: 1 }}><Finance /></div>
							
							<div style={{ flex: 1 }}><EventInsurance /></div>
						</div>
					</div>

				</div>
			</Router>
		);
	}
}

export default App;
