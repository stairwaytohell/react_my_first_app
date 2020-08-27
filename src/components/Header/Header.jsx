import React from 'react';
import s from './Header.module.scss';

const Header = () => {
	return (
		<header>
			<nav>
				<li><a href='#home' className={s.active}>Home</a></li>
				<li><a href='#message'>Message</a></li>
				<li><a href='#notification'>Notification</a></li>
			</nav>
			<div className={s.logo}>
				<a href='#header'>
					<img src='https://img.icons8.com/wired/100/000000/social-network.png' alt='logo' />
				</a>
			</div>
			<div className={s.ava}>
				<a href='#header'>
					<img src='https://img.icons8.com/wired/100/000000/user-male-circle.png' alt='ava' />
				</a>
			</div>
		</header>
	);
}

export default Header;