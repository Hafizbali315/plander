import React from 'react'
import ProblemSection from '../components/ProblemSection'
import UserHeader from '../components/UserHeader'
import Solution from './../components/Solution'
import History from './../components/History'
import HowItWorksUser from './../components/HowItWorksUser'
import UserBenefits from '../components/UserBenefits'
import UserFaq from '../components/UserFaq'
import Subscription from './../components/Subscription'
import Footer from './../components/Footer'

const UserLandingPage = () => {
	return (
		<div className="user_landing_page">
			<UserHeader />
			<ProblemSection />
			<Solution />
			<History />
			<HowItWorksUser />
			<UserBenefits />
			<UserFaq />
			<Subscription />
			<Footer />
		</div>
	)
}

export default UserLandingPage
