import "./Form.css";

export const Button = ({
  children,
  onClick,
  narrow,
  secondary,
  no_outline,
}) => {
  /*
  TODO:
  Hover states
  Focus states
  Variants (primary/secondary).
  */
  let className = "btn";
  className += narrow ? " narrow" : "";
  className += secondary ? " secondary" : "";
  className += no_outline ? " no_outline" : "";

  return (
    <input
      className={className}
      type='button'
      value={children}
      onClick={onClick}
    />
  );
};
