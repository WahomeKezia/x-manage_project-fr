// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5h3QhDqWM84XV2vDpdccG7
// Component: 2dYzKl3MFK
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_x_manage_project.module.css"; // plasmic-import: 5h3QhDqWM84XV2vDpdccG7/projectcss
import sty from "./PlasmicBack.module.css"; // plasmic-import: 2dYzKl3MFK/css
import Arrow1Icon from "./icons/PlasmicIcon__Arrow1"; // plasmic-import: bei6iQA9x/icon

export const PlasmicBack__VariantProps = new Array();

export const PlasmicBack__ArgProps = new Array();

function PlasmicBack__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <Arrow1Icon
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
      role={"img"}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBack__ArgProps,
          internalVariantPropNames: PlasmicBack__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBack__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBack";
  } else {
    func.displayName = `PlasmicBack.${nodeName}`;
  }
  return func;
}

export const PlasmicBack = Object.assign(
  // Top-level PlasmicBack renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicBack
    internalVariantProps: PlasmicBack__VariantProps,
    internalArgProps: PlasmicBack__ArgProps
  }
);

export default PlasmicBack;
/* prettier-ignore-end */
