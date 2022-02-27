import { useState } from 'react'
import xmark from '../assets/xmark.png'
import plus from '../assets/plus.png'

const UserFaq = () => {
	const QuestionsAnswerArray = [
		{
			id: 0,
			number: '01',
			question: 'How does the payment work?',
			answer:
				'The payment will be made through the application in a totally secure way. You can make several requests for the same time to different Paladars, but the money will only come out of your account when the first host accepts it and all the other requests will be eliminated. Afterwards, the money will stay with us until a few days after your experience and you will be refunded if anything goes wrong.',
		},

		{
			id: 1,
			number: '02',
			question: 'Is the mobile app secure?',
			answer:
				'The payment will be made through the application in a totally secure way. You can make several requests for the same time to different Paladars, but the money will only come out of your account when the first host accepts it and all the other requests will be eliminated. Afterwards, the money will stay with us until a few days after your experience and you will be refunded if anything goes wrong.',
		},

		{
			id: 2,
			number: '03',
			question: 'What are the ways to get a panda and join the fight against The Syndicate?',
			answer:
				'The payment will be made through the application in a totally secure way. You can make several requests for the same time to different Paladars, but the money will only come out of your account when the first host accepts it and all the other requests will be eliminated. Afterwards, the money will stay with us until a few days after your experience and you will be refunded if anything goes wrong.',
		},

		{
			id: 3,
			number: '04',
			question: 'I have multiple allergies, how does the host know?',
			answer:
				'The payment will be made through the application in a totally secure way. You can make several requests for the same time to different Paladars, but the money will only come out of your account when the first host accepts it and all the other requests will be eliminated. Afterwards, the money will stay with us until a few days after your experience and you will be refunded if anything goes wrong.',
		},

		{
			id: 4,
			number: '05',
			question: 'I am vegetarian or vegan. Are there any Paladares for me?',
			answer:
				'The payment will be made through the application in a totally secure way. You can make several requests for the same time to different Paladars, but the money will only come out of your account when the first host accepts it and all the other requests will be eliminated. Afterwards, the money will stay with us until a few days after your experience and you will be refunded if anything goes wrong.',
		},

		{
			id: 5,
			number: '06',
			question: 'Could there be moments of embarrassment with the host?',
			answer:
				'The payment will be made through the application in a totally secure way. You can make several requests for the same time to different Paladars, but the money will only come out of your account when the first host accepts it and all the other requests will be eliminated. Afterwards, the money will stay with us until a few days after your experience and you will be refunded if anything goes wrong.',
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

export default UserFaq
