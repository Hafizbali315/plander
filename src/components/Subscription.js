import SubscriptionBg from '../assets/SubcriptionBg.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Circle from '../assets/CircleFill.png'

const Subscription = () => {
	return (
		<div className="subscription">
			<div className="bg">
				<img src={SubscriptionBg} alt="SubscriptionBg" />
			</div>

			<div className="content">
				<h2>Subscription</h2>
				<p>Get monthly updates so you dont miss any oportunity to have an awesome experience anymore</p>

				<div className="input_container">
					<input placeholder="Your Email address" type="email" />
					<button>
						Get Started
						<AiOutlineArrowRight className="icon" />
					</button>
				</div>
			</div>
			<div className="circle">
				<img src={Circle} alt="circle" />
			</div>
		</div>
	)
}

export default Subscription
