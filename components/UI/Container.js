const CustomContainer = ( props ) => {
    return (
        <>
            <div className="max-w-7xl px-5 mx-auto">
                {props.children}
            </div>
        </>
    )
}


export default CustomContainer