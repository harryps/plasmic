// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vHW8PexQ9CvaEbwGp1Pgn6
// Component: AMFdTatok8
import * as React from "react"

import { Link, GatsbyLinkProps as LinkProps } from "gatsby"

import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"

import "@plasmicapp/react-web/lib/plasmic.css"

import * as projectcss from "./plasmic_mosaico.module.css" // plasmic-import: vHW8PexQ9CvaEbwGp1Pgn6/projectcss
import * as sty from "./PlasmicMenu.module.css" // plasmic-import: AMFdTatok8/css

import LargeDoubleArrowLeftIcon from "./icons/PlasmicIcon__LargeDoubleArrowLeft" // plasmic-import: kLMrq0QaD1/icon
import Group1628Icon from "./icons/PlasmicIcon__Group1628" // plasmic-import: yyOUR06ega/icon
import GroupIcon from "./icons/PlasmicIcon__Group" // plasmic-import: z4i-YHqt6Q/icon
import LargeReportGraphIcon from "./icons/PlasmicIcon__LargeReportGraph" // plasmic-import: vBtboUvniP/icon
import logoMosaicoHe78KbjAh4 from "./images/logoMosaico.svg" // plasmic-import: HE78KBJAh4/picture
import largeProjectHubGz4FlAgcr2 from "./images/largeProjectHub.svg" // plasmic-import: gz4flAGCR2/picture

export type PlasmicMenu__VariantMembers = {}

export type PlasmicMenu__VariantsArgs = {}
type VariantPropType = keyof PlasmicMenu__VariantsArgs
export const PlasmicMenu__VariantProps = new Array<VariantPropType>()

export type PlasmicMenu__ArgsType = {
  state?: any
}

type ArgPropType = keyof PlasmicMenu__ArgsType
export const PlasmicMenu__ArgProps = new Array<ArgPropType>("state")

export type PlasmicMenu__OverridesType = {
  root?: p.Flex<"div">
  menuHeader?: p.Flex<"div">
  menuHeaderRow?: p.Flex<"div">
  divider?: p.Flex<"div">
  menuList?: p.Flex<"div">
  active?: p.Flex<"div">
  largeHome?: p.Flex<"div">
  home?: p.Flex<"div">
  largeSettingsWip?: p.Flex<"div">
  manageSchool?: p.Flex<"div">
  projects?: p.Flex<"div">
  reports?: p.Flex<"div">
}

export interface DefaultMenuProps {
  state?: any
  className?: string
}

export const defaultMenu__Args: Partial<PlasmicMenu__ArgsType> = {
  state: "" as const,
}

