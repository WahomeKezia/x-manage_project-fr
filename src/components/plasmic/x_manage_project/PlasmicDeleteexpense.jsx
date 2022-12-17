// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5h3QhDqWM84XV2vDpdccG7
// Component: 0wT_IJB5E3
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
import sty from "./PlasmicDeleteexpense.module.css"; // plasmic-import: 0wT_IJB5E3/css
import Rectangle7Icon from "./icons/PlasmicIcon__Rectangle7"; // plasmic-import: mM3LZX6jH7O/icon
import Arrow1Icon from "./icons/PlasmicIcon__Arrow1"; // plasmic-import: bei6iQA9x/icon

export const PlasmicDeleteexpense__VariantProps = new Array();

export const PlasmicDeleteexpense__ArgProps = new Array();

function PlasmicDeleteexpense__RenderFunc(props) {
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
            data-plasmic-name={"desktop15"}
            data-plasmic-override={overrides.desktop15}
            className={classNames(projectcss.all, sty.desktop15)}
          >
            <Rectangle7Icon
              className={classNames(projectcss.all, sty.svg__zo6L7)}
              role={"img"}
            />

            <div
              data-plasmic-name={"rectangle15"}
              data-plasmic-override={overrides.rectangle15}
              className={classNames(projectcss.all, sty.rectangle15)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9LlZa
              )}
            >
              {"Username"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4GVc6
              )}
            >
              {"Expenses"}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ys1P
              )}
              href={`/dashboard`}
            >
              {"Dashboard"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__hHtXz
              )}
              href={`/projectspage`}
            >
              {"Projects"}
            </a>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8EyM
              )}
            >
              {"Tools"}
            </div>

            <div
              data-plasmic-name={"fullToolStorageBox"}
              data-plasmic-override={overrides.fullToolStorageBox}
              className={classNames(projectcss.all, sty.fullToolStorageBox)}
            />

            <a
              data-plasmic-name={"project"}
              data-plasmic-override={overrides.project}
              className={classNames(projectcss.all, projectcss.a, sty.project)}
            />

            <div
              data-plasmic-name={"cost"}
              data-plasmic-override={overrides.cost}
              className={classNames(projectcss.all, sty.cost)}
            />

            <div
              data-plasmic-name={"speed"}
              data-plasmic-override={overrides.speed}
              className={classNames(projectcss.all, sty.speed)}
            />

            <div
              data-plasmic-name={"user"}
              data-plasmic-override={overrides.user}
              className={classNames(projectcss.all, sty.user)}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame1"}
              data-plasmic-override={overrides.frame1}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame1)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nMjga
                )}
              >
                {"Expense ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame4"}
              data-plasmic-override={overrides.frame4}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame4)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jx2U
                )}
              >
                {"D001-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame2"}
              data-plasmic-override={overrides.frame2}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oFxYq
                )}
              >
                {"D003-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame5"}
              data-plasmic-override={overrides.frame5}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame5)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gwKdm
                )}
              >
                {"D004-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame3"}
              data-plasmic-override={overrides.frame3}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ojimK
                )}
              >
                {"D002-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame31"}
              data-plasmic-override={overrides.frame31}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame31)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bDw3O
                )}
              >
                {"Date"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame26"}
              data-plasmic-override={overrides.frame26}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame26)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dy4Ht
                )}
              >
                {"Responsible"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame27"}
              data-plasmic-override={overrides.frame27}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame27)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tdvAd
                )}
              >
                {"Mansour"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame28"}
              data-plasmic-override={overrides.frame28}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame28)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uLgHa
                )}
              >
                {"Zinab"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame29"}
              data-plasmic-override={overrides.frame29}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame29)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vK6X
                )}
              >
                {"Adama"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame30"}
              data-plasmic-override={overrides.frame30}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame30)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ztwzE
                )}
              >
                {"Shaima"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame21"}
              data-plasmic-override={overrides.frame21}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame21)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fCtcB
                )}
              >
                {"Project ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame22"}
              data-plasmic-override={overrides.frame22}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame22)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___860VM
                )}
              >
                {"P001-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame23"}
              data-plasmic-override={overrides.frame23}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame23)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__k3O3E
                )}
              >
                {"P002-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame24"}
              data-plasmic-override={overrides.frame24}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame24)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aP1DE
                )}
              >
                {"P004-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame25"}
              data-plasmic-override={overrides.frame25}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame25)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__owLaw
                )}
              >
                {"P001-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame16"}
              data-plasmic-override={overrides.frame16}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame16)}
            >
              <div
                data-plasmic-name={"allocation"}
                data-plasmic-override={overrides.allocation}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.allocation
                )}
              >
                {"Allocation "}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame17"}
              data-plasmic-override={overrides.frame17}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame17)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2EdFd
                )}
              >
                {"D001-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame18"}
              data-plasmic-override={overrides.frame18}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame18)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oRgDh
                )}
              >
                {"D003-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame19"}
              data-plasmic-override={overrides.frame19}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame19)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2At1B
                )}
              >
                {"D004-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame20"}
              data-plasmic-override={overrides.frame20}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame20)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kfzZb
                )}
              >
                {"D002-2022"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame11"}
              data-plasmic-override={overrides.frame11}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame11)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6TDw
                )}
              >
                {"Amount"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame12"}
              data-plasmic-override={overrides.frame12}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame12)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nb6YU
                )}
              >
                {"100000"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame13"}
              data-plasmic-override={overrides.frame13}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame13)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0IF2V
                )}
              >
                {"20000"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame14"}
              data-plasmic-override={overrides.frame14}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame14)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___647Wf
                )}
              >
                {"300000"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame15"}
              data-plasmic-override={overrides.frame15}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame15)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lKur2
                )}
              >
                {"80000"}
              </div>
            </p.Stack>

            <div
              data-plasmic-name={"rectangle58"}
              data-plasmic-override={overrides.rectangle58}
              className={classNames(projectcss.all, sty.rectangle58)}
            />

            <div
              data-plasmic-name={"rectangle57"}
              data-plasmic-override={overrides.rectangle57}
              className={classNames(projectcss.all, sty.rectangle57)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7Dj8Y
              )}
            >
              {"No"}
            </div>

            <div
              data-plasmic-name={"rectangle59"}
              data-plasmic-override={overrides.rectangle59}
              className={classNames(projectcss.all, sty.rectangle59)}
            />

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___6OMhs
              )}
              href={`/expensespage`}
            >
              {"Yes"}
            </a>

            <div
              data-plasmic-name={"error"}
              data-plasmic-override={overrides.error}
              className={classNames(projectcss.all, sty.error)}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame6"}
              data-plasmic-override={overrides.frame6}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame6)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h0Htr
                )}
              >
                {"Rubric"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame7"}
              data-plasmic-override={overrides.frame7}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame7)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___33EMt
                )}
              >
                {"Test"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame8"}
              data-plasmic-override={overrides.frame8}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame8)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fi2Kx
                )}
              >
                {"Test"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame9"}
              data-plasmic-override={overrides.frame9}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame9)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__t2Cdc
                )}
              >
                {"Test"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame10"}
              data-plasmic-override={overrides.frame10}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame10)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kXoh7
                )}
              >
                {"Test"}
              </div>
            </p.Stack>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nhKbZ
              )}
            >
              {"Log out"}
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame32"}
              data-plasmic-override={overrides.frame32}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame32)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6M9Bb
                )}
              >
                {"30/07/2022"}
              </div>
            </p.Stack>

            <div
              data-plasmic-name={"pencil"}
              data-plasmic-override={overrides.pencil}
              className={classNames(projectcss.all, sty.pencil)}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame33"}
              data-plasmic-override={overrides.frame33}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame33)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oq4Ay
                )}
              >
                {"30/07/2022"}
              </div>
            </p.Stack>

            <div
              data-plasmic-name={"pencil2"}
              data-plasmic-override={overrides.pencil2}
              className={classNames(projectcss.all, sty.pencil2)}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame34"}
              data-plasmic-override={overrides.frame34}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame34)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pj1Vr
                )}
              >
                {"30/07/2022"}
              </div>
            </p.Stack>

            <div
              data-plasmic-name={"pencil3"}
              data-plasmic-override={overrides.pencil3}
              className={classNames(projectcss.all, sty.pencil3)}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame35"}
              data-plasmic-override={overrides.frame35}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame35)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aDpb6
                )}
              >
                {"30/07/2022"}
              </div>
            </p.Stack>

            <div
              data-plasmic-name={"pencil4"}
              data-plasmic-override={overrides.pencil4}
              className={classNames(projectcss.all, sty.pencil4)}
            />

            <div
              data-plasmic-name={"rectangle23"}
              data-plasmic-override={overrides.rectangle23}
              className={classNames(projectcss.all, sty.rectangle23)}
            />

            <div
              data-plasmic-name={"search"}
              data-plasmic-override={overrides.search}
              className={classNames(projectcss.all, sty.search)}
            />

            <div
              data-plasmic-name={"plus"}
              data-plasmic-override={overrides.plus}
              className={classNames(projectcss.all, sty.plus)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3CCae
              )}
            >
              {"Add an expense"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sQmjF
              )}
            >
              {"Chercher"}
            </div>

            <div
              data-plasmic-name={"rectangle24"}
              data-plasmic-override={overrides.rectangle24}
              className={classNames(projectcss.all, sty.rectangle24)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4FJ2S
              )}
            >
              {"Search"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__svwXk
              )}
            >
              {"Search"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7RdVd
              )}
            >
              {"Search"}
            </div>

            <Arrow1Icon
              className={classNames(projectcss.all, sty.svg__g3Ttp)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zwXwY
              )}
            >
              {
                "This data will be deleted from your database. Do you want to proceed?"
              }
            </div>

            <div
              data-plasmic-name={"logout"}
              data-plasmic-override={overrides.logout}
              className={classNames(projectcss.all, sty.logout)}
            />

            <div
              data-plasmic-name={"rectangle64"}
              data-plasmic-override={overrides.rectangle64}
              className={classNames(projectcss.all, sty.rectangle64)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vxfqp
              )}
            >
              {"Company Logo"}
            </div>

            <div
              data-plasmic-name={"search2"}
              data-plasmic-override={overrides.search2}
              className={classNames(projectcss.all, sty.search2)}
            />

            <div
              data-plasmic-name={"_delete"}
              data-plasmic-override={overrides._delete}
              className={classNames(projectcss.all, sty._delete)}
            />

            <div
              data-plasmic-name={"delete2"}
              data-plasmic-override={overrides.delete2}
              className={classNames(projectcss.all, sty.delete2)}
            />

            <div
              data-plasmic-name={"delete3"}
              data-plasmic-override={overrides.delete3}
              className={classNames(projectcss.all, sty.delete3)}
            />

            <div
              data-plasmic-name={"delete4"}
              data-plasmic-override={overrides.delete4}
              className={classNames(projectcss.all, sty.delete4)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "desktop15",
    "rectangle15",
    "fullToolStorageBox",
    "project",
    "cost",
    "speed",
    "user",
    "frame1",
    "frame4",
    "frame2",
    "frame5",
    "frame3",
    "frame31",
    "frame26",
    "frame27",
    "frame28",
    "frame29",
    "frame30",
    "frame21",
    "frame22",
    "frame23",
    "frame24",
    "frame25",
    "frame16",
    "allocation",
    "frame17",
    "frame18",
    "frame19",
    "frame20",
    "frame11",
    "frame12",
    "frame13",
    "frame14",
    "frame15",
    "rectangle58",
    "rectangle57",
    "rectangle59",
    "error",
    "frame6",
    "frame7",
    "frame8",
    "frame9",
    "frame10",
    "frame32",
    "pencil",
    "frame33",
    "pencil2",
    "frame34",
    "pencil3",
    "frame35",
    "pencil4",
    "rectangle23",
    "search",
    "plus",
    "rectangle24",
    "logout",
    "rectangle64",
    "search2",
    "_delete",
    "delete2",
    "delete3",
    "delete4"
  ],

  desktop15: [
    "desktop15",
    "rectangle15",
    "fullToolStorageBox",
    "project",
    "cost",
    "speed",
    "user",
    "frame1",
    "frame4",
    "frame2",
    "frame5",
    "frame3",
    "frame31",
    "frame26",
    "frame27",
    "frame28",
    "frame29",
    "frame30",
    "frame21",
    "frame22",
    "frame23",
    "frame24",
    "frame25",
    "frame16",
    "allocation",
    "frame17",
    "frame18",
    "frame19",
    "frame20",
    "frame11",
    "frame12",
    "frame13",
    "frame14",
    "frame15",
    "rectangle58",
    "rectangle57",
    "rectangle59",
    "error",
    "frame6",
    "frame7",
    "frame8",
    "frame9",
    "frame10",
    "frame32",
    "pencil",
    "frame33",
    "pencil2",
    "frame34",
    "pencil3",
    "frame35",
    "pencil4",
    "rectangle23",
    "search",
    "plus",
    "rectangle24",
    "logout",
    "rectangle64",
    "search2",
    "_delete",
    "delete2",
    "delete3",
    "delete4"
  ],

  rectangle15: ["rectangle15"],
  fullToolStorageBox: ["fullToolStorageBox"],
  project: ["project"],
  cost: ["cost"],
  speed: ["speed"],
  user: ["user"],
  frame1: ["frame1"],
  frame4: ["frame4"],
  frame2: ["frame2"],
  frame5: ["frame5"],
  frame3: ["frame3"],
  frame31: ["frame31"],
  frame26: ["frame26"],
  frame27: ["frame27"],
  frame28: ["frame28"],
  frame29: ["frame29"],
  frame30: ["frame30"],
  frame21: ["frame21"],
  frame22: ["frame22"],
  frame23: ["frame23"],
  frame24: ["frame24"],
  frame25: ["frame25"],
  frame16: ["frame16", "allocation"],
  allocation: ["allocation"],
  frame17: ["frame17"],
  frame18: ["frame18"],
  frame19: ["frame19"],
  frame20: ["frame20"],
  frame11: ["frame11"],
  frame12: ["frame12"],
  frame13: ["frame13"],
  frame14: ["frame14"],
  frame15: ["frame15"],
  rectangle58: ["rectangle58"],
  rectangle57: ["rectangle57"],
  rectangle59: ["rectangle59"],
  error: ["error"],
  frame6: ["frame6"],
  frame7: ["frame7"],
  frame8: ["frame8"],
  frame9: ["frame9"],
  frame10: ["frame10"],
  frame32: ["frame32"],
  pencil: ["pencil"],
  frame33: ["frame33"],
  pencil2: ["pencil2"],
  frame34: ["frame34"],
  pencil3: ["pencil3"],
  frame35: ["frame35"],
  pencil4: ["pencil4"],
  rectangle23: ["rectangle23"],
  search: ["search"],
  plus: ["plus"],
  rectangle24: ["rectangle24"],
  logout: ["logout"],
  rectangle64: ["rectangle64"],
  search2: ["search2"],
  _delete: ["_delete"],
  delete2: ["delete2"],
  delete3: ["delete3"],
  delete4: ["delete4"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDeleteexpense__ArgProps,
          internalVariantPropNames: PlasmicDeleteexpense__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDeleteexpense__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDeleteexpense";
  } else {
    func.displayName = `PlasmicDeleteexpense.${nodeName}`;
  }
  return func;
}

