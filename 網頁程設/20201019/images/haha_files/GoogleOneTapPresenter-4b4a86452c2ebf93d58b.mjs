(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["GoogleOneTapPresenter",10,52,134,"PinRepEditButtonCommon"],{"+lzj":function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var i=n("vzKb"),o=n("3/Bf");const a={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null},r=()=>{a.longTaskDurations=[]},s=()=>a,c=async()=>{const e=({name:e,value:t,isFinal:n})=>{n&&("CLS"===e?Object(o.e)(e,100*t):Object(o.e)(e,t))};Object(i.a)({entryTypes:["longtask"]},e=>{e.getEntries().map(e=>a.longTaskDurations.push(e.duration))},()=>r()),Object(i.a)({type:"first-input",buffered:!0},(e,t)=>{const n=e.getEntries()[0];n&&n.startTime&&n.processingStart&&(a.firstInputDelay={startTime:n.startTime,endTime:n.processingStart}),t.disconnect()},()=>{a.firstInputDelay=null}),Object(i.a)({type:"largest-contentful-paint",buffered:!0},e=>{const t=e.getEntries(),n=t[t.length-1];n&&(a.largestContentfulPaint=n.renderTime||n.loadTime||null)}),Object(i.a)({type:"layout-shift",buffered:!0},e=>{e.getEntries().forEach(e=>{e.hadRecentInput||(a.cumulativeLayoutShiftScore+=e.value)})});try{const{getCLS:t,getFID:i,getLCP:o}=await n.e(474).then(n.bind(null,"w6Sm"));i(e),o(e,!0),t(e,!0)}catch(t){}}},"0YPa":function(e,t,n){var i=n("q1tI");t.a=(e,t)=>{const n=Object(i.useRef)(()=>{});Object(i.useEffect)(()=>{n.current=e},[e]),Object(i.useEffect)(()=>{if(null===t)return()=>{};const e=setInterval(()=>n.current(),t);return()=>clearInterval(e)},[t])}},"3/Bf":function(e,t,n){n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return f}));var i=n("7w6Q"),o=n("FZ8N"),a=n("LrH5");const r=Object(a.a)("logPwtStats");let s=null;const c=i.a.getSampleRate(.2);let l=!0;const u=e=>{s=e},d=e=>{s&&(s.historyAction=e)},p=e=>{s&&(s.initialAppLoadSurface=e)},g=(e,t)=>{if(!s)return void i.a.increment("performanceEntries.no_context",c,{name:e});const{deviceType:n,initialAppLoadSurface:a,isBot:r,isSocialBot:l}=s;if(!a)return void i.a.increment("performanceEntries.no_surface",c,{name:e});const u=`performanceEntries.${(l?"socialBot":r&&"bot")||"nonbot"}.${n}.${a}.${e}`;o.c||i.a.timing(u,t,c)},m=(e,t)=>{if(!s)return r("pwt.metrics_quality.no_context"),void i.a.increment("pwt.metrics_quality.no_context",c,{eventName:e});const{browserName:n,browserVersion:a,deviceType:l,isBot:u,isSocialBot:d}=s,p=`pwt.${(d?"socialBot":u&&"bot")||"nonbot"}.metrics_quality.${l}.${e}`,g={...(null==t?void 0:t.tags)||{},browserName:n,browserVersion:(null==a?void 0:a.split(".")[0])||"0"},m=null==t?void 0:t.count;r(`${p}: ${"number"==typeof m?m:1}`),(null==t?void 0:t.tags)&&r(Object.entries(t.tags)),o.c||i.a.count(p,"number"==typeof m?m:1,c,g)},h=(e,t)=>m(`ERROR.${(null==t?void 0:t.action)?t.action+".":""}${e}`,{tags:t}),f=({appLoadName:e,clientNavName:t},n)=>{if(s){const i="APP_VOLUME.";l?(m(i.concat(e),{tags:{browserSupportsPwtProfiler:!!n}}),l=!1):"PUSH"===s.historyAction&&m(i.concat(t),{tags:{browserSupportsPwtProfiler:!!n}})}else i.a.increment("pwt.metrics_quality.no_context",c,{eventName:e.concat("."+t)})}},"3R0Q":function(e,t,n){t.a=e=>{const t={};e.forEach(({label:e,timestamp:n})=>{t[e]=(t[e]||[]).concat([n])});const n={};return Object.keys(t).forEach(e=>{(t[e]||[]).forEach((t,i)=>{n[i?`${e}_${i+1}`:e]=t})}),n}},EHyI:function(e,t,n){n.d(t,"a",(function(){return r}));var i=()=>{var e;return!!(null===(e=window.performance)||void 0===e?void 0:e.timing)},o=n("XtwW"),a=n("gg0E");function r(e){return!("desktop"===e&&!i())&&(!!o.a&&Object(a.a)())}},FZ8N:function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));const i=window.location.search.includes("debug_tracing"),o=window.location.search.includes("debug_lab_tracing"),a=i||o},FylZ:function(e,t,n){function i(){let e="";for(let t=0;t<16;t+=1){e+="0123456789abcdef"[Math.floor(16*Math.random())]}return e}n.d(t,"a",(function(){return i}))},HMdf:function(e,t,n){n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return h}));var i=n("vzKb"),o=n("SyXB");function a(e){var t,n;return(null===(t=window)||void 0===t||null===(n=t.performance)||void 0===n?void 0:n.getEntriesByType)&&window.performance.getEntriesByType(e)||[]}var r=n("FZ8N"),s=n("3/Bf");let c;function l(){window.performance&&window.performance.clearResourceTimings&&(Object(o.c)("resourceBufferCleared"),r.b&&console.info("Warning: Clearing resource timings in default buffer."),Object(s.c)("resourceBufferSize",{count:a("resource").length}),window.performance.clearResourceTimings())}const u=({size:e})=>{if(window.performance){window.PerformanceObserver?(c=a("resource"),Object(i.a)({entryTypes:["resource"]},t=>{c=(c||[]).concat(t.getEntries()),c.length>e&&(c=c.slice(-e))})):(window.addEventListener("popstate",()=>{a("resource").length>e&&l()}),window.performance.setResourceTimingBufferSize&&window.performance.setResourceTimingBufferSize(e));try{window.performance.onresourcetimingbufferfull=()=>{c||l()}}catch(t){}}},d=()=>c||a("resource"),p=()=>{c&&(Object(s.c)("customBufferSize",{count:c.length}),c=[]),l()},g=()=>({customBufferSize:c?c.length:0,defaultBufferSize:a("resource").length}),m=(e,t=!0)=>{let n=0,i=0;const o=(a=e.filter(e=>t?(e.responseEnd||"img"!==e.initiatorType||(n+=1),e.transferSize||"img"!==e.initiatorType||(i+=1),!!e.responseEnd&&!!e.transferSize&&"img"===e.initiatorType):!!e.responseEnd&&!!e.transferSize).map(e=>8*(e.transferSize||0)/((e.responseEnd-e.responseStart)/1e3)/1e3)).length?a.reduce((e,t)=>e+t,0)/a.length:null;var a;return t&&(n>0&&Object(s.c)("images.downloadSpeed.noResponseEnd",{tags:{count:n}}),i>0&&Object(s.c)("images.downloadSpeed.transferSize",{tags:{count:i}})),o},h=()=>(e=>{if(!e)return"unknown";const t=Math.floor(e/1e3);return t<1?"0-1":t<5?"1-5":t<10?"5-10":t<20?"10-20":t<40?"20-40":t<80?"40-80":"80_or_above"})(m(d()))},LrH5:function(e,t,n){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var i=n("FZ8N");const o=(e,t)=>{i.b&&e instanceof HTMLImageElement&&(e.style.outline="10px solid "+t,e.style.outlineOffset="-30px")},a=e=>(t,...n)=>{i.b&&console.log("string"==typeof t?`[PWT:${e}] ${t}`:t,...n)}},SyXB:function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return u}));var i=n("XtwW");const o="masonryPagination";let a={};const r=e=>"📌 "+e,s=()=>{const e={};return Object.keys(a).forEach(t=>{(a[t]||[]).slice(0,3).forEach((n,i)=>{e[i?`${t}_${i+1}`:t]=n})}),e},c=(e,t)=>(a[e]||[]).filter(e=>e<t).length,l=(e,t)=>c(e,t)>0,u=()=>{i.a&&Object.keys(a).forEach(e=>((e,t)=>{const n=r(t);e.clearMarks(n),e.clearMeasures(n)})(i.a,e)),a={}};t.c=e=>{i.a&&(a[e]=(a[e]||[]).concat([i.a.now()]),((e,t)=>{const n=r(t);e.mark(n),e.measure(n)})(i.a,e))}},TbPR:function(e,t,n){n.r(t);var i=n("q1tI"),o=n.n(i),a=n("/MKj"),r=n("gxu6"),s=n("JW66"),c=n("iFas"),l=n("Ye/N"),u=n("37no"),d=n("x/Ro"),p=n("NSVK"),g=n("Yhte"),m=n("kmwA"),h=n("28DW"),f=n("WX9e"),b=n("DrcS"),_=n("IRjL"),y=n("/5zs"),w=n("U4JR"),O=n("n6mq");function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class v extends i.Component{constructor(...e){super(...e),S(this,"state",{animationMinHeight:-1,showRegisterRequestLoading:!1}),S(this,"mountStyle",()=>this.setState({showRegisterRequestLoading:!0})),S(this,"requestAnimationFrameId",null),S(this,"handleLoginButtonClick",({event:e})=>{Object(h.a)(`unauth.google_one_tap.confirmation_dialog.${this.props.loggingId}.login_click`),this.clearDelayedSignupTimeout(),e&&(e.preventDefault(),e.stopPropagation()),this.props.handleLogin()})}componentDidMount(){const e=1e3*this.props.signupDelay;this.delayedSignupTimeoutId=window.setTimeout(()=>{Object(h.a)(`unauth.google_one_tap.confirmation_dialog.${this.props.loggingId}.signup_delay_timer_reached`),this.requestAnimationFrameId=window.requestAnimationFrame(this.mountStyle),this.props.handleSignup()},e)}componentWillUnmount(){this.clearDelayedSignupTimeout(),this.cancelAnimationFrame()}clearDelayedSignupTimeout(){this.delayedSignupTimeoutId&&window.clearTimeout(this.delayedSignupTimeoutId)}cancelAnimationFrame(){this.requestAnimationFrameId&&window.cancelAnimationFrame(this.requestAnimationFrameId)}render(){const{animationMinHeight:e,showRegisterRequestLoading:t}=this.state,n={transitionProperty:"min-height",transitionDuration:"500ms",transitionTimingFunction:"ease-in-out"};if(e>=0){let o=e;t&&(o=0),Object.assign({},n,{minHeight:(i=o,i+"px")})}var i;return o.a.createElement("div",{style:n,ref:e=>{!e||this.state.showRegisterRequestLoading||this.state.animationMinHeight>0||this.setState({animationMinHeight:e.clientHeight})}},o.a.createElement(O.d,{direction:"column",display:"flex",flex:"grow",justifyContent:"center",alignItems:"center"},o.a.createElement(O.d,null,o.a.createElement(O.U,{align:"center",weight:"bold"},o.a.createElement("span",{className:"deprecatedTextSizeXL"},t?l.a._("Finishing up...","Title of a dialog telling the user that an account is almost done being created.","Title of a dialog telling the user that an account is almost done being created."):l.a._("Creating your account...","Title of a dialog telling the user that an account is being created.","Title of a dialog telling the user that an account is being created.")))),o.a.createElement(O.d,{paddingY:4},o.a.createElement(O.N,{accessibilityLabel:l.a._("Account is being created","Accessibility label for account creation loading dialog","Accessibility label for account creation loading dialog"),show:!0})),t?null:o.a.createElement(O.d,{marginTop:2},o.a.createElement(O.U,{inline:!0,align:"center"},l.a._("Didn’t mean to create a new account?","Description text telling the user that they can log in if they did not intend to create a new account","Description text telling the user that they can log in if they did not intend to create a new account"))),t?null:o.a.createElement(O.d,null,o.a.createElement(O.U,{inline:!0,align:"center"},o.a.createElement(O.y,{inline:!0,href:"/login",onClick:this.handleLoginButtonClick},l.a._("Click here to log in.","Login button which will show the login modal and enable the user to log in","Login button which will show the login modal and enable the user to log in"))))))}}var T=v,E=n("shJ5"),j=n("H3gn");function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const L={modalOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)",opacity:1,position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",zIndex:1e3},staticContinueButtonLoginLink:{cursor:"pointer",fontWeight:"normal"}},k="delayedSignupLoadingSpinner",A="staticSignupLogin",I="staticSignupLoginWithTOS";class x extends i.Component{constructor(...e){super(...e),C(this,"handleCancelClick",()=>{this.trackScopedAction("cancel.click"),Object(w.a)(101,{element:73,view:10,viewParameter:3202}),this.props.handleCancelClick()}),C(this,"handleConfirmSignup",()=>{this.trackScopedAction("confirm.click"),Object(w.a)(101,{element:31,view:10,viewParameter:3202}),this.props.handleConfirmSignup(!1)}),C(this,"handleConfirmSignupWithSpinner",()=>{this.trackScopedAction("confirm.click"),Object(w.a)(101,{element:31,view:10,viewParameter:3202}),this.props.handleConfirmSignup(!0)}),C(this,"handleShowLogin",()=>{this.trackScopedAction("login.click"),Object(w.a)(101,{element:30,view:10,viewParameter:3202}),this.props.handleShowLogin()})}componentDidMount(){Object(w.a)(120,{viewParameter:3202}),this.disableBackgroundScrolling(),this.trackScopedAction("shown")}componentWillUnmount(){this.enableBackgroundScrolling()}trackScopedAction(e){Object(h.a)(`unauth.google_one_tap.confirmation_dialog.${this.props.step}.${e}`)}disableBackgroundScrolling(){document.body&&(document.body.style.overflow="hidden")}enableBackgroundScrolling(){document.body&&(document.body.style.overflow="")}renderDelayedSignupConfirmation(e){return o.a.createElement(T,{signupDelay:e,handleLogin:this.handleShowLogin,handleSignup:()=>{this.handleConfirmSignup()},loggingId:k})}renderContentInModalContainer(e){const{layoutStyle:t,loading:n}=this.props;return"top"===t?o.a.createElement("div",{style:L.modalOverlay},o.a.createElement(O.d,{color:"white",direction:"column",display:"flex",margin:6,padding:7,position:"fixed",right:!0,rounding:2,top:!0,width:376},n?o.a.createElement(E.a,null):null,e)):o.a.createElement("div",{style:L.modalOverlay},o.a.createElement(O.d,{bottom:!0,color:"white",direction:"column",display:"flex",height:168,padding:7,position:"fixed",width:"100%"},n?o.a.createElement(E.a,null):null,e))}renderStaticSignupLoginConfirmation(e){return o.a.createElement(O.d,null,o.a.createElement(O.d,{display:"inlineBlock",position:"absolute",top:!0,right:!0,marginTop:2,marginEnd:2},o.a.createElement(O.t,{accessibilityLabel:l.a._("Cancel","Button to close the signup/login modal","Button to close the signup/login modal"),icon:"cancel",onClick:this.handleCancelClick,size:"sm"})),o.a.createElement(O.U,{align:"left",weight:"bold"},o.a.createElement("span",{className:"deprecatedTextSizeXL"},l.a._("Continue to Pinterest","Title of a dialog telling enabling the user to continue with sign up or log in","Title of a dialog telling enabling the user to continue with sign up or log in"))),o.a.createElement(O.d,{marginTop:2},o.a.createElement(O.U,{align:"left"},l.a._("Hmm, it looks like you don't have an account yet. Let's get started!","Description text of a dialog asking the user to sign up for a Pinterest account","Description text of a dialog asking the user to sign up for a Pinterest account"))),o.a.createElement(O.d,{marginTop:5},o.a.createElement(O.e,{color:"red",onClick:this.handleConfirmSignupWithSpinner,text:l.a._("Sign up","Text on a button which will create an account when clicked","Text on a button which will create an account when clicked")})),o.a.createElement(O.d,{marginTop:2},o.a.createElement(O.e,{color:"gray",onClick:this.handleShowLogin,text:l.a._("Log in using a different method","Text on a button which will take the user to login when clicked.","Text on a button which will take the user to login when clicked.")})),e?o.a.createElement(O.d,{marginTop:4,marginStart:4,marginEnd:4},o.a.createElement(j.a,{dark:!0})):null)}render(){if(this.props.shouldHide)return null;let e=null;return this.props.step===k?e=this.renderDelayedSignupConfirmation(this.props.delayedSignupLoadingSpinnerDuration):this.props.step===A?e=this.renderStaticSignupLoginConfirmation(!1):this.props.step===I&&(e=this.renderStaticSignupLoginConfirmation(!0)),this.renderContentInModalContainer(e)}}var D=x;const N="disableUnauthGoogleOneTap";var B=n("VL22"),R=n("dG+H"),M=n("it2E"),G=n("pLLR"),P=n("ANjH"),$=n("4NNh");function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const q=["US","CA","NZ","AU"];class F extends i.Component{constructor(e){super(e),H(this,"annotateOneTapStopwatch",e=>Object(R.b)("google_autologin",e)),H(this,"abortOneTapStopwatch",e=>Object(R.a)("google_autologin",e)),H(this,"stopOneTapStopwatch",()=>Object(R.d)("google_autologin")),H(this,"onRetrieveCredentialsSuccess",(e,t)=>{r.b(N,"1",168),this.showLoading(),this.trackGoogleOneTapAction("success");const n={google_open_id_token:e,autologin:"auto"===t};this.login(n).then(e=>{this.onLoginSuccess(e)},e=>{this.onLoginFailure(n,t,e)}),this.trackSignupLoginEvent(7534)}),H(this,"onLoginSuccess",(e={})=>{const{nextUrl:t}=this.props;this.trackGoogleOneTapAction("login.success"),this.trackSignupLoginEvent(7536),t?p.b.handleRedirect(t):p.b.handleRedirectWithFallbackWindowLocation()}),H(this,"onLoginFailure",(e,t,n)=>{const{handleLoginError:i,handle2FALogin:o}=this.props;this.hideLoading();const a=n&&n.api_error_code||0;if(this.trackGoogleOneTapAction("login.error."+a),this.trackSignupLoginEvent(7535),a===s.a.LOGIN_USER_NOT_FOUND)"btn"===t?(this.setState({googleOpenId:e.google_open_id_token}),this.attemptSignup(!1)):this.showConfirmationDialog(e);else if(a===s.a.LOGIN_MFA_REQUIRED)o({gplus_id_token:e.google_open_id_token});else if(a===s.a.POLICY_VIOLATION_USER)this.setState({showAccountSuspended:!0});else{const e=l.a._("We couldn’t log you in with that account. Try the Google button!");Object(_.a)(e,null),i(n)}}),H(this,"onSignupSuccess",e=>{this.trackGoogleOneTapAction("signup.success"),this.trackSignupLoginEvent(7487);const{pageContext:t,requestContext:n}=this.props,i=new y.c(n,"web_unauth_got_signup_no_redirect_plp"),o=new y.c(n,"web_unauth_got_signup_no_redirect_blp");(null==t?void 0:t.pageType)===f.a.PIN&&i.enabled()||(null==t?void 0:t.pageType)===f.a.BOARD&&o.enabled()?p.b.handleSignupRedirect(p.b.defaultLoginRedirectUrl()):p.b.handleSignupRedirect("/")}),H(this,"onSignupFailure",e=>{const t=e&&e.api_error_code||0;this.trackGoogleOneTapAction("signup.error."+t),this.trackSignupLoginEvent(7488),this.hideLoading(),this.hideConfirmationDialog();const n=l.a._("We couldn’t sign you up with that account. Try the Google button!");Object(_.a)(n,null),this.props.handleSignupError()}),H(this,"trackGoogleOneTapAction",e=>{Object(h.a)("unauth.google_one_tap."+e)}),H(this,"handleCancelOneTap",()=>{this.hideConfirmationDialog()}),H(this,"inMandatoryAgeStepENCountriesExperiment",()=>{const{requestContext:{country:e,seoUnauthExperiments:t}}=this.props;return q.includes(e)&&(t.v2ActivateExperiment("web_unauth_mandatory_age_step_got_en")||"").startsWith("enabled")}),H(this,"attemptSignup",e=>{const{handleSignupConfirmed:t,pageContext:n,requestContext:i,showRegisterLoadingScreen:o}=this.props;e&&this.showLoading();const{googleOpenId:a}=this.state,r=Object($.b)(a),s={google_open_id_token:a,first_name:r.given_name,last_name:r.family_name,image_url:r.picture,container:c.a.GOOGLE_ONE_TAP,hybridTier:null==n?void 0:n.hybridTier,page:null==n?void 0:n.pageType};if(t&&(Object(B.d)(i.country)||this.inMandatoryAgeStepENCountriesExperiment()))return void t(B.a.GOOGLE_ONE_TAP,{},s);const l=new y.c(i,"web_unauth_google_one_tap_welcome").enabled();i.experiments.flush(),o&&l&&o(!0),b.a.register(s).then(this.onSignupSuccess,this.onSignupFailure),this.trackSignupLoginEvent(7537)}),H(this,"renderGoogleConfirmationDialog",(e,t)=>o.a.createElement(D,{delayedSignupLoadingSpinnerDuration:2,handleCancelClick:this.handleCancelOneTap,handleConfirmSignup:this.attemptSignup,handleShowLogin:this.props.handleShowLogin,layoutStyle:e,loading:this.state.loading,shouldHide:this.props.shouldHide,step:t})),this.state={confirmationDialogStep:void 0,googleOpenId:"",loading:!1,showAccountSuspended:!1}}componentDidMount(){const{pageContext:e,requestContext:t}=this.props;"1"!==r.a(N)&&!r.a("fba")||!t.isBot&&r.a("fba")?(this.setupGoogleOneTap(),t.isBot||Object(h.a)(`unauth_web_container.${c.a.GOOGLE_ONE_TAP}.${String(null==e?void 0:e.hybridTier)}.other.shown`)):this.abortOneTapStopwatch("disabled")}componentDidUpdate(e){this.props.shouldHide&&!e.shouldHide&&this.hide()}setupGoogleOneTap(){this.annotateOneTapStopwatch("beforeLoadOneTapScript"),Object(u.b)($.a).then(()=>{this.annotateOneTapStopwatch("afterLoadOneTapScript"),this.trackGoogleOneTapAction("gsi_script_loaded");const e=window.google;if(e&&e.accounts&&e.accounts.id){this.trackGoogleOneTapAction("sdk_exists");const t=e.accounts.id;t.initialize({client_id:m.a.settings.GPLUS_CLIENT_ID,auto_select:!r.a("fba"),callback:this.handleOneTapResponse.bind(this),cancel_on_tap_outside:!1,context:"use",activity_listener:this.handleActivity.bind(this)}),this.props.dispatch({type:"GOOGLE_ONE_TAP_INITIALIZED",payload:{}}),this.trackGoogleOneTapAction("initialize"),t.prompt(this.handleMomentNotification.bind(this))}else this.abortOneTapStopwatch("noAccountFound")})}handleMomentNotification(e){const t=e.getMomentType();if("display"===t){e.isDisplayed()?this.trackGoogleOneTapAction("display_moment.displayed"):this.trackGoogleOneTapAction("display_moment.not_displayed."+e.getNotDisplayedReason())}else"skipped"===t?this.trackGoogleOneTapAction("skipped_moment."+e.getSkippedReason()):"dismissed"===t&&this.trackGoogleOneTapAction("dismissed_moment."+e.getDismissedReason())}handleOneTapResponse(e){if(e){this.stopOneTapStopwatch();const t=e.select_by;this.trackGoogleOneTapAction("select_by."+t),this.onRetrieveCredentialsSuccess(e.credential,t)}else this.abortOneTapStopwatch("noResponse")}handleActivity(e){if(e){if("error"===e.type)return this.trackGoogleOneTapAction("error."+e.errorType),this.handleEmptyCredentials(),void this.props.dispatch({type:"GOOGLE_ONE_TAP_FAILED",payload:{}});const t="ui_change"===e.type?e.uiActivityType:e.userActivityType;this.trackGoogleOneTapAction(`activity.${e.type}.${t}`),"close_prompt"===t&&this.handleEmptyCredentials()}}handleEmptyCredentials(){this.props.handleEmptyCredentials&&this.props.handleEmptyCredentials()}hide(){this.hideConfirmationDialog()}trackSignupLoginEvent(e){const{viewer:t}=this.props;t.isAuth?Object(w.a)(e,{login_state:t.isLimitedLogin?2:1,signup_login_method:4}):Object(w.a)(e,{signup_login_method:4})}login(e){const{pageContext:t,requestContext:{seoUnauthExperiments:n}}=this.props,i={container:c.a.GOOGLE_ONE_TAP,hybridTier:null==t?void 0:t.hybridTier,page:null==t?void 0:t.pageType};return Object(d.a)(e,i,n)}showConfirmationDialog(e){const{container:t}=this.props;let n;n="InspiredWallSignup"===t?A:"login_page"===t?I:e.autologin?A:k,this.setState({googleOpenId:e.google_open_id_token,confirmationDialogStep:n})}hideConfirmationDialog(){this.setState({confirmationDialogStep:void 0})}showLoading(){this.setState({loading:!0})}hideLoading(){this.setState({loading:!1})}render(){const{requestContext:e}=this.props,{showAccountSuspended:t}=this.state;if(e.isBot)return null;if(t)return o.a.createElement(g.a,{onClose:()=>this.setState({showAccountSuspended:!1})});this.inMandatoryAgeStepENCountriesExperiment();const{confirmationDialogStep:n}=this.state;if(n){const e="top";return this.renderGoogleConfirmationDialog(e,n)}return null}}var U=Object(P.compose)(M.c,G.e,Object(a.connect)(e=>({viewer:e.viewer})))(F);function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class W extends i.Component{constructor(...e){super(...e),z(this,"state",{showGoogleOneTap:!0}),z(this,"hide",()=>{this.setState({showGoogleOneTap:!1})}),z(this,"reportFailureToShow",()=>{this.props.handleFailureToShow&&this.props.handleFailureToShow()})}render(){const{showGoogleOneTap:e}=this.state,{container:t,handleSignupConfirmed:n,handleLoginError:i,handleLoginWithMfa:a,handleSignupError:r,handleShowLogin:s,nextUrl:c,shouldHide:l,showRegisterLoadingScreen:u}=this.props;return e?o.a.createElement(U,{container:t,handleEmptyCredentials:this.hide,handle2FALogin:e=>{this.hide(),a(e)},handleLoginError:e=>{this.hide(),i(e)},handleSignupConfirmed:(e,t,i)=>{this.hide(),n&&n(e,t,i)},handleSignupError:()=>{this.hide(),r()},handleShowLogin:()=>{this.hide(),s()},nextUrl:c,reportFailureToShow:this.reportFailureToShow,showRegisterLoadingScreen:e=>{u&&(this.hide(),u(e))},shouldHide:l}):null}}z(W,"defaultProps",{container:"unknown",shouldHide:!1});t.default=W},XtwW:function(e,t,n){var i;t.a=(i=window.performance)&&i.clearMarks&&i.clearMeasures&&i.clearResourceTimings&&i.getEntries&&i.getEntriesByName&&i.getEntriesByType&&i.mark&&i.measure&&i.now&&i.setResourceTimingBufferSize?i:null},bNC6:function(e,t,n){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));const i={id:14,name:"own_profile"},o={id:15,name:"other_profile"},a={initial_app_load:{unauth:{board:{id:114,name:"board_page_interactive"},pin_closeup:{id:113,name:"pin_page_interactive"},other_profile:{id:115,name:"user_page_interactive"},topic:{id:119,name:"topic_page_interactive"},sterling_signup:{id:201,name:"sterling_signup_main_pageload"},sterling_login:{id:202,name:"sterling_login_main_pageload"}},auth:{bizhub:{id:607,name:"bizhub_pinteractive"},homefeed:{id:19,name:"home_feed_pinteractive"},sterling_reporting_details:{id:218,name:"sterling_reporting_details_pageload"},sterling_reporting_overview:{id:219,name:"sterling_reporting_overview_pageload"},sterling_ads_create:{id:221,name:"sterling_adscreate_main_pageload"},sterling_ads_duplicate:{id:206,name:"sterling_adsduplication_main_pageload"},sterling_ads_edit:{id:204,name:"sterling_adsedit_main_pageload"},sterling_billing_profile:{id:203,name:"sterling_billingprofile_main_pageload"},sterling_bulk_editor:{id:205,name:"sterling_bulkeditor_main_pageload"},sterling_pin_builder:{id:222,name:"sterling_adscreate_pinbuilder_pageload"}}},client_route_push:{unauth:{},auth:{bizhub:{id:608,name:"bizhub_page_render"},homefeed:{id:2,name:"home_feed_render"},search:{id:3,name:"search_feed_render"},pin_closeup:{id:13,name:"pin_closeup_details"},own_profile:i,other_profile:o}},client_route_replace:{unauth:{},auth:{own_profile:i,other_profile:o}}},r={client_route_push:{auth:{pin_closeup:{story_pin:{id:700,name:"story_pin_closeup"}}}}},s={board_picker:16,grid_bottom_spinner:12,facebook_autologin:500,google_autologin:501,story_pin_step:701},c=e=>{var t,n;const{navigationType:i,isAuthenticated:o,segment:s,surface:c}=e,l=o?"auth":"unauth",u=null===(t=r[i])||void 0===t||null===(n=t[l])||void 0===n?void 0:n[c];return s&&u&&u[s]||a[i][l][c]},l=e=>{if("stopwatch"===e.type)return s[e.name]||null;const t=c(e);return t?t.id:null},u=e=>{if("stopwatch"===e.type)return e.name;const{navigationType:t,isAuthenticated:n,segment:i,surface:o}=e,a=n?"auth":"unauth",r=c(e);return r?r.name:`${t}_${a}_${o}${i?"_"+i:""}`}},bZU8:function(e,t,n){n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));const i="pwt-grid-item",o=['div[data-grid-item="true"]',"div.Masonry div.Collection-Item","div.Grid__Item",`div[data-test-id="${i}"]`],a=o.join(","),r=o.map(e=>e+" img").join(","),s=o.map(e=>e+" div[style*=background-image]").join(",")},"dG+H":function(e,t,n){n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return f}));var i=n("3R0Q"),o=n("EHyI"),a=n("SyXB"),r=n("FylZ"),s=n("mRg4"),c=n("XtwW"),l=n("fZG9"),u=n("3/Bf");const d={},p=(e,t)=>{t.forEach(t=>{d[t]=(({name:e,pwtStaticContext:t})=>{if(!c.a||!Object(o.a)())return null;const n={type:"stopwatch",name:e},a=[];let u=!0;return{abort:e=>{u&&(u=!1,Object(s.a)({metricId:n,pwtStaticContext:t,result:{type:"ABORT",reason:e}}))},annotate:e=>{u&&a.push({label:e,timestamp:c.a.now()})},stop:()=>{if(!u)return;u=!1;const e={type:"COMPLETE",traceId:Object(r.a)(),startTime:0,endTime:c.a.now(),spans:[],annotationMap:Object(i.a)(a),binaryAnnotationMap:Object(l.a)({metricId:n,pwtStaticContext:t})};Object(s.a)({metricId:n,pwtStaticContext:t,result:e})}}})({name:t,pwtStaticContext:e})})},g=e=>d[e],m=(e,t)=>{const n=g(e);if(n)try{n.abort(t)}catch(i){Object(u.b)("app_load_stopwatch_error",{name:e,result:"abort"})}},h=(e,t)=>{const n=g(e);n&&(n.annotate(t),Object(a.c)(`stopwatch_${e}_${t}`))},f=e=>{const t=g(e);if(t)try{t.stop()}catch(n){Object(u.b)("app_load_stopwatch_error",{name:e,result:"complete"})}}},fZG9:function(e,t,n){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return _}));var i=n("bNC6"),o=n("HMdf"),a=n("+lzj"),r=n("SyXB"),s=n("nEAA");const c=(e,t)=>(e||[]).reduce((e,n)=>({...e,["experiment."+n]:Object(s.d)(t(n))}),{}),l=(e,t)=>"number"==typeof t?e(t):null,u=e=>e.reduce((e,t)=>e+t,0),d=(e,t)=>Object.keys(t).reduce((n,i)=>({...n,[`${e}${i}`]:t[i]}),{}),p=e=>{if(!e.length)return{};const t=e.map(({startTime:e,requestStart:t,responseStart:n,responseEnd:i})=>{const o=t||e;return{startTime:e,requestStart:o,responseStart:n||o,responseEnd:i}}),n=u(t.map(e=>e.requestStart-e.startTime)),i=u(t.map(e=>e.responseStart-e.requestStart)),o=u(t.map(e=>e.responseEnd-e.responseStart)),a=n+i+o,r=u(e.map(e=>e.decodedBodySize||0));return{decodedBodySize:Object(s.b)((c=r,Number(Number(c/1024).toFixed(3)))),"duration.all":Object(s.b)(a),"duration.requestStartToResponseStart":Object(s.b)(i),"duration.responseStartToResponseEnd":Object(s.b)(o),"duration.startToRequestStart":Object(s.b)(n)};var c},g=e=>{const t=e.filter(e=>!!e.responseEnd);return{...e.length?{...p(t),"count.completed":Object(s.b)(t.length)}:{},"count.all":Object(s.b)(e.length)}},m=e=>{const t=e.reduce((e,t)=>(e[t.category]=(e[t.category]||[]).concat([t]),e),{}),n={script:t.script,script_deferred:e.filter(e=>e.isDeferred),external:e.filter(e=>e.isExternal),css:t.css,image:t.image,video:t.video,xmlhttprequest:t.xmlhttprequest,visually_complete:e.filter(e=>e.isVisuallyCompleteRequired)};return Object.keys(n).reduce((e,t)=>({...e,...d(`resource.${t}.`,g((n[t]||[]).map(e=>e.timing)))}),{})},h=(e,t)=>{const{devicePixelRatio:n,navigator:o,innerWidth:a,innerHeight:r}=window,{deviceMemory:c,hardwareConcurrency:l,platform:u,userAgent:d}=o,{appType:p,appVersion:g,browserName:m,browserVersion:h,deviceType:f,isBot:b,isSocialBot:_,locale:y,osName:w,stageName:O}=t,S="desktop"===f?p||5:p||6,v="surface"===e.type&&"initial_app_load"===e.navigationType?1:4;return{"app.type":Object(s.c)(S),"app.version":Object(s.d)(g),"browser.name":Object(s.d)(m),"browser.version":Object(s.d)(h),"cpu.speed":Object(s.c)(l),"device.memory":Object(s.c)(c),"device.type":Object(s.c)(0),"device.typeName":Object(s.d)(f),"device.version":Object(s.d)("unknown"),"pwt.cause":Object(s.c)(v),"pwt.result":Object(s.c)(1),"view.type":Object(s.b)(0),"viewport.height":Object(s.b)(r||0),"viewport.width":Object(s.b)(a||0),devicePixelRatio:Object(s.b)(n||0),isBot:Object(s.a)(b),isSocialBot:Object(s.a)(_),locale:Object(s.d)(y),osName:Object(s.d)(w),platform:Object(s.d)(u||null),profilerVersion:Object(s.d)("3"),pwtActionName:Object(s.c)(Object(i.a)(e)),stageName:Object(s.d)(O),userAgent:Object(s.d)(d)}},f=({metricId:e,pwtStaticContext:t,binaryAnnotations:n={},performanceResourceTimings:i=[]})=>{let a={};{const{connection:e,hardwareConcurrency:t,deviceMemory:n}=window.navigator;a={"net.effectiveType":Object(s.d)((null==e?void 0:e.effectiveType)||null),"net.rtt":Object(s.b)(l(e=>10*Math.round(e/10),null==e?void 0:e.rtt)),"net.speed":Object(s.b)(Object(o.b)(i,!1)),"cpu.threads":Object(s.c)(t),"memory.size":Object(s.b)(n)}}return{...h(e,t),...n,...a}},b=(e,t,n,i)=>{var c;const{navigator:d}=window,{connection:p,serviceWorker:g}=d,{surface:m,navigationType:h,isAuthenticated:f}=e,{cumulativeLayoutShiftScore:b,longTaskDurations:_}=Object(a.b)();return{..._.length?{"longTask.count":Object(s.b)(_.length),"longTask.maxDuration":Object(s.b)(Math.max(..._)),"longTask.totalDuration":Object(s.b)(u(_))}:{},cumulativeLayoutShiftScore:Object(s.b)(100*b),"masonry.paginationMarkCount":Object(s.b)(Object(r.e)(r.a,t)),"metricId.isAuthenticated":Object(s.a)(f),"metricId.navigationType":Object(s.d)(h),"metricId.surface":Object(s.d)(m),"net.effectiveType":Object(s.d)((null==p?void 0:p.effectiveType)||null),"net.rtt":Object(s.b)(l(e=>10*Math.round(e/10),null==p?void 0:p.rtt)),"net.speed":Object(s.b)(Object(o.b)(n)),entryChunkAfterDoc:Object(s.a)(i),resourceBufferClearedCount:Object(s.c)(Object(r.e)("resourceBufferCleared",t)),scrollDuringLayout:Object(s.a)(Object(r.f)("scrollDuringLayout",t)),serviceWorker:Object(s.a)(g?!!g.controller:null),serviceWorkerState:Object(s.d)((null==g||null===(c=g.controller)||void 0===c?void 0:c.state)||null)}},_=({annotateExperiments:e,binaryAnnotations:t={},entries:n,entryChunkAfterDoc:i,metricId:o,performanceResources:a,pwtEndTime:r,pwtStaticContext:s})=>({...t,...m(a),...c(e,s.getExperimentGroup),...h(o,s),...b(o,r,n,i)})},gg0E:function(e,t,n){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return _}));var i=n("q1tI"),o=n("SyXB"),a=n("0YPa"),r=n("bNC6"),s=n("HMdf"),c=n("3/Bf"),l=n("y2Ga"),u=n("bZU8");const d=(e,t)=>{const n=(e=>e instanceof HTMLDivElement?e.getBoundingClientRect():e.parentElement instanceof HTMLElement?e.parentElement.getBoundingClientRect():null)(e);if(!n)return Object(c.b)("missing_client_rect"),!1;return!(e instanceof HTMLImageElement&&n.width<100&&n.height<100)&&(({top:e,height:t},{foldY:n,pageYOffset:i})=>{const o=e+i;if(o>=n)return!1;const a=Math.min(t,n-o);return a>.5*t||a>.2*n})(n,t)},p=()=>{const e=(()=>{if(!document.querySelector)return Object(c.b)("missing_document_query_selector"),null;const e=document.querySelectorAll(u.d);return e[e.length-1]||null})();if(!e)return!1;const t=window.innerHeight||0,n=window.pageYOffset||0;return e.getBoundingClientRect().top+n>=t},g=e=>{if(!document.querySelector)return Object(c.b)("missing_document_query_selector"),[];const t={foldY:window.innerHeight||0,pageYOffset:window.pageYOffset||0},n=[u.b,...e?[u.a]:[]].join(",");return[...document.querySelectorAll(n)].reduce((e,n)=>{if((n instanceof HTMLImageElement||n instanceof HTMLDivElement)&&d(n,t)){const t=(e=>{if(e instanceof HTMLImageElement)return e.src;const t=((e.style||{}).backgroundImage||"").match(/^url\(["'](http.*)["']\)$/);return t&&t[1]||null})(n);if(t)return e.concat([{htmlElement:n,url:t}])}return e},[])};var m=n("LrH5");const h=Object(m.a)("GridProfiler"),f=()=>!!(window.addEventListener&&window.removeEventListener&&"number"==typeof window.innerHeight&&"number"==typeof window.pageYOffset&&document.querySelector&&document.querySelectorAll),b=(e,t)=>{if(!t){const t=document.querySelector?document.querySelectorAll(u.d).length:(Object(c.b)("missing_document_query_selector"),0);if(t===e)return h("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!p())return h("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}};function _({isAtEndOfFeed:e,includeBackgroundImages:t}){const n=Object(l.c)(),u=null==n?void 0:n.id,d=null==n?void 0:n.setVisuallyCompleteResult,[p,f]=Object(i.useState)({status:"DISABLED"});Object(i.useEffect)(()=>{f(d?{status:"LAYOUT",failedCount:0,numOfItemsChecked:0}:{status:"DISABLED"})},[u,d]),Object(i.useEffect)(()=>{if("DISABLED"!==p.status&&Object(o.c)("GridVisuallyCompleteProfiler_"+p.status),h("new status",p),"LAYOUT"===p.status){const e=((e,t)=>{const n=()=>{window.removeEventListener(e,n),t()};return window.addEventListener(e,n),()=>window.removeEventListener(e,n)})("scroll",()=>{Object(o.c)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[p.status]),Object(a.a)(()=>{if(!n||!d)return;const{abort:i,metricId:o}=n;switch(p.status){case"LAYOUT":{const n=b(p.numOfItemsChecked,e);n.complete?f({status:"TIMING",failedCount:0,images:g(t).map(({htmlElement:e,url:t})=>({fileName:(t||"").replace(/.*\//,""),element:e}),[])}):500*p.failedCount>6e4?(Object(c.c)(`images.${Object(r.b)(o)}.visuallyComplete.maxLayoutAttempt`),i("visuallyComplete_layoutTimeout"),f({status:"DISABLED"})):f({...p,failedCount:p.failedCount+1,numOfItemsChecked:n.numOfItemsChecked});break}case"TIMING":{const e=Object(s.c)(),t=p.images.length,n=[];let a=0,l=0,u=0;p.images.forEach(({element:t,fileName:i})=>{const o=e.find(e=>("img"===e.initiatorType||"css"===e.initiatorType)&&e.name.endsWith(i));o?o.responseEnd?(n.push(o),Object(m.b)(t,"green")):(u+=1,Object(m.b)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(l+=1,Object(m.b)(t,"red")):(a+=1,Object(m.b)(t,"greenyellow"))}),a||u?100*p.failedCount>6e4?(Object(c.c)(`images.${Object(r.b)(o)}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:t,incompleteCount:a,noTimingCount:l,noTimingResponseEndCount:u}}),i("visuallyComplete_timingTimeout"),f({status:"DISABLED"})):f({...p,failedCount:p.failedCount+1}):(h(`All ${n.length} images are fetched`),d({imageTimings:n}),f({status:"DISABLED"}),Object(c.c)(`images.${Object(r.b)(o)}.visuallyComplete.complete`,{tags:{totalImageCount:t,noTimingCount:l}}));break}}},(e=>("LAYOUT"===e.status?500:"TIMING"===e.status&&100)||null)(p))}},mRg4:function(e,t,n){n.d(t,"a",(function(){return _}));let i=null;var o=(e,t)=>(i=i||{results:[],context:t},i.results.push(e),i),a=n("FZ8N"),r=n("LrH5"),s=n("bNC6"),c=n("3/Bf"),l=n("o9su"),u=n("FylZ");const d=(e,t)=>Object.keys(e).reduce((n,i)=>{const o=e[i];return o&&(n[i]={timestamp:t+o}),n},{}),p=({span:e,id:t,parentId:n,timeOrigin:i})=>{return{id:t,parent_id:n,result:1,name:e.name,timestamp:i+e.startTime,duration:e.endTime-e.startTime,annotations:d(e.annotationMap,i),binary_annotations:(o=e.binaryAnnotationMap,Object.keys(o).reduce((e,t)=>{const n=o[t];if(!n)return e;const{value:i,type:a}=n;return null==i?e:e.concat({name:t,value:i,annotation_type:a})},[]))};var o},g=(e,{startTime:t,endTime:n,annotationMap:i,binaryAnnotationMap:o})=>({name:"pwt/"+e,startTime:t,endTime:n,annotationMap:i,binaryAnnotationMap:o}),m=({annotations:e})=>e.reduce((e,{key:t,timestamp:n})=>({...e,["server_"+t]:{timestamp:n}}),{}),h=(e,t)=>({...e,annotations:{...m(t),...e.annotations},binary_annotations:[...t.binary_annotations,...e.binary_annotations]}),f=({traceId:e,actionName:t,result:n,timeOrigin:i,serverDataToJoin:o})=>{const a=(null==o?void 0:o.client_span_id)||Object(u.a)();let r=p({span:g(t,n),id:a,parentId:null,timeOrigin:i}),s=null;return o&&(r=h(r,o),s=((e,t,n)=>{const i=Object(l.a)();return(null==i?void 0:i.responseEnd)?h(p({span:{name:"html",startTime:0,endTime:(null==i?void 0:i.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{}},id:e.server_span_id||Object(u.a)(),parentId:t,timeOrigin:n}),e):null})(o,a,i)),{trace_id:e,spans:[r,...s?[s]:[],...n.spans.map(e=>p({span:e,id:Object(u.a)(),parentId:a,timeOrigin:i}))]}},b=Object(r.a)("reportResult");function _({metricId:e,pwtStaticContext:t,result:n}){const{ajax:i,serverData:r}=t,l=Object(s.b)(e),u=`${n.type}.${l}`;if(Object(c.c)(n.reason?u.concat("."+n.reason):u),"COMPLETE"!==n.type)return void b("Abort metric "+l,n);const d=(null===(p=window.performance)||void 0===p?void 0:p.now)?Date.now()-window.performance.now():"unknown";var p,g;if("unknown"===d)return b(`Unable to convert to absolute times for ${l} due to missing time origin`),void Object(c.c)("missingTimeOrigin."+l);if(a.c&&(window.PWT_LAB_DATA=o(n,t)),!a.c){const o="surface"===e.type&&"initial_app_load"===e.navigationType,s=n.traceId,c=f({traceId:s,actionName:l,result:n,timeOrigin:d,serverDataToJoin:o&&r||null});i({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(c),report_context:JSON.stringify((g=t,{debugTrace:a.a,locale:g.locale,stageName:g.stageName,userId:g.isAuthenticated?g.userId:null}))}}),b(`PinTrace ${l} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${s}`,{duration:n.endTime-n.startTime,result:n,pwtStaticContext:t})}}},nEAA:function(e,t,n){n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return s}));const i=e=>"number"==typeof e?Math.round(e):e,o=e=>({type:"I16",value:i(e)}),a=e=>({type:"I32",value:i(e)}),r=e=>({type:"STRING",value:e}),s=e=>({type:"BOOL",value:e})},o9su:function(e,t,n){var i=n("XtwW");t.a=()=>{const[e]=i.a?i.a.getEntriesByType("navigation"):[];return e}},vzKb:function(e,t,n){t.a=(e,t,n)=>{if(window.PerformanceObserver)try{const i=new window.PerformanceObserver(t);i.observe(e),window.addEventListener("beforeunload",()=>{i.disconnect()}),n&&window.addEventListener("popstate",()=>{n()})}catch(i){}}},y2Ga:function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r}));var i=n("1dBE");const{Consumer:o,Provider:a,useHook:r}=Object(i.b)("pwtSurfaceContext")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/GoogleOneTapPresenter-4b4a86452c2ebf93d58b.mjs.map