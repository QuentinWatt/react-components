import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: React.ReactNode;
  body: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

const Accordion: React.FC<Props> = ({
  title,
  body,
  onOpen = () => {},
  onClose = () => {},
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const close = () => {
    setIsOpen(false);
    onClose();
  };

  const open = () => {
    setIsOpen(true);
    onOpen();
  };

  const toggleState = () => {
    isOpen ? close() : open();
  };

  return (
    <div className="border rounded">
      <div
        onClick={toggleState}
        className="border-b px-3 py-2 flex items-center justify-between"
      >
        {title}{" "}
        <FontAwesomeIcon
          icon={faCaretDown}
          className={isOpen ? "rotate-90" : ""}
        />
      </div>
      {isOpen && <div className="accordion-content">{body}</div>}
    </div>
  );
};

export default Accordion;
