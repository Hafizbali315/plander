import HostNavbar from './HostNavbar'

import AppStoreImg from '../assets/AppStoreImg.png'
import GoggleImg from '../assets/GoggleImg.png'

import HostHeroImg from '../assets/HostHeroImg.png'

const HostHeader = () => {
	return (
		<div className="host_header">
			<HostNavbar />

			<div className="host_hero_section">
				<div className="left">
					<h1>Be a Paladar Host</h1>
					<p>
						and travel without leaving your home!
						<br />
						Meet people from all over the world, while earning on your schedule and sharing your culinary skills.
					</p>

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
					<img src={HostHeroImg} alt="HostHeroImg" />
				</div>
			</div>
		</div>
	)
}

export default HostHeader
