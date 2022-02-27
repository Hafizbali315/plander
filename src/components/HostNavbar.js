import PlandarText from '../assets/PlandarText.png'
import Logo from '../assets/Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const HostNavbar = () => {
	const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false)

	return (
		<div className="user_navbar">
			<div className="left">
				<img className="logo" src={Logo} alt="logo" />
				<img className="text" src={PlandarText} alt="logo" />
			</div>

			<div className="links">
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>

					<li>
						<a href="#works">How it Works </a>
					</li>

					<li>
						<a href="#benefits">Benefits</a>
					</li>
					<li>
						<a href="#faq">FAQ</a>
					</li>
					<li>
						<a href="#subscription">Subscription</a>
					</li>
				</ul>
			</div>

			<div className="right">
				<Link to="/">
					<button>Main Page</button>
				</Link>
			</div>

			<div className="hamburger_menu">
				{showSmallScreenMenu ? (
					<div className="icon" onClick={() => setShowSmallScreenMenu(false)}>
						{' '}
						X{' '}
					</div>
				) : (
					<GiHamburgerMenu className="icon" onClick={() => setShowSmallScreenMenu(true)} />
				)}
			</div>

			{showSmallScreenMenu && (
				<div className="mobile_sidebar">
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>

						<li>
							<a href="#works">How it Works </a>
						</li>

						<li>
							<a href="#benefits">Benefits</a>
						</li>
						<li>
							<a href="#faq">FAQ</a>
						</li>
						<li>
							<a href="#subscription">Subscription</a>
						</li>

						<li>
							<Link to="/">
								<button>Main Page</button>
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default HostNavbar
