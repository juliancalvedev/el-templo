const en = {
	global: {
		language: 'Language',
		spanish: 'ES',
		english: 'EN',
		next: 'Next',
		continue: 'Continue',
		finish: 'Finish',
		cancel: 'Cancel',
		copy: 'Copy',
		edit: 'Edit',
		goBack: 'Back',
		gotIt: 'Got it!',
		close: 'Close',
		confirm: 'Confirm',
		enable: 'Enable',
		disable: 'Disable',
		reject: 'Reject',
		verify: 'Verify',
		download: 'Download',
		delete: 'Delete',
		search: 'Search',
		signOut: 'Sing Out',
		logIn: 'Log In',
		password: 'Password',
		loading: 'Loading...',
		total: 'Total',
		time: 'Time',

		errors: {
			required: 'This field is required.',
			emailType: 'Use a valid e-mail.',
			passwordNotEquals: 'Passwords must be equals.',
			validPassword: 'Password is not valid.',
			notAllowedEmail: 'Email is not Valid.',
			number: 'Must be a number.',
			text: 'Must be a text.',
		},
	},

	month: {
		january: 'January',
		february: 'February',
		march: 'March',
		april: 'April',
		may: 'May',
		june: 'June',
		july: 'July',
		august: 'August',
		september: 'September',
		october: 'October',
		november: 'November',
		december: 'December',
	},
	daysShort: {
		Mon: 'M',
		Tue: 'T',
		Wed: 'W',
		Thu: 'X',
		Fri: 'F',
		Sat: 'S',
		Sun: 'X',
	},

	auth: {
		landing: {
			haveAccount: 'Have an account?',
			btnLogin: 'Log In',
			btnRegister: 'Register',
		},

		login: {
			title: 'Welcome',
			subtitle: 'Login to continue',
			emailPlaceholder: 'Email',
			passwordPlaceholder: 'Password',
			recovery: 'Forgotten password?',
			btnLogin: 'Log In',
			register1: 'you have not an account?',
			register2: 'Register here',
		},
		emailConfirm: {
			title: 'Confirm your email',
			p1: 'you are one step away from starting',
			p2: 'Confirm your email by clicking on the link we sent, in your inbox.',
			p3: "Hasn't it reached you? Click here",
			btnConfirm: 'Resend email',
		},
		register: {
			register: 'Register',
			firstNamePlaceholder: 'Name',
			lastNamePlaceholder: 'Last Name',
			sexTitle: 'Sex',
			sex1: 'Female',
			sex2: 'Male',
			sex3: 'Other',
			emailPlaceholder: 'Email@email.com',
			passwordPlaceholder: 'Password',
			passwordRequirement:
				'(Must contain at least 6 letters and 1 number)',
			password2Placeholder: 'Confirm Your Password',
			countrySelection: 'Country',
			country1: 'Argentina',
			country2: 'USA',
			country3: 'Mexico',
			dateOfBirth: 'Date of birth',
			btnRegister: 'Register',
			termsAndConditions1:
				'By registering and creating your account, you agree to the',
			termsAndConditions2: 'Terms and conditions',

			//RegisterValidate:
			firstNameError: 'Enter your name',
			lastNameError: 'Enter your last name',
			emailError: 'Email address is invalid',
			password1Error: 'Must contain at least 6 characters and a number',
			password2Error: 'Password do not match',
			countryError: 'Select your Country.',
			dateOfBirthError: 'Enter your date of birth',
		},

		emailVerified: {
			title: 'Your E-mail has been correctly verified.',
			titleError: 'The link is invalid or has expired. ',
			auxText: "Everything ready, let's go!",
			btnNext: 'Next',
		},
		enabledVerified: {
			emailNotVerified: {
				title: 'Your account has not been verified yet',
				auxText:
					'Enter the Link that we have sent you to the email and follow the steps',
				btnResendEmail: 'Resend',
				hasNotEmail: 'The Email has not arrived?',
			},
		},
		accountNotEnabled: {
			title: 'We are sorry',
			subtitle: 'your membership is not active',
			description1:
				'Remember to keep your quota up to date, to continue enjoying all the benefits of "El Templo".',
			description2: 'If you have any questions, contact the gym.',
		},

		onboard1: {},
		onboard2: {},
		forgotPassword1: {
			title: '¿Did you forget your password?',
			emailPlaceholder: 'Enter your email',
			contentForgotPassword:
				'We will send an email with the steps to follow to change your password.',
			btnAccept: 'Send',
		},
		forgotPassword2: {},
		passwordRecoveryForm: {
			title: 'Create new password',
			newPassword: 'New password',
			repeatNewPassword: 'Repeat new password',
			btnUpdatePassword: 'Update password',
		},
	},
	welcome: {
		main: {
			title: "Welcome to 'El Templo'",
			hello: 'Hello',
			auxText:
				'Before continuing, we need to know you a little more, so we can customize your plan to suit you.',
			btnLetsBegin: "Let's begin",
		},
		goals: {
			tellUs: 'Tell Us',
			mainGoals: 'What are your main goals?',
			'': '', // Default
			STRENGTH: 'Strength',
			FLEX: 'Flex',
			LOSE_WEIGHT: 'Lose weight',
			TONE_UP: 'Tone up',
			GAIN_STAMINA: 'Gain stamina',
		},
		trainingLevel: {
			title: "What's your current training level?",
			auxText: 'This will help your coach to advise you properly.',
			amateur: 'Amateur',
			professional: 'Professional',
		},
		weightHeight: {
			title: 'Complete the last personal data.',
			weight: 'Weight',
			height: 'Height',
			kilos: 'KG',
			meters: 'MT',
			enter: 'Enter',
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
			getReady: 'Get Ready',
		},
		liveTraining: {},
		pause: {},
		exerciseInfo: {},
		finishTraining: {},
		questionary: {},
	},

	exercise: {
		exerciseNumber: 'Exercise n°',
		watchVideoDescription: 'See video description',
		nextExercise: 'NEXT EXERCISE',
	},

	appStart: {
		animation: {},
		incompleteDashboard: {},
		completedDashboard: {},
	},
	help: {
		main: {
			help: 'Help',
			aboutUs: 'About us',
			elTemplo: 'El Templo',
			auxText1:
				'The Temple is a functional and alternative training space for trained and untrained people.',
			auxText12:
				'From free acrobatics to gymnastics, weightlifting to calisthenics and natural movement.',
			auxText13:
				'It is a place of introspection and self-knowledge that seeks to transmit the pillars of personal care and improvement through physical and mental training.',
			rectangle324: 'Body, soul, mind',
			btn1: 'See more',
			mission: 'MISSION & VISION',
			auxText2:
				'The Mission of El Templo is to introduce the public to new training systems, to cultivate and instruct its members in the world of movement as a lifestyle and not as a social commitment and purely aesthetic purposes.',
			auxText21: ' Be better humans through our actions and behaviors.',
			accordionText1: 'Do you have questions about your training?',
			accordionInside1: 'Contact the coach',
			accordionInside2: 'Matter:',
			accordionInside3: 'Message:',
			btnSend: 'Send',

			accordionText2: 'Do you have questions about how the app works?',
			btn2: 'Terms & conditions',
			btn3: 'Contact',
			accordionTextBlue1: 'What are the objectives of the program ?',
			accordionTextBlue2: 'When do I level up?',
			accordionTextBlue3: 'What will be included in a daily training?',
			accordionTextBlue4:
				'What level of physical preparation is needed to do it?',
			auxText3: {
				item1: '• Development of basic strength capabilities (explosive, power, maximum, resistance).',
				item2: '• Development of basic flexibility capabilities (passive, active, dynamic).',
				item3: '• Increased biomechanical efficiency.',
				item4: '• Prevention or treatment of injuries.',
				item5: '• Improvement in the sports performance.',
				item6: '• Increased knowledge in relation to movement. ',
			},
			faqs: 'FAQS',
			fq: 'Frequent questions',
		},
	},
	dashboard: {
		main: {
			welcome: 'Welcome',
			level: 'Level ',
			summary: 'progress summary',
			see: 'SEE DETAIL',
			progress:
				'As you progress in your workouts, your progress will be seen here.',

			btn: 'Start training',
		},
	},
	navbar: {
		nav: {
			myProfile: 'My profile',
			dashboard: 'Dashboard',
			help: 'Help',
			training: 'Training',
			users: 'Users',
			admin: 'Admin',
		},
	},
	adminBar: {
		users: 'Users',
		exercises: 'Exercises',
	},
	topBar: {
		main: 'El Templo',
		usersList: 'Users',
		changeUserPassword: 'Change Password',
		login: 'Log In',
		passwordRecovery: 'Password Recovering',
		forgottenPassword: 'Forgot you Password?',
		verifyEmail: 'Verify Email',
		enabledVerified: 'Checking Account',
		register: 'Register',
		emailRegisterSended: 'Confirm Email',
		myProfile: 'My Profile',
		help: 'Help',
		contact: 'Contact',
	},
	user: {
		changeUserPassword: {
			title: 'Edit password',
			currentPassword: 'Current password',
			newPassword: 'New password',
			repeatNewPassword: 'Repeat New Password',
			submitPassword: 'Change Password',
		},
		myProfile: {
			level: 'Level',
			completedTrainings: 'Completed Trainings',
			memberSince: 'Member since',
			edit: 'Edit',
			profile: 'profile',
			editInfo: 'Edit',
			endEnabledDate: 'Subscription active until: ',
			aboutYou: 'About you',
			trainingLevel: 'Training level: ',
			goals: 'Goals',
			personalInfo: 'Personal info',
			height: 'Height',
			weight: 'Weight',
			logOut: 'Log out',
			password: 'Password',
			myProfile: 'Profile',
		},
		trainingLevels: {
			beginner: 'Beginner',
			amateur: 'Amateur',
			intermediate: 'Intermediate',
			advanced: 'Advanced',
			expert: 'Expert',
		},
		nivelation: {
			paragraph:
				'To adapt the plan to your level, perform the following exercises. complete as many reps as you can.  ',
			nivelation: 'Nivelation',
		},
		newLevel: {
			title: 'Congratulations!',
			subtitle: 'Your level is',
			button: 'Go to my training',
		},
	},
	admin: {
		tags: {
			deleteTag: 'Delete Tag',
			deleteTagQuestion: 'Delete Tag?',
			edit: 'Edit',
			delete: 'Delete',
			filterByTagName: 'Filter by Tag name',
			createNewTag: 'Create Tag',
			editTag: 'Edit Tag',
			createTag: 'Create Tag',
			saveChanges: 'Save Changes',
			category: 'Category',
			englishName: 'English Name',
			spanishName: 'Spanish Name',
			bodyPart: {
				default: 'Select a Category',
				upper: 'Upper',
				middle: 'Middle',
				bottom: 'Bottom',
			},
		},
		userTable: {
			email: 'Email',
			name: 'Name',
			sex: 'Sex',
			country: 'Country',
			enabled: 'Enabled',
			level: 'Level',
			enabledDate: 'Enabled Date',
			disabledDate: 'Disabled Date',
			options: 'Options'
		},
		exercises: {
			video: 'Video',
			spanishName: 'Spanish Name',
			spanishDescription: 'Spanish Description',
			englishName: 'English Name',
			englishDescription: 'English Description',
			tags: 'Tags',
			minOneTag: 'Please, choise at less one Tag',
			loadingTags: 'Loading Tags...',
			reviewFields: 'Please, check all fields.',
			createExercise: 'Create Exercise',
			saveChanges: 'Save Changes',
			createNewExercise: 'Create New Exercise',
			editExercise: 'Edit Exercise',
		},
		adminConfig: {
			index: 'Manage trainings',
			adminExercises: 'Manage the exercises',
			adminTags: 'Manage the tags',
			adminLevels: 'Manage the levels',
		},
		adminExercises: {
			index: 'Manage the exercises',
			createExercise: 'Create new exercise'
		},
		adminTags: {
			index: 'Manage the tags',
			createTag: 'Create tag',
		},
		adminLevels: {
			index: 'Manage the levels',
			selectLevel: 'Select level',
		},
		usersList: {
			index: 'Manage users'
		},
		nivelation: {
			index: 'Nivelation'
		},
		routines: {
			level: 'Level',
			block: 'Block',
			day: 'Day',
			adaptation1: 'Adaptation 1',
			adaptation2: 'Adaptation 2',
			strength: 'Strength',
			hypertrophy: 'Hypertrophy',
			suplementary: 'Suplementary',
			reps: 'Reps',
			times: 'Times',
			saveRoutine: 'Save Routine'
		},
	},
	errors: {
		generic: 'Oops, an error occurred.',
		authentication: 'Email or password wrong.',
	},
};

export default en;
