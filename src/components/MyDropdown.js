import React, { useState } from "react";
import { ReactComponent as UnionClosed } from "../assets/icons/UnionClosed.svg";
import { ReactComponent as UnionOpen } from "../assets/icons/UnionOpen.svg";
import "../styles/MyDropdown.css";

const MyDropdown = ({ num, question, answer, answer2 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      className={`dropdown ${
        isOpen ? "open" : ""
      }  wow animate__animated animate__fadeIn`}
    >
      <div>
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span className="dropdown-number">{num}</span>
          <span className="dropdown-question">{question}</span>
          <span className="dropdown-icon">
            {isOpen ? (
              <UnionOpen className="dropdown-icon" />
            ) : (
              <UnionClosed className="dropdown-icon" />
            )}
          </span>
        </div>
        <div className="dropdown-body">{answer}</div>

        {
        answer2 &&
         <div className="dropdown-body answer2">{answer2}
         </div>
         
        }

        <hr className="line" />
       
      </div>
    </div>
  );
};

export default MyDropdown;
