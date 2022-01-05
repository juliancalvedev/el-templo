const useStyles = ({ title , bold, underline, size, color, className }) => {

    const fontSizes = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
    }

    const colors = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
    }

    return {
        text: `text__font--${title ? '2' : '1'} 
        ${bold && 'text--bold'} 
        ${underline && 'text--underline'} 
        text__size--${fontSizes[size]} 
        text__color--${colors[color]} 
        m-0 p-0 
        ${className}
        `
    }
};

export default useStyles;