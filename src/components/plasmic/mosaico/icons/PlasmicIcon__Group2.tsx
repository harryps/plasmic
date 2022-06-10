// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 22"}
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
          "M21.924 17.317l-1.22-3.55a8.898 8.898 0 00.901-3.883 8.817 8.817 0 00-2.547-6.225A8.81 8.81 0 0012.878 1a8.803 8.803 0 00-6.415 2.597 8.797 8.797 0 00-2.597 6.157 6.465 6.465 0 00-1.962 7.941l-.84 2.445c-.145.42-.04.877.275 1.191a1.146 1.146 0 001.19.275l2.446-.84a6.492 6.492 0 002.763.624h.01a6.454 6.454 0 005.22-2.654 8.899 8.899 0 003.664-.897l3.55 1.22a1.362 1.362 0 001.415-.327c.374-.374.499-.916.327-1.416zM7.748 20.141H7.74a5.228 5.228 0 01-2.428-.603.626.626 0 00-.495-.038l-2.507.861.861-2.507a.625.625 0 00-.038-.495 5.208 5.208 0 01.85-6.042 8.816 8.816 0 002.54 4.876 8.822 8.822 0 004.882 2.448 5.198 5.198 0 01-3.657 1.5zm12.965-2.292a.114.114 0 01-.125.029l-3.8-1.306a.624.624 0 00-.495.038 7.635 7.635 0 01-3.546.88h-.012c-4.137 0-7.554-3.36-7.62-7.496a7.562 7.562 0 012.232-5.512 7.564 7.564 0 015.512-2.231c4.14.066 7.503 3.49 7.496 7.631a7.635 7.635 0 01-.88 3.546.625.625 0 00-.039.495l1.306 3.8a.113.113 0 01-.029.126z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>
    </svg>
  )
}

export default Group2Icon
/* prettier-ignore-end */
