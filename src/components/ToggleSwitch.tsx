import React, { DetailedHTMLProps, useCallback, useState } from "react";

type Props = {
  callback: () => void;
} & JSX.IntrinsicElements["button"];

const ToggleSwitch = ({ callback, ...props }: Props) => {
  const [toggle, setToggle] = useState(false);

  const onClick = useCallback(() => {
    setToggle(!toggle);
    callback();
  }, [toggle]);

  return (
    <button
      {...props}
      style={{
        width: "5rem",
        height: "2.6rem",
        position: "relative",
        borderRadius: "2rem",
        padding: "0.1rem",
        border: "0.2rem solid lightgrey",
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          top: 0,
          left: 0,
          borderRadius: "100%",
          backgroundColor: "lightblue",
          transition: "0.3s",
          transform: toggle ? "translate(2.2rem, 0rem)" : "translate(0, 0rem)",
        }}
      >
        {props.children ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.children}
          </div>
        ) : null}
      </div>
    </button>
  );
};

export default ToggleSwitch;
