const DivBottom = ({ children, className, style, marginBottom = 0 }) => {
    return (
        <div
            className={
                className +
                ' col-12 d-flex flex-column justify-content-start'
            }
            style={{
                ...style,
                margin: '0px',
                padding: '0px',
                marginBottom: `${marginBottom}px`
            }}>
            {children}
        </div>
    )
}

export default DivBottom