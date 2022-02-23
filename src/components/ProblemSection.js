import ProblemSectionImg from '../assets/ProblemSectionImg.png'
import ProblemSectionBg from '../assets/ProblemSectionBg1.png'
import CircleFill from '../assets/CircleFill.png'

const ProblemSection = () => {
	return (
		<div className="problem_section">
			<div className="bg">
				<img src={ProblemSectionBg} alt="ProblemSectionBg" />
			</div>

			<div className="content">
				<div className="text">
					<h2>The problem of “overtourism”</h2>

					<p>
						We have all felt on a trip the feeling of not really knowing the place. Without contact with the locals, without sharing some of
						their experiences, we can hardly claim knowledge of a culture and a place. The most touristic cities are so full of tourists
						that it is increasingly difficult to eat traditional food and get to know the local people and their culture.
						<br />
						This desire for a more authentic tourist experience is more frequent than you think, it conects you with more travelers than you
						can imagine!
					</p>
				</div>

				<div className="img_container">
					<img src={ProblemSectionImg} alt="ProblemSectionImg" />
				</div>
			</div>

			<div className="circle_fill">
				<img src={CircleFill} alt="CircleFill" />
			</div>
		</div>
	)
}

export default ProblemSection
