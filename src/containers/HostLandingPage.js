import HostHeader from './../components/HostHeader'
import HowItWorksHost from './../components/HowItWorksHost'
import HostBenefits from './../components/HostBenefits'
import HostFaq from '../components/HostFaq'
import Subscription from './../components/Subscription'
import Footer from './../components/Footer'

const HostLandingPage = () => {
	return (
		<div>
			<HostHeader />
			<HowItWorksHost />
			<HostBenefits />
			<HostFaq />
			<Subscription />
			<Footer />
		</div>
	)
}

export default HostLandingPage
