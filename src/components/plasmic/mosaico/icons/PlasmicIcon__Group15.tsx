// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Group15IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Group15Icon(props: Group15IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 22"}
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
        d={
          "M18 13V8c0-4.4-3.6-8-8-8S2 3.6 2 8v5c0 1.1-.9 2-2 2v2h20v-2c-1.1 0-2-.9-2-2zM3.4 15c.4-.6.6-1.3.6-2V8c0-3.3 2.7-6 6-6s6 2.7 6 6v5c0 .7.2 1.4.6 2H3.4zm8.3 4H8.3c-.4 0-.7.2-.9.5-.2.3-.2.7 0 1 .5.9 1.5 1.5 2.6 1.5s2.1-.6 2.6-1.5c.2-.3.2-.7 0-1-.2-.3-.5-.5-.9-.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Group15Icon
/* prettier-ignore-end */
