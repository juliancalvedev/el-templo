import { useState, useEffect } from 'react';

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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(RegisterValidate(values));
		setIsSubmitting(true);
	};
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			console.log(values);
		}
	}, [errors]);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
