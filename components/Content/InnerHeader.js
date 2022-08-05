const InnerHeader = (props) => {
    return(
        <>
            <div className="text-shapeshift font-black text-3xl md:text-5xl lg:text-7xl pt-32 pb-20 sm:pt-40 lg:pt-60">
                {props.children}
            </div>
        </>
    )
}

export default InnerHeader