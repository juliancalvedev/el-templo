const useStyles = ({ size, type }) => {

    const BUTTON_SIZE = {
        1: '3',
        2: '8',
        3: '12'
    }

    const BUTTON_TYPE = {
        1: '1',
        2: '2',
        3: '3'
    }

    return {
        container: `col-${BUTTON_SIZE[size]} my-1`,

        button: `btn button py-2 col-12 button-color--${BUTTON_TYPE[type]}`
    }
}

export default useStyles;
