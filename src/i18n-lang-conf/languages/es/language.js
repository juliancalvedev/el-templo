const es = {
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
			passwordNotEquals: 'Las contraseñas no coinciden',
			validPassword:
				'(Debe contener al menos 6 letras y 1 número)',
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
			title: '¡Bienvenido!',
			subtitle: 'Inicia sesión para continuar',
			emailPlaceholder: 'Email',
			passwordPlaceholder: 'Contraseña',
			recovery: '¿Olvidaste tu contraseña?',
			btnLogin: 'Iniciar sesión',
			register1: '¿No tenés cuenta?',
			register2: 'Registrate acá',
		},

		emailConfirm: {
			title: 'Confirma tu email',
			p1: 'Estás a un paso de comenzar',
			p2: 'Confirma tu correo electronico, haciendo click en el enlace que enviamos, en tu bandeja de entrada o spam.',
			p3: '¿No te llegó el correo electrónico?',
			btnConfirm: 'Reenviar',
		},
		register: {
			register: 'Registro',
			firstNamePlaceholder: 'Nombre',
			lastNamePlaceholder: 'Apellido',
			sexTitle: 'Sexo',
			sex1: 'Femenino',
			sex2: 'Masculino',
			sex3: 'Otro',
			emailPlaceholder: 'Email@email.com',
			passwordPlaceholder: 'Contraseña',
			passwordRequirement: '(Debe contener al menos 6 letras y 1 numero)',
			password2Placeholder: 'Repetir contraseña',
			countrySelection: 'País',
			country1: 'Argentina',
			country2: 'USA',
			country3: 'Mexico',
			dateOfBirth: 'Fecha de nacimiento',
			btnRegister: 'Registrarme',
			termsAndConditions1: 'Al registrarse y crear su cuenta, acepta los',
			termsAndConditions2: 'Terminos y condiciones',

			//RegisterValidate:
			firstNameError: 'ingrese su nombre',
			lastNameError: 'ingrese su apellido',
			emailError: 'Email invalido',
			password1Error: 'Debe contener al menos 6 caracteres y un numero',
			password2Error: 'La contraseña no coincide',
			countryError: 'seleccione su país',
			dateOfBirthError: 'ingrese su fecha de nacimiento',
		},

		emailVerified: {
			title: 'Tu correo electrónico ha sido confirmado correctamente',
			titleError: 'El link no es válido o ha caducado.',
			auxText: 'Ya está todo listo para comenzar',
			btnNext: 'Siguiente',
		},
		enabledVerified: {
			emailNotVerified: {
				title: 'Tu cuenta aún no ha sido verificada',
				auxText:
					'Entra al link del correo electrónico que te hemos enviado y sigue los pasos',
				btnResendEmail: 'Reenviar',
				hasNotEmail: '¿No te llegó el correo electrónico?',
			},
		},
		accountNotEnabled: {
			title: 'Lo sentimos',
			subtitle: 'Tu membresía no se encuentra activa',
			description1:
				'Recuerda mantener tu cuota al día, para seguir disfrutando de todos los beneficios de “El Templo”.',
			description2: 'Ante cualquier duda, contactate con el gym.',
		},

		forgotPassword1: {
			title: '¿Olvidaste tu contraseña?',
			emailPlaceholder: 'Ingresa tu email',
			contentForgotPassword:
				'Enviaremos un email con los pasos a seguir, para cambiar tu contraseña.',
			btnAccept: 'Enviar',
		},
		forgotPassword2: {},
		passwordRecoveryForm: {
			title: 'Crea tu nueva contraseña',
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
			tellUs: 'Contanos',
			mainGoals: '¿Cuáles son tus objetivos principales?',
			'': '', // Default
			STRENGTH: 'Fuerza',
			FLEX: 'Flexibilidad',
			LOSE_WEIGHT: 'Perder peso',
			TONE_UP: 'Tonificar',
			GAIN_STAMINA: 'Ganar resistencia',
		},
		trainingLevel: {
			title: '¿Cuál es tu nivel de entrenamiento?',
			auxText: 'Esto ayudará a tu entrenador a asesorarte adecuadamente.',
			amateur: 'Amateur',
			professional: 'Profesional',
		},
		weightHeight: {
			title: 'Completa estos ultimos datos personales.',
			weight: 'Peso',
			height: 'Altura',
			kilos: 'KG',
			meters: 'MT',
			enter: 'Entrar',
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
			help: 'Ayuda',
			aboutUs: 'Sobre nosotros',
			elTemplo: 'EL TEMPLO',
			auxText1:
				'El Templo es un espacio de entrenamiento funcional y alternativo para personas entrenadas y no entrenadas.',
			auxText12:
				'Desde acrobacia libre a gimnasia deportiva, levantamiento de pesas a calistenia y movimiento natural.',

			auxText13:
				'Es un lugar de introspección y autoconocimiento que busca transmitir los pilares del cuidado y superación personal a través del entrenamiento físico y mental.',
			rectangle324: 'Cuerpo, alma, mente',
			btn1: 'Ver mas',
			mission: 'MISION Y VISION',
			auxText2:
				'El Templo tiene como Misión introducir al público a nuevos sistemas de entrenamientos, culturizar e instruir a sus integrantes en el mundo del movimiento como estilo de vida y no como compromiso social y fines puramente estéticos.',
			auxText21:
				'Ser mejores humanos a través de nuestras acciones y comportamientos.',
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
				item4: '• Prevención o tratamiento de lesiones',
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
		contact: 'Contacto',
	},
	user: {
		changeUserPassword: {
			title: 'Edición de contraseña',
			currentPassword: 'Contraseña actual',
			newPassword: 'Nueva contraseña',
			repeatNewPassword: 'Repetir contraseña nueva',
			submitPassword: 'Cambiar contraseña',
		},
		myProfile: {
			level: 'Nivel',
			completedTrainings: 'Entrenamientos realizados',
			memberSince: 'Miembro desde',
			edit: 'Editar',
			profile: 'perfil',
			editInfo: 'EDITAR',
			endEnabledDate: 'Suscripción activa hasta el día: ',
			aboutYou: 'Sobre vos',
			trainingLevel: 'Nivel de entrenamiento: ',
			goals: 'Objetivos',
			personalInfo: 'Datos personales',
			height: 'Altura',
			weight: 'Peso',
			logOut: 'Cerrar sesión',
			password: 'Cambiar contraseña',
			myProfile: 'Perfil',
		},
		trainingLevels: {
			beginner: 'Principiante',
			amateur: 'Aficionado',
			intermediate: 'Intermedio',
			advanced: 'Avanzado',
			expert: 'Experto',
		},
	},
	errors: {
		generic: 'Oops, ocurrió un error.',
		authentication: 'Email o contraseña invalidos.',
	},
};

export default es;
