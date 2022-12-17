// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5h3QhDqWM84XV2vDpdccG7
// Component: 1i4q2lgA0QR
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
import sty from "./PlasmicLoginpage.module.css"; // plasmic-import: 1i4q2lgA0QR/css

export const PlasmicLoginpage__VariantProps = new Array();

export const PlasmicLoginpage__ArgProps = new Array();

function PlasmicLoginpage__RenderFunc(props) {
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
    <React.Fragment>
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
            sty.root
          )}
        >
          <div
            data-plasmic-name={"desktop1"}
            data-plasmic-override={overrides.desktop1}
            className={classNames(projectcss.all, sty.desktop1)}
          >
            <div
              data-plasmic-name={"rectangle2"}
              data-plasmic-override={overrides.rectangle2}
              className={classNames(projectcss.all, sty.rectangle2)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__z65Yb
              )}
            >
              {"Welcome!"}
            </div>

            <div
              data-plasmic-name={"rectangle4"}
              data-plasmic-override={overrides.rectangle4}
              className={classNames(projectcss.all, sty.rectangle4)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uMg3E
              )}
            >
              {"Username"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lxXBd
              )}
            >
              {"Password"}
            </div>

            <div
              data-plasmic-name={"rectangle5"}
              data-plasmic-override={overrides.rectangle5}
              className={classNames(projectcss.all, sty.rectangle5)}
            />

            <a
              data-plasmic-name={"rectangle6"}
              data-plasmic-override={overrides.rectangle6}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.rectangle6
              )}
              href={`/dashboard`}
            />

            <a
              data-plasmic-name={"login"}
              data-plasmic-override={overrides.login}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.login
              )}
            >
              {"       Login"}
            </a>

            <div
              data-plasmic-name={"rectangle63"}
              data-plasmic-override={overrides.rectangle63}
              className={classNames(projectcss.all, sty.rectangle63)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zKmar
              )}
            >
              {"COMPANY LOGO"}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "desktop1",
    "rectangle2",
    "rectangle4",
    "rectangle5",
    "rectangle6",
    "login",
    "rectangle63"
  ],

  desktop1: [
    "desktop1",
    "rectangle2",
    "rectangle4",
    "rectangle5",
    "rectangle6",
    "login",
    "rectangle63"
  ],

  rectangle2: ["rectangle2"],
  rectangle4: ["rectangle4"],
  rectangle5: ["rectangle5"],
  rectangle6: ["rectangle6"],
  login: ["login"],
  rectangle63: ["rectangle63"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLoginpage__ArgProps,
          internalVariantPropNames: PlasmicLoginpage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLoginpage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginpage";
  } else {
    func.displayName = `PlasmicLoginpage.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginpage = Object.assign(
  // Top-level PlasmicLoginpage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    desktop1: makeNodeComponent("desktop1"),
    rectangle2: makeNodeComponent("rectangle2"),
    rectangle4: makeNodeComponent("rectangle4"),
    rectangle5: makeNodeComponent("rectangle5"),
    rectangle6: makeNodeComponent("rectangle6"),
    login: makeNodeComponent("login"),
    rectangle63: makeNodeComponent("rectangle63"),
    // Metadata about props expected for PlasmicLoginpage
    internalVariantProps: PlasmicLoginpage__VariantProps,
    internalArgProps: PlasmicLoginpage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLoginpage;
/* prettier-ignore-end */