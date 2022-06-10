// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type LargeCircleQuestionOutlineIconProps =
  React.ComponentProps<"svg"> & {
    title?: string
  }

export function LargeCircleQuestionOutlineIcon(
  props: LargeCircleQuestionOutlineIconProps
) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 16.527a1.35 1.35 0 100 2.7 1.35 1.35 0 000-2.7zM12 6c-2.262 0-4.024 1.766-4 4.22a1.08 1.08 0 002.159-.022c-.013-1.25.777-2.04 1.841-2.04 1.019 0 1.841.847 1.841 2.051 0 .436-.15.68-.777 1.175l-.598.464c-1.092.872-1.545 1.547-1.545 2.78a1.08 1.08 0 002.141.194l.024-.337c.037-.319.216-.548.747-.967l.598-.464C15.538 12.17 16 11.474 16 10.21 16 7.826 14.226 6 12 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default LargeCircleQuestionOutlineIcon
/* prettier-ignore-end */
