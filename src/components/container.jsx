const Container = ({ children, className = "" }) => {
  return (
    <div className={`container pt-8 pb-2 mx-auto px-4  ${className} `}>
      {children}
    </div>
  );
};

export default Container;
