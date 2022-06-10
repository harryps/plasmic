// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type MenusvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function MenusvgIcon(props: MenusvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 12"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 2V0h18v2H0zm0 5h18V5H0v2zm0 5h18v-2H0v2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default MenusvgIcon
/* prettier-ignore-end */
