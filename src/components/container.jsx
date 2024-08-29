const Container = ({ children, height = "h-full" }) => {
  return (
    <div className="container pt-8 pb-2 mx-auto px-4 ${height}">{children}</div>
  );
};

export default Container;
