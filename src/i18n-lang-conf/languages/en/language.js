export default {
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

	auth: {
		landing: {
			haveAccount: 'Have an account?',
			btnLogin: 'Log In',
			btnRegister: 'Register',
		},

		login: {
			title: 'Login',
			emailPlaceholder: 'Email@email.com',
			passwordPlaceholder: 'Password',
			recovery: 'Forgotten password?',
			btnLogin: 'Log In',
		},
		emailConfirm: {
			title: 'Confirm your email',
			p1: 'you are one step away from starting',
			p2: 'Confirm your email by clicking on the link we sent, in your inbox.',
			p3: "Hasn't it reached you? Click here",
			btnConfirm: 'Resend email',
		},
		register: {
			title: 'Register',
			firstNamePlaceholder: 'Name',
			lastNamePlaceholder: 'Last Name',
			sex1: 'Male',
			sex2: 'Female',
			sex3: 'Other',
			emailPlaceholder: 'email@gmail.com',
			passwordPlaceholder: 'Password',
			password2Placeholder: 'Confirm Your Password',
			countrySelection: 'select country',
			country1: 'Argentina',
			country2: 'USA',
			country3: 'Mexico',
			dateOfBirth: 'Date of birth',
			btnRegister: 'Check in',

			//RegisterValidate:
			firstNameError: 'Please, enter your name',
			lastNameError: 'Please, enter your last name',
			emailError: 'Email address is invalid',
			password1Error: 'Password needs to be 6 characters or more',
			password2Error: 'Password do not match',
			countryError: 'Please, select your Country.',
			dateOfBirthError: 'Please, enter your date of birth',
		},

		emailVerified: {
			title: 'Your E-mail has been correctly verified.',
			titleError: 'The link is invalid or has expired. ',
			auxText: "Everything ready, let's go!",
			btnNext: 'Next',
		},
		enabledVerified: {
			emailNotVerified: {
				title: 'Your account has not been verified yet.',
				auxText:
					'Enter the Link that we have sent you to the email. And follow the steps.',
				btnResendEmail: 'Resend Email',
			},
			accountNotEnabled: {
				title: 'Your account is not enabled.',
				auxText: 'Please, contact "El Templo" for more information.',
				btnBack: 'Back',
			},
		},

		onboard1: {},
		onboard2: {},
		forgotPassword1: {
			title: 'Did you forget your password?',
			emailPlaceholder: 'Email@email.com',
			btnAccept: 'Accept',
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
			kilos: 'Kilos',
			meters: 'Meters',
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
			aboutUs: 'About us',
			elTemplo: 'El Templo',
			auxText1:
				'El Templo is a functional and alternative training space for trained and untrained people, from free acrobatics to sports gymnastics, weightlifting to calisthenics and natural movement. through physical and mental training.',
			rectangle324: 'Body,soul,mind',
			btn1: 'See more',
			mission: 'MISSION & VISION',
			auxText2:
				'The Mission of El Templo is to introduce the public to new training systems, to cultivate and instruct its members in the world of movement as a lifestyle and not as a social commitment and purely aesthetic purposes. Be better humans through our actions and behaviors.',
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
	navbar: {
		nav: {
			myProfile: 'My profile',
			dashboard: 'Dashboard',
			help: 'Help',
			training: 'Training',
			users: 'Users',
		},
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
		emailRegisterSended: 'Confirm Email',
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
			personalInfo: 'Datos personales',
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
		},
	},
};
