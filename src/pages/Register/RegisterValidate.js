export const RegisterValidate = (values) => {
	const errors = {};

	if (!values.name.trim()) {
		errors.name = 'Por favor, ingresa tu nombre.';
	}
	if (!values.lastName.trim()) {
		errors.lastName = 'Por favor, ingresa tu Apellido.';
	}

	if (!values.email) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}
	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 6) {
		errors.password = 'Password needs to be 6 characters or more';
	}
	if (!values.password2) {
		errors.password2 = 'Password is required';
	} else if (values.password2 !== values.password) {
		errors.password2 = 'Password do not match';
	}

	if (!values.country) {
		errors.country = 'Por favor, ingresa tu pais.';
	}
	if (!values.birth) {
		errors.birth = 'Por favor, ingresa tu fecha de nacimiento.';
	}

	return errors;
};

export const HasErrors = (values) => {
	if (!values.name.trim()) {
		return true;
	}
	if (!values.lastName.trim()) {
		return true;
	}

	if (!values.email) {
		return true;
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		return true;
	}
	if (!values.password) {
		return true;
	} else if (values.password.length < 6) {
		return true;
	}
	if (!values.password2) {
		return true;
	} else if (values.password2 !== values.password) {
		return true;
	}

	if (!values.country) {
		return true;
	}
	if (!values.birth) {
		return true;
	}
	return false;
};
