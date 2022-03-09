const useStyles = ({ size, type, className = '' }) => {

    const BUTTON_SIZE = {
        0: '',
        1: '4',
        2: '8',
        3: '12'
    }

    const BUTTON_TYPE = {
        1: '1',
        2: '2',
        3: '3',
        4: '4'
    }

    return {
        container: `col-${BUTTON_SIZE[size]}  `,

        button: ` button py-${BUTTON_TYPE[type] === '4' ? '3' : '2'} col-12 button-color--${BUTTON_TYPE[type]} ${className}`
    }
}

export default useStyles;
