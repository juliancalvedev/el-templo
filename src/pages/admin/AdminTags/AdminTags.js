import React, {useEffect, useState} from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Modal from '../../../components/Modal/Modal';
import InputSelect from '../../../components/InputSelect/InputSelect';
import {deleteTag, getTags, postNewTag} from '../../../services/admin';
import {privateGet} from '../../../axios/privateInstance';
import Spinner from '../../../components/Spinner/Spinner';
import './AdminTags.scss';
import Text from '../../../components/Text/Text';
import ButtonRadio from '../../../components/ButtonRadio/ButtonRadio';

const AdminTags = () => {
	const [newTagData, setNewTagData] = useState({
		titleES: '',
		titleEN: '',
		bodyPart: [],
	});
	const [showModalCreateTag, setShowModalCreateTag] = useState(false);
	const [showModalConfirmDeleteTag, setShowModalConfirmDeleteTag] =
		useState(false);

	const [isLoading, setIsLoading] = useState(false);
	const [confirmDeleteTag, setConfirmDeleteTag] = useState(false);
	const [deleteId, setDeleteId] = useState('');

	const [bodyParts, setBodyParts] = useState([]);
	const [tagsList, setTagsList] = useState([]);

	const [refreshList, setRefreshList] = useState(true);
	const [filterTags, setFilterTags] = useState('');
	const defaultOption = 'Seleccione Categoría';

	const tableStyles = (tag) => {
		return `col-12 d-flex flex-row justify-content-center ${
			tag.bodyPart === 'upper' && 'upperColor'
		} ${tag.bodyPart === 'middle' && 'middleColor'} ${
			tag.bodyPart === 'bottom' && 'bottomColor'
		}`;
	};

	const refreshListTrigger = () => setRefreshList(!refreshList);

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
	}, [showModalCreateTag, refreshList]);

	const toggleModalCreateNewTag = (clearForm) => {
		if (clearForm) {
			setNewTagData({titleES: '', titleEN: '', bodyPart: ''});
		}
		setShowModalCreateTag(!showModalCreateTag);
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

	const onSubmitCreateNewTag = async () => {
		if (
			newTagData.bodyPart !== defaultOption &&
			newTagData.bodyPart !== '' &&
			newTagData.titleEN !== '' &&
			newTagData.titleES !== ''
		) {
			setIsLoading(true);
			try {
				await postNewTag(newTagData);
				setShowModalCreateTag(!showModalCreateTag);
				refreshListTrigger();
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	const actionDeleteTag = async () => {
		setIsLoading(true);
		if (confirmDeleteTag) {
			try {
				await deleteTag(deleteId);
				setDeleteId('');
				setShowModalConfirmDeleteTag(false);
				setConfirmDeleteTag(false);
				refreshListTrigger();
			} catch (error) {
				console.log(error);
			}
		}
		setIsLoading(false);
	};

	useEffect(() => {
		actionDeleteTag();
	}, [confirmDeleteTag]);

	const handleDeleteTag = async (id) => {
		setDeleteId(id);
		setShowModalConfirmDeleteTag(true);
	};
	const toggleConfirmDeleteTag = () => setConfirmDeleteTag(!confirmDeleteTag);

	return (
		<MainContainer col='12' scroll>
			<div
				className='d-flex flex-column justify-content-start'
				style={{height: '100vh'}}
			>
				{/* ▼▼▼▼▼▼ TopBar ▼▼▼▼▼▼ */}
				<div
					style={{
						position: 'fixed',
						top: 0,
						width: '100%',
						maxWidth: '800px',
						backgroundColor: 'rgba(11,11,11,.5)',
					}}
				>
					<div className='mt-4'>
						<Button
							text='Nuevo Tag'
							onClick={toggleModalCreateNewTag}
							size='3'
							type={2}
						/>
					</div>

					<div className='col-10 d-flex'>
						<Input
							placeholder='Filtrar por nombre de tag'
							value={filterTags}
							onChange={(e) =>
								handleInputChange({e: e, type: 'filter'})
							}
						/>
						<input type='checkbox' />
						
					</div>
				</div>
				{/* ▲▲▲▲▲▲ TopBar ▲▲▲▲▲▲ */}

				{/* ▼▼▼▼▼▼ List ▼▼▼▼▼▼ */}
				<div
					className='col-12 d-flex flex-column justify-content-center align-items-center'
					style={{marginTop: '140px'}}
				>
					<div className='col-12 mb-5 pb-3 d-flex flex-column align-items-center'>
						{tagsList
							?.filter(
								(tag) =>
									tag.titleES
										?.toLowerCase()
										.includes(filterTags.toLowerCase()) ||
									tag.titleEN
										?.toLowerCase()
										.includes(filterTags.toLowerCase())
							)
							?.map((tag) => {
								return (
									<div
										key={tag._id}
										className={
											true
												? tableStyles(tag)
												: 'col-12 d-flex flex-row justify-content-center'
										}
										style={{
											borderBottom: '1px solid black',
											boxShadow:
												'0 4px 12px -2px rgba(11,11,11,.3)',
											height: '60px',
										}}
									>
										<div className='col-12 d-flex flex-row justify-content-betwen align-items-center'>
											<div
												style={{
													marginLeft: '5%',
													width: '25%',
												}}
											>
												<Text text={tag.titleES} />
											</div>

											<div
												style={{
													width: '25%',
												}}
											>
												<Text text={tag.bodyPart} />
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
													onClick={() =>
														handleDeleteTag(tag._id)
													}
												/>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
				{/* ▲▲▲▲▲▲ List ▲▲▲▲▲▲ */}

				{/* ▼▼▼▼▼▼ Modal Create New Tag ▼▼▼▼▼▼ */}
				<Modal
					show={showModalCreateTag}
					onClose={() => toggleModalCreateNewTag({clearForm: true})}
					header='Crear Nuevo Tag'
				>
					<div className='d-flex flex-column align-items-center'>
						{isLoading && <Spinner />}
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
						<div className='w-100'>
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
						</div>
						<Button
							text='Guardar Tag'
							onClick={onSubmitCreateNewTag}
						/>
					</div>
				</Modal>
				{/* ▲▲▲▲▲▲ Modal Create New Tag ▲▲▲▲▲▲ */}

				{/* ▼▼▼▼▼▼ Modal Delete  ▼▼▼▼▼▼ */}
				<div className='col-12'>
					<Modal
						show={showModalConfirmDeleteTag}
						onClose={() => setShowModalConfirmDeleteTag(false)}
						header='¿Eliminar Tag?'
					>
						<div className='d-flex flex-column align-items-center'>
							{isLoading && (
								<div className='pb-4'>
									<Spinner />
								</div>
							)}
							<Button
								text={'Eliminar Tag'}
								size={3}
								type={5}
								onClick={toggleConfirmDeleteTag}
							/>
						</div>
					</Modal>
				</div>
				{/* ▲▲▲▲▲▲ Modal Delete ▲▲▲▲▲▲ */}
			</div>
		</MainContainer>
	);
};

export default AdminTags;
