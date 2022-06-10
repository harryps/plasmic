// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type SmallArrowRightIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function SmallArrowRightIcon(props: SmallArrowRightIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
        d={
          "M8.746 5.402a.83.83 0 010 1.196l-4.264 4.154a.885.885 0 01-1.228 0 .831.831 0 010-1.196L6.904 6l-3.65-3.556a.83.83 0 010-1.196.885.885 0 011.228 0l4.264 4.154z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default SmallArrowRightIcon
/* prettier-ignore-end */
