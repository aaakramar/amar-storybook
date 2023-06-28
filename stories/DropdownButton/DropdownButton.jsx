import React, { useState } from "react";
import "./DropdownButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// faChevronUp

export const DropdownButton = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const btnName = "Send Payment Link";
  const dropDownItems = [
    { name: "Individual", drawer: false, value: "Individual" },
    { name: "Bulk Share", drawer: true, value: "Bulk Share" },
  ];

  const optionOnClick = (el  , key) => {
    console.log(el ,key);
  }

  return (
    <>
      <div className="dropdown-button">
        <button
          className={` ${toggleButton ? "btn-active" : ""}`}
          onClick={() => setToggleButton(true)}
          onMouseLeave={() => setToggleButton(false)}
          style={{ borderRadius: toggleButton ? "8px 8px 0 0" : "8px" }}>
          {btnName}
          <span>
            {toggleButton ? (
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-up"
                style={{ marginLeft: "10px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-down"
                style={{ marginLeft: "10px" }}
              />
            )}
          </span>
          {toggleButton ? (
            <div
              className="select-toggle-button dropdown-item"
              style={{ borderRadius: toggleButton ? "0 0 10px 10px" : "" }}>
              {dropDownItems?.map((el, key) => (
                <span
                  key={key}
                  onClick={() => {
                    optionOnClick(el, key);
                  }}>
                  {el.name}
                </span>
              ))}
            </div>
          ) : (
            ""
          )}
        </button>
      </div>
    </>
  );
};
