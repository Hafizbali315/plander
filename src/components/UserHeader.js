import UserNavbar from './UserNavbar'
import HeroLeftImg from '../assets/HeroLeftImg.png'
import WelcomePlanderMobile from '../assets/WelcomePlanderMobile.png'
import GoggleImg from '../assets/GoggleImg.png'
import CircleFill from '../assets/CircleFill.png'
import AppStoreImg from '../assets/AppStoreImg.png'

const UserHeader = () => {
	return (
		<>
			<UserNavbar />

			<div className="hero_section">
				<div className="left">
					<img className="left_img" src={HeroLeftImg} alt="HeroLeftImg" />

					<div className="available_buttons">
						<button>
							<img src={GoggleImg} alt="GoggleImg" />
						</button>
						<button>
							<img src={AppStoreImg} alt="AppStoreImg" />
						</button>
					</div>
				</div>

				<div className="right">
					<img className="mobile_img" src={WelcomePlanderMobile} alt="WelcomePlanderMobile" />
					<img className="circle_fill" src={CircleFill} alt="CircleFill" />
				</div>

				<h1>Eat in a Local's Home</h1>
			</div>
		</>
	)
}

export default UserHeader
