import BenefitsBg from '../assets/BenefitsBg.png'
import UserBenefitsImg from '../assets/UserBenefitsImg.png'

import UserBenefitImg1 from '../assets/UserBenefitImg1.png'
import UserBenefitImg2 from '../assets/UserBenefitImg2.png'
import UserBenefitImg3 from '../assets/UserBenefitImg3.png'
import UserBenefitImg4 from '../assets/UserBenefitImg4.png'

import Logo3 from '../assets/Logo3.png'

const BenefitsUser = () => {
	return (
		<div className="benefits" id="benefits">
			<div className="bg">
				<img src={BenefitsBg} alt="benefitsBg" />
			</div>

			<div className="row">
				<div className="img_container">
					<img src={UserBenefitsImg} alt="UserBenefitsImg" />
				</div>

				<div className="content">
					<h2>Benefits of using Paladar app</h2>

					<div className="content_row_1">
						<div className="benefit_col">
							<div className="icon">
								<div className="icon_container">
									<img src={UserBenefitImg1} alt="UserBenefitImg1" />
								</div>
							</div>

							<p>You have the chance to meet the locals and they can give you tips on the best places to visit.</p>
						</div>

						<div className="benefit_col">
							<div className="icon">
								<div className="icon_container">
									<img src={UserBenefitImg2} alt="UserBenefitImg2" />
								</div>
							</div>

							<p>You can try traditional food in their own homes, while saving Money and escaping the routine of restaurants.</p>
						</div>
					</div>

					<div className="content_row_2">
						<div className="benefit_col">
							<div className="icon">
								<div className="icon_container">
									<img src={UserBenefitImg3} alt="UserBenefitImg2" />
								</div>
							</div>

							<p>You will learn more about the culture of the country where you are.</p>
						</div>

						<div className="benefit_col">
							<div className="icon">
								<div className="icon_container">
									<img src={UserBenefitImg4} alt="UserBenefitImg2" />
								</div>
							</div>

							<p>You can also meet more people like you if you decide to experience it with other travellers.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="logo">
				<img src={Logo3} alt="Logo2" />
			</div>
		</div>
	)
}

export default BenefitsUser
