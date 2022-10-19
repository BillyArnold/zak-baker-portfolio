const InnerHeader = (props) => {
  return (
    <>
      <div className="text-shapeshift font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl pt-32 pb-20 sm:pt-40 lg:pt-60">
        {props.children}
      </div>
    </>
  );
};

export default InnerHeader;
