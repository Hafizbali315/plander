import { useState } from 'react'
import xmark from '../assets/xmark.png'
import plus from '../assets/plus.png'

const HostFaq = () => {
	const QuestionsAnswerArray = [
		{
			id: 0,
			number: '01',
			question: 'I am a host and I receive a request for my Paladar. Am I obliged to accept?',
			answer: "No! The host will be notified of the request, but you can always refuse if it's not convenient for you",
		},

		{
			id: 1,
			number: '02',
			question: 'Who sets my Paladar schedule? ',
			answer: "No! The host will be notified of the request, but you can always refuse if it's not convenient for you",
		},

		{
			id: 2,
			number: '03',
			question: 'I accepted a request by mistake. Can I cancel this reservation?',
			answer: "No! The host will be notified of the request, but you can always refuse if it's not convenient for you",
		},

		{
			id: 3,
			number: '04',
			question: 'Am I obliged to define the dish/menu of my Paladar?',
			answer: "No! The host will be notified of the request, but you can always refuse if it's not convenient for you",
		},

		{
			id: 4,
			number: '05',
			question: 'How does the payment work? Is it safe?',
			answer: "No! The host will be notified of the request, but you can always refuse if it's not convenient for you",
		},
	]

	const [clicked, setClicked] = useState(false)

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null)
		}
		setClicked(index)
	}

	return (
		<div className="faq" id="faq">
			<h2>FAQs</h2>

			<div className="container">
				{QuestionsAnswerArray.map((item, index) => (
					<div className="single_faq" style={{ background: clicked === index ? '#FFF3E9' : '#F9F9F9' }}>
						<div className="heading" onClick={() => toggle(index)} key={index}>
							<h3 className="number">{item.number}</h3>
							<div className="qa">
								<h3 className="question">{item.question}</h3>
								{clicked === index ? <p className="answer">{item.answer}</p> : null}
							</div>
							{clicked === index ? <img src={xmark} alt="xmark" className="icon" /> : <img src={plus} alt="xmark" className="icon" />}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default HostFaq
