import "./Loader.css";

interface Props {
  width?: string;
  ringWidth?: string;
  ringColor?: string;
  hilightColor?: string;
}

const Loader: React.FC<Props> = ({
  width = "28",
  ringWidth = "5",
  ringColor = "lightblue",
  hilightColor = "black",
}) => {
  const styles = {
    width: `${width}px`,
    borderWidth: `${ringWidth}px`,
    borderColor: `${ringColor}`,
    borderRightColor: `${hilightColor}`,
  };

  return <div className="loader" style={styles}></div>;
};

export default Loader;
