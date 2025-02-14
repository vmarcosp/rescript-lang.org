// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Url from "./Url.mjs";
import * as Meta from "../components/Meta.mjs";
import * as Next from "../bindings/Next.mjs";
import * as React from "react";
import * as Belt_List from "rescript/lib/es6/belt_List.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as MainLayout from "../layouts/MainLayout.mjs";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as JsDocsLayout from "../layouts/JsDocsLayout.mjs";
import * as DomDocsLayout from "../layouts/DomDocsLayout.mjs";
import * as BeltDocsLayout from "../layouts/BeltDocsLayout.mjs";
import * as DocFrontmatter from "./DocFrontmatter.mjs";
import * as CommunityLayout from "../layouts/CommunityLayout.mjs";
import * as ReactDocsLayout from "../layouts/ReactDocsLayout.mjs";
import * as ManualDocsLayout from "../layouts/ManualDocsLayout.mjs";
import * as ApiOverviewLayout from "../layouts/ApiOverviewLayout.mjs";
import * as GenTypeDocsLayout from "../layouts/GenTypeDocsLayout.mjs";
import * as JsDocsLayout8_0_0 from "../layouts/JsDocsLayout8_0_0.mjs";
import * as LandingPageLayout from "../layouts/LandingPageLayout.mjs";
import * as DomDocsLayout8_0_0 from "../layouts/DomDocsLayout8_0_0.mjs";
import * as BeltDocsLayout8_0_0 from "../layouts/BeltDocsLayout8_0_0.mjs";
import * as ApiOverviewLayout8_0_0 from "../layouts/ApiOverviewLayout8_0_0.mjs";
import * as ReasonCompilerDocsLayout from "../layouts/ReasonCompilerDocsLayout.mjs";

let hljs = require('highlight.js/lib/core');
  let js = require('highlight.js/lib/languages/javascript');
  let css = require('highlight.js/lib/languages/css');
  let ocaml = require('highlight.js/lib/languages/ocaml');
  let reason = require('plugins/reason-highlightjs');
  let rescript = require('plugins/rescript-highlightjs');
  let bash = require('highlight.js/lib/languages/bash');
  let json = require('highlight.js/lib/languages/json');
  let html = require('highlight.js/lib/languages/xml');
  let text = require('highlight.js/lib/languages/plaintext');
  let diff = require('highlight.js/lib/languages/diff');

  hljs.registerLanguage('reason', reason);
  hljs.registerLanguage('rescript', rescript);
  hljs.registerLanguage('javascript', js);
  hljs.registerLanguage('css', css);
  hljs.registerLanguage('ts', js);
  hljs.registerLanguage('ocaml', ocaml);
  hljs.registerLanguage('sh', bash);
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('text', text);
  hljs.registerLanguage('html', html);
  hljs.registerLanguage('diff', diff);
;

