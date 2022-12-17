// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rectangle3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 953 693"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M557.5 0h395v75h-395V0z"}
        fill={"currentColor"}
        fillOpacity={".61"}
      ></path>

      <path
        d={
          "M557.5 140c0-20.711 16.789-37.5 37.5-37.5h320c20.711 0 37.5 16.789 37.5 37.5s-16.789 37.5-37.5 37.5H595c-20.711 0-37.5-16.789-37.5-37.5zm-110 99.83c0-20.711-113.211 452.5-92.5 452.5h320c20.711 0-675-473.211-675-452.5C0 260.541 935.711 392.5 915 392.5l-260 115c-20.711 0-207.5-246.959-207.5-267.67z"
        }
        fill={"currentColor"}
        fillOpacity={".57"}
      ></path>
    </svg>
  );
}

export default Rectangle3Icon;
/* prettier-ignore-end */
