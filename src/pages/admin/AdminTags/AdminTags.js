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
	const [refreshList, setRefreshList] = useState(true);
	const [filterTags, setFilterTags] = useState('');
	const defaultOption = 'Seleccione Categoría';

	console.log(filterTags);

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
	}, [refreshList]);

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
		if (type === 'filter') {
			setFilterTags(e.target.value);
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
				setRefreshList(!refreshList);
			} catch (error) {
				console.log(error);
			}
		} else {
			// ---
		}
	};

	return (
		<MainContainer col='12' scroll>
			<div
				className='d-flex flex-column justify-content-start'
				style={{height: '100vh'}}
			>
				<Modal
					show={showModal}
					onClose={() => toggleModal({clear: true})}
					header='Crear Nuevo Tag'
				>
					<div className='d-flex flex-column'>
						<Input
							label='Nombre en Español'
							value={newTagData.titleES}
							onChange={(e) =>
								handleInputChange({e: e, type: 'es'})
							}
						/>
						<Input
							label='Nombre en Inglés'
							value={newTagData.titleEN}
							onChange={(e) =>
								handleInputChange({e: e, type: 'en'})
							}
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

				<div
					style={{
						position: 'fixed',
						top: 0,
						width: ' 100%',
						backgroundColor: 'rgba(11,11,11,.5)',
					}}
				>
					<div className='mt-4'>
						<Button
							text='Nuevo Tag'
							onClick={toggleModal}
							size='3'
							type={2}
						/>
					</div>

					<div className='col-10'>
						<Input
							placeholder='Filtrar por nombre de tag'
							value={filterTags}
							onChange={(e) =>
								handleInputChange({e: e, type: 'filter'})
							}
						/>
					</div>
				</div>

				<div
					className='col-12 d-flex flex-column justify-content-center align-items-center'
					style={{marginTop: '140px'}}
				>
					<div className='col-12 mb-5 pb-3 d-flex flex-column align-items-center'>
						{tagsList
							?.filter((tag) =>
								tag.titleES?.includes(filterTags.toLowerCase()) ||
								tag.titleES?.includes(filterTags.toUpperCase())
							)
							?.map((tag) => {
								return (
									<div
										key={tag._id}
										className='col-12 d-flex flex-row justify-content-center'
										style={{
											borderBottom: '1px solid black',
											boxShadow:
												'0 4px 12px -2px rgba(11,11,11,.3)',
										}}
									>
										<div className='col-12 d-flex flex-row justify-content-betwen align-items-center'>
											<div
												style={{
													paddingTop: '6%',
													marginLeft: '10%',
													width: '25%',
												}}
											>
												<p>{tag.titleES}</p>
											</div>

											<div
												style={{
													paddingTop: '6%',
													width: '25%',
												}}
											>
												<p>{tag.bodyPart}</p>
											</div>

											<div style={{width: '25%'}}>
												<Button
													text={'Editar'}
													size={2}
												/>
											</div>

											<div style={{width: '25%'}}>
												<Button
													text={'Borrar'}
													size={2}
													type={5}
												/>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default AdminTags;
