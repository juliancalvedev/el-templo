import React, {useEffect, useState} from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Modal from '../../../components/Modal/Modal';
import InputSelect from '../../../components/InputSelect/InputSelect';
import {getBodyParts, getTags, postNewTag} from '../../../services/admin';
import {useDispatch} from 'react-redux';
import {getBodyPartsAction} from '../../../redux/user';
import {privateGet} from '../../../axios/privateInstance';

const AdminTags = () => {
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);
	const [newTagData, setNewTagData] = useState({
		titleES: '',
		titleEN: '',
		bodyPart: [],
	});
	const [bodyParts, setBodyParts] = useState([]);
	const [tagsList, setTagsList] = useState([]);
	const defaultOption = 'Seleccione Categoría';

	useEffect(() => {
		const getBodyParts = async () => {
			try {
				const {data} = await privateGet({url: `/public/body-parts`});
				setBodyParts([defaultOption, ...data.data.bodyParts]);
			} catch (error) {
				return error;
			}
		};
		getBodyParts();
	}, []);

	useEffect(() => {
		const getTagsList = async () => {
			try {
				const {data} = await getTags();
				setTagsList(data.data.tags);
			} catch (error) {
				return error;
			}
		};
		getTagsList();
	}, [showModal]);

	const toggleModal = (clear) => {
		if (clear) {
			setNewTagData({titleES: '', titleEN: '', bodyPart: ''});
		}
		setShowModal(!showModal);
	};

	const handleInputChange = ({e, type}) => {
		if (type === 'es') {
			setNewTagData({...newTagData, titleES: e.target.value});
		}
		if (type === 'en') {
			setNewTagData({...newTagData, titleEN: e.target.value});
		}
		if (type === 'select') {
			setNewTagData({...newTagData, bodyPart: e.target.value});
		}
	};

	const onSubmitModal = async () => {
		if (
			newTagData.bodyPart !== defaultOption &&
			newTagData.bodyPart !== '' &&
			newTagData.titleEN !== '' &&
			newTagData.titleES !== ''
		) {
			try {
				postNewTag(newTagData);
				setShowModal(!showModal);
			} catch (error) {
				console.log(error);
			}
		} else {
			// ---
		}
	};

	return (
		<MainContainer col='12' scroll>
			<Modal
				show={showModal}
				onClose={() => toggleModal({clear: true})}
				header='Crear Nuevo Tag'
			>
				<div className='d-flex flex-column'>
					<Input
						label='Nombre en Español'
						value={newTagData.titleES}
						onChange={(e) => handleInputChange({e: e, type: 'es'})}
					/>
					<Input
						label='Nombre en Inglés'
						value={newTagData.titleEN}
						onChange={(e) => handleInputChange({e: e, type: 'en'})}
					/>

					<InputSelect
						label='Categoría'
						name='categoria'
						options={bodyParts}
						value={newTagData.bodyPart}
						onChange={(e) =>
							handleInputChange({e: e, type: 'select'})
						}
						style={
							newTagData.bodyPart === defaultOption ||
							newTagData.bodyPart === ''
								? {color: 'red'}
								: {color: 'blue'}
						}
					/>
					<Button text='Guardar Tag' onClick={onSubmitModal} />
				</div>
			</Modal>

			<div className='mt-4'>
				<Button text='Nuevo Tag' onClick={toggleModal} size='3' type={2}/>
			</div>

			<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
				<div className='col-10 mb-5'>
					{tagsList.map((tag, i) => {
						return (
							<div style={{margin: '20px 0px'}} key={i}>
								<Button
									text={`${tag.titleES} - ${tag.bodyPart}`}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</MainContainer>
	);
};

export default AdminTags;
