import {
  commonErrorsTranslation,
  specificErrorsTranslation,
  pathAliasTranslation,
  orderTypesTranslation,
  statusTranslation,
  invoiceStepsTranslation,
} from './en.utils';

export default {
  global: {
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
    pay: 'Pay now',
    markAsPaid: 'Mark as paid',
    totalAmount: 'Total amount',
    download: 'Download',
    delete: 'Delete',
    search: 'Search',
    pagination: {
      showingResults: 'Showing {{ showingFrom }} of {{ results }} results',
    },
    sidebar: {
      ...pathAliasTranslation,
      account: {
        myAccount: 'My account',
        signedAs: 'Signed in as',
      },
      balance: 'Total balance',
      items: {
        menu: 'Menu',
        transactions: 'Transactions',
      },
      transactions: {
        depwith: 'Deposit - Withdraw',
      },
    },
    dropzone: {
      primaryText: 'Upload a file',
      secondaryText: 'or drag and drop',
      upToText: 'up to',
      uploadedFilesText: 'Uploaded Files',
    },
    bannerEntityState: {
      accepted: 'Your account is ready! You can start receiving payments and making transactions.',
      incomplete: 'You cannot perform any operation yet!',
      forReview:
        'Your account is being setup. You are almost there. We will let you know as soon as your account is ready to oparate.',
      link: 'Verify your account',
    },
    errors: {
      required: 'This field is required',
      emailType: 'The field must be in email format',
      passwordNotEquals: 'Passwords must be the same',
      validPassword: 'The password is not valid',
      min: 'The minimum of characters is {{ min }}',
      max: 'The characters limit is {{ max }}',
      notAllowedEmail: 'Email not allowed',
      minValue: 'The minimum allowed is {{ asset }} {{ number }}.',
      maxValue: 'The maximum allowed is {{ asset }} {{ number }}.',
      oneOf: 'The field must be one of the following {{ oneOf }}',
      number: 'This field must be a number',
      matchKYCB: 'The name must match the one entered in {{ type }}',
      wrongWalletFormat: 'Please check your wallet address',
      api: {
        ...specificErrorsTranslation,
        ...commonErrorsTranslation,
      },
    },
    signOut: 'Sign out',
    maximum: 'Max',
    markupLabel: 'Markup',
    orderTypes: orderTypesTranslation,
    status: statusTranslation,
  },
  login: {
    button: 'Sign In',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    recovery: 'Forgot your password?',
    subtitle: 'Enter with your Settle ID',
    title: 'Access with your Settle ID',
    remember: 'Keep me signed in this computer',
    createAccount: "Don't have a Settle ID? Create an account",
    twoFA: {
      title: 'Enter your 2FA code',
      subtitle: 'Hello {{ user }}, to continue please enter the 6-digit code generated by your 2FA application.',
    },
    errors: {
      ...commonErrorsTranslation,
      ...specificErrorsTranslation,
    },
    settleModal: {
      title: 'What is Settle ID?',
      firstText:
        'It is a single account to access different applications, such as Latamex and Ping Wallet, without having to fill in all your data again. Soon you will be able to use it to enter other associated applications.',
      secondText:
        'Access to your Ping Wallet account is done through Settle ID. You do not need to do anything new, if you already had an account, your Latamex or Ping Wallet email and password will become your Settle ID. If you do not have an account you will need to register, it will only take a few minutes.',
      button: 'Got it',
    },
  },
  signup: {
    login: 'Do you already have a Settle ID account? Log in.',
    subtitle: 'To create your account, we will need to verify your email.',
    title: 'Create your Settle ID to enter',
    settleWarning1: 'Attention',
    settleWarning2: 'Requires you to create an account',
    emailPlaceholder: 'Enter your email',
    error: 'Email already in use',
    selectCountryPlaceholder: 'Select a country',
    settleModal: 'Settle ID',
    invalidEmailError: 'Invalid email',
    button: 'Create password',
    errors: {
      ...commonErrorsTranslation,
      ...specificErrorsTranslation,
    },
  },
  verifyEmail: {
    recovery: {
      subtitle:
        '"{{ user }}" we have received your request. You will receive a code in case the email entered corresponds to a Settle ID account. (Check your spam just in case)',
    },
    fail: 'Incorrect code!',
    resend: 'Forward code',
    resendCountdown: 'on {{countdown}}s',
    resendCodeError: 'Error in sending the code!',
    resendCodeSuccess: 'The code was successfully sent!',
    success: 'Correct code!',
    title: 'Settle ID - Verify your email',
    errors: {
      ...commonErrorsTranslation,
      ...specificErrorsTranslation,
    },
  },
  setPassword: {
    title: 'Create a password',
    subtitle: 'Your password must have at least 8 characters, a letter and a number.',
    create: "Don't have a Settle ID?",
    createLink: 'Create an account',
    passwordError: 'Check your password',
    emailError: 'Check your email',
    invalidEmailError: 'Invalid email',
    DropdownError: 'Select a country',
    matchingPasswordError: 'Passwords do not match',
    emailPlaceholder: 'Email',
    button: 'Set password',
    passwordPlaceholder: 'Password',
    repeatPasswordPlaceholder: 'Repeat password',
    repeatedPasswordError: 'Password was previously used',
    recovery: {
      title: 'Create a new password',
      subtitle: 'Please create and verify your new password',
    },
    errors: {
      ...commonErrorsTranslation,
      ...specificErrorsTranslation,
    },
  },
  recoverPassword: {
    title: 'Reset password',
    subtitle: 'Enter your email, you will receive a code to reset your password.',
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    create: "Don't have a Settle ID?",
    errors: commonErrorsTranslation,
  },
  settings: {
    title: 'Settings',
    identityVerification: {
      title: 'Identity verification',
      description: 'This is your declared and verified info with us.',
      identityInformation: {
        nameLabel: 'Full name',
        idLabel: 'Document ID',
        genderLabel: 'Gender',
        birthLabel: 'Birth date',
        countryLabel: 'Country / Region',
        alert: {
          notVerifiedTitle: 'You need to complete your identity verification.',
          notVerifiedMessage: 'This will only take a few minutes and will enable full wallet access.',
          completeNow: 'Complete now.',
          verified:
            'Your identity has been succesfully verified. You now have full wallet access. For further information you can visit our',
          pending:
            'Your identity verification was submitted successfully and is being reviewed by our team. You will soon have a response. You can always reach out to our ',
          pendingContinue: 'for further help.',
          helpCenter: 'help center.',
          suportTeam: 'support team',
        },
      },
    },
    myAccount: {
      title: 'My account',
      description: 'Your registered data in our application.',
      emailLabel: 'Email',
      numberLabel: 'Phone Number',
      passwordLabel: 'Password',
      changePassword: {
        currentPassword: 'Current password',
        newPassword: 'New password',
        repeatNewPassword: 'Repeat your password',
        change: 'Change',
        codeTitle: 'Enter verification code',
        codeMessage:
          'We have received your request. You will receive a code to {{ email }} to log in here. (Check your spam just in case)',
        success: 'The password has been changed successfully',
      },
    },
    accountLimits: {
      title: 'Account limits',
      description: 'Your operations limits.',
      requestIncrease: {
        title: 'Request an increase for your opperation',
        depositLabel: 'Deposit',
        withdrawLabel: 'Withdraw',
        requestIncreaseButton: 'Request increase',
        type: {
          anual: 'yearly',
          daily: 'daily',
        },
      },
    },
    security: {
      title: 'Security Options',
      description: 'Your security settings',
      twoFA: 'Enable 2FA security for your account',
      twoFADescription:
        'We strongly recommend to enable 2FA security for your account. This will add an extra layer of security for your account login and withdrawal of funds.',
      modal: {
        enableTitle: 'Enable Two-Factor Authentication',
        disableTitle: 'Disable Two-Factor Authentication',
        QRCode: {
          subtitle:
            'Use the 2FA authentication application (e.g. Google Authenticator or Authy) to scan the QR code below with your phone.',
        },
        enableSuccess: 'Has been enabled successfully',
        disableSuccess: 'Has been disabled successfully',
      },
    },
    errors: {
      ...commonErrorsTranslation,
      ...specificErrorsTranslation,
    },
  },
  invoices: {
    title: 'Invoices',
    tab: {
      generatedInvoices: 'Generated Invoices',
      receivedInvoices: 'Received Invoices',
    },
    table: {
      date: 'Date',
      client: 'Client',
      contractor: 'Contractor',
      asset: 'Asset',
      amount: 'Amount',
      status: 'Status',
      actions: 'Actions',
      view: 'View',
      search: 'Search by name or email...',
      empty: {
        title: 'No results found',
        text: 'Try adjusting your search or filter to find what you are looking for.',
      },
    },
    newInvoice: {
      add: 'New invoice',
      modal: {
        title: 'New Invoice',
        headerMessage: 'Get started by filling in the information below to create your new invoice.',
        form: {
          email: 'Email',
          clientName: 'Client name',
          amount: 'Amount',
          description: 'Description',
          shareWire: 'Share my wire details',
          shareCrypto: 'Share my USDC, USDT, DAI deposit address',
        },
        review: {
          invoice: 'Invoice',
          clientName: 'Client name',
          email: 'Client email',
          amount: 'Total amount',
          description: 'Description',
        },
        feedback: {
          message: 'Your invoice was sent successfully',
          advice: 'Your invoice detail and payment instructions was sent to your client’s email',
        },
        success: 'Invoice created successfully',
      },
      invoiceSteps: invoiceStepsTranslation,
    },
    details: {
      title: 'Invoice details',
      clientName: 'Client name',
      contractorName: 'Contractor name',
      clientEmail: 'Client email',
      contractorEmail: 'Contractor email',
      description: 'Description',
      totalAmount: 'Total amount',
      pendingButton: 'Mark as paid',

      detailRejectReason: {
        amount: 'The amount received is not what we agreed.',
        service: 'The services detailed were not the ones provided.',
        dontKnowCreator: 'I do not know who the creator of this invoice is.',
        servicesNotReceived: 'I did not receive the services described.',
        shouldHaveNotReceived: 'I should have not received this invoice.',
        other: 'Other',
      },

      reject: {
        rejectionReason: 'Rejection reason',
        rejectionPrintMessage: 'It was not the budged that was agreed in the contract...',
        rejectionModalMessage: 'Enter the rejection for this invoice and why its not going to be paid',
        form: {
          reason: 'Reason',
          reasonOptions: {
            amountAgreement: 'The amount received is not what we agreed.',
            serviceDetailed: 'The services detailed were not the ones provided.',
            dontKnowCreator: 'I do not know who the creator of this invoice is.',
            servicesNotReceived: 'I did not receive the services described.',
            shouldHaveNotReceived: 'I should have not received this invoice.',
            other: 'Other',
          },
          description: 'Description',
        },
        feedback: {
          title: 'Invoice rejected',
          message: 'An email will be sent to the contractor as a rejection confirmation',
        },
        rejectSuccess: 'Invoice rejected successfully',
      },
      pay: {
        confirm: {
          title: 'Confirm your action',
          message: 'You are going to pay the invoice #{{ id }}',
        },
        feedback: {
          title: 'Invoice #{{ id }} paid successfully',
          // TODO: add translate here later
          message: '',
        },
        paySuccess: 'Invoice paid successfully',
      },
      markAsPaid: {
        confirm: {
          title: 'Confirm your action',
          message: 'You are going to mark your invoice #{{ id }} as paid',
        },
        feedback: {
          title: 'Invoice #{{ id }} marked as paid successfully',
          // TODO: add translate here later
          message: '',
        },
        markAsPaidSuccess: 'Invoice marked as paid successfully',
      },
    },
    printDetails: {
      headerDescription:
        'This invoice was sent to {{email}}. You can manually pay this invoice by following the payment instructions below or you can create an account with Ping and enjoy all the features.',
      senderEmail: 'Sender’s email',
      from: 'From',
      to: 'To',
      currency: 'Currency',
      issueDate: 'Issue date',
      paymentInstructions: 'Payment instructions',
      paymentInstructionText:
        'If you are a Ping user you can pay your invoice directly from your Ping account. If you don’t have a Ping account you can manually pay your invoice by making a transfer of the total amount to one of the following accounts:',
      accountOwner: 'Account owner',
      accountNumber: 'Account Number',
      invoice: 'Invoice',
      copy: 'Copied!',
      cryptoWallets: 'Crypto Walllets',
      routingNumber: 'Routing Number',
      bankTransfer: 'BANK TRANSFER',
      payWithPing: 'Pay with Ping',
    },
  },
  wallets: {
    title: 'Wallets',
    totalBalance: {
      title: 'My total balance',
    },
    fiatStableBalance: {
      title: 'FIAT & stable coins balance',
    },
    cryptoBalance: {
      title: 'Crypto balance',
    },
  },
  transactions: {
    amount: 'Amount',
    tabs: {
      deposit: 'Deposit',
      withdraw: 'Withdraw',
    },
    depositTypes: {
      wire: 'Wire Transfer',
      wireDescription:
        'Transfer funds by wire, for example through SWIFT, the Federal Reserve Wire Network or the Clearing House Interbank Payments System.',
      ach: 'ACH Transfer',
      achDescription:
        'Transfer funds from one bank to another in the U.S. through the Automated Clearing House network.',
      comingSoon: 'Coming soon!',
      usBankName: 'US Bank Transfer',
      usBankDescription: 'ACH transfer, Wire transfer, Check for United State.',
      arBankName: 'AR Bank Transfer',
      arBankDescription: 'Standard domestic Transfer for Argentina',
      crypto: 'Crypto Transfer',
      cryptoDescription: 'Transfer using Crypto from any wallet.',
    },
    transferInformation: {
      domestic: 'Domestic Transfer',
      international: 'International Transfer',
      copy: 'Copied to clipboard',
      bankName: 'Depository Bank name:',
      bankAddress: 'Bank Address:',
      bankPhone: 'Bank Phone:',
      creditTo: 'Credit to:',
      address: 'Beneficiary address:',
      routingNumber: 'Routing Number:',
      accountNumber: 'Account Number:',
      referenceCode: 'Reference:',
      swiftCode: 'Swift code:',
    },
    newTransaction: 'New transaction',
    depositType: 'Deposit type',
    tranferInfo: 'Wire transfer instructions',
    tranferCrypto: '{{ asset }} Wallet',
    currencyDescription: 'Get started by selecting the asset you want to deposit.',
    depositTypeDescription: 'Select the type of deposit of your preference.',
    transferInfoDescription: 'Please make your transfer to the following bank account.',
    transferCryptoDescription: 'Send only {{ asset }} to this wallet address.',
    fiatTitle: 'Fiat & Stablecoins',
    cryptoTitle: 'Cryptocurrencies',
    walletAddress: 'Wallet address',
    scanCode: 'Scan this code',
    network: 'Network',
    balance: 'Your {{ asset }} balance',
    feedback: {
      title: 'Order created successfully',
      description:
        'Your deposit order No. 099823 has been created! As soon as the funds are credited you will receive an email with the confirmation from us.',
    },
    withdraw: {
      availableBalance: 'Available: {{ balance }} {{ asset }}',
      twofa: 'Enter the 6-digit code you generated to complete the verification.',
      withdrawAmount: 'Withdraw amount',
      withdrawDescription: 'Type the amount you want to withdraw.',
      accountInformation: 'Account information',
      accountInformationDescription: 'Complete the amount and information of the bank account.',
      twoFa: 'Two step verification',
      twoFaDescription: 'Before proceed, we need your verification.',
      fee: 'Fee',
      noFee: 'No fee',
      amountToWithdraw: 'Total amount to withdraw',
      bankAccountNumber: 'Bank account number',
      bankAccountName: 'Bank account name',
      routingNumber: 'Routing number',
      bankAddress: 'Bank address',
      streetAdress: 'Street address',
      city: 'City',
      state: 'State',
      networkFee: 'Network Fee',
      walletAddress: 'Wallet address',
      feedback: {
        title: 'Order created successfully',
        description:
          'Your withdrawal order No. 345678 has been created! As soon as the funds are credited you will receive an email notification from us.',
      },
      transactionFee: 'Transaction fee',
      totalWithdraw: 'Total amount to withdraw',
      type: 'Withdraw type',
      typeDescription: 'Select the withdrawal type of your preference',
    },
  },
  commonKycb: {
    agreement: {
      title: 'Account opening agreement',
      description:
        'This agreement is mandatory for the opening of an account, and accordingly, the entire agreement must be completed and signed.',
      step: 'Account Agreement',
      terms: 'Terms and conditions',
      inputTitleKYC: 'Type your full name to sign',
      inputDescriptionKYC: 'To sign you must enter your full name, otherwise it will not be accepted as a signature.',
      inputTitleKYB: 'Type your legal entity name to sign',
      inputDescriptionKYB:
        'To sign you must enter your legal entity name, otherwise it will not be accepted as a signature.',
      agree: 'I agree.',
      receiveInfo: 'I would like to receive email information and updates.',
    },
    feedback: {
      title: 'Your account is being prepared',
      description: 'Sit back and relax, we’ll notify you as soon as your account is ready to use.',
    },
  },
  kyc: {
    warningMessage: {
      title: 'In order to complete your identity verification successfully, please make sure to:',
      description1: 'Enter the information of your personal data as it appears in your ID.',
      description2:
        'Enter your address information confirming the street, city, state, and/or ZIP code are associated with your residential address.',
      description3:
        "Provide a valid Government issued ID, Driver's License or Passport for validation, making sure that it is not expired, the image of the ID is clear, there is no glare or flash, and all four corners are visible.",
    },
    kycRequiredActions: {
      title: 'Please verify these fields:',
      FULL_NAME: 'Please confirm your name reflects the legal name as it reads on the identity document.',
      DATE_OF_BIRTH: 'Please confirm your date of birth matches the date on your identity document.',
      ADDRESS: 'Please confirm the street, city, state, and/or ZIP code are associated with your residential address.',
      INVALID_PHOTO_ID:
        'Please make sure your ID is not expired, the image of the ID is clear, there is no glare or flash, and all four corners are visible.',
    },
    step0: {
      title: 'Verify your information',
      description: 'Please check your scanned information, or rescan your ID if it does not match.',
      step: 'Scan your ID',
    },
    step1: {
      title: 'Where do you live?',
      description: 'Upload the following documents as proof of your address.',
      step: 'Documentation',
    },
    step2: {
      title: 'Proof of address',
      description: 'Please provide your current address.',
      step: 'Address',
    },
    step3: {
      title: 'What’s your occupation?',
      description: 'Tell us what you do to generate income.',
      step: 'Occupation',
    },
    step4: {
      title: 'Your phone number?',
      step: 'Phone number',
    },
  },
  kyb: {
    commonStep: {
      apartmentSuiteEtc: 'Apartment, suite, etc.',
      city: 'City',
      postalCode: 'ZIP/ Postal Code',
      stateRegionProvince: 'State/ Region/ Province',
      country: 'Country',
      errorTitle: 'Please verify these fields:',
      warningItems: {
        title: 'In order to complete your identity verification successfully, please make sure to:',
        one: 'Enter and verify the legal entity name for accuracy, confirming it matches the information with the Secretary of State and contains the company type i.e., LLC, Inc., LLP, etc.',
        two: 'Please review the EIN, GIIN, or Company Number for accuracy, confirming it is a valid number associated with the entity. If applicable, provide an SS-4, W-8BEN-E etc.',
        three:
          'Enter your address information confirming the street, city, state, and/or ZIP code are associated with your residential address.',
      },
    },
    step1: {
      title: 'Company Information',
      headerTitle: 'Welcome to your company onboarding',
      headerSubTitle: 'Complete the following verification to access services on Ping.',
      legalCompanyAddress: 'Please provide your legal company address.',
      legalEntityName: 'Legal entity name',
      taxIdNumber: 'Tax ID number',
      companyAddress: 'Company address',
      addressStreet: 'Address Street',
      taxCountry: 'Tax country',
      regionOfFormation: 'Region of formation',
      tooltipText: 'Region/State in which the company was created.',
    },
    step2: {
      title: 'Company Documentation',
      headerTitle: 'Upload official documentation to verify your company',
      headerSubTitle: 'Only the following documents listed below will be acepted.',
      bylawsOrDocumentsOfFormation: 'Bylaws or documents of formation',
      bylawOrDocumentDescription:
        'A copy of the company’s official formation or organizational document, such as the articles of incorporation, certificate of formation, partnership agreement, by-laws, operating agreement or trust instrument, as applicable.',
      proofOfAddress: 'Proof of address',
      proofOfAddressDescription: 'Proof of the company’s address such as bank statement or utility bill.',
      companyStructureDocumentation: 'Company structure documentation',
      companyStructureDocumentationDescription:
        'Proof of beneficial ownership of the company evidencing those entities or individuals owning 25% or more, such as an operating agreement, partnership agreement, share registry, capitaliation table, or schedule K1.',
    },
    step3: {
      title: `Beneficial Owner's`,
      headerTitle: `Add company's Beneficial Owners (BO)`,
      headerSubTitle: 'Please fill in the data correctly, as this may delay or cancel the verification process.',
      beneficialOwner: 'Beneficial Owner',
      boPersonalInformation: 'BO personal information',
      boPersonalInformationDescription: `To get started we need you to complete the following personal information about your BO. We'll also need you to attach official documentation to prove your identity.`,
      fullName: 'Full Name',
      emailAddress: 'Email address',
      phoneNumber: 'Phone number',
      birthDate: 'Birth date',
      idNumber: 'Id number',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      frontOfIdImageOrPassport: 'Front of ID image or Passport',
      imageOrPassportDescription:
        'When scanning the document or taking a photo, make sure that all the information is legible.',
      backOfIdImageOrPassport: 'Back of ID image or Passport',
      selfie: 'Selfie',
      selfieDescription:
        'When taking a selfie, make sure you dont have any hats, glasses or accessories that prevent us from verifying your face.',
      boLegalAddress: `BO's legal address`,
      boLegalAddressDescription: `Provide your BO's current legal address and attach a document proving this address.`,
      address: 'Address',
      uploadBoProofOfAddress: 'Upload BOs proof of address',
      uploadBoProofOfAddressDescription: 'Upload a bank statement or utility bill.',
      boOcupation: `BO's occupation`,
      selectOccupation: 'Select occupation',
      occupationDescription: 'Briefly describe the selected occupation',
      politicallyExposedPerson: `I'm not a P.E.P. (politically exposed person) or obligated subject.`,
      thirdParty: `I'm not acting on behalf of/or in the name of a third party`,
      saveBo: 'Save BO',
      addNewBo: 'Add new BO',
    },
    step4: {
      title: 'Questionnaire',
      headerTitle: 'Almost done!',
      headerSubTitle: 'We just need you to complete a brief questionnaire for your account opening.',
      question1: `What’s the nature of business of your company?`,
      question2: `What’s the purpose of your account?`,
      question3: `What’s the source of your assets and income?`,
      question4: `What will you use your account for?`,
      question5: `Declare your monthly anticipated cash volume`,
      question6: `Declare your monthly anticipated incoming transactions`,
      question7: `Declare your monthly anticipated outgoing transactions`,
      question8: `What are your anticipated types of assets?`,
      question9: `What are your anticipated trading patterns?`,
      question10: `Do you have associations with other accounts?`,
      options: {
        governmentSector: 'Government sector.',
        militarySector: 'Military sector.',
        internationalSector: 'International sector.',
        technologySector: 'Technology sector.',
        merchadisingSector: 'Merchandising sector.',
        serviceSector: 'Service sector.',
        manufacturingSector: 'Manufacturing sector.',
        nonProfiSector: 'Non-profit sector.',
        publicSector: 'Public sector.',
        other: 'Other, please specify.',
        contractorsSalaries: 'Pay contractors salaries',
        buyAndSell: 'Buy and sell crypto.',
        custodyMyAssets: 'Custody my assets.',
        freelancerOrIndependentContractor: 'Freelancer or independent contractor.',
        saleOfProduct: 'Sale of a product (ecommerce, store).',
        saleHourOfService: 'Sale hour of service (advice, professionals).',
        feeForSoftware: 'Fee for software use (typical for SAAS) or for APP download.',
        paymentForVolume: 'Payment for volume of information consumed.',
        commissionsOnSales: 'Commissions on sales.',
        assetSales: 'Asset sales.',
        feeOrPayPerUse: 'Fee or pay per use.',
        subscriptionFee: 'Subscription fee.',
        loanOrLease: 'Loan or lease.',
        advertising: 'Advertising.',
        payProviders: 'Pay providers.',
        buyCrypto: 'Buy crypto.',
        sellCrypto: 'Sell crypto.',
        otherTrading: 'Other trading activities.',
        between1And1kk: 'Between 1 and 1,000,000 USD.',
        between1and10kk: 'Between 1,000,001 and 10,000,000 USD.',
        more100kk: '+ 100,000,000 USD.',
        between1And100: 'Between 1 and 100 transactions.',
        between101and1000: 'Between 101 and 1000 transactions.',
        more1000: '+ 1000 USD.',
        yesPleaseSpecify: 'Yes, please specify.',
        no: 'No',
      },
    },
    step5: {
      title: 'Account Agreement',
    },
  },
  verification: {
    step1Title: `Let’s start your account verification`,
    step2Title: 'Verify your account',
    stepDescription: 'In order to verify your identity you will need to provide the following details.',
    step3Title: 'Verify your business',
    person: `I’m a person`,
    company: `I’m a company`,
    personCardId: 'Scan you ID',
    personCardIdDescription: 'You will need original government-issued ID Card.',
    personFingerprint: 'Tell us a little bit more about yourself',
    personFingerprintDescription: 'Your full name. Date of birth and email.',
    proofOfAddress: 'Upload proof of address',
    personAddressDescription: 'A bank statement or utility bill.',
    business: 'Tell us about your business',
    businessDescription: 'Your business address, entity name and tax ID number.',
    businessDocument: 'Upload official documentation',
    businessDocumentDescription:
      'Your business bylaws or incorporation documents, proof of address and corporate structure documentation.',
    businessProofOfAddressDescription: `Add your BO's and upload their ID or passport and a bank statement or utility bill to prove their address.`,
    startVerifyingNow: 'Start verifying now',
  },
  twoFactorCode: {
    enableSubtitle: 'Enter the 6-digit code you generated to complete the verification.',
    mailSubtitle: 'Enter the 4 digit verification code sent by email.',
    transactionSubtitle: 'Enter the 6 digit verification code generated by the authenticator app on your phone.',
    disableSubtitle: 'Enter your security token to disable 2-factor authentication.',
  },
};