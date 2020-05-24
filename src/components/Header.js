import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component {
	render() {
		return (
			<header>
				<div className="fl">
					<button type="button">
						<img src="/images/misc/user.png" alt="User Settings" />
					</button>
				</div>

				<div className="fl">
					<button type="button" alt="Logo">
						<Logo />
					</button>
				</div>

				<div className="fl">
					<button type="button">
						<img src="/images/misc/messages.png" alt="View Messages" />
					</button>
				</div>
			</header>
		);
	}
}

export default Header;