export const PlasmicDeleteexpense = Object.assign(
  // Top-level PlasmicDeleteexpense renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    desktop15: makeNodeComponent("desktop15"),
    rectangle15: makeNodeComponent("rectangle15"),
    fullToolStorageBox: makeNodeComponent("fullToolStorageBox"),
    project: makeNodeComponent("project"),
    cost: makeNodeComponent("cost"),
    speed: makeNodeComponent("speed"),
    user: makeNodeComponent("user"),
    frame1: makeNodeComponent("frame1"),
    frame4: makeNodeComponent("frame4"),
    frame2: makeNodeComponent("frame2"),
    frame5: makeNodeComponent("frame5"),
    frame3: makeNodeComponent("frame3"),
    frame31: makeNodeComponent("frame31"),
    frame26: makeNodeComponent("frame26"),
    frame27: makeNodeComponent("frame27"),
    frame28: makeNodeComponent("frame28"),
    frame29: makeNodeComponent("frame29"),
    frame30: makeNodeComponent("frame30"),
    frame21: makeNodeComponent("frame21"),
    frame22: makeNodeComponent("frame22"),
    frame23: makeNodeComponent("frame23"),
    frame24: makeNodeComponent("frame24"),
    frame25: makeNodeComponent("frame25"),
    frame16: makeNodeComponent("frame16"),
    allocation: makeNodeComponent("allocation"),
    frame17: makeNodeComponent("frame17"),
    frame18: makeNodeComponent("frame18"),
    frame19: makeNodeComponent("frame19"),
    frame20: makeNodeComponent("frame20"),
    frame11: makeNodeComponent("frame11"),
    frame12: makeNodeComponent("frame12"),
    frame13: makeNodeComponent("frame13"),
    frame14: makeNodeComponent("frame14"),
    frame15: makeNodeComponent("frame15"),
    rectangle58: makeNodeComponent("rectangle58"),
    rectangle57: makeNodeComponent("rectangle57"),
    rectangle59: makeNodeComponent("rectangle59"),
    error: makeNodeComponent("error"),
    frame6: makeNodeComponent("frame6"),
    frame7: makeNodeComponent("frame7"),
    frame8: makeNodeComponent("frame8"),
    frame9: makeNodeComponent("frame9"),
    frame10: makeNodeComponent("frame10"),
    frame32: makeNodeComponent("frame32"),
    pencil: makeNodeComponent("pencil"),
    frame33: makeNodeComponent("frame33"),
    pencil2: makeNodeComponent("pencil2"),
    frame34: makeNodeComponent("frame34"),
    pencil3: makeNodeComponent("pencil3"),
    frame35: makeNodeComponent("frame35"),
    pencil4: makeNodeComponent("pencil4"),
    rectangle23: makeNodeComponent("rectangle23"),
    search: makeNodeComponent("search"),
    plus: makeNodeComponent("plus"),
    rectangle24: makeNodeComponent("rectangle24"),
    logout: makeNodeComponent("logout"),
    rectangle64: makeNodeComponent("rectangle64"),
    search2: makeNodeComponent("search2"),
    _delete: makeNodeComponent("_delete"),
    delete2: makeNodeComponent("delete2"),
    delete3: makeNodeComponent("delete3"),
    delete4: makeNodeComponent("delete4"),
    // Metadata about props expected for PlasmicDeleteexpense
    internalVariantProps: PlasmicDeleteexpense__VariantProps,
    internalArgProps: PlasmicDeleteexpense__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDeleteexpense;
/* prettier-ignore-end */
