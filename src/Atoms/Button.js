import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isSmall) className.push("btn-sm");
  if (props.isLarge) className.push("btn-lg");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span style={props.style} className={className.join(" ")}>
        {props.isLoading ? (
          <React.Fragment>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </React.Fragment>
        ) : (
          props.children
        )}
      </span>
    );
  }

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          style={props.style}
          onClick={onClick}
          className={className.join(" ")}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      to={props.href}
      style={props.style}
      onClick={onClick}
      className={className.join(" ")}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isExternal: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
