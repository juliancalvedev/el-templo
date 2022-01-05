const useStyles = ({ bg, color, back }) => {

    return{
        container: `col-12 d-flex align-items-center fixed-top topbar topbar__bg--${bg}`,
        body: `d-flex align-items-center offset-${back ? '1' : '10'}`,
        backArrowBtn: 'border-0',
        icon: `stroke__color--${color}`
    }
};

export default useStyles;