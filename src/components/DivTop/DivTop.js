const DivTop = ({ children, className, style, justify = 'start' }) => {
    return (
        <div
            className={
                className +
                ` col-12 d-flex flex-column justify-content-${justify}`
            }
            style={{ ...style, margin: '0px', padding: '0px' }}>
            {children}
        </div>
    )
}

export default DivTop