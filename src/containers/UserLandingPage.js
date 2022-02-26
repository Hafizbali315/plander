import React from 'react'
import ProblemSection from '../components/ProblemSection'
import UserHeader from '../components/UserHeader'
import Solution from './../components/Solution'
import History from './../components/History'

const LandingPage = () => {
	return (
		<div className="landing_page">
			<UserHeader />
			<ProblemSection />
			<Solution />
			<History />
		</div>
	)
}

export default LandingPage
