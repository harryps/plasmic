// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type LargeCalendarIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function LargeCalendarIcon(props: LargeCalendarIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M14 4h-4V3a1 1 0 00-2 0v1H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3h-2V3a1 1 0 10-2 0v1zM9 8a1 1 0 01-1-1V6H6a1 1 0 00-1 1v2.5h14V7a1 1 0 00-1-1h-2v1a1 1 0 11-2 0V6h-4v1a1 1 0 01-1 1zm-4 3.5V19a1 1 0 001 1h12a1 1 0 001-1v-7.5H5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default LargeCalendarIcon
/* prettier-ignore-end */
