import HavanaImg from '../assets/HavanaImg.png'
import Logo3 from '../assets/Logo3.png'

const History = () => {
	return (
		<div className="history" id="history">
			<div className="content">
				<h2>The History of “Paladares”</h2>
				<p>
					Paladar is the name used by Cuban for restaurants. For many years, the paladares were authentic underground restaurants where
					people served meals in their own homes, expecially to tourists who wanted to live a diferente experience and interact with the
					local population.
				</p>
			</div>

			<div className="img_container">
				<img src={HavanaImg} alt="havana" />
			</div>

			<div className="logo">
				<img src={Logo3} alt="Logo2" />
			</div>
		</div>
	)
}

export default History
