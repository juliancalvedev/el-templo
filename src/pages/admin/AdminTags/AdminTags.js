import React, {useEffect, useState} from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Modal from '../../../components/Modal/Modal';
import InputSelect from '../../../components/InputSelect/InputSelect';
import {getBodyParts, postNewTag} from '../../../services/admin';
import {useDispatch} from 'react-redux';
import {getBodyPartsAction} from '../../../redux/user';
import {privateGet} from '../../../axios/privateInstance';

const AdminTags = () => {
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);
	const [newTagData, setNewTagData] = useState({
		titleES: '',
		titleEN: '',
		bodyPart: 'Seleccione Categoría',
	});
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const getBodyParts = async () => {
			try {
				const {data} = await privateGet({url: `/public/body-parts`});
				setBodyParts(data.data.bodyParts);
			} catch (error) {
				return error;
			}
		};
		getBodyParts();
	}, []);

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
		console.log(newTagData);
		// try{
		// postNewTag(newTagData)
		// }catch(error){
		//    console.log(error)
		// }
	};

	return (
		<MainContainer col='12'>
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
					// TODO arreglar el Default del Select.
					<InputSelect
						label='Categoría'
						name='categoria'
						options={bodyParts}
						value={newTagData.bodyPart}
						onChange={(e) =>
							handleInputChange({e: e, type: 'select'})
						}
					/>
					<Button text='Guardar Tag' onClick={onSubmitModal} />
				</div>
			</Modal>

			<div>
				<Button text='Nuevo Tag' onClick={toggleModal} />
			</div>
		</MainContainer>
	);
};

export default AdminTags;
