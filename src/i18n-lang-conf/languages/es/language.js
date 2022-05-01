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
		total: 'Total',
		time: 'Tiempo',
		create: 'Crear',

		errors: {
			required: 'Este campo es requerido.',
			emailType: 'Debe ser un email válido.',
			passwordNotEquals: 'Las contraseñas no coinciden',
			validPassword: '(Debe contener al menos 6 letras y 1 número)',
			notAllowedEmail: 'Email no permitido.',
			number: 'Este campo debe ser un número.',
			text: 'Este campo deber ser un texto.',
		},
	},

	month: {
		january: 'Enero',
		february: 'Febrero',
		march: 'Marzo',
		april: 'Abril',
		may: 'Mayo',
		june: 'Junio',
		july: 'Julio',
		august: 'Agosto',
		september: 'Septiembre',
		october: 'Octubre',
		november: 'Noviembre',
		december: 'Diciembre',
	},
	daysShort: {
		Mon: 'L',
		Tue: 'M',
		Wed: 'MI',
		Thu: 'J',
		Fri: 'V',
		Sat: 'S',
		Sun: 'D',
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
			level1: 'No entreno nunca',
			level2: 'Entreno muy de vez en cuando',
			level3: 'Entreno semanalmente',
			level4: 'Entreno seguido',
			level5: 'Entreno profesionalmente',
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
		countDown: {
			getReady: 'Preparate',
		},
		liveTraining: {},
		pause: {},
		exerciseInfo: {},
		finishTraining: {},
		questionary: {},
	},

	exercise: {
		exerciseNumber: 'Ejercicio n°',
		watchVideoDescription: 'Ver descripción del video',
		nextExercise: 'SIGUIENTE EJERCICIO',
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
	dashboard: {
		main: {
			welcome: 'Bienvenido',
			level: 'Nivel',
			summary: 'Resumen de mi progreso',
			see: 'VER DETALLE',
			progress:
				'A medida que avances en tus entrenamientos, acá se van a ver tus progresos.',
			btn: 'Comenzar a entrenar',
		},
	},
	navbar: {
		nav: {
			myProfile: 'Mi perfil',
			dashboard: 'Tablero',
			help: 'Ayuda',
			training: 'Entrenamiento',
			users: 'Usuarios',
			admin: 'Admin',
		},
	},
	adminBar: {
		users: 'Usuarios',
		exercises: 'Ejercicios',
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
			password: 'Contraseña',
			myProfile: 'Perfil',
		},
		trainingLevels: {
			beginner: 'Principiante',
			amateur: 'Aficionado',
			intermediate: 'Intermedio',
			advanced: 'Avanzado',
			expert: 'Experto',
		},
		nivelation: {
			paragraph:
				'Para adaptar el plan a tu nivel, realiza los siguientes ejercicios. completa la cantidad de repeticiones que puedas',
			nivelation: 'Nivelación',
		},
		newLevel: {
			title: '¡Felicitaciones!',
			subtitle: 'Tu nivel es',
			button: 'Ir a mi entrenamiento',
		},
	},
	admin: {
		tags: {
			deleteTag: 'Eliminar Tag',
			deleteTagQuestion: '¿Eliminar Tag?',
			edit: 'Editar',
			delete: 'Eliminar',
			filterByTagName: 'Filtrar por nombre de Tag',
			createNewTag: 'Crear Tag',
			editTag: 'Editar Tag',
			createTag: 'Crear Tag',
			saveChanges: 'Guardar Cambios',
			category: 'Categoría',
			englishName: 'Nombre en Inglés',
			spanishName: 'Nombgre en Español',
			bodyPart: {
				default: 'Seleccione una categoría',
				upper: 'Superior',
				middle: 'Medio',
				bottom: 'Inferior',
			},
		},
		userTable: {
			email: 'Email',
			name: 'Nombre',
			sex: 'Sexo',
			country: 'País',
			enabled: 'Habilitado',
			level: 'Nivel',
			enabledDate: 'Fecha Alta',
			disabledDate: 'Fecha Baja',
			options: 'Opciones'
		},
		exercises: {
			video: 'Video',
			spanishName: 'Nombre en Español',
			spanishDescription: 'Descripción en Español',
			englishName: 'Nombre en Inglés',
			englishDescription: 'Descripción en Inglés',
			tags: 'Tags',
			minOneTag: 'Por favor, establezca al menos un Tag.',
			loadingTags: 'Cargando Tags...',
			reviewFields: 'Por favor, asegúrese que todos los campos estén completos.',
			createExercise: 'Crear Ejercicio',
			saveChanges: 'Guardar Cambios',
			createNewExercise: 'Crear Nuevo Ejercicio',
			editExercise: 'Editar Ejercicio',
			loadingTags: 'Cargando Tags...'
		},
		adminConfig: {
			index: 'Administrar entrenamientos',
			adminExercises: 'Administrar ejercicios',
			adminTags: 'Administrar etiquetas',
			adminLevels: 'Administrar niveles',
		},
		adminExercises: {
			index: 'Administrar ejercicios',
			createExercise: 'Nuevo ejercicio'
		},
		adminTags: {
			index: 'Administrar etiquetas',
			createTag: 'Nueva Etiqueta'

		},
		adminLevels: {
			index: 'Administrar niveles',
			selectLevel: 'Seleccione un nivel',
		},
		nivelation: {
			index: 'Nivelacion'
		},
		usersList: {
			index: 'Administrar usuarios'
		},
		routines: {
			level: 'Nivel',
			block: 'Bloque',
			day: 'Día',
			adaptation1: 'Adaptación 1',
			adaptation2: 'Adaptación 2',
			strength: 'Fuerza',
			hypertrophy: 'Hipertrofia',
			suplementary: 'Suplementario',
			reps: 'Reps',
			times: 'Veces',
			saveRoutine: 'Guardar Rutina'
		},

	},
	errors: {
		generic: 'Oops, ocurrió un error.',
		authentication: 'Email o contraseña invalidos.',
	},
};

export default es;
