(this.webpackJsonplcds=this.webpackJsonplcds||[]).push([[0],{16:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(11),s=c.n(i),o=(c(16),c(2)),j=c(1);function u(e){var t=e.started,c=e.setStarted;return Object(j.jsxs)("div",{className:"title-page".concat(t?" started":""),children:[Object(j.jsx)("h1",{children:"p\xf6lypallo"}),Object(j.jsx)("h2",{children:"by ella holappa & omri kochavi"}),Object(j.jsx)("div",{className:"starter",onClick:function(){return c(!0)},children:Object(j.jsx)("div",{className:"dusty white"})})]})}var r=c(4),b=c(3),O=c.n(b);function l(e,t){return Math.random()*(t-e)+e}c(7);function d(e){var t=e.init,c=Object(a.useRef)(),n=Object(a.useRef)(),i=Object(a.useRef)(),s=Object(a.useState)(0),u=Object(o.a)(s,2),b=u[0],d=u[1],f=Object(a.useState)(0),h=Object(o.a)(f,2),v=h[0],p=h[1],m=Object(a.useState)(0),g=Object(o.a)(m,2),x=g[0],S=g[1],y=Object(a.useState)(0),k=Object(o.a)(y,2),C=k[0],M=k[1],T=Object(a.useState)(20),w=Object(o.a)(T,2),F=w[0],I=(w[1],Object(a.useState)({x:0,y:0})),N=Object(o.a)(I,2),D=(N[0],N[1]),R=Object(a.useState)(!1),z=Object(o.a)(R,2),B=(z[0],z[1],Object(a.useState)(0)),E=Object(o.a)(B,2),J=E[0],L=E[1],P=Object(a.useState)(!1),U=Object(o.a)(P,2),H=U[0],W=U[1],X=Object(a.useState)(!1),Y=Object(o.a)(X,2),q=Y[0],A=Y[1],G=Object(a.useState)(!1),K=Object(o.a)(G,2),Q=K[0],V=K[1],Z=Object(a.useState)("".concat(l(10,90),"%")),$=Object(o.a)(Z,2),_=$[0],ee=($[1],Object(a.useState)("".concat(l(10,90),"%"))),te=Object(o.a)(ee,2),ce=te[0],ae=(te[1],Object(a.useCallback)((function(e){var t=e.clientX,c=e.clientY,a=Math.min(t-x,b-F),n=Math.min(c-C,v-F);D({x:a,y:n})}),[x,C,F]));Object(a.useEffect)((function(){if(t){i.current.seekTo(1);var e=c.current.offsetWidth,a=c.current.offsetHeight,n=c.current.getBoundingClientRect();S(n.left),M(n.top),d(e),p(a),setTimeout((function(){W(!0)}),12e3)}}),[t]);var ne=Object(a.useCallback)((function(){t&&setTimeout((function(){L(.2),setTimeout((function(){L(0),ne()}),l(3e3,4e3))}),l(12e4,18e4))}),[t]);Object(a.useEffect)((function(){if(t){var e=n.current;navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then((function(t){e.srcObject=t,e.play()}))}}),[t]);var ie={position:"absolute",top:0,left:0};return Object(j.jsx)("div",{class:"app-root",children:Object(j.jsxs)("div",{className:"demo0",ref:c,onMouseMove:ae,children:[Object(j.jsx)("video",{ref:n,class:"video",width:"50%",height:"50%",style:{position:"absolute",top:"40%",left:"50%",zIndex:3,opacity:J},autoplay:!0}),Object(j.jsx)(O.a,{width:"75%",height:"75%",url:"https://vimeo.com/423548242",style:Object(r.a)(Object(r.a)({},ie),{},{zIndex:2,margin:"30px",opacity:Q?1:0}),playing:t,volume:1}),Object(j.jsx)(O.a,{ref:i,width:"100%",height:"100%",url:"https://vimeo.com/523997697/3129da299b",style:Object(r.a)(Object(r.a)({},ie),{},{zIndex:0}),playing:!0,muted:!0,loop:!0}),H&&Object(j.jsx)("div",{className:"dusty",onClick:function(){q||(A(!0),W(!1),ne(),setTimeout((function(){V(!0)}),7e3))},style:{left:_,top:ce}})]})})}c(29),c(30);function f(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)(u,{started:c,setStarted:i}),Object(j.jsx)(d,{init:c})]})}var h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),h()}},[[31,1,2]]]);
//# sourceMappingURL=main.c5a36636.chunk.js.map