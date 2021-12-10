import { useState} from 'react';
import { registerAction } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { HasErrors } from './RegisterValidate';
import { useNavigate } from 'react-router-dom';
import {PATHS} from '../../constants/paths';

const useForm = (RegisterValidate) => {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		sex: '',
		email: '',
		password: '',
		password2: '',
		dateOfBirth: '',
		country: false,
		img: '',
	});
	const [errors, setErrors] = useState({});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const callback = () => navigate(`/${PATHS.EMAIL_REGISTER_SENDED}`);
	

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		const auxErrors = RegisterValidate(values);
		setErrors(auxErrors);
		
		if (!HasErrors(values)) {
				const {
					firstName,
					lastName,
					sex,
					email,
					password,
					dateOfBirth,
					country,
					img,
				} = values;
			dispatch(
				registerAction({
					firstName,
					lastName,
					sex,
					email,
					password,
					dateOfBirth,
					country,
					img,
					callback,
					
				})
			);
			
		}
	};
 
	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
