import React from 'react';
import s from './Main.module.scss';

const Main = () => {
	return (
		<main>
			<div className={s.banner}></div>
			<div className={s.top}>
				<div className={s.ava}>
					<a href='#profile'>
						<img src='https://images.unsplash.com/photo-1565192060820-36811234b577' alt='ava'>
						</img>
					</a>
				</div>
				<div className={s.nav}>
					<li><a href='#timeline' className={s.active}>Timeline</a></li>
					<li><a href='#about'>About</a></li>
					<li><a href='#photos'>Photos</a></li>
					<li><a href='#friends'>Friends</a></li>
					<li><a href='#more'>More</a></li>
					<button>Edit Profile</button>
				</div>
				
			</div>
		</main>
	);
}

export default Main;