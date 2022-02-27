import Roadmap1 from '../assets/Roadmap1.png'
import Roadmap2 from '../assets/Roadmap2.png'
import Roadmap3 from '../assets/Roadmap3.png'
import Roadmap4 from '../assets/Roadmap4.png'
import Roadmap5 from '../assets/Roadmap5.png'
import Roadmap6 from '../assets/Roadmap6.png'
import Roadmap7 from '../assets/Roadmap7.png'

import UserRoadmapImg1 from '../assets/UserRoadmapImg1.png'
import UserRoadmapImg2 from '../assets/UserRoadmapImg2.png'
import UserRoadmapImg3 from '../assets/UserRoadmapImg3.png'
import UserRoadmapImg4 from '../assets/UserRoadmapImg4.png'
import UserRoadmapImg5 from '../assets/UserRoadmapImg5.png'
import UserRoadmapImg6 from '../assets/UserRoadmapImg6.png'
import UserRoadmapImg7 from '../assets/UserRoadmapImg7.png'

import LeftContentBg from '../assets/LeftContentBg.png'
import RightContentBg from '../assets/RightContentBg.png'

import Circle from '../assets/CircleFill.png'

const HowItWorksUser = () => {
	return (
		<div className="how_it_works" id="works">
			<div className="content">
				<h2>How it Works</h2>
				<p>
					You should make many requests for the same time to diferente Paladares! When the first one accepts, all
					<br />
					others will be deleted. This way you will increase your chance of having a unique experience of having a meal
					<br />
					at a local's home!
				</p>
			</div>

			<div className="roadmap">
				<div className="roadmap_line"></div>

				<div className="row_1">
					<div className="text">
						<div className="text_bg">
							<img src={LeftContentBg} alt="LeftContentBg" />
						</div>
						<p>You select, on the main screen, a Paladar that you like</p>
					</div>

					<div className="img_container">
						<img src={UserRoadmapImg1} alt="UserRoadmapImg1" />
					</div>

					<div className="count">
						<img src={Roadmap1} alt="roadmap" />
					</div>
				</div>

				<div className="row_2">
					<div className="img_container">
						<img src={UserRoadmapImg2} alt="UserRoadmapImg1" />
					</div>

					<div className="text">
						<div className="text_bg">
							<img src={RightContentBg} alt="RightContentBg" />
						</div>
						<p>After viewing your information, click on the “send a request” button</p>
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
						<p>Choose the day you want to book, if you haven't chosen it before.</p>
					</div>

					<div className="img_container">
						<img src={UserRoadmapImg3} alt="UserRoadmapImg1" />
					</div>

					<div className="count">
						<img src={Roadmap3} alt="roadmap" />
					</div>
				</div>

				<div className="row_2">
					<div className="img_container">
						<img src={UserRoadmapImg4} alt="UserRoadmapImg1" />
					</div>

					<div className="text">
						<div className="text_bg">
							<img src={RightContentBg} alt="RightContentBg" />
						</div>
						<p>You select the time that suits you best.</p>
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
						<p>You confirm the request to this Host</p>
					</div>

					<div className="img_container">
						<img src={UserRoadmapImg5} alt="UserRoadmapImg1" />
					</div>

					<div className="count">
						<img src={Roadmap5} alt="roadmap" />
					</div>
				</div>

				<div className="row_2">
					<div className="img_container">
						<img src={UserRoadmapImg6} alt="UserRoadmapImg1" />
					</div>

					<div className="text">
						<div className="text_bg">
							<img src={RightContentBg} alt="RightContentBg" />
						</div>
						<p>Before confirming, you can change the information and choose to have the experience alone or with other travelers</p>
					</div>

					<div className="count">
						<img src={Roadmap6} alt="roadmap" />
					</div>
				</div>

				<div className="row_1">
					<div className="text">
						<div className="text_bg">
							<img src={LeftContentBg} alt="LeftContentBg" />
						</div>
						<p>
							You sent a request. Your reservation will be confirmed when the host accepts it. Send more requests for the same time to
							inscrease your chances of having na amazing experience.
						</p>
					</div>

					<div className="img_container">
						<img src={UserRoadmapImg7} alt="UserRoadmapImg1" />
					</div>

					<div className="count">
						<img src={Roadmap7} alt="roadmap" />
					</div>
				</div>
			</div>

			<div className="circle">
				<img src={Circle} alt="circle" />
			</div>
		</div>
	)
}

export default HowItWorksUser
