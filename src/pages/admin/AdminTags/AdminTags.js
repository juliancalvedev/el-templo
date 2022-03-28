import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Modal from '../../../components/Modal/Modal';
import InputSelect from '../../../components/InputSelect/InputSelect';
import {
	deleteTag,
	getBodyParts,
	getTagsList,
	postNewTag,
	putEditedTag,
} from '../../../services/admin';
import Text from '../../../components/Text/Text';
import { useTranslation } from 'react-i18next';

const defaultOption = { value: null, name: 'default' };

const AdminTags = () => {
	const { t } = useTranslation();

	const [newTagData, setNewTagData] = useState({
		id: '',
		titleES: '',
		titleEN: '',
		bodyPart: [],
	});

	const [bodyPartsOptions, setBodyPartsOptions] = useState([]);
	const [showModalSetTag, setShowModalSetTag] = useState(false);
	const [showModalConfirmDeleteTag, setShowModalConfirmDeleteTag] =
		useState(false);

	const [confirmDeleteTag, setConfirmDeleteTag] = useState(false);
	const [tagToDelete, setTagToDelete] = useState({
		id: '',
		titleES: '',
		titleEN: '',
	});

	const [isEditingTag, setIsEditingTag] = useState(false);

	const [refreshList, setRefreshList] = useState(true);
	const [filterTags, setFilterTags] = useState('');

	const [tagsListResponse, tagsListError, apiCallGetTagsList] = useFetch({
		service: () => getTagsList(),
		globalLoader: true,
		callback: () => { },
	});

	const [bodyPartsResponse, getBodyPartsError, apiCallGetBodyParts] = useFetch({
		service: () => getBodyParts(),
		globalLoader: true,
		callback: () => {
			const aux = bodyPartsResponse?.bodyParts.map((b) => {
				return { name: b, value: b };
			});
			setBodyPartsOptions([defaultOption, ...aux]);
		},
	});

	const [newTagResponse, postNewTagError, apiCallCreateNewTag] = useFetch({
		service: () => postNewTag(newTagData),
		globalLoader: true,
		callback: () => {
			refreshListTrigger();
		},
	});

	const [editTagResponse, editTagError, apiCallEditTag] = useFetch({
		service: () => putEditedTag(newTagData),
		globalLoader: true,
		callback: () => {
			refreshListTrigger();
		},
	});

	const [deleteTagResponse, deleteTagError, apiCallDeleteTag] = useFetch({
		service: () => deleteTag(tagToDelete.id),
		globalLoader: true,
		callback: () => {
			setTagToDelete('');
			setShowModalConfirmDeleteTag(false);
			setConfirmDeleteTag(false);
			refreshListTrigger();
		},
	});

	const lang = localStorage.getItem('lang').toUpperCase();

	const refreshListTrigger = () => setRefreshList(!refreshList);

	useEffect(() => {
		apiCallGetBodyParts();
	}, []);

	useEffect(() => {
		apiCallGetTagsList();
	}, [showModalSetTag, refreshList]);

	const toggleModalCreateNewTag = (clearForm) => {
		if (clearForm) {
			setNewTagData({ titleES: '', titleEN: '', bodyPart: '' });
		}
		setShowModalSetTag(!showModalSetTag);
		if (isEditingTag) setIsEditingTag(false);
	};

	const toggleModalEditTag = (tag) => {
		setIsEditingTag(true);
		setNewTagData({
			id: tag._id,
			titleES: tag.titleES,
			titleEN: tag.titleEN,
			bodyPart: tag.bodyPart,
		});
		setShowModalSetTag(!showModalSetTag);
	};

	const handleInputChange = ({ e, type }) => {
		if (type === 'es') {
			setNewTagData({ ...newTagData, titleES: e.target.value });
		}
		if (type === 'en') {
			setNewTagData({ ...newTagData, titleEN: e.target.value });
		}
		if (type === 'select') {
			setNewTagData({ ...newTagData, bodyPart: e.target.value });
		}
		if (type === 'filter') {
			setFilterTags(e.target.value);
		}
	};

	const onSubmitFormTag = () => {
		if (
			newTagData.bodyPart !== defaultOption &&
			newTagData.bodyPart !== '' &&
			newTagData.titleEN !== '' &&
			newTagData.titleES !== ''
		) {
			try {
				if (isEditingTag) {
					apiCallEditTag();
				} else {
					apiCallCreateNewTag();
				}
				setShowModalSetTag(!showModalSetTag);
				refreshListTrigger();
			} catch (error) {
				console.log(error);
			}
		}
	};

	const actionDeleteTag = () => {
		if (confirmDeleteTag) {
			apiCallDeleteTag();
		}
	};
	useEffect(() => {
		actionDeleteTag();
	}, [confirmDeleteTag]);

	const handleDeleteTag = (tag) => {
		setTagToDelete({
			id: tag._id,
			titleEN: tag.titleEN,
			titleES: tag.titleES,
		});
		setShowModalConfirmDeleteTag(true);
	};
	const toggleConfirmDeleteTag = () => setConfirmDeleteTag(!confirmDeleteTag);

	return (
		<MainContainer col='12' navbar scroll>
			<div
				className='d-flex flex-column justify-content-start'
				style={{ height: '100vh' }}
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
							text={t('admin.tags.createNewTag')}
							onClick={toggleModalCreateNewTag}
							size='3'
							type={2}
						/>
					</div>

					<div className='col-12 d-flex justify-content-between align-items-center'>
						<div className='col-10'>
							<Input
								placeholder={t('admin.tags.filterByTagName')}
								value={filterTags}
								onChange={(e) =>
									handleInputChange({ e: e, type: 'filter' })
								}
							/>
						</div>
					</div>
				</div>
				{/* ▲▲▲▲▲▲ TopBar ▲▲▲▲▲▲ */}

				{/* ▼▼▼▼▼▼ List ▼▼▼▼▼▼ */}
				<div
					className='col-12 d-flex flex-column justify-content-center align-items-center'
					style={{ marginTop: '140px' }}
				>
					<div className='col-12 mb-5 pb-3 d-flex flex-column align-items-center'>
						{tagsListResponse?.tags
							?.filter((tag) =>
								tag[`title${lang}`]
									?.toLowerCase()
									.includes(filterTags.toLowerCase())
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
											height: '60px',
										}}
									>
										<div className='col-12 d-flex flex-row justify-content-betwen align-items-center'>
											<div
												style={{
													marginLeft: '5%',
													width: '40%',
												}}
											>
												<Text
													text={tag[`title${lang}`]}
												/>
											</div>

											<div
												style={{
													width: '25%',
												}}
											>
												<Text
													text={t(
														`admin.tags.bodyPart.${tag.bodyPart}`
													)}
												/>
											</div>

											<div style={{ width: '25%' }}>
												<Button
													text={t('admin.tags.edit')}
													size={2}
													onClick={() =>
														toggleModalEditTag(tag)
													}
												/>
											</div>

											<div style={{ width: '25%' }}>
												<Button
													text={t(
														'admin.tags.delete'
													)}
													size={2}
													type={5}
													onClick={() =>
														handleDeleteTag(tag)
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

				{/* ▼▼▼▼▼▼ Modal Set New Tag ▼▼▼▼▼▼ */}
				<Modal
					show={showModalSetTag}
					onClose={() => toggleModalCreateNewTag({ clearForm: true })}
					header={
						isEditingTag
							? t(`admin.tags.editTag`)
							: t(`admin.tags.createNewTag`)
					}
				>
					<div className='d-flex flex-column align-items-center'>
						<Input
							label={t(`admin.tags.spanishName`)}
							value={newTagData.titleES}
							onChange={(e) =>
								handleInputChange({ e: e, type: 'es' })
							}
						/>
						<Input
							label={t(`admin.tags.englishName`)}
							value={newTagData.titleEN}
							onChange={(e) =>
								handleInputChange({ e: e, type: 'en' })
							}
						/>
						<div className='w-100'>
							<InputSelect
								label={t(`admin.tags.category`)}
								name='category'
								options={bodyPartsOptions.map((part) => {
									return {
										value: part.value,
										name: t(
											`admin.tags.bodyPart.${part.name}`
										),
									};
								})}
								value={newTagData?.bodyPart}
								onChange={(e) =>
									handleInputChange({ e: e, type: 'select' })
								}
								style={
									newTagData?.bodyPart ===
										'Seleccione una categoría' ||
										newTagData?.bodyPart ===
										'Select a Category' ||
										newTagData?.bodyPart === ''
										? { color: 'red' }
										: { color: 'blue' }
								}
							/>
						</div>
						<div className='my-3 col-12'>
							<Button
								text={`${isEditingTag
									? t(`admin.tags.saveChanges`)
									: t(`admin.tags.createTag`)
									}`}
								onClick={onSubmitFormTag}
							/>
						</div>
					</div>
				</Modal>
				{/* ▲▲▲▲▲▲ Modal Create New Tag ▲▲▲▲▲▲ */}

				{/* ▼▼▼▼▼▼ Modal Delete  ▼▼▼▼▼▼ */}
				<div className='col-12'>
					<Modal
						show={showModalConfirmDeleteTag}
						onClose={() => setShowModalConfirmDeleteTag(false)}
						header={t('admin.tags.deleteTagQuestion')}
					>
						<div className='col-12 d-flex flex-column justify-content-between'>
							<div className='mb-4'>
								<Text
									text={tagToDelete[`title${lang}`]}
									size={4}
									color={5}
									bold
								/>
							</div>
							<div className='d-flex flex-column align-items-center'>
								<Button
									text={t('admin.tags.deleteTag')}
									size={3}
									type={5}
									onClick={toggleConfirmDeleteTag}
								/>
							</div>
						</div>
					</Modal>
				</div>
				{/* ▲▲▲▲▲▲ Modal Delete ▲▲▲▲▲▲ */}
			</div>
		</MainContainer>
	);
};

export default AdminTags;
