(this.webpackJsonplcds=this.webpackJsonplcds||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(5),o=c.n(i),s=(c(10),c(2)),r=c(4),u=c(1);function l(e,t){return Math.random()*(t-e)+e}var j=100;function b(e){var t=e.width,c=e.height,a=e.videoSrc,i=e.animationSpeed,o=e.onMouseEnter,b=e.show,d=Object(n.useRef)(),O=Object(n.useState)({x:0,y:0}),f=Object(s.a)(O,2),v=f[0],h=f[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),x=p[0],g=p[1],S=Object(n.useState)(0),y=Object(s.a)(S,2),M=y[0],w=y[1],C=Object(n.useState)(0),k=Object(s.a)(C,2),E=k[0],I=k[1],_=Object(r.b)(),T={width:"".concat(j,"px"),height:"".concat(j,"px"),opacity:b?"1":E},F=Object(n.useCallback)((function(e){g(!0),o(),setTimeout((function(){g(!1)}),4e3)}));Object(n.useEffect)((function(){var e=d.current;if(e&&4===e.readyState)if(x){var t=0;e.currentTime=l(0,M),I(t),e.volume=0,e.play();var c=setInterval((function(){e.volume>.75?clearInterval(c):(t+=.15,console.log("Volume: ",t),console.log("Opacity: ",t),e.volume=t,I(t))}),200)}else var n=1,a=setInterval((function(){e.volume<.1?(e.pause(),I(0),clearInterval(a)):(n-=.1,console.log("Volume: ",n),console.log("Opacity: ",n),e.volume=n,I(n))}),200)}),[x]);return Object(n.useEffect)((function(){var e=l(0,t),n=l(0,c),a=e-v.x,o=n-v.y,s=Math.sqrt(a*a+o*o),r=Math.round(s/i*100)/100;_.start({x:e,y:n,transition:{ease:"linear",duration:r}}).then((function(){h({x:e,y:n})}))}),[v,_]),Object(u.jsx)(r.a.div,{animate:_,className:"demo0-block",onMouseEnter:F,style:T,children:Object(u.jsx)("div",{children:Object(u.jsx)("video",{width:j,height:j,onDurationChange:function(){var e=d.current;e&&w(e.duration)},ref:d,class:"rotating-video",children:Object(u.jsx)("source",{src:a,type:"video/mp4"})})})})}function d(e){var t=e.x,c=void 0===t?0:t,n=e.y,a=void 0===n?0:n,i=e.size,o=void 0===i?20:i,s={left:"".concat(c,"px"),top:"".concat(a,"px"),width:"".concat(o,"px"),height:"".concat(o,"px")};return Object(u.jsx)("div",{className:"demo0-dustball",style:s})}c(12);var O=c.p+"static/media/meditation original.6002f9cc.wav",f=["eli_1","susie_1","susie_2","pauline_1","pauline_2","pauline_3"];function v(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useState)(0),a=Object(s.a)(c,2),i=a[0],o=a[1],r=Object(n.useState)(0),l=Object(s.a)(r,2),j=l[0],v=l[1],h=Object(n.useState)(0),m=Object(s.a)(h,2),p=m[0],x=m[1],g=Object(n.useState)(0),S=Object(s.a)(g,2),y=S[0],M=S[1],w=Object(n.useState)(20),C=Object(s.a)(w,2),k=C[0],E=C[1],I=Object(n.useState)({x:0,y:0}),_=Object(s.a)(I,2),T=_[0],F=_[1],R=Object(n.useState)(!1),B=Object(s.a)(R,2),N=B[0],q=B[1],z=Object(n.useState)(!1),D=Object(s.a)(z,2),J=D[0],L=D[1],P=Object(n.useCallback)((function(e){var t=e.clientX,c=e.clientY,n=Math.min(t-p,i-k),a=Math.min(c-y,j-k);F({x:n,y:a})}),[p,y,k]),V=Object(n.useCallback)((function(e){E(k+10)}));return Object(n.useEffect)((function(){var t=e.current.offsetWidth,c=e.current.offsetHeight,n=e.current.getBoundingClientRect();x(n.left),M(n.top),o(t),v(c)}),[]),Object(u.jsxs)("div",{class:"app-root",children:[Object(u.jsx)("audio",{src:O,ref:t}),Object(u.jsx)("button",{onClick:function(){if(J)q(!N);else{var e=t.current;e&&4===e.readyState&&e.play(),L(!0)}},children:J?"Toggle Squares":"Start!"}),Object(u.jsxs)("div",{className:"demo0",ref:e,onMouseMove:P,children:[J&&f.map((function(e,t){return Object(u.jsx)(b,{videoSrc:"https://media.githubusercontent.com/media/nomrik/lcds/main/src/videos/".concat(e,".mp4"),width:i,height:j,animationSpeed:150,onMouseEnter:V,show:N},e+t)})),J&&Object(u.jsx)(d,{x:T.x,y:T.y,size:k})]})]})}var h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),h()}},[[13,1,2]]]);
//# sourceMappingURL=main.a8896002.chunk.js.map