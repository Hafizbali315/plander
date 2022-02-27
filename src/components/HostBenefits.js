import BenefitsBg from '../assets/BenefitsBg.png'
import HostBenefitsImg from '../assets/HostBenefitsImg.png'

import HostBenefitImg1 from '../assets/HostBenefitImg1.png'
import HostBenefitImg2 from '../assets/HostBenefitImg2.png'
import HostBenefitImg3 from '../assets/HostBenefitImg3.png'
import HostBenefitImg4 from '../assets/HostBenefitImg4.png'

import Circle from '../assets/CircleFill.png'
import Logo3 from '../assets/Logo3.png'

const HostBenefits = () => {
	return (
		<div className="benefits" id="benefits">
			<div className="bg">
				<img src={BenefitsBg} alt="benefitsBg" />
			</div>

			<div className="row">
				<div className="img_container">
					<img src={HostBenefitsImg} alt="HostBenefitsImg" />
				</div>

				<div className="content">
					<h2>Benefits of using Paladar app</h2>

					<div className="content_row_1">
						<div className="benefit_col">
							<div className="icon">
								<div className="icon_container">
									<img src={HostBenefitImg1} alt="HostBenefitImg1" />
								</div>
							</div>

							<p>You have the chance to meet the locals and they can give you tips on the best places to visit.</p>
						</div>

						<div className="benefit_col">
							<div className="icon">
								<div className="icon_container">
									<img src={HostBenefitImg2} alt="HostBenefitImg2" />
								</div>
							</div>

							<p>You can try traditional food in their own homes, while saving Money and escaping the routine of restaurants.</p>
						</div>
					</div>

					<div className="content_row_2">
						<div className="benefit_col">
							<div className="icon">
								<div className="icon_container">
									<img src={HostBenefitImg3} alt="HostBenefitImg2" />
								</div>
							</div>

							<p>You will learn more about the culture of the country where you are.</p>
						</div>

						<div className="benefit_col">
							<div className="icon">
								<div className="icon_container">
									<img src={HostBenefitImg4} alt="HostBenefitImg4" />
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

			<div className="circle">
				<img src={Circle} alt="circle" />
			</div>
		</div>
	)
}

export default HostBenefits
