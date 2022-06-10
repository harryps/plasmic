// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type LargeReportGraphIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function LargeReportGraphIcon(props: LargeReportGraphIconProps) {
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
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.667 8.693v-.001h-13l-.5-.002h0v.002l-.025 8.282v.001a3.832 3.832 0 003.833 3.833h5.833a3.832 3.832 0 003.834-3.832v-.001l.025-8.282zm-3.55-4.935v.428l.422.066a4.495 4.495 0 013.794 4.44V17c0 2.482-2.017 4.5-4.5 4.5H9A4.504 4.504 0 014.5 17V8.692a4.504 4.504 0 013.794-4.44l.423-.066V3.4c0-.487.406-.9.933-.9h4.533c.527 0 .934.413.934.9v.358zm-5.234-.591h-.5v2.691h5.067V3.167H9.883zM8.5 15.5h1v2h-1v-2zm3-2h1v4h-1v-4zm3-3h1v7h-1v-7z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>
    </svg>
  )
}

export default LargeReportGraphIcon
/* prettier-ignore-end */
