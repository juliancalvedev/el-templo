import './Help.scss';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph/Paragraph';
const HelpAccordionBlue = ({ accordionType = 'blue', color = 'color' }) => {
	const { t } = useTranslation();
	return (
		<div className='accordion accordion-flush col-12   ' id='accordionFlushExample'>
			
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingOne'>
					<button
						className={`accordion-button rounded-top accordion-button--${accordionType} `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseOne'
						aria-expanded='false'
						aria-controls='flush-collapseOne'
					>
						{t('help.main.accordionTextBlue1')}
					</button>
				</h2>
				<div
					id='flush-collapseOne'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingOne'
					data-bs-parent='#accordionFlushExample'
				>
					<div
						className={`accordion-body accordion-body--${color} col-12`}
					>
						<div className='col-11 px-3 py-2 '>
							<Paragraph
								text={t('help.main.auxText3.item1')}
								type='light'
							/>
							<Paragraph
								text={t('help.main.auxText3.item2')}
								type='light'
							/>
							<Paragraph
								text={t('help.main.auxText3.item3')}
								type='light'
							/>
							<Paragraph
								text={t('help.main.auxText3.item4')}
								type='light'
							/>
							<Paragraph
								text={t('help.main.auxText3.item5')}
								type='light'
							/>
							<Paragraph
								text={t('help.main.auxText3.item6')}
								type='light'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingTwo'>
					<button
						className={`accordion-button border-1 accordion-button--${accordionType}  `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseTwo'
						aria-expanded='false'
						aria-controls='flush-collapseTwo'
					>
						{t('help.main.accordionTextBlue2')}
					</button>
				</h2>
				<div
					id='flush-collapseTwo'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingTwo'
					data-bs-parent='#accordionFlushExample'
				>
					<div className={`accordion-body accordion-body--${color}`}>
						Placeholder content for this accordion, which is intended to
						demonstrate the <code>.accordion-flush</code> class. This is
						the second item's accordion body. Let's imagine this being
						filled with some actual content.
					</div>
				</div>
			</div>
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingThree'>
					<button
						className={`accordion-button  border-1 accordion-button--${accordionType}  `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseThree'
						aria-expanded='false'
						aria-controls='flush-collapseThree'
					>
						{t('help.main.accordionTextBlue3')}
					</button>
				</h2>
				<div
					id='flush-collapseThree'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingThree'
					data-bs-parent='#accordionFlushExample'
				>
					<div className={`accordion-body accordion-body--${color}`}>
						Placeholder content for this accordion, which is intended to
						demonstrate the <code>.accordion-flush</code> class. This is
						the third item's accordion body. Nothing more exciting
						happening here in terms of content, but just filling up the
						space to make it look, at least at first glance, a bit more
						representative of how this would look in a real-world
						application.
					</div>
				</div>
			</div>
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingFour'>
					<button
						className={`accordion-button rounded-bottom accordion-button--${accordionType} `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseFour'
						aria-expanded='false'
						aria-controls='flush-collapseFour'
					>
						{t('help.main.accordionTextBlue4')}
					</button>
				</h2>
				<div
					id='flush-collapseFour'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingFour'
					data-bs-parent='#accordionFlushExample'
				>
					<div className={`accordion-body accordion-body--${color}`}>
						Placeholder content for this accordion, which is intended to
						demonstrate the <code>.accordion-flush</code> class. This is
						the third item's accordion body. Nothing more exciting
						happening here in terms of content, but just filling up the
						space to make it look, at least at first glance, a bit more
						representative of how this would look in a real-world
						application.
					</div>
				</div>
			</div>
		</div>
	);
};

export default HelpAccordionBlue;