function make(props) {
  var component = props.Component;
  var pageProps = props.pageProps;
  var router = Next.Router.useRouter(undefined);
  var content = React.createElement(component, pageProps);
  var url = Url.parse(router.route);
  var base = url.base;
  var exit = 0;
  var len = base.length;
  if (len >= 3) {
    exit = 1;
  } else {
    switch (len) {
      case 0 :
          if (url.pagepath.length === 0) {
            return React.createElement(LandingPageLayout.make, {
                        children: content
                      });
          }
          exit = 1;
          break;
      case 1 :
          exit = 1;
          break;
      case 2 :
          var match = base[0];
          if (match === "docs") {
            var match$1 = base[1];
            switch (match$1) {
              case "gentype" :
                  if (url.version === 0) {
                    return React.createElement(GenTypeDocsLayout.make, {
                                frontmatter: component.frontmatter,
                                children: content
                              });
                  }
                  exit = 1;
                  break;
              case "manual" :
                  var pagepath = url.pagepath;
                  var version = url.version;
                  var match$2 = Belt_Array.get(pagepath, 0);
                  var exit$1 = 0;
                  if (match$2 === "api") {
                    if (typeof version === "number") {
                      if (version !== 0) {
                        return content;
                      }
                      var match$3 = pagepath.length;
                      var match$4 = Belt_Array.get(pagepath, 1);
                      var exit$2 = 0;
                      if (match$3 === 1) {
                        return React.createElement(ApiOverviewLayout.Docs.make, {
                                    children: content
                                  });
                      }
                      if (match$3 !== 2) {
                        exit$2 = 3;
                      } else {
                        if (match$4 === undefined) {
                          return null;
                        }
                        switch (match$4) {
                          case "belt" :
                              return React.createElement(BeltDocsLayout.Prose.make, {
                                          children: content
                                        });
                          case "js" :
                              return React.createElement(JsDocsLayout.Prose.make, {
                                          children: content
                                        });
                          default:
                            exit$2 = 3;
                        }
                      }
                      if (exit$2 === 3) {
                        if (match$4 === undefined) {
                          return null;
                        }
                        switch (match$4) {
                          case "belt" :
                              return React.createElement(BeltDocsLayout.Docs.make, {
                                          children: content
                                        });
                          case "dom" :
                              return React.createElement(DomDocsLayout.Docs.make, {
                                          children: content
                                        });
                          case "js" :
                              return React.createElement(JsDocsLayout.Docs.make, {
                                          children: content
                                        });
                          default:
                            return null;
                        }
                      }
                      
                    } else {
                      if (version._0 !== "v8.0.0") {
                        return content;
                      }
                      var match$5 = pagepath.length;
                      var match$6 = Belt_Array.get(pagepath, 1);
                      var exit$3 = 0;
                      if (match$5 === 1) {
                        return React.createElement(ApiOverviewLayout8_0_0.Docs.make, {
                                    children: content
                                  });
                      }
                      if (match$5 !== 2) {
                        exit$3 = 3;
                      } else {
                        if (match$6 === undefined) {
                          return null;
                        }
                        switch (match$6) {
                          case "belt" :
                              return React.createElement(BeltDocsLayout8_0_0.Prose.make, {
                                          children: content
                                        });
                          case "js" :
                              return React.createElement(JsDocsLayout8_0_0.Prose.make, {
                                          children: content
                                        });
                          default:
                            exit$3 = 3;
                        }
                      }
                      if (exit$3 === 3) {
                        if (match$6 === undefined) {
                          return null;
                        }
                        switch (match$6) {
                          case "belt" :
                              return React.createElement(BeltDocsLayout8_0_0.Docs.make, {
                                          children: content
                                        });
                          case "dom" :
                              return React.createElement(DomDocsLayout8_0_0.Docs.make, {
                                          children: content
                                        });
                          case "js" :
                              return React.createElement(JsDocsLayout8_0_0.Docs.make, {
                                          children: content
                                        });
                          default:
                            return null;
                        }
                      }
                      
                    }
                  } else {
                    exit$1 = 2;
                  }
                  if (exit$1 === 2) {
                    if (typeof version === "number") {
                      if (version !== 0) {
                        return null;
                      } else {
                        return React.createElement(ManualDocsLayout.Latest.make, {
                                    frontmatter: component.frontmatter,
                                    children: content
                                  });
                      }
                    }
                    switch (version._0) {
                      case "v8.0.0" :
                          return React.createElement(ManualDocsLayout.V800.make, {
                                      frontmatter: component.frontmatter,
                                      children: content
                                    });
                      case "v9.0.0" :
                          return React.createElement(ManualDocsLayout.V900.make, {
                                      frontmatter: component.frontmatter,
                                      children: content
                                    });
                      default:
                        return null;
                    }
                  }
                  break;
              case "react" :
                  var version$1 = url.version;
                  if (typeof version$1 === "number") {
                    if (version$1 !== 0) {
                      return null;
                    } else {
                      return React.createElement(ReactDocsLayout.Latest.make, {
                                  frontmatter: component.frontmatter,
                                  children: content
                                });
                    }
                  } else if (version$1._0 === "v0.10.0") {
                    return React.createElement(ReactDocsLayout.V0100.make, {
                                frontmatter: component.frontmatter,
                                children: content
                              });
                  } else {
                    return null;
                  }
              case "reason-compiler" :
                  if (url.version === 0) {
                    return React.createElement(ReasonCompilerDocsLayout.make, {
                                children: content
                              });
                  }
                  exit = 1;
                  break;
              default:
                exit = 1;
            }
          } else {
            exit = 1;
          }
          break;
      
    }
  }
  if (exit === 1) {
    var match$7 = Belt_List.fromArray(base);
    var exit$4 = 0;
    if (match$7) {
      switch (match$7.hd) {
        case "blog" :
            return content;
        case "community" :
            return React.createElement(CommunityLayout.make, {
                        frontmatter: component.frontmatter,
                        children: content
                      });
        case "packages" :
        case "try" :
            if (!match$7.tl) {
              return content;
            }
            exit$4 = 2;
            break;
        default:
          exit$4 = 2;
      }
    } else {
      exit$4 = 2;
    }
    if (exit$4 === 2) {
      var fm = DocFrontmatter.decode(component.frontmatter);
      var match$8 = url.base;
      var title;
      var exit$5 = 0;
      if (match$8.length !== 1) {
        exit$5 = 3;
      } else {
        var match$9 = match$8[0];
        if (match$9 === "docs") {
          title = "Overview | ReScript Documentation";
        } else {
          exit$5 = 3;
        }
      }
      if (exit$5 === 3) {
        title = Belt_Option.map(fm, (function (fm) {
                return fm.title;
              }));
      }
      var description = Belt_Option.flatMap(fm, (function (fm) {
              return Caml_option.null_to_opt(fm.description);
            }));
      var tmp = {};
      if (description !== undefined) {
        tmp.description = description;
      }
      if (title !== undefined) {
        tmp.title = title;
      }
      return React.createElement(MainLayout.make, {
                  children: null
                }, React.createElement(Meta.make, tmp), React.createElement("div", {
                      className: "flex justify-center"
                    }, React.createElement("div", {
                          className: "max-w-740 w-full"
                        }, content)));
    }
    
  }
  
}

export {
  make ,
}
/*  Not a pure module */
