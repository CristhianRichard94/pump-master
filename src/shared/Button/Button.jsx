
const Button = ({ children, onClick, disabled = false, className = '' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;