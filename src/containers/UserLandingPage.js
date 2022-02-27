import React from 'react'
import ProblemSection from '../components/ProblemSection'
import UserHeader from '../components/UserHeader'
import Solution from './../components/Solution'
import History from './../components/History'
import HowItWorksUser from './../components/HowItWorksUser'
import BenefitsUser from '../components/BenefitsUser'

const LandingPage = () => {
	return (
		<div className="landing_page">
			<UserHeader />
			<ProblemSection />
			<Solution />
			<History />
			<HowItWorksUser />
			<BenefitsUser />
		</div>
	)
}

export default LandingPage
