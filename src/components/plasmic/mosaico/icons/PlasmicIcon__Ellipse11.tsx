// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Ellipse11IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Ellipse11Icon(props: Ellipse11IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
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

      <circle cx={"25"} cy={"25"} r={"25"} fill={"currentColor"}></circle>
    </svg>
  )
}

export default Ellipse11Icon
/* prettier-ignore-end */
