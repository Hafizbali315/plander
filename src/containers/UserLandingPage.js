import React from 'react'
import ProblemSection from '../components/ProblemSection'
import UserHeader from '../components/UserHeader'
import Solution from './../components/Solution'
import History from './../components/History'
import HowItWorksUser from './../components/HowItWorksUser'
import BenefitsUser from '../components/BenefitsUser'
import UserFaq from '../components/UserFaq'
import Subscription from './../components/Subscription'

const LandingPage = () => {
	return (
		<div className="landing_page">
			<UserHeader />
			<ProblemSection />
			<Solution />
			<History />
			<HowItWorksUser />
			<BenefitsUser />
			<UserFaq />
			<Subscription />
		</div>
	)
}

export default LandingPage
