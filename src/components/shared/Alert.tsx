interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "info" | "warning" | "danger" | "success";
}

const Alert: React.FC<Props> = ({
  children,
  type = "info",
  className = "",
}) => {
  return <div className={`alert ${type} ${className}`}>{children}</div>;
};

export default Alert;
