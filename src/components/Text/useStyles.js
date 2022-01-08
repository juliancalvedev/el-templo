const useStyles = ({ bold, underline, size, color, className, font, justify }) => {

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
        error: 'error'
    }

    const fontFamilies = {
        1: 1,
        2: 2
    }

    return {
        container: `text-${justify}`,
        text: `text__font--${fontFamilies[font]} 
        ${bold ? 'text--bold' : ''} 
        ${underline ? 'text--underline' : ''} 
        text__size--${fontSizes[size]} 
        text__color--${colors[color]} 
        m-0 p-0 
        ${className}
        `
    }
};

export default useStyles;