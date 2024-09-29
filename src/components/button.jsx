const Button = ({onClick, isOpen}) => {

  return (
    <button onClick={onClick} className="md:hidden text-white justify-center focus:outline-none">
      {isOpen ? (
        <span>X</span> // Puedes reemplazar con un ícono SVG si lo prefieres
      ) : (
        <span>Menu</span> // Puedes reemplazar con un ícono SVG si lo prefieres
      )}
    </button>
  );
};

export default Button;
