import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";

const NavConfig = () => {
	return (
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="/" element={<MainPage />} />
			</Route>
		</Routes>
	);
};

export default NavConfig;
