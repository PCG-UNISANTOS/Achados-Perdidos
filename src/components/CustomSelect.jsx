import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownDoubleFill } from "react-icons/ri";

const CustomSelect = ({ options, placeholder, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const ref = useRef(null);

  const toggle = () => setOpen((prev) => !prev);

  const selectOption = (option, index) => {
    onChange(option);
    setHighlighted(index);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="select" ref={ref}>
      <button
        type="button"
        className="select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
      >
        <span className={!value ? "placeholder" : ""}>
          {value ? value.label : placeholder}
        </span>
        <RiArrowDownDoubleFill />
      </button>

      {open && (
        <ul role="listbox" className="select-options">
          {options.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={value?.value === option.value}
              className={`option ${highlighted === index ? "highlighted" : ""}`}
              onClick={() => selectOption(option, index)}
              onMouseEnter={() => setHighlighted(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
