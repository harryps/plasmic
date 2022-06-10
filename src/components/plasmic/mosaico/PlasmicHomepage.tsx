// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vHW8PexQ9CvaEbwGp1Pgn6
// Component: GpKY1VwXjp
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
import Menu from "../../Menu" // plasmic-import: AMFdTatok8/component
import DashboardHeader from "../../DashboardHeader" // plasmic-import: 8ekmXy00nHs/component
import LessonCard from "../../LessonCard" // plasmic-import: wV8UN81fACq/component

import "@plasmicapp/react-web/lib/plasmic.css"

import * as projectcss from "./plasmic_mosaico.module.css" // plasmic-import: vHW8PexQ9CvaEbwGp1Pgn6/projectcss
import * as sty from "./PlasmicHomepage.module.css" // plasmic-import: GpKY1VwXjp/css

import LargeCalendarIcon from "./icons/PlasmicIcon__LargeCalendar" // plasmic-import: 3x7w478lro/icon

export type PlasmicHomepage__VariantMembers = {}

export type PlasmicHomepage__VariantsArgs = {}
type VariantPropType = keyof PlasmicHomepage__VariantsArgs
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>()

export type PlasmicHomepage__ArgsType = {}
type ArgPropType = keyof PlasmicHomepage__ArgsType
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>()

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">
  menu?: p.Flex<typeof Menu>
  mainContent?: p.Flex<"div">
  dashboardHeader?: p.Flex<typeof DashboardHeader>
  mainContentBlock?: p.Flex<"div">
  lessonBlock?: p.Flex<"div">
  nextlessons?: p.Flex<"div">
  title?: p.Flex<"div">
  svg?: p.Flex<"svg">
  homeNextLessonsTitle?: p.Flex<"div">
  button2?: p.Flex<"div">
  homeaddToBoard?: p.Flex<"div">
  freeBox?: p.Flex<"div">
}

export interface DefaultHomepageProps {
  className?: string
}

export const defaultHomepage__Args: Partial<PlasmicHomepage__ArgsType> = {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs
  args: PlasmicHomepage__ArgsType
  overrides: PlasmicHomepage__OverridesType

  forNode?: string
}) {
  const { variants, overrides, forNode } = props
  const args = Object.assign({}, defaultHomepage__Args, props.args)
  const $props = args
  const $ctx = ph.useDataEnv?.() || {}

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Menu
            data-plasmic-name={"menu"}
            data-plasmic-override={overrides.menu}
            className={classNames("__wab_instance", sty.menu)}
          />

          <div
            data-plasmic-name={"mainContent"}
            data-plasmic-override={overrides.mainContent}
            className={classNames(projectcss.all, sty.mainContent)}
          >
            <DashboardHeader
              data-plasmic-name={"dashboardHeader"}
              data-plasmic-override={overrides.dashboardHeader}
              className={classNames("__wab_instance", sty.dashboardHeader)}
            />

            <div
              data-plasmic-name={"mainContentBlock"}
              data-plasmic-override={overrides.mainContentBlock}
              className={classNames(projectcss.all, sty.mainContentBlock)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"lessonBlock"}
                data-plasmic-override={overrides.lessonBlock}
                hasGap={true}
                className={classNames(projectcss.all, sty.lessonBlock)}
              >
                <div
                  data-plasmic-name={"nextlessons"}
                  data-plasmic-override={overrides.nextlessons}
                  className={classNames(projectcss.all, sty.nextlessons)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"title"}
                    data-plasmic-override={overrides.title}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.title)}
                  >
                    <LargeCalendarIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />

                    <div
                      data-plasmic-name={"homeNextLessonsTitle"}
                      data-plasmic-override={overrides.homeNextLessonsTitle}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.homeNextLessonsTitle
                      )}
                    >
                      <p.Trans>{"Next lessons"}</p.Trans>
                    </div>
                  </p.Stack>

                  {false ? (
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"button2"}
                      data-plasmic-override={overrides.button2}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.button2)}
                    >
                      <div
                        data-plasmic-name={"homeaddToBoard"}
                        data-plasmic-override={overrides.homeaddToBoard}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.homeaddToBoard
                        )}
                      >
                        <p.Trans>{"Add to board"}</p.Trans>
                      </div>
                    </p.Stack>
                  ) : null}
                </div>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <LessonCard
                    className={classNames(
                      "__wab_instance",
                      sty.lessonCard__qkAb
                    )}
                  />

                  <LessonCard
                    className={classNames(
                      "__wab_instance",
                      sty.lessonCard___0YHui
                    )}
                  />

                  <LessonCard
                    className={classNames(
                      "__wab_instance",
                      sty.lessonCard__bySxe
                    )}
                  />
                </p.Stack>
              </p.Stack>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: [
    "root",
    "menu",
    "mainContent",
    "dashboardHeader",
    "mainContentBlock",
    "lessonBlock",
    "nextlessons",
    "title",
    "svg",
    "homeNextLessonsTitle",
    "button2",
    "homeaddToBoard",
    "freeBox",
  ],
  menu: ["menu"],
  mainContent: [
    "mainContent",
    "dashboardHeader",
    "mainContentBlock",
    "lessonBlock",
    "nextlessons",
    "title",
    "svg",
    "homeNextLessonsTitle",
    "button2",
    "homeaddToBoard",
    "freeBox",
  ],
  dashboardHeader: ["dashboardHeader"],
  mainContentBlock: [
    "mainContentBlock",
    "lessonBlock",
    "nextlessons",
    "title",
    "svg",
    "homeNextLessonsTitle",
    "button2",
    "homeaddToBoard",
    "freeBox",
  ],
  lessonBlock: [
    "lessonBlock",
    "nextlessons",
    "title",
    "svg",
    "homeNextLessonsTitle",
    "button2",
    "homeaddToBoard",
    "freeBox",
  ],
  nextlessons: [
    "nextlessons",
    "title",
    "svg",
    "homeNextLessonsTitle",
    "button2",
    "homeaddToBoard",
  ],
  title: ["title", "svg", "homeNextLessonsTitle"],
  svg: ["svg"],
  homeNextLessonsTitle: ["homeNextLessonsTitle"],
  button2: ["button2", "homeaddToBoard"],
  homeaddToBoard: ["homeaddToBoard"],
  freeBox: ["freeBox"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  menu: typeof Menu
  mainContent: "div"
  dashboardHeader: typeof DashboardHeader
  mainContentBlock: "div"
  lessonBlock: "div"
  nextlessons: "div"
  title: "div"
  svg: "svg"
  homeNextLessonsTitle: "div"
  button2: "div"
  homeaddToBoard: "div"
  freeBox: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs
    args?: PlasmicHomepage__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps,
    })

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage"
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`
  }
  return func
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menu: makeNodeComponent("menu"),
    mainContent: makeNodeComponent("mainContent"),
    dashboardHeader: makeNodeComponent("dashboardHeader"),
    mainContentBlock: makeNodeComponent("mainContentBlock"),
    lessonBlock: makeNodeComponent("lessonBlock"),
    nextlessons: makeNodeComponent("nextlessons"),
    title: makeNodeComponent("title"),
    svg: makeNodeComponent("svg"),
    homeNextLessonsTitle: makeNodeComponent("homeNextLessonsTitle"),
    button2: makeNodeComponent("button2"),
    homeaddToBoard: makeNodeComponent("homeaddToBoard"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
  }
)

export default PlasmicHomepage
/* prettier-ignore-end */
