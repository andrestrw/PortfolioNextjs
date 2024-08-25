import { Children } from "react";

const Container = ({ children }) => {
  return (
    <div className="container pt-8 pb-2 mx-auto px-4 h-full">{children}</div>
  );
};

export default Container;
