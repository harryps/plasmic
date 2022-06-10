// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type LargeDoubleArrowLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function LargeDoubleArrowLeftIcon(props: LargeDoubleArrowLeftIconProps) {
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
          "M4.382 12.957a1.392 1.392 0 010-1.914l6.394-6.646a1.268 1.268 0 011.842 0 1.392 1.392 0 010 1.914L7.145 12l5.473 5.689a1.392 1.392 0 010 1.915 1.268 1.268 0 01-1.842 0l-6.394-6.647z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.382 12.957a1.392 1.392 0 010-1.914l6.394-6.646a1.268 1.268 0 011.843 0 1.392 1.392 0 010 1.914L14.145 12l5.474 5.689a1.392 1.392 0 010 1.915 1.268 1.268 0 01-1.843 0l-6.394-6.647z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default LargeDoubleArrowLeftIcon
/* prettier-ignore-end */