function PlasmicMenu__RenderFunc(props: {
  variants: PlasmicMenu__VariantsArgs
  args: PlasmicMenu__ArgsType
  overrides: PlasmicMenu__OverridesType

  forNode?: string
}) {
  const { variants, overrides, forNode } = props
  const args = Object.assign({}, defaultMenu__Args, props.args)
  const $props = args
  const $ctx = ph.useDataEnv?.() || {}

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"menuHeader"}
          data-plasmic-override={overrides.menuHeader}
          hasGap={true}
          className={classNames(projectcss.all, sty.menuHeader)}
        >
          <div
            data-plasmic-name={"menuHeaderRow"}
            data-plasmic-override={overrides.menuHeaderRow}
            className={classNames(projectcss.all, sty.menuHeaderRow)}
          >
            <img
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.img__sHr0Z
              )}
              loading={"lazy" as const}
              src={logoMosaicoHe78KbjAh4}
            />

            <LargeDoubleArrowLeftIcon
              className={classNames(projectcss.all, sty.svg__aF2I)}
              role={"img"}
            />
          </div>

          <div
            data-plasmic-name={"divider"}
            data-plasmic-override={overrides.divider}
            className={classNames(projectcss.all, sty.divider)}
          />
        </p.Stack>

        <div
          data-plasmic-name={"menuList"}
          data-plasmic-override={overrides.menuList}
          className={classNames(projectcss.all, sty.menuList)}
        >
          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__aj9Ru
            )}
            component={Link}
            platform={"gatsby"}
          >
            <div
              data-plasmic-name={"active"}
              data-plasmic-override={overrides.active}
              className={classNames(projectcss.all, sty.active)}
            />

            <div
              data-plasmic-name={"largeHome"}
              data-plasmic-override={overrides.largeHome}
              className={classNames(projectcss.all, sty.largeHome)}
            >
              <Group1628Icon
                className={classNames(projectcss.all, sty.svg___7KAXt)}
                role={"img"}
              />
            </div>

            <div
              data-plasmic-name={"home"}
              data-plasmic-override={overrides.home}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.home
              )}
            >
              <p.Trans>{"Home"}</p.Trans>
            </div>
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link__wQlY)}
            component={Link}
            platform={"gatsby"}
          >
            <div
              data-plasmic-name={"largeSettingsWip"}
              data-plasmic-override={overrides.largeSettingsWip}
              className={classNames(projectcss.all, sty.largeSettingsWip)}
            >
              <GroupIcon
                className={classNames(projectcss.all, sty.svg__p8A3)}
                role={"img"}
              />
            </div>

            <div
              data-plasmic-name={"manageSchool"}
              data-plasmic-override={overrides.manageSchool}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.manageSchool
              )}
            >
              <p.Trans>{"Manage school"}</p.Trans>
            </div>
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__diH47
            )}
            component={Link}
            platform={"gatsby"}
          >
            <img
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.img___4X9GT
              )}
              loading={"lazy" as const}
              src={largeProjectHubGz4FlAgcr2}
            />

            <div
              data-plasmic-name={"projects"}
              data-plasmic-override={overrides.projects}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.projects
              )}
            >
              <p.Trans>{"Projects"}</p.Trans>
            </div>
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___9UMv3
            )}
            component={Link}
            platform={"gatsby"}
          >
            <LargeReportGraphIcon
              className={classNames(projectcss.all, sty.svg__eflfY)}
              role={"img"}
            />

            <div
              data-plasmic-name={"reports"}
              data-plasmic-override={overrides.reports}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.reports
              )}
            >
              <p.Trans>{"Reports"}</p.Trans>
            </div>
          </p.Stack>
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: [
    "root",
    "menuHeader",
    "menuHeaderRow",
    "divider",
    "menuList",
    "active",
    "largeHome",
    "home",
    "largeSettingsWip",
    "manageSchool",
    "projects",
    "reports",
  ],
  menuHeader: ["menuHeader", "menuHeaderRow", "divider"],
  menuHeaderRow: ["menuHeaderRow"],
  divider: ["divider"],
  menuList: [
    "menuList",
    "active",
    "largeHome",
    "home",
    "largeSettingsWip",
    "manageSchool",
    "projects",
    "reports",
  ],
  active: ["active"],
  largeHome: ["largeHome"],
  home: ["home"],
  largeSettingsWip: ["largeSettingsWip"],
  manageSchool: ["manageSchool"],
  projects: ["projects"],
  reports: ["reports"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  menuHeader: "div"
  menuHeaderRow: "div"
  divider: "div"
  menuList: "div"
  active: "div"
  largeHome: "div"
  home: "div"
  largeSettingsWip: "div"
  manageSchool: "div"
  projects: "div"
  reports: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenu__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenu__VariantsArgs
    args?: PlasmicMenu__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMenu__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key }
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMenu__ArgProps,
      internalVariantPropNames: PlasmicMenu__VariantProps,
    })

    return PlasmicMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicMenu"
  } else {
    func.displayName = `PlasmicMenu.${nodeName}`
  }
  return func
}

export const PlasmicMenu = Object.assign(
  // Top-level PlasmicMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuHeader: makeNodeComponent("menuHeader"),
    menuHeaderRow: makeNodeComponent("menuHeaderRow"),
    divider: makeNodeComponent("divider"),
    menuList: makeNodeComponent("menuList"),
    active: makeNodeComponent("active"),
    largeHome: makeNodeComponent("largeHome"),
    home: makeNodeComponent("home"),
    largeSettingsWip: makeNodeComponent("largeSettingsWip"),
    manageSchool: makeNodeComponent("manageSchool"),
    projects: makeNodeComponent("projects"),
    reports: makeNodeComponent("reports"),

    // Metadata about props expected for PlasmicMenu
    internalVariantProps: PlasmicMenu__VariantProps,
    internalArgProps: PlasmicMenu__ArgProps,
  }
)

export default PlasmicMenu
/* prettier-ignore-end */
