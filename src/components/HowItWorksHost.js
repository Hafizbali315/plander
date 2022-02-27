import Roadmap1 from '../assets/Roadmap1.png'
import Roadmap2 from '../assets/Roadmap2.png'
import Roadmap3 from '../assets/Roadmap3.png'
import Roadmap4 from '../assets/Roadmap4.png'
import Roadmap5 from '../assets/Roadmap5.png'

import HostRoadmapImg1 from '../assets/HostRoadmapImg1.png'
import HostRoadmapImg2 from '../assets/HostRoadmapImg2.png'
import HostRoadmapImg3 from '../assets/HostRoadmapImg3.png'
import HostRoadmapImg4 from '../assets/HostRoadmapImg4.png'
import HostRoadmapImg5 from '../assets/HostRoadmapImg5.png'

import LeftContentBg from '../assets/LeftContentBg.png'
import RightContentBg from '../assets/RightContentBg.png'

import Circle from '../assets/CircleFill.png'

const HowItWorksHost = () => {
	return (
		<div className="how_it_works" id="host_work">
			<div className="content">
				<h2>How it Works</h2>
				<p>
					The Host of a Paladar is free to set the price, the number of seats and the schedule of his Paladar. He may receive
					<br /> several requests for his Paladar, but the reservation will only be confirmed when he accepts one of them. There will be no
					<br /> commitment until then.
				</p>
			</div>

			<div className="roadmap">
				<div className="roadmap_line"></div>

				<div className="row_1">
					<div className="text">
						<div className="text_bg">
							<img src={LeftContentBg} alt="LeftContentBg" />
						</div>
						<p>In your profile, select the option “become a host” and fill in all the necessary information</p>
					</div>

					<div className="img_container">
						<img src={HostRoadmapImg1} alt="HostRoadmapImg1" />
					</div>

					<div className="count">
						<img src={Roadmap1} alt="roadmap" />
					</div>
				</div>

				<div className="row_2">
					<div className="img_container">
						<img src={HostRoadmapImg2} alt="HostRoadmapImg2" />
					</div>

					<div className="text">
						<div className="text_bg">
							<img src={RightContentBg} alt="RightContentBg" />
						</div>
						<p>In your Host profile, you must update all the information about your Paladar to make it more appealing</p>
					</div>

					<div className="count">
						<img src={Roadmap2} alt="roadmap" />
					</div>
				</div>

				<div className="row_1">
					<div className="text">
						<div className="text_bg">
							<img src={LeftContentBg} alt="LeftContentBg" />
						</div>
						<p>
							In the “my reservations” section of your host profile you will be able to see all the requests that have been maden to your
							Paladar
						</p>
					</div>

					<div className="img_container">
						<img src={HostRoadmapImg3} alt="UserRoadmapImg1" />
					</div>

					<div className="count">
						<img src={Roadmap3} alt="roadmap" />
					</div>
				</div>

				<div className="row_2">
					<div className="img_container">
						<img src={HostRoadmapImg4} alt="UserRoadmapImg1" />
					</div>

					<div className="text">
						<div className="text_bg">
							<img src={RightContentBg} alt="RightContentBg" />
						</div>
						<p>
							When you select one of the requests, a screen will appear with all the information of the request, including dietary
							restrictions.
						</p>
					</div>

					<div className="count">
						<img src={Roadmap4} alt="roadmap" />
					</div>
				</div>

				<div className="row_1">
					<div className="text">
						<div className="text_bg">
							<img src={LeftContentBg} alt="LeftContentBg" />
						</div>
						<p>
							After accepting the request, the reservation is confirmed and you will be able to find it in the “upcoming” section of the “my
							paladar reservations”
						</p>
					</div>

					<div className="img_container">
						<img src={HostRoadmapImg4} alt="HostRoadmapImg4" />
					</div>

					<div className="count">
						<img src={Roadmap5} alt="roadmap" />
					</div>
				</div>
			</div>

			<div className="circle">
				<img src={Circle} alt="circle" />
			</div>
		</div>
	)
}

export default HowItWorksHost
