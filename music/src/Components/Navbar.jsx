import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { ClickAwayListener } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import "./navbar.css";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const history = useHistory();

	

	return (
		<div className="container">
			<div className="left">
				<div className="icon" onClick={() => history.goBack()}>
					<ArrowBackIosRoundedIcon />
				</div>
				<div className="icon" onClick={() => history.goForward()}>
					<ArrowForwardIosRoundedIcon />
				</div>
			</div>
			<div className="right">
				<div
					style={{ backgroundColor: `${menu ? "#282828" : "#000"}` }}
					className="profile_menu"
					onClick={() => setMenu(!menu)}
				>
					<AccountCircleIcon />
					<p>{user && user.name}</p>
					{menu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
				</div>
			</div>
			{menu && (
				<ClickAwayListener onClickAway={() => setMenu(false)}>
					<div className="menu" onClick={() => setMenu(false)}>
						<Link to="/me">
							<div className="options">
								<p>Profile</p>
								<PersonIcon />
							</div>
						</Link>
						<div className="options">
							<p>Settings</p>
							<SettingsIcon />
						</div>

					</div>
				</ClickAwayListener>
			)}
		</div>
	);
};

export default Navbar;