"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[796],{82:function(t,e,n){n.d(e,{IQ:function(){return h},Jh:function(){return d},LP:function(){return s},Pg:function(){return p},gH:function(){return g}});var r=n(861),a=n(757),c=n.n(a),u=n(243),o="197007a676a4d3e84c6bdb6f21b18a1a";function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&page=1"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},796:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r,a,c=n(439),u=n(791),o=n(689),s=n(82),i=n(168),p=n(529),l=p.Z.li(r||(r=(0,i.Z)(["\n  width: 200px;\n"]))),h=n(184),f=function(t){return t.actors.cast.map((function(t){var e=t.character,n=t.name,r=t.profile_path,a=t.id,c="https://www.themoviedb.org/t/p/w200/".concat(r);return(0,h.jsxs)(l,{children:[(0,h.jsx)("img",{src:r?c:"http://placehold.it/200x300",alt:n}),(0,h.jsx)("p",{children:n}),(0,h.jsxs)("p",{children:["Character: ",e]})]},a)}))},d=p.Z.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  list-style: none;\n  padding-left: 0;\n"]))),v=function(){var t=(0,o.UO)().movieId,e=(0,u.useState)([]),n=(0,c.Z)(e,2),r=n[0],a=n[1];return(0,u.useEffect)((function(){(0,s.IQ)(t).then(a)}),[t]),(0,h.jsx)(d,{children:0!==r.length&&(0,h.jsx)(f,{actors:r})})}}}]);
//# sourceMappingURL=796.2520ac1e.chunk.js.map