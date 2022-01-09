const useStyles = ({ bg, color, back, shadow }) => {

    return{
        container: `col-12 d-flex align-items-center position-absolute topbar topbar__bg--${bg} ${shadow ? 'topbar__shadow' : ''}`,
        body: `d-flex align-items-center offset-${back ? '1' : '10'}`,
        backArrowBtn: 'border-0',
        icon: `stroke__color--${color}`,
    }
};

export default useStyles;