import './Help.scss';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import useFetch from '../../hooks/useFetch';
import {help} from '../../services/user';
import { PATHS } from '../../constants/paths';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import HelpAccordionBlue from './HelpAccordionBlue';
import Input from '../../components/Input/Input';

const HelpAccordion = ({ icon = 'icon' }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [message, setMessage] = useState('');
	const [subject, setSubject] = useState('');

	const handleChangeMessage = (e) => {
		setMessage(e.target.value);
	};
	const handleChangeSubject = (e) => {
			setSubject(e.target.value);
		};
	const [data, error, apiCall] = useFetch({
	service: () => help({ message, subject }),
	globalLoader: true,
	});
	const toContact = () => navigate(`/${PATHS.CONTACT}`);
	// toTerms redirige a Contact hasta que este creada la page Terminos&Condiciones
	const toTerms = () => navigate(`/${PATHS.CONTACT}`);
	return (
		<div>
			<div className='accordion col-12 ' id='accordionExample'>
				<div className='accordion-item  '>
					<h2 className='accordion-header ' id='headingTwo '>
						<button
							className='accordion-button  bg-light text-dark '
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'
						>
							{t('help.main.accordionText1')}
						</button>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse  '
						aria-labelledby='headingTwo'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body row'>
							<div className='col-12 my-3 d-flex justify-content-start pr-3'>
								<Text
									bold
									color={1}
									size={3}
									text={t('help.main.accordionInside1')}
								/>
							</div>
							<div className='col-12'>
								<div className='col-12 d-flex'>
									<div className='col-3 d-flex align-items-center'>
										<Text
											color={1}
											size={2}
											text={t('help.main.accordionInside2')}
										/>
									</div>
									<div className='col-9'>
										<Input
											value={subject}
											onChange={handleChangeSubject}
											type='text'
											className='my-0'
										/>
									</div>
								</div>
								<div className='col-12 d-flex justify-content-start mx-0 pr-3'>
									<div className='col-3 d-flex align-items-start'>
										<Text
											color={1}
											size={2}
											text={t('help.main.accordionInside3')}
										/>
									</div>
									<div className='col-9'>
										<textarea
											value={message}
											onChange={handleChangeMessage}
											rows='5'
											cols='21'
											className='col-12   border border-1  mt-1
									p-3'
										></textarea>
									</div>
								</div>
							</div>

							<div className='col-12 d-flex justify-content-end'>
								<Button
									onClick={apiCall}
									text={t('help.main.btnSend')}
									size={1}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingThree'>
						<button
							className='accordion-button bg-light text-dark '
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'
						>
							{t('help.main.accordionText2')}
						</button>
					</h2>
					<div
						id='collapseThree'
						className='accordion-collapse collapse'
						aria-labelledby='headingThree'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body '>
							<Text
								bold
								className='d-flex justify-content-start mt-3 px-2 '
								color={1}
								size={3}
								text={t('help.main.faqs')}
							/>
							<Text
								color={1}
								size={2}
								className='d-flex justify-content-start mb-2 px-2'
								text={t('help.main.fq')}
							/>
							<HelpAccordionBlue />
						</div>
					</div>
				</div>
			</div>
			<div>
				{/* TODO  cambiar button por componente Button*/}
				<button
					className={`accordion-button bg-light  text-dark accordion-button--${icon}`}
					onClick={toTerms}
				>
					{t('help.main.btn2')}
				</button>
				<button
					className={`accordion-button bg-light  text-dark accordion-button--${icon}`}
					onClick={toContact}
				>
					{t('help.main.btn3')}
				</button>
			</div>
		</div>
	);
};

export default HelpAccordion;
