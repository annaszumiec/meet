(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(16),i=(n(24),n(9)),c=n(3),s=n(4),u=n(6),l=n(5),h=n(7),f=(n(26),function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={collapsed:!0},n.toggleDetails=function(){n.setState(function(e){return{collapsed:!e.collapsed}})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return o.a.createElement("div",{className:"event"},o.a.createElement("h1",{className:"summary"},t.summary),o.a.createElement("p",{className:"event-start"},new Date(t.start.dateTime).toString()),o.a.createElement("p",{className:"event-location"},"@".concat(t.summary," | ").concat(t.location)),!n&&o.a.createElement("div",{className:"event-details"},o.a.createElement("h2",{className:"about"},"About event:"),o.a.createElement("a",{className:"link",href:t.htmlLink,target:"_blank",rel:"noopener noreferrer"},"See details on Google Calendar"),o.a.createElement("p",{className:"description"},t.description)),o.a.createElement("button",{className:"details-button",onClick:function(){return e.toggleDetails()}},n?"show":"hide"," details"))}}]),t}(r.Component)),p=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.events;return o.a.createElement("ul",{className:"EventList"},e.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(f,{event:e}))}))}}]),t}(r.Component),d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Alert"},o.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(r.Component),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="blue",n}return Object(h.a)(t,e),t}(d),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="red",n}return Object(h.a)(t,e),t}(d),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({showSuggestions:!0});var r=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});if(0!==r.length)return n.setState({query:t,suggestions:r,infoText:""});n.setState({query:t,infoText:"We can not find the city you are looking for. Please try another city"})},n.handleItemClicked=function(e){n.setState({query:e,showSuggestions:!1}),n.props.updateEvents(e)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"CitySearch"},o.a.createElement(m,{text:this.state.infoText}),o.a.createElement("input",{type:"text",className:"city",placeholder:"city search",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),o.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(t){return o.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),o.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},o.a.createElement("b",null,"See all cities"))))}}]),t}(r.Component),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).handleInputChanged=function(t){var n=t.target.value;(n>=1||n<=32)&&(e.setState({query:n,errorText:""}),e.props.updateEvents(e.props.selectedCity,n)),(n<1||n>32)&&e.setState({query:n,errorText:"Please enter a valid number: 1 to 32"})},e.state={query:32,errorText:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"numberOfEvents"},o.a.createElement("input",{type:"number",className:"numberOfEvents",min:1,max:32,value:this.state.query,onChange:this.handleInputChanged}),o.a.createElement(v,{className:"errorMessage",text:this.state.errorText}))}}]),t}(r.Component),w=n(18),b=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200526T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-26T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],E=n(37),x=n(10),k=n.n(x);function j(){j=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(N){s=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new S(o||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var h={};function f(){}function p(){}function d(){}var m={};s(m,a,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==t&&n.call(g,a)&&(m=g);var y=d.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var o;r(this,"_invoke",{value:function(r,a){function i(){return new t(function(o,i){!function r(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(s.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=l(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new b(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),s(y,c,"Generator"),s(y,a,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var O=function(){var e=Object(i.a)(j().mark(function e(){var t,n,r,o,a,i;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,S(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,E.a.get("https://90tqj1rs27.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return a=e.sent,i=a.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&N(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(j().mark(function e(t){var n;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(j().mark(function e(){var t,n,r,o,a,i;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(k.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return k.a.done(),e.abrupt("return",b);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),k.a.done(),console.log("offline data: ",t),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:if(navigator.onLine){e.next=13;break}return n=localStorage.getItem("lastEvents"),k.a.done(),e.abrupt("return",n?JSON.parse(n).events:[]);case 13:return e.next=15,O();case 15:if(!(r=e.sent)){e.next=25;break}return T(),o="https://90tqj1rs27.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+r,e.next=21,E.a.get(o);case 21:return(a=e.sent).data&&(i=_(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(i))),k.a.done(),e.abrupt("return",a.data.events);case 25:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),T=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},N=function(){var e=Object(i.a)(j().mark(function e(t){var n,r,o,a;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=encodeURIComponent(t),e.next=4,fetch("https://90tqj1rs27.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n);case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("HTTP error! status: ".concat(r.status));case 7:return e.next=9,r.json();case 9:return o=e.sent,(a=o.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(0),e.t0.json();case 18:case"end":return e.stop()}},e,null,[[0,15]])}));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=e.map(function(e){return e.location});return Object(w.a)(new Set(t))};var C=function(e){return e.showWelcomeScreen?o.a.createElement("div",{className:"WelcomeScreen"},o.a.createElement("h1",null,"Welcome to the Meet app"),o.a.createElement("h4",null,"Log in to see upcoming events around the world for full-stack developers"),o.a.createElement("div",{className:"button_cont",align:"center"},o.a.createElement("div",{class:"google-btn"},o.a.createElement("div",{class:"google-icon-wrapper"},o.a.createElement("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})),o.a.createElement("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text"},o.a.createElement("b",null,"Sign in with google")))),o.a.createElement("a",{href:"https://annaszumiec.github.io/meet/public/index.html",rel:"nofollow noopener"},o.a.createElement("a",{href:"https://annaszumiec.github.io/meet/privacy.html"},"Privacy policy"))):null};function Z(){Z=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(T){s=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new O(o||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var h={};function f(){}function p(){}function d(){}var m={};s(m,a,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&n.call(g,a)&&(m=g);var y=d.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var o;r(this,"_invoke",{value:function(r,a){function i(){return new t(function(o,i){!function r(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(s.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=l(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new b(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),s(y,c,"Generator"),s(y,a,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={events:[],locations:[],eventCount:32,selectedCity:null,warningText:"",showWelcomeScreen:void 0},n.updateEvents=function(e){L().then(function(t){var r="all"===e?t:t.filter(function(t){return t.location===e});n.setState({events:r})})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(Z().mark(function e(){var t,n,r,o,a=this;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,S(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:return n=e.t0,r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:o=e.sent,this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&L().then(function(e){a.mounted&&a.setState({events:e,locations:_(e)})});case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?o.a.createElement("div",{className:"App"}):o.a.createElement("div",{className:"App"},o.a.createElement(C,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){O()}}),o.a.createElement(m,null),o.a.createElement(v,{text:this.state.errorText}),o.a.createElement(g,{locations:this.state.locations,updateEvents:this.updateEvents}),o.a.createElement(y,{selectedCity:this.state.selectedCity,query:this.state.eventCount,updateEvents:this.updateEvents}),o.a.createElement(p,{events:this.state.events}))}}]),t}(r.Component),A=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,36)).then(function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),a(e),i(e)})};n(17).config("4ec774bd8fa740eda0240fc49f218862").install();var G=document.getElementById("root");Object(a.render)(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),G),A()}},[[19,3,2]]]);
//# sourceMappingURL=main.6d74c55a.chunk.js.map