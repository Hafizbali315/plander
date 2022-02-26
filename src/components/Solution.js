import SolutionImg from '../assets/SolutionImg.png'
import Logo2 from '../assets/Logo2.png'
import Circle from '../assets/CircleFill.png'

const Solution = () => {
	return (
		<div className="solution_section" id="solution">
			<div className="img_container">
				<img src={SolutionImg} alt="SolutionImg" />
			</div>

			<div className="content">
				<h2>Our Solution</h2>
				<p>
					There is a solution for travelers who, like you, are not satisfied with this mass way of travelling. With the Paladar application
					it has never been so easy to meet the local population (not even before the low-cost airlines!). We will be the bridge between you
					and the locals who like to cook and meet people from all over the world, through a simple and totally safe mobile application.
					<span>There's no better way to get to know a culture than to walk into their house and sit down at the table with them.</span>
					The Paladar application is a network for sharing meals in the locals private homes – designated in the application by Paladares -
					among those who are willing to be hosts and the travellers who are looking for and authentic experience of tourism, interacting
					with the local population and learning about their culture.
				</p>
			</div>

			<div className="logo">
				<img src={Logo2} alt="Logo2" />
			</div>

			<div className="circle">
				<img src={Circle} alt="circle" />
			</div>
		</div>
	)
}

export default Solution
