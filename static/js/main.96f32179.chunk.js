(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{149:function(e,t,n){},221:function(e,t,n){},375:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n(0),c=n.n(i),a=n(13),l=n.n(a),s=(n(221),n(55)),o=n(86),u=n(185),d=n(187);s.a.use(u.a).use(d.a).use(o.e).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},react:{}});s.a,n(149);var j=n(27),f=n(20),h=n(14),b=n.n(h),x=n(25),O=n(432),m=n(430),p=n(8),g=n(51),v=n(409),y=n(66),w=n.n(y),k=n(100),C=n.n(k),S=n(83),I=n.n(S),T=n(379),_=n(431),H=n(123);function E(e){return Object(r.jsx)(v.a,{style:Object(g.a)({textTransform:"none"},e.style),variant:"contained",onClick:e.onClick,href:e.href,children:e.children})}function P(e){var t=Object(i.useState)({data:null,complete:!1,pending:!1,error:!1}),n=Object(p.a)(t,2),r=n[0],c=n[1];return Object(i.useEffect)((function(){var t=!1;return c({data:null,pending:!0,error:!1,complete:!1}),w()({url:e}).then((function(e){t||c({data:e.data,pending:!1,error:!1,complete:!0})})).catch((function(){t||c({data:null,pending:!1,error:!0,complete:!0})})),function(){t=!0}}),[e]),r}function R(){var e=s.a.language;return void 0===e&&(e="en"),e}function D(e){return null!==e&&void 0!==e}function B(e){var t=Object(_.a)(),n=t.t,c=(t.i18n,Object(i.useState)(!1)),a=Object(p.a)(c,2),l=a[0],s=a[1];return Object(r.jsxs)("div",{style:{position:"relative"},children:[!l&&Object(r.jsxs)("div",{style:{position:"absolute"},children:[Object(r.jsx)(I.a,{}),Object(r.jsx)("p",{children:n("image_loading")})]}),Object(r.jsx)("img",{src:e.url,onLoad:function(){return s(!0)},style:{maxWidth:"100%",minHeight:100},alt:"Fails to load "+e.url,onError:function(){return s(!0)}})]})}var N={image:function(e){return Object(r.jsx)(B,{url:e.src})},paragraph:function(e){return Object(r.jsx)("div",{style:{marginTop:10,marginBottom:10},children:e.children})},heading:function(e){var t=e.level;return Object(r.jsx)(T.a,{style:{fontSize:40-5*t},children:e.children})}};function L(e){return Object(r.jsx)(C.a,{className:"My-MD",plugins:[H],renderers:N,children:e.children})}function F(e){var t=P(e.url),n=t.data;return t.complete?Object(r.jsx)(L,{children:n||"error loading "+e.url}):Object(r.jsx)(I.a,{})}function W(){return window.innerHeight>window.innerWidth}function M(e){return""+e}function q(e,t,n){var r=e.indexOf(t);if(-1===r)return"";var i=e.indexOf(n,r+t.length);return-1===i?"":e.substr(r+t.length,i-r-t.length)}var V=n(415),z=n(416),G=n(202),U=n(412),Y=n(413),J=n(414),X=n(193),A=n.n(X);var K=[{language:"en",languageName:"English"},{language:"zh",languageName:"\u7b80\u4f53\u4e2d\u6587"}];function $(e){var t,n=function(){var e=R(),t=e.indexOf("-");return-1!==t&&(e=e.substr(0,t)),e}(),i=c.a.useState(null),a=Object(p.a)(i,2),l=a[0],o=a[1],u=function(){o(null)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(v.a,{"aria-controls":"language-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},style:{color:"white"},children:[Object(r.jsx)(A.a,{}),W()?void 0:Object(r.jsx)(T.a,{style:{marginLeft:5,textTransform:"none"},children:null===(t=K.find((function(e){return e.language===n})))||void 0===t?void 0:t.languageName})]}),Object(r.jsx)(G.a,{id:"language-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:u,children:K.map((function(e){return Object(r.jsx)(U.a,{value:e.language,onClick:function(){s.a.changeLanguage(e.language),u()},children:e.languageName},e.language)}))})]})}function Q(e){var t=Object(f.g)(),n=Object(f.f)();return Object(i.useEffect)((function(){document.title=e.text,document.getElementById("page_icon").href=e.pageIconPath}),[e.text]),Object(r.jsx)(Y.a,{style:{position:e.sticky?"sticky":"relative",backgroundColor:e.color,margin:0,padding:0,top:e.sticky?0:void 0},children:Object(r.jsxs)(J.a,{children:[e.children,Object(r.jsx)(v.a,{onClick:function(){var e=t.pathname,r=e.lastIndexOf("/");-1!==r&&n.push(e.substr(0,r))},style:{textTransform:"none"},children:Object(r.jsx)(T.a,{variant:"h6",style:{color:"white"},children:e.text})}),Object(r.jsx)("div",{style:{flexGrow:1}}),Object(r.jsx)($,{})]})})}function Z(e){var t=Object(f.f)(),n=Object(_.a)(),i=n.t,c=(n.i18n,W()?{margin:20}:{margin:20,marginLeft:100,marginTop:50});return Object(r.jsxs)("div",{className:"My-Page",children:[Object(r.jsx)(Q,{text:"qouteall",color:"#ff4569",pageIconPath:"/benzene.jpg"}),Object(r.jsxs)("div",{className:"App-header",children:[Object(r.jsx)("div",{className:"Mask"}),Object(r.jsxs)("div",{className:"Right-section",children:[Object(r.jsx)("p",{className:"Header-text",children:"qouteall"}),Object(r.jsx)("p",{className:"Sub-Header",children:i("main_desc")})]}),Object(r.jsx)("img",{src:M("/headerImage.png"),className:"Header-image",alt:"what"})]}),Object(r.jsx)("div",{style:c,children:Object(r.jsx)(V.a,{style:{maxWidth:"80vh"},square:!1,elevation:10,children:Object(r.jsxs)(z.a,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},onClick:function(){t.push("/immptl")},children:[Object(r.jsx)("img",{src:M("/immptl.png"),alt:"i am alt",style:{width:100}}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",marginLeft:20},children:[Object(r.jsx)("label",{style:{textTransform:"none",color:"black",fontSize:"calc(8px + 2vmin)"},children:i("immptl")}),Object(r.jsx)("label",{style:{textTransform:"none",color:"black",fontSize:"calc(5px + 2vmin)"},children:i("immptl_desc")})]})]})})})]})}var ee=n(35),te=n(139),ne=n.n(te),re=n(140),ie=n.n(re),ce=n(417),ae=n(194),le=n.n(ae),se=n(138),oe=n.n(se);function ue(e){return q(e,"immersive-portals-","-")}function de(e){var t=Object(_.a)(),n=t.t;t.i18n;return Object(r.jsxs)(ne.a,{style:{backgroundColor:"#80cbc4",color:"black"},children:[Object(r.jsx)(ie.a,{expandIcon:Object(r.jsx)(le.a,{}),id:e.data.downloadUrl,children:Object(r.jsx)(T.a,{children:(e.data.isPreRelease?"[Pre-release] ":"")+e.data.modVersion})}),Object(r.jsxs)(ce.a,{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[Object(r.jsx)(T.a,{children:e.data.upgradeInfo}),Object(r.jsx)("div",{style:{margin:10}}),Object(r.jsx)(E,{onClick:function(){window.open(e.data.downloadUrl,"_blank")},children:n("Download")}),Object(r.jsx)("div",{style:{margin:10}}),Object(r.jsx)(T.a,{variant:"caption",children:"Published at "+e.data.publishTime})]})]},e.data.downloadUrl)}function je(e){var t=Object(_.a)(),n=(t.t,t.i18n,Object(i.useState)(!0)),c=Object(p.a)(n,2),a=c[0],l=c[1],s=Object(i.useState)([]),o=Object(p.a)(s,2),u=o[0],d=o[1];if(Object(i.useEffect)((function(){function e(){return(e=Object(x.a)(b.a.mark((function e(){var t,n,r,i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=1,n=[];case 2:return r="https://api.github.com/repos/qouteall/immersiveportalsmod/releases?page="+t,e.next=6,w()({url:r});case 6:if(i=e.sent,c=i.data,console.log(t),console.log(c),l(!1),0!==c.length){e.next=13;break}return e.abrupt("break",20);case 13:return n=n.concat(c),d(n),t++,e.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:e.next=2;break;case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a)return Object(r.jsx)(I.a,{});var j=u.map((function(e){var t=e.assets.filter((function(e){return e.name.indexOf("fabric")>=0}));if(0===t.length)return null;var n,r=t[0],i=e.published_at.substr(0,e.published_at.indexOf("T"));return{mcVersion:(n=r.name,q(n,"mc","-fabric")),modVersion:ue(r.name),downloadUrl:r.browser_download_url,upgradeInfo:e.body,isPreRelease:e.prerelease,publishTime:i,downloadCount:r.download_count}})).filter(D),f=oe.a.groupBy(j,(function(e){return e.mcVersion}));return Object(r.jsx)("div",{children:oe.a.toPairsIn(f).map((function(e){var t=Object(p.a)(e,2),n=t[0],i=t[1],c=i.findIndex((function(e){return!e.isPreRelease}));return-1!==c&&i.splice.apply(i,[0,0].concat(Object(ee.a)(i.splice(c,1)))),Object(r.jsxs)(ne.a,{style:{backgroundColor:"#ffd699",color:"black"},children:[Object(r.jsx)(ie.a,{children:n}),Object(r.jsx)(ce.a,{children:Object(r.jsx)("div",{style:{width:"100%"},children:i.map((function(e){return Object(r.jsx)(de,{data:e},e.downloadUrl)}))})})]},e[0])}))})}function fe(e){var t=Object(_.a)(),n=t.t,i=(t.i18n,n("url_ip_features"));return Object(r.jsx)(F,{url:i})}function he(e){Object(f.f)();var t=Object(_.a)(),n=t.t,c=(t.i18n,n("url_ip")),a=Object(i.useRef)(null),l=W()?15:30,s="#e8eaf6";return Object(r.jsxs)("div",{className:"My-Page",children:[Object(r.jsx)(Q,{text:n("Immersive Portals"),color:"#9500ae",pageIconPath:M("/immptl.png")}),Object(r.jsxs)("div",{style:{margin:l,display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(r.jsxs)(V.a,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap",minHeight:"40vh",background:s,marginBottom:l},square:!1,elevation:10,children:[Object(r.jsx)("img",{src:M("/immptl.png"),alt:"i am alt",style:{flexGrow:0,width:150,margin:40,marginRight:0,marginBottom:W()?0:40}}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignSelf:"stretch",margin:40,marginBottom:20,flexGrow:1,flexBasis:0,minWidth:"50vw"},children:[Object(r.jsx)(F,{url:c}),Object(r.jsxs)("div",{style:{flexDirection:"row",justifyContent:"flex-start"},children:[Object(r.jsx)(E,{style:{backgroundColor:"#35baf6",margin:10},onClick:function(){a.current.scrollIntoView({behavior:"smooth"})},children:n("ip_download")}),Object(r.jsx)(j.b,{to:"/immptl/wiki",style:{textDecoration:"none",color:"black"},children:Object(r.jsx)(E,{style:{backgroundColor:"#35baf6",margin:10},children:n("ip_wiki")})}),Object(r.jsx)(E,{style:{backgroundColor:"#35baf6",margin:10},href:"https://github.com/qouteall/ImmersivePortalsMod",children:n("Source")})]})]})]}),Object(r.jsxs)(V.a,{style:{background:s,padding:20,marginBottom:l},elevation:10,children:[Object(r.jsx)(T.a,{variant:"h6",children:n("Features")}),Object(r.jsx)(fe,{})]}),Object(r.jsxs)(V.a,{style:{background:s,padding:20,marginBottom:l},elevation:10,ref:a,children:[Object(r.jsx)(T.a,{variant:"h5",children:n("ip_downloads")}),Object(r.jsx)(j.b,{to:"immptl/wiki#how-to-install-immersive-portals-mod-fabric-version",children:Object(r.jsx)("p",{children:n("how_to_install")})}),Object(r.jsx)(T.a,{variant:"body1",children:n("ip_download_desc")}),Object(r.jsx)(je,{}),Object(r.jsx)("a",{href:"https://www.curseforge.com/minecraft/mc-mods/immersive-portals-mod",children:Object(r.jsx)("p",{children:n("ip_or_curseforge")})})]})]})]})}var be=n(68),xe=n(411),Oe=n(420),me=n(380),pe=n(423),ge=n(424),ve=n(425),ye=n(426),we=n(427),ke=n(183),Ce=n(428),Se=n(200),Ie=n.n(Se),Te=n(433),_e=n(12),He=n(16),Ee=n(62),Pe=n.n(Ee),Re=n(127),De=n.n(Re),Be=n(128),Ne=n.n(Be),Le=n(129),Fe=n.n(Le),We=n(195),Me=n.n(We),qe=n(130),Ve=n.n(qe),ze=n(131),Ge=n.n(ze),Ue=n(132),Ye=n.n(Ue),Je=n(101),Xe=n.n(Je),Ae=n(196),Ke=n.n(Ae),$e=n(180),Qe=n(418),Ze=n(419),et=(n(115),function(e){var t=Object(i.useState)(0),n=Object(p.a)(t,2),c=n[0],a=n[1],l=Object(i.useRef)(null),s="";if(0===c)s="inset(0% 0% 100% 0%)";else if(1===c){var o,u=null===(o=l.current)||void 0===o?void 0:o.clientHeight;u||(u=100);var d=u-window.innerHeight;d<0&&(d=0),s="inset(0px 0px ".concat(d,"px 0px)")}else 2===c&&(s="unset");return Object(i.useEffect)((function(){e.shown&&(a(1),setTimeout((function(){a(2)}),e.duration))}),[e.shown]),Object(r.jsx)("div",{ref:l,style:{transition:"clip-path ".concat(e.duration,"ms ease-in"),clipPath:s},children:e.children})}),tt=c.a.createContext({isMatureRef:{current:!0}});function nt(e){var t="#ed4b82";switch(e){case 1:t="#4dabf5";break;case 2:t="#00a152";break;case 3:t="#ffac33";break;case 4:t="#ed4b82";break;case 5:t="#4dabf5"}return t}var rt="#9c27b020";function it(e){var t=Object(i.useRef)(),n=Object(f.g)(),c=Object(f.f)(),a=e.node.myHeadingHash,l=Object(i.useContext)(tt).isMatureRef,s=n.hash===a;Object(i.useEffect)((function(){if(n.hash){var e=function(){if(t.current){var e=t.current.getBoundingClientRect().y;(e<100||e>(window.innerHeight||window.outerHeight))&&t.current.scrollIntoView({behavior:"smooth"})}};if(s){if(!l.current){var r=setTimeout((function(){e()}),1e3);return function(){clearTimeout(r)}}e()}}}),[a,n.hash]);var o=e.level,u=function(e){var t=55;switch(e){case 1:t=36;break;case 2:t=32;break;case 3:t=27;break;case 4:t=22;break;case 5:t=20}return t}(o),d=nt(o);return Object(r.jsxs)("div",{id:a,style:{display:"flex",flexDirection:"row",alignItems:"stretch",position:"relative"},onClick:function(e){c.push(a)},children:[Object(r.jsx)("div",{style:{position:"absolute",left:s?0:"100%",right:0,top:0,bottom:0,transition:"left 1000ms",background:rt,zIndex:-1}}),Object(r.jsx)("div",{style:{display:"inline-flex",width:5,background:d,marginTop:4,marginBottom:4,marginRight:10,flexShrink:0}}),Object(r.jsx)(T.a,{ref:t,style:{fontSize:u},children:e.children})]})}Object.keys(Xe.a);function ct(e){return"heading"===e.type}function at(e){return"heading_with_content"===e.myType}var lt=/[!"#$%&'()*+,./:;<=>?@\^`{|}~]/g;function st(e){return"#"+e.toLowerCase().replace(/ /g,"-").replace(lt,"")}function ot(e){var t=e.children.map((function(e){return e.value})).join(""),n=q(t,"{#","}");return 0!==n.length?st(n):st(t)}var ut=function(){function e(t){Object(_e.a)(this,e),this.children=void 0,this.currIndex=void 0,this.headingDiscriminatorNumbers=void 0,this.children=t,this.currIndex=0,this.headingDiscriminatorNumbers=new Map}return Object(He.a)(e,[{key:"isEnded",value:function(){return this.currIndex>=this.children.length}},{key:"parseNonHeadingContents",value:function(){var e=Ke.a.findIndexFrom(ct,this.currIndex,this.children);if(-1===e){var t=this.children.slice(this.currIndex);return this.currIndex=this.children.length,t}var n=this.children.slice(this.currIndex,e);return this.currIndex=e,n}},{key:"parseHierarchy",value:function(e){for(var t=this.parseNonHeadingContents();!this.isEnded();){var n=this.children[this.currIndex],r=n.depth;if(r<e)return t;this.currIndex+=1;var i=this.parseHierarchy(r+1),c=ot(n),a=this.headingDiscriminatorNumbers.get(c),l=void 0;void 0!==a?(this.headingDiscriminatorNumbers.set(c,a+1),l=c+"-"+a):(this.headingDiscriminatorNumbers.set(c,1),l=c),n.myHeadingHash=l,t.push({myType:"heading_with_content",headingElement:n,contents:i})}return t}},{key:"parseDocument",value:function(){return{myType:"heading_with_content",headingElement:null,contents:this.parseHierarchy(0)}}}]),e}();function dt(e){return new ut(e).parseHierarchy(0)}function jt(e,t){var n=Pe()(Xe.a,e.renderers);return Pe()(e,{renderers:n,definitions:Ye()(t)})}function ft(e){return ht.apply(this,arguments)}function ht(){return(ht=Object(x.a)(b.a.mark((function e(t){var n,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.source||t.children||"",r=De()().use(Ne.a).use(t.plugins||[]),e.next=4,r.run(r.parse(n));case 4:return i=e.sent,i=Ge()(i),i=Me()()(i),i=Fe()(i),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function bt(e){var t=Object(i.useState)(!1),n=Object(p.a)(t,2),a=n[0],l=n[1],s=Object(i.useState)(!1),o=Object(p.a)(s,2),u=o[0],d=o[1],j=Object(f.g)(),h=Object(f.f)(),b=e.item,x=b.headingElement.myHeadingHash,O=-1!==b.contents.findIndex((function(e){return at(e)})),m=Object(i.useRef)(null);Object(i.useEffect)((function(){var t=e.outerSelectedHash===x;d(t),e.setOuterSelected&&e.setOuterSelected(t),t&&m.current&&e.onViewed(m.current)}),[x,e.outerSelectedHash]);var g=b.headingElement.children.map((function(e){return e.value})).join(" ");(g=Gt(g)).length>60&&(g=g.substr(0,60)+"...");var v=nt(b.headingElement.depth);return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsxs)(me.a,{ref:m,button:!0,style:{padding:3,paddingLeft:10*e.layer+10,display:"flex",flexDirection:"row",alignItems:"stretch",backgroundColor:j.hash===x?rt:void 0},selected:u,onClick:function(){a&&O||(h.push(x),e.onTitleClick()),l(!a)},children:[Object(r.jsx)("div",{style:{display:"inline-flex",width:5,background:v,marginTop:1,marginBottom:0,marginRight:5,flexShrink:0}}),g,O&&(a?Object(r.jsx)(Qe.a,{}):Object(r.jsx)(Ze.a,{}))]}),O&&Object(r.jsx)($e.a,{in:a,timeout:200,children:Object(r.jsx)(xe.a,{dense:!0,style:{padding:0},children:b.contents.map((function(t,n){if(at(t))return Object(r.jsx)(bt,{outerSelectedHash:e.outerSelectedHash,item:t,layer:e.layer+1,setOuterSelected:function(t){d(t),t&&l(!0),e.setOuterSelected&&e.setOuterSelected(t)},onTitleClick:e.onTitleClick,onViewed:e.onViewed},n)}))})})]},x)}function xt(e,t){t.forEach((function(t){if(at(t)){var n=t.headingElement.myHeadingHash,r=document.getElementById(n);null!==r?e.push({headingHash:n,element:r}):console.error("cannot find "+n),xt(e,t.contents)}}))}function Ot(e){var t=Object(i.useRef)(!1);return Object(i.useEffect)((function(){setTimeout((function(){t.current=!0}),1e3)}),[]),Object(r.jsx)(tt.Provider,{value:{isMatureRef:t},children:Ve()(e.root,e.renderOptions)})}var mt=c.a.memo(Ot),pt=c.a.memo(bt);function gt(e,t,n,c,a,l){var s={renderers:t,plugins:n,children:"loading markdown"},o=Object(i.useState)(null),u=Object(p.a)(o,2),d=u[0],j=u[1],h=Object(i.useState)(!1),O=Object(p.a)(h,2),m=O[0],g=O[1],v=Object(i.useState)(!1),y=Object(p.a)(v,2),k=y[0],C=y[1],S=Object(i.useState)(!1),I=Object(p.a)(S,2),_=I[0],H=I[1],E=Object(i.useRef)(null),P=Object(i.useRef)(null);Object(i.useEffect)((function(){function r(){return(r=Object(x.a)(b.a.mark((function r(){var i,c;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w()({url:k?a:e});case 3:i=r.sent,r.next=10;break;case 6:return r.prev=6,r.t0=r.catch(0),g(!0),r.abrupt("return");case 10:if(k){r.next=14;break}if("awaiting translation"!==i.data){r.next=14;break}return C(!0),r.abrupt("return");case 14:return r.next=16,ft({renderer:t,plugins:n,children:i.data});case 16:c=r.sent,E.current=dt(c.children),P.current=jt(s,c),j(c),g(!1);case 21:case"end":return r.stop()}}),r,null,[[0,6]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}(),setTimeout((function(){return H(!0)}),1200)}),[e,k]);var R=P.current,D=E.current,B=Object(i.useState)(""),N=Object(p.a)(B,2),L=N[0],F=N[1],M=null===D?void 0:Object(r.jsx)(mt,{root:d,renderOptions:R}),q=Object(i.useRef)(!0),V=Object(i.useRef)(null);Object(i.useEffect)((function(){return function(){clearTimeout(V.current)}}),[]);var z=Object(i.useRef)([]);Object(i.useEffect)((function(){if(null!==D){var e=[];xt(e,D),z.current=e}}),[D]);var G=Object(i.useCallback)((function(){if(W())F("");else if(c.current&&q.current){for(var e=null,t=c.current.scrollTop,n=c.current.scrollHeight,r=document.documentElement.clientHeight,i=t/(n-r)*n,a=z.current.length-1;a>=0;a-=1){var l=z.current[a];if(l.element&&l.element.offsetTop<i+r/4){e=l;break}}null!==e&&L!==e.headingHash&&F(e.headingHash)}}),[L]),U=null!==D&&_?Object(r.jsx)(xe.a,{dense:!0,style:{fontSize:16},children:D.map((function(e,t){if(at(e))return Object(r.jsx)(pt,{outerSelectedHash:L,item:e,layer:0,setOuterSelected:null,onTitleClick:function(){q.current=!1,V.current=setTimeout((function(){q.current=!0,G()}),2e3)},onViewed:function(e){if(l.current){var t=e.getBoundingClientRect().y;if(t>100&&t+200<window.outerHeight);else{var n,r,i,c=t-(null===(n=l.current)||void 0===n?void 0:n.getBoundingClientRect().y)+((null===(r=l.current)||void 0===r?void 0:r.scrollTop)||0);null===(i=l.current)||void 0===i||i.scrollTo({top:c-200,behavior:"smooth"})}}}},t)}))}):Object(r.jsx)(r.Fragment,{});Object(f.g)();return{wikiContentComponent:Object(r.jsxs)("div",{children:[Object(r.jsx)(et,{shown:null!==d,duration:1e3,children:M}),m&&Object(r.jsx)(T.a,{children:"error loading "+e}),null===d&&!m&&Object(r.jsx)(Oe.a,{})]}),rightBarComponent:U,updateScrollFunc:G}}var vt=n(110),yt=n.n(vt),wt=c.a.createContext({onTermClicked:function(){}});function kt(e){var t;return"/immptl"+(t=e).substr(t.indexOf("/wiki"))}function Ct(e){var t=Object(f.g)(),n=kt(e.url),c=Object(i.useContext)(wt),a=t.pathname===n;return Object(r.jsx)(j.b,{to:n,style:{textDecoration:"none",color:"black"},children:Object(r.jsxs)(me.a,{selected:a,button:!0,onClick:function(e){c.onTermClicked()},style:{paddingLeft:5},children:[Object(r.jsx)(yt.a,{style:{marginRight:5,color:a?"#e64a19":"#3f51b5"}}),e.children]})})}function St(e){Object(f.f)();var t=Object(_.a)();t.t,t.i18n;if(-1!==e.targetLink.indexOf("github.com/qouteall/ImmersivePortalsMod/wiki")){var n=kt(e.targetLink);return Object(r.jsx)(j.b,{to:n,style:{color:"#205723"},children:e.children})}return Object(r.jsx)("a",{href:e.targetLink,children:e.children})}var It=n(111),Tt=n.n(It),_t=n(201),Ht=n(421),Et=n(422),Pt=n(429),Rt=n(123),Dt=new _t.a({});function Bt(e,t){return Nt.apply(this,arguments)}function Nt(){return(Nt=Object(x.a)(b.a.mark((function e(t,n){var r,i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("triggered"),e.next=3,Dt.request("GET /search/code",{q:"".concat(t," repo:").concat(n)});case 3:if(r=e.sent,console.log(r),200===r.status){e.next=8;break}throw console.log("searching failed"),Error("searching failed");case 8:return i=r.data.items,c=i.map((function(e){return e.path})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Lt=c.a.createContext({onClicked:function(){}});function Ft(e,t){if(-1!==e.indexOf("LeftBar"))return!1;if(-1!==e.indexOf("Sidebar"))return!1;var n,r=e.indexOf("/");return n=-1===r?"en":e.substr(0,r),t.startsWith(n)||n.startsWith(t)}function Wt(e){Object(f.f)();var t=Object(i.useContext)(Lt),n="/immptl/wiki"+function(e){var t=e,n=t.indexOf("/");-1!==n&&(t=t.substr(n+1));var r=t.lastIndexOf(".");return-1!==r&&(t=t.substr(0,r)),"home"===t.toLowerCase()?"":"/"+t}(e.data.filePath)+e.data.headingHash;return Object(r.jsx)(V.a,{elevation:5,style:{margin:5,width:"100%"},children:Object(r.jsx)(j.b,{to:n,style:{textDecoration:"none",color:"black"},onClick:t.onClicked,children:Object(r.jsx)(z.a,{style:{fontSize:"unset"},children:Object(r.jsx)(C.a,{plugins:[Rt],renderers:Ut,children:e.data.previewText})})})})}function Mt(e){var t="https://qouteall.fun/imm_ptl_wiki_copy/"+e.filePath,n=P(t),c=n.complete,a=n.data,l=n.error,s=n.pending,o=Object(i.useState)([]),u=Object(p.a)(o,2),d=u[0],j=u[1],f=Object(i.useState)(!0),h=Object(p.a)(f,2),b=h[0],x=h[1];return Object(i.useEffect)((function(){j(c?function(e,t,n){var r,i=function(e,t,n){var r=e.length;if(0===r)return[];var i,c=0,a=[];for(n||(t=t.toLowerCase(),e=e.toLowerCase());(i=t.indexOf(e,c))>-1;)a.push(i),c=i+r;return a}(n,e,!1),c=[],a=-2,l=Object(be.a)(i);try{for(l.s();!(r=l.n()).done;){var s=r.value,o=e.indexOf("\n",s);-1===o&&(o=e.length);var u=e.lastIndexOf("\n",s);if(-1===u&&(u=-1),a!==u){a=u;var d=e.substr(u+1,o-u-1),j=e.lastIndexOf("#",s),f="";if(-1!==j){var h=e.indexOf("\n",j);-1===h&&(h=e.length);var b=(f=(f=e.substr(j+1,h-j-1)).trimStart()).indexOf("{#");f=-1!==b?f.substr(b+1,f.lastIndexOf("}")-b-1):st(f)}c.push({filePath:t,previewText:d,headingHash:f})}else a=u}}catch(x){l.e(x)}finally{l.f()}return c}(a,e.filePath,e.keyword):[])}),[c]),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsxs)(me.a,{style:{alignSelf:"stretch",display:"flex",flexDirection:"row"},button:!0,onClick:function(){return x(!b)},children:[Object(r.jsx)(yt.a,{style:{color:"#3f51b5"}}),Object(r.jsx)(T.a,{children:e.filePath}),b?Object(r.jsx)(Qe.a,{}):Object(r.jsx)(Ze.a,{})]}),l&&"error loading "+t,s&&Object(r.jsx)(Oe.a,{}),Object(r.jsx)($e.a,{in:b,children:Object(r.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"stretch",alignSelf:"stretch",padding:10},children:d.map((function(t,n){return Object(r.jsx)(Wt,{data:t,keyword:e.keyword},n)}))})})]})}function qt(e){var t=Object(i.useState)(""),n=Object(p.a)(t,2),c=n[0],a=n[1],l=Object(i.useState)("ready"),s=Object(p.a)(l,2),o=s[0],u=s[1],d=Object(i.useState)([]),j=Object(p.a)(d,2),f=j[0],h=j[1];function O(){return(O=Object(x.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("started searching"+c),e.prev=1,e.next=4,Bt(c,"qouteall/imm_ptl_wiki_copy");case 4:t=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),u("error"),e.abrupt("return");case 11:n=t.filter((function(e){return Ft(e,R())})),u("finished"),h(n);case 14:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var m=function(){0!==c.length&&(u("loading"),h([]),function(){O.apply(this,arguments)}())};return m=Object(i.useCallback)(m,[c,u,h]),Object(r.jsxs)(Ht.a,{open:e.enabled,onClose:e.close,maxWidth:"md",fullWidth:!0,children:[Object(r.jsx)(Et.a,{children:"Search"}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",margin:20},children:[Object(r.jsx)(Pt.a,{autoFocus:!0,fullWidth:!0,onChange:function(e){return a(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&m()}}),Object(r.jsx)(v.a,{onClick:m,children:Object(r.jsx)(Tt.a,{})})]}),"finished"===o&&Object(r.jsxs)("div",{style:{margin:20},children:[Object(r.jsx)("div",{style:{display:"flex",alignItems:"stretch",flexDirection:"column"},children:f.map((function(e){return Object(r.jsx)(Mt,{keyword:c,filePath:e},e)}))}),0===f.length&&"No Result"]}),"loading"===o&&Object(r.jsx)(Oe.a,{style:{margin:20}}),"error"===o&&"error"]})}var Vt=n(123);function zt(e,t){var n=function(e,t){var n=e.lastIndexOf(t);return-1===n?e:e.substr(n+t.length)}(e,"/wiki");return 0===n.length?t+"/Home.md":t+n+".md"}function Gt(e){var t=e.indexOf("{#");return-1!==t?e.slice(0,t):e}var Ut=Object(g.a)(Object(g.a)({},N),{},{text:function(e){var t=e.value;return Gt(t)},table:function(e){return Object(r.jsx)(pe.a,{children:e.children})},tableHead:function(e){return Object(r.jsx)(ge.a,{children:e.children})},tableRow:function(e){return Object(r.jsx)(ve.a,{children:e.children})},tableBody:function(e){return Object(r.jsx)(ye.a,{children:e.children})},tableCell:function(e){return Object(r.jsx)(we.a,{children:e.children})},link:function(e){return Object(r.jsx)(St,{targetLink:e.href,children:e.children})},heading:function(e){return Object(r.jsx)(it,{level:e.level,node:e.node,children:e.children})},code:function(e){return Object(r.jsx)("pre",{style:{margin:5,padding:5,overflowX:"auto",background:"#eaeaea"},children:Object(r.jsx)("code",{children:e.value})})},inlineCode:function(e){return Object(r.jsx)("code",{style:{background:"#eaeaea"},children:e.value})}});function Yt(e,t){if("link"===t.type){var n={title:t.children[0].value,url:t.url};e.push(n)}if(t.children){var r,i=Object(be.a)(t.children);try{for(i.s();!(r=i.n()).done;){Yt(e,r.value)}}catch(c){i.e(c)}finally{i.f()}}return null}function Jt(){var e=Object(_.a)(),t=e.t,n=(e.i18n,Object(f.g)()),c=zt(n.pathname,t("url_wiki_content_prefix")),a=zt(n.pathname,"https://qouteall.fun/imm_ptl_wiki_copy"),l=Object(i.useState)("Loading..."),s=Object(p.a)(l,2),o=s[0],u=s[1],d=Object(i.useState)([]),j=Object(p.a)(d,2),h=j[0],O=j[1],m=Object(i.useState)(!1),g=Object(p.a)(m,2),v=g[0],y=g[1],w=Object(i.useState)(!1),k=Object(p.a)(w,2),C=k[0],S=k[1],I=P(t("url_wiki_sidebar")),H=I.data,E=I.complete,R=Object(i.useState)(!1),D=Object(p.a)(R,2),B=D[0],N=D[1];Object(i.useEffect)((function(){function e(){return(e=Object(x.a)(b.a.mark((function e(){var t,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==H){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ft({children:H});case 4:t=e.sent,Yt(r=[],t),O(r),(i=r.find((function(e){return kt(e.url)===n.pathname})))?(S(!1),u(i.title)):S(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n.pathname,E]);var L=Object(r.jsxs)(wt.Provider,{value:{onTermClicked:function(){return y(!1)}},children:[Object(r.jsx)(T.a,{variant:"h5",style:{margin:10,marginBottom:0,marginLeft:15},children:t("Pages")}),Object(r.jsx)(Ce.a,{style:{margin:10}}),Object(r.jsxs)(xe.a,{component:"nav",style:{maxWidth:"80vw",display:"flex",flexDirection:"column",flexGrow:1},children:[E?h.map((function(e){return Object(r.jsx)(Ct,{url:e.url,children:e.title},e.url)})):Object(r.jsx)(Oe.a,{}),Object(r.jsx)("div",{style:{flexGrow:1}}),Object(r.jsxs)(me.a,{button:!0,style:{paddingLeft:5},onClick:function(){N(!0)},children:[Object(r.jsx)(Tt.a,{style:{marginRight:5,marginLeft:0,color:"#e64a19"}}),"Search"]},"search")]})]}),F=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Te.a,{anchor:"left",open:v,onClose:function(){return y(!1)},style:{},children:L}),!v&&Object(r.jsx)("div",{style:{display:"none"},children:L})]}),q=Object(r.jsx)("div",{style:{minWidth:"20vw",maxWidth:"20vw",alignSelf:"stretch",overflowY:"auto",display:"flex",flexDirection:"column"},className:"My-Sticky",children:L}),V=Object(i.useRef)(null),z=Object(i.useRef)(null),G=gt(c,Ut,[Vt],V,a,z),U=G.wikiContentComponent,Y=G.rightBarComponent,J=G.updateScrollFunc,X=Object(i.useRef)(null),A=W();return Object(r.jsxs)("div",{className:"My-Page",style:{display:"flex",flexDirection:"column"},children:[Object(r.jsx)(Q,{text:t("Immersive Portals Wiki"),color:"#9500ae",pageIconPath:M("/immptl.png"),children:A&&Object(r.jsx)(ke.a,{onClick:function(){return y(!v)},children:Object(r.jsx)(Ie.a,{style:{color:"white"}})})}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",overflowY:"auto",minHeight:0,flexBasis:0,flexGrow:1},onScroll:function(){X.current&&clearTimeout(X.current),X.current=setTimeout(J,300)},ref:V,children:[A?F:q,Object(r.jsxs)("div",{style:{margin:0,padding:20,flexGrow:1,minWidth:0,flexBasis:0},ref:z,children:[Object(r.jsx)(T.a,{variant:"h4",children:o}),Object(r.jsx)(Ce.a,{style:{margin:10}}),C?"Page Not Found":U]}),!A&&Object(r.jsxs)("div",{ref:z,style:{margin:0,minWidth:"20vw",maxWidth:"20vw",alignSelf:"stretch",overflowY:"auto"},className:"My-Sticky",children:[Object(r.jsx)(T.a,{variant:"h5",style:{margin:10,marginBottom:0},children:t("Contents")}),Object(r.jsx)(Ce.a,{style:{margin:10}}),Y]})]}),Object(r.jsx)(Lt.Provider,{value:{onClicked:function(){return N(!1)}},children:Object(r.jsx)(qt,{enabled:B,close:function(){return N(!1)}})})]})}function Xt(){return Object(r.jsxs)("div",{className:"My-Page",children:[Object(r.jsx)(Q,{text:"test",color:"black",pageIconPath:""}),Object(r.jsx)(v.a,{onClick:function(){function e(){return(e=Object(x.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},children:"h"})]})}function At(){var e,t=Object(f.g)(),n=Object(i.useRef)(0),c=Object(i.useRef)(0);return Object(i.useEffect)((function(){var e=document.documentElement,t=function(e){n.current=e.clientX,c.current=e.clientY};return e.addEventListener("mousemove",t),function(){e.removeEventListener("mousemove",t)}}),[]),document.documentElement.style.setProperty("--mouse-x",n.current+"px"),document.documentElement.style.setProperty("--mouse-y",c.current+"px"),Object(r.jsx)(i.Suspense,{fallback:"loading",children:Object(r.jsx)(O.a,{children:Object(r.jsx)(m.a,{classNames:"circle-fade",timeout:1e3,children:Object(r.jsxs)(f.c,{location:t,children:[Object(r.jsx)(f.a,{path:"/",exact:!0,children:Object(r.jsx)(Z,{})}),Object(r.jsx)(f.a,{path:"/immptl/",exact:!0,children:Object(r.jsx)(he,{})}),Object(r.jsx)(f.a,{path:"/immptl/wiki/",children:Object(r.jsx)(Jt,{})}),Object(r.jsx)(f.a,{path:"/test",children:Object(r.jsx)(Xt,{})})]})},(e=t.pathname,e.startsWith("/immptl/wiki")?"/immptl/wiki/":e))})})}var Kt=function(){return Object(r.jsx)(j.a,{children:Object(r.jsx)(f.c,{children:Object(r.jsx)(At,{})})})},$t=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,434)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Kt,{})}),document.getElementById("root")),$t()}},[[375,1,2]]]);
//# sourceMappingURL=main.96f32179.chunk.js.map