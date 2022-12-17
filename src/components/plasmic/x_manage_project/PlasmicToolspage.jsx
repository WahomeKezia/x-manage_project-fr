// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5h3QhDqWM84XV2vDpdccG7
// Component: 8Kj1RcSD3K
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
import sty from "./PlasmicToolspage.module.css"; // plasmic-import: 8Kj1RcSD3K/css
import Rectangle7Icon from "./icons/PlasmicIcon__Rectangle7"; // plasmic-import: mM3LZX6jH7O/icon
import Arrow1Icon from "./icons/PlasmicIcon__Arrow1"; // plasmic-import: bei6iQA9x/icon

export const PlasmicToolspage__VariantProps = new Array();

export const PlasmicToolspage__ArgProps = new Array();

function PlasmicToolspage__RenderFunc(props) {
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
            data-plasmic-name={"figmaPaste"}
            data-plasmic-override={overrides.figmaPaste}
            className={classNames(projectcss.all, sty.figmaPaste)}
          >
            <Rectangle7Icon
              className={classNames(projectcss.all, sty.svg__mN7AX)}
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
                sty.text__pPp7C
              )}
            >
              {"Username"}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__gvJ5
              )}
              href={`/expensespage`}
            >
              {"Expenses"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__wX8Cy
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
                sty.link__dG2A
              )}
              href={`/projectspage`}
            >
              {"Projects"}
            </a>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sybdH
              )}
            >
              {"Tools"}
            </div>

            <div
              data-plasmic-name={"fullToolStorageBox"}
              data-plasmic-override={overrides.fullToolStorageBox}
              className={classNames(projectcss.all, sty.fullToolStorageBox)}
            />

            <div
              data-plasmic-name={"project"}
              data-plasmic-override={overrides.project}
              className={classNames(projectcss.all, sty.project)}
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

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__k9R64
              )}
            >
              {"Log out"}
            </div>

            <div
              data-plasmic-name={"logout"}
              data-plasmic-override={overrides.logout}
              className={classNames(projectcss.all, sty.logout)}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame36"}
              data-plasmic-override={overrides.frame36}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame36)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__d34GO
                )}
              >
                {"Tool ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame39"}
              data-plasmic-override={overrides.frame39}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame39)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__osSCp
                )}
              >
                {"Tool ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame38"}
              data-plasmic-override={overrides.frame38}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame38)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nfDiN
                )}
              >
                {"Tool ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame37"}
              data-plasmic-override={overrides.frame37}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame37)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__awNy0
                )}
              >
                {"M-001"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame40"}
              data-plasmic-override={overrides.frame40}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame40)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___95AZn
                )}
              >
                {"K-002"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame65"}
              data-plasmic-override={overrides.frame65}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame65)}
            >
              <div
                data-plasmic-name={"responsible"}
                data-plasmic-override={overrides.responsible}
                className={classNames(projectcss.all, sty.responsible)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uR18P
                  )}
                >
                  {"Responsible"}
                </div>
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame66"}
              data-plasmic-override={overrides.frame66}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame66)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rpLkT
                )}
              >
                {"Admin"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame67"}
              data-plasmic-override={overrides.frame67}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame67)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8AHn9
                )}
              >
                {"Zinab"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame68"}
              data-plasmic-override={overrides.frame68}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame68)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nkY1V
                )}
              >
                {"Adama"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame69"}
              data-plasmic-override={overrides.frame69}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame69)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xmiU
                )}
              >
                {"Admin"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame55"}
              data-plasmic-override={overrides.frame55}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame55)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vmlA
                )}
              >
                {"Disponibilité"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame56"}
              data-plasmic-override={overrides.frame56}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame56)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6VIe6
                )}
              >
                {"30/07/22"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame57"}
              data-plasmic-override={overrides.frame57}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame57)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sK27K
                )}
              >
                {"30/07/22"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame58"}
              data-plasmic-override={overrides.frame58}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame58)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lhBVz
                )}
              >
                {"30/07/22"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame59"}
              data-plasmic-override={overrides.frame59}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame59)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wmee0
                )}
              >
                {"30/07/22"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame50"}
              data-plasmic-override={overrides.frame50}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame50)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8JNz
                )}
              >
                {"Durée"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame51"}
              data-plasmic-override={overrides.frame51}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame51)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jJz94
                )}
              >
                {"4"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame52"}
              data-plasmic-override={overrides.frame52}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame52)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2OYaq
                )}
              >
                {"1"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame53"}
              data-plasmic-override={overrides.frame53}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame53)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cyro0
                )}
              >
                {"2"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame54"}
              data-plasmic-override={overrides.frame54}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame54)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__q0XZ1
                )}
              >
                {"0"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame45"}
              data-plasmic-override={overrides.frame45}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame45)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__p3Hmf
                )}
              >
                {"Type"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame46"}
              data-plasmic-override={overrides.frame46}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame46)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dfhy9
                )}
              >
                {"Tool ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame47"}
              data-plasmic-override={overrides.frame47}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame47)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zK7Wr
                )}
              >
                {"Tool ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame48"}
              data-plasmic-override={overrides.frame48}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame48)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ac98M
                )}
              >
                {"Véhicule"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame49"}
              data-plasmic-override={overrides.frame49}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame49)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bMmIf
                )}
              >
                {"Ordinanteur"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame60"}
              data-plasmic-override={overrides.frame60}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame60)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__n3KpL
                )}
              >
                {"Statut"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame61"}
              data-plasmic-override={overrides.frame61}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame61)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gMuSw
                )}
              >
                {"Tool ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame62"}
              data-plasmic-override={overrides.frame62}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame62)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hl6PZ
                )}
              >
                {"Tool ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame63"}
              data-plasmic-override={overrides.frame63}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame63)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lKfe7
                )}
              >
                {"reservé"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame64"}
              data-plasmic-override={overrides.frame64}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame64)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__peClh
                )}
              >
                {"disponible"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame41"}
              data-plasmic-override={overrides.frame41}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame41)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___72Ug
                )}
              >
                {"Nom"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame42"}
              data-plasmic-override={overrides.frame42}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame42)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kh3DJ
                )}
              >
                {"Tool ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame43"}
              data-plasmic-override={overrides.frame43}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame43)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sUxrn
                )}
              >
                {"Tool ID"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame44"}
              data-plasmic-override={overrides.frame44}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame44)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dFquv
                )}
              >
                {"Toyota"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame70"}
              data-plasmic-override={overrides.frame70}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame70)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yO0TG
                )}
              >
                {"HP 505"}
              </div>
            </p.Stack>

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
              data-plasmic-name={"plus2"}
              data-plasmic-override={overrides.plus2}
              className={classNames(projectcss.all, sty.plus2)}
            />

            <div
              data-plasmic-name={"plus3"}
              data-plasmic-override={overrides.plus3}
              className={classNames(projectcss.all, sty.plus3)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__u4XKa
              )}
            >
              {"Place a request"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oWgiq
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
                sty.text__mqnRe
              )}
            >
              {"Search"}
            </div>

            <div
              data-plasmic-name={"search2"}
              data-plasmic-override={overrides.search2}
              className={classNames(projectcss.all, sty.search2)}
            />

            <div
              data-plasmic-name={"noEntry"}
              data-plasmic-override={overrides.noEntry}
              className={classNames(projectcss.all, sty.noEntry)}
            />

            <div
              data-plasmic-name={"noEntry2"}
              data-plasmic-override={overrides.noEntry2}
              className={classNames(projectcss.all, sty.noEntry2)}
            />

            <Arrow1Icon
              className={classNames(projectcss.all, sty.svg__qhE2X)}
              role={"img"}
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
                sty.text__dBQga
              )}
            >
              {"Company Logo"}
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
    "figmaPaste",
    "rectangle15",
    "fullToolStorageBox",
    "project",
    "cost",
    "speed",
    "user",
    "logout",
    "frame36",
    "frame39",
    "frame38",
    "frame37",
    "frame40",
    "frame65",
    "responsible",
    "frame66",
    "frame67",
    "frame68",
    "frame69",
    "frame55",
    "frame56",
    "frame57",
    "frame58",
    "frame59",
    "frame50",
    "frame51",
    "frame52",
    "frame53",
    "frame54",
    "frame45",
    "frame46",
    "frame47",
    "frame48",
    "frame49",
    "frame60",
    "frame61",
    "frame62",
    "frame63",
    "frame64",
    "frame41",
    "frame42",
    "frame43",
    "frame44",
    "frame70",
    "rectangle23",
    "search",
    "plus",
    "plus2",
    "plus3",
    "rectangle24",
    "search2",
    "noEntry",
    "noEntry2",
    "rectangle64"
  ],

  figmaPaste: [
    "figmaPaste",
    "rectangle15",
    "fullToolStorageBox",
    "project",
    "cost",
    "speed",
    "user",
    "logout",
    "frame36",
    "frame39",
    "frame38",
    "frame37",
    "frame40",
    "frame65",
    "responsible",
    "frame66",
    "frame67",
    "frame68",
    "frame69",
    "frame55",
    "frame56",
    "frame57",
    "frame58",
    "frame59",
    "frame50",
    "frame51",
    "frame52",
    "frame53",
    "frame54",
    "frame45",
    "frame46",
    "frame47",
    "frame48",
    "frame49",
    "frame60",
    "frame61",
    "frame62",
    "frame63",
    "frame64",
    "frame41",
    "frame42",
    "frame43",
    "frame44",
    "frame70",
    "rectangle23",
    "search",
    "plus",
    "plus2",
    "plus3",
    "rectangle24",
    "search2",
    "noEntry",
    "noEntry2",
    "rectangle64"
  ],

  rectangle15: ["rectangle15"],
  fullToolStorageBox: ["fullToolStorageBox"],
  project: ["project"],
  cost: ["cost"],
  speed: ["speed"],
  user: ["user"],
  logout: ["logout"],
  frame36: ["frame36"],
  frame39: ["frame39"],
  frame38: ["frame38"],
  frame37: ["frame37"],
  frame40: ["frame40"],
  frame65: ["frame65", "responsible"],
  responsible: ["responsible"],
  frame66: ["frame66"],
  frame67: ["frame67"],
  frame68: ["frame68"],
  frame69: ["frame69"],
  frame55: ["frame55"],
  frame56: ["frame56"],
  frame57: ["frame57"],
  frame58: ["frame58"],
  frame59: ["frame59"],
  frame50: ["frame50"],
  frame51: ["frame51"],
  frame52: ["frame52"],
  frame53: ["frame53"],
  frame54: ["frame54"],
  frame45: ["frame45"],
  frame46: ["frame46"],
  frame47: ["frame47"],
  frame48: ["frame48"],
  frame49: ["frame49"],
  frame60: ["frame60"],
  frame61: ["frame61"],
  frame62: ["frame62"],
  frame63: ["frame63"],
  frame64: ["frame64"],
  frame41: ["frame41"],
  frame42: ["frame42"],
  frame43: ["frame43"],
  frame44: ["frame44"],
  frame70: ["frame70"],
  rectangle23: ["rectangle23"],
  search: ["search"],
  plus: ["plus"],
  plus2: ["plus2"],
  plus3: ["plus3"],
  rectangle24: ["rectangle24"],
  search2: ["search2"],
  noEntry: ["noEntry"],
  noEntry2: ["noEntry2"],
  rectangle64: ["rectangle64"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicToolspage__ArgProps,
          internalVariantPropNames: PlasmicToolspage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicToolspage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicToolspage";
  } else {
    func.displayName = `PlasmicToolspage.${nodeName}`;
  }
  return func;
}

export const PlasmicToolspage = Object.assign(
  // Top-level PlasmicToolspage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    figmaPaste: makeNodeComponent("figmaPaste"),
    rectangle15: makeNodeComponent("rectangle15"),
    fullToolStorageBox: makeNodeComponent("fullToolStorageBox"),
    project: makeNodeComponent("project"),
    cost: makeNodeComponent("cost"),
    speed: makeNodeComponent("speed"),
    user: makeNodeComponent("user"),
    logout: makeNodeComponent("logout"),
    frame36: makeNodeComponent("frame36"),
    frame39: makeNodeComponent("frame39"),
    frame38: makeNodeComponent("frame38"),
    frame37: makeNodeComponent("frame37"),
    frame40: makeNodeComponent("frame40"),
    frame65: makeNodeComponent("frame65"),
    responsible: makeNodeComponent("responsible"),
    frame66: makeNodeComponent("frame66"),
    frame67: makeNodeComponent("frame67"),
    frame68: makeNodeComponent("frame68"),
    frame69: makeNodeComponent("frame69"),
    frame55: makeNodeComponent("frame55"),
    frame56: makeNodeComponent("frame56"),
    frame57: makeNodeComponent("frame57"),
    frame58: makeNodeComponent("frame58"),
    frame59: makeNodeComponent("frame59"),
    frame50: makeNodeComponent("frame50"),
    frame51: makeNodeComponent("frame51"),
    frame52: makeNodeComponent("frame52"),
    frame53: makeNodeComponent("frame53"),
    frame54: makeNodeComponent("frame54"),
    frame45: makeNodeComponent("frame45"),
    frame46: makeNodeComponent("frame46"),
    frame47: makeNodeComponent("frame47"),
    frame48: makeNodeComponent("frame48"),
    frame49: makeNodeComponent("frame49"),
    frame60: makeNodeComponent("frame60"),
    frame61: makeNodeComponent("frame61"),
    frame62: makeNodeComponent("frame62"),
    frame63: makeNodeComponent("frame63"),
    frame64: makeNodeComponent("frame64"),
    frame41: makeNodeComponent("frame41"),
    frame42: makeNodeComponent("frame42"),
    frame43: makeNodeComponent("frame43"),
    frame44: makeNodeComponent("frame44"),
    frame70: makeNodeComponent("frame70"),
    rectangle23: makeNodeComponent("rectangle23"),
    search: makeNodeComponent("search"),
    plus: makeNodeComponent("plus"),
    plus2: makeNodeComponent("plus2"),
    plus3: makeNodeComponent("plus3"),
    rectangle24: makeNodeComponent("rectangle24"),
    search2: makeNodeComponent("search2"),
    noEntry: makeNodeComponent("noEntry"),
    noEntry2: makeNodeComponent("noEntry2"),
    rectangle64: makeNodeComponent("rectangle64"),
    // Metadata about props expected for PlasmicToolspage
    internalVariantProps: PlasmicToolspage__VariantProps,
    internalArgProps: PlasmicToolspage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicToolspage;
/* prettier-ignore-end */
