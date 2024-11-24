/** @format */

import React, { useContext } from "react";
// import amazoneLogo from "../amazone_logo.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { UseContextState } from "../StateProvider";
import { auth } from "../firebase";

export default function Header(props) {
	const [{ basket, user }, dispatch] = UseContextState();

	const handleSingnOut = () => {
		auth.signOut();
		// when signOut method is called it gonna be refresh the whole website page again and
		// because it is refreshing so it will also called useEffect hook and inside useEffect
		// hook it will give user which is inside data layer to null value.
	};
	// console.log(user.email);

	return (
		<div className='header'>
			<div className='Amazone_logo'>
				<Link style={{textDecoration:'none'}} to='/'>
					<img
						src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
						alt='amazone_logo'
					/>
				</Link>
			</div>
			<div className='amazone_search'>
				<input
					className='header_searchInput'
					type='text'
					placeholder='search Amazone.in'
				/>
				<SearchIcon className='header_searchIcon' />
			</div>
			<div className='amazone_header'>
				<Link style={{textDecoration:'none'}} to={!user && "/login"}>
					<div onClick={handleSingnOut} className='sideElement'>
						<span className='elementOne'>Hello,{user?.email || "Guest"}</span>
						<span className='elementTwo'>{user ? "sign out" : "sign in "}</span>
					</div>
				</Link>
				<Link style={{textDecoration:'none'}} to={"/orders"}>
					<div className='sideElement'>
						<span className='elementOne'>Return </span>
						<span className='elementTwo'>& Order</span>
					</div>
				</Link>
				<div className='sideElement'>
					<span className='elementOne'>Your </span>
					<span className='elementTwo'>Prime</span>
				</div>
				<Link style={{textDecoration:'none'}} to='/checkout'>
					<div className='header_basket'>
						{/* <div className='no_of_item'>{props.updateCount}</div> */}
						<div className='no_of_item'>{basket?.length}</div>{" "}
						{/* ? it represent if something will happen while increasing the count like undefined then it will handle the error presisely it will not get freak out */}
						<div className='basket_image'>
							<ShoppingCartIcon className='basket_image_size' />
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}
