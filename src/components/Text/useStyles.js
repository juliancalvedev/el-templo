const useStyles = ({ title , bold, underline, size, color, className }) => {

    const fontSizes = {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl'
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