export default {
	global: {
		language: 'Lenguaje',
		spanish: 'ES',
		english: 'EN',
		next: 'Siguiente',
		continue: 'Continuar',
		finish: 'Terminar',
		cancel: 'Cancelar',
		copy: 'Copiar',
		edit: 'Editar',
		goBack: 'Volver',
		gotIt: '¡Entendido!',
		close: 'Cerrar',
		confirm: 'Confirmar',
		enable: 'Habilitar',
		disable: 'Deshabilitar',
		reject: 'Rechazar',
		verify: 'Verificar',
		download: 'Descargar',
		delete: 'Eliminar',
		search: 'Buscar',
		signOut: 'Cerrar sesión',
		logIn: 'Iniciar sesión',
		password: 'contraseña',
		loading: 'Cargando...',

		errors: {
			required: 'Este campo es requerido.',
			emailType: 'Debe ser un email válido.',
			passwordNotEquals: 'Las contraseñas deben ser iguales.',
			validPassword: 'La contraseña no es válida.',
			notAllowedEmail: 'Email no permitido.',
			number: 'Este campo debe ser un número.',
			text: 'Este campo deber ser un texto.',
		},
	},

	auth: {
		landing: {
			haveAccount: '¿Ya tenés cuenta?',
			btnLogin: 'Iniciar sesión',
			btnRegister: 'Registrarme',
		},

		login: {
			title: 'Login',
			emailPlaceholder: 'correo@correo.com',
			passwordPlaceholder: 'Contraseña',
			recovery: '¿Olvidaste tu contraseña?',
			btnLogin: 'Iniciar sesión',
		},

		emailConfirm: {
			title: 'Confirma tu email',
			p1: 'Estás a un paso de comenzar',
			p2: 'Confirma tu correo electronico haciendo click en el enlace que enviamos, en tu bandeja de entrada.',
			p3: 'No te ha llegado? Haz click aquí',
			btnConfirm: 'Reenviar correo electronico',
		},
		register: {
			title: 'Registro',
			firstNamePlaceholder: 'Nombre',
			lastNamePlaceholder: 'Apellido',
			sex1: 'Masculino',
			sex2: 'Femenino',
			sex3: 'Otro',
			emailPlaceholder: 'email@gmail.com',
			passwordPlaceholder: 'Contraseña',
			password2Placeholder: 'Repita su contraseña',
			countrySelection: 'Seleccione un país',
			country1: 'Argentina',
			country2: 'USA',
			country3: 'Mexico',
			dateOfBirth: 'Fecha de nacimiento',
			btnRegister: 'Registrarse',

			//RegisterValidate:
			firstNameError: 'Por favor, ingrese su nombre',
			lastNameError: 'Por favor, ingrese su apellido',
			emailError: 'Email invalido',
			password1Error: 'La contraseña debe tener 6 caracteres o más',
			password2Error: 'La contraseña no coincide',
			countryError: 'Por favor, seleccione su país',
			dateOfBirthError: 'por favor, ingrese su fecha de nacimiento',
		},

		emailVerified: {
			title: 'Tu E-mail ha sido verificado correctamente.',
			titleError: 'El link no es válido o ha caducado.',
			auxText: 'Todo listo para comenzar!',
			btnNext: 'Siguiente',
		},
		enabledVerified: {
			emailNotVerified: {
				title: 'Tu cuenta aún no ha sido verificada.',
				auxText:
					'Entra al Link que te hemos enviado al email. Y sigue los pasos.',
				btnResendEmail: 'Reenviar correo electrónico',
			},
			accountNotEnabled: {
				title: 'Tu cuenta no se encuentra habilitada',
				auxText:
					'Por favor, ponete en contacto con "El Templo" para más información.',
				btnBack: 'volver',
			},
		},

		forgotPassword1: {
			title: 'Olvidaste tu contraseña?',
			emailPlaceholder: 'Email@email.com',
			btnAccept: 'Aceptar',
		},
		forgotPassword2: {},
		passwordRecoveryForm: {
			title: 'Crear nueva contraseña',
			newPassword: 'Nueva contraseña',
			repeatNewPassword: 'Repite nueva contraseña',
			btnUpdatePassword: 'Actualizar contraseña',
		},
	},
	welcome: {
		main: {
			title: 'Bienvenido a El Templo',
			hello: '¡Hola',
			auxText:
				'Antes de seguir, necesitamos conocerte un poco más, así podremos personalizar tu plan a medida.',
			btnLetsBegin: '¡Empecemos!',
		},
		goals: {
			'': '', // Default
			STRENGTH: 'Fuerza',
			FLEX: 'Flexibilidad',
			LOSE_WEIGHT: 'Perder peso',
			TONE_UP: 'Tonificar',
			GAIN_STAMINA: 'Ganar resistencia',
		},
	},
	profile: {
		profile: {},
		editProfile: {},
		editPassword: {},
	},


	training: {
		leveling: {},
		levelingExercise: {},
		yourResults: {},
		result: {},
		training: {},
		warmUpRoutine: {},
		trainingRoutine: {},
		countdown: {},
		liveTraining: {},
		pause: {},
		exerciseInfo: {},
		finishTraining: {},
		questionary: {},
	},

	appStart: {
		animation: {},
		incompleteDashboard: {},
		completedDashboard: {},
	},
	help: {
		main: {
			aboutUs: 'Sobre nosotros',
			elTemplo: 'EL TEMPLO',
			auxText1:
				'El Templo es un espacio de entrenamiento funcional y alternativo para personas entrenadas y no entrenadas.Desde acrobacia libre a gimnasia deportiva, levantamiento de pesas a calistenia y movimiento natural.Es un lugar de introspección y autoconocimiento que busca transmitir los pilares del cuidado y superación personal a través del entrenamiento físico y mental.',
			rectangle324: 'Cuerpo,alma,mente',
			btn1: 'Ver mas',
			mission: 'MISION Y VISION',
			auxText2:
				'El Templo tiene como Misión introducir al público a nuevos sistemas de entrenamientos, culturizar e instruir a sus integrantes en el mundo del movimiento como estilo de vida y no como compromiso social y fines puramente estéticos. Ser mejores humanos a través de nuestras acciones y comportamientos.',
			accordionText1: '¿Tienes dudas sobre tu entrenamiento?',
			accordionInside1: 'Contacta al coach',
			accordionInside2: 'Asunto:',
			accordionInside3: 'Mensaje:',
			btnSend: 'Enviar',
			accordionText2: '¿Tienes dudas sobre cómo funciona la app?',
			btn2: 'Terminos y condiciones',
			btn3: 'Contacto',
			accordionTextBlue1: '¿Cuáles son los objetivos del programa ?',
			accordionTextBlue2: '¿Cuándo subo de nivel?',
			accordionTextBlue3:
				'¿Qué estará contemplado dentro de un entrenamiento diario?',
			accordionTextBlue4:
				'¿Qué nivel de preparación física se necesita para realizarlo?',
			auxText3: {
				item1: '•Desarrollo de capacidades básicas de la fuerza (explosiva, potencia, máxima, resistencia).',
				item2: '• Desarrollo de capacidades básicas de la flexibilidad (Pasiva, activa, dinámica).',
				item3: '• Aumento de eficiencia biomecánica.',
				item4:'• Prevención o tratamiento de lesiones',
				item5: '• Mejora en el rendimiento deportivo. ',
				item6: '• Aumento del conocimiento en relación al movimiento.',
			},
			faqs: 'FAQS',
			fq: 'Preguntas frecuentes',
		},
	},
	navbar: {
		nav: {
			myProfile: 'Mi perfil',
			dashboard: 'Tablero',
			help: 'Ayuda',
			training: 'Entrenamiento',
			users: 'Usuarios',
		},
	},
	topBar: {
		main: 'El Templo',
		usersList: 'Usuarios',
		changeUserPassword: 'Cambiar Contraseña',
		login: 'Iniciar Sesión',
		passwordRecovery: 'Recuperar Contraseña',
		forgottenPassword: '¿Olvidaste tu Contraseña?',
		verifyEmail: 'Verificar Email',
		enabledVerified: 'Comprobando Cuenta',
		register: 'Registro',
		emailRegisterSended: 'Confirma tu Email',
		myProfile: 'Mi perfil',
		help: 'Ayuda',
		emailRegisterSended: 'Confirma tu Email',
	},
	user: {
		changeUserPassword: {
			title: 'Editar contraseña',
			currentPassword: 'Contraseña actual',
			newPassword: 'Nueva contraseña',
			repeatNewPassword: 'Repetir contraseña nueva',
			submitPassword: 'Cambiar contraseña',
		},
		myProfile:{
			level: 'Nivel',
			completedTrainings: 'Entrenamientos realizados',
			memberSince: 'Miembro desde',
			editProfile: 'Editar perfil',
			editInfo: 'EDITAR',
			endEnabledDate: 'Suscripción activa hasta el día ',
			aboutYou: 'Sobre vos',
			trainingLevel: 'Nivel de entrenamiento',
			goals: 'Objetivos',
			personalInfo: 'Datos personales',
			height: 'Altura',
			weight: 'Peso',
			logOut: 'Cerrar sesión',
			password: 'Password'
		},
	},
};
