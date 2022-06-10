// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 3"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M9.072 1H1.625a.625.625 0 000 1.25h7.447a.625.625 0 000-1.25z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>
    </svg>
  )
}

export default Group3Icon
/* prettier-ignore-end */
