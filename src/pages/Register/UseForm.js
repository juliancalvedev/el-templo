import { useState, useEffect } from 'react';
import { registerAction } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { HasErrors } from './RegisterValidate';

const useForm = (RegisterValidate) => {
	const [values, setValues] = useState({
		name: '',
		lastName: '',
		sex: '',
		email: '',
		password: '',
		password2: '',
		birth: '',
		country: false,
		img: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const dispatch = useDispatch();

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
		setIsSubmitting(true);
		if (!HasErrors(values)) {
			alert('ok');
		}
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			console.log(values);
		}
	}, [errors]);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
