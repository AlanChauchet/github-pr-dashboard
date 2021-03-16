(this["webpackJsonpgithub-pr-dashboard"]=this["webpackJsonpgithub-pr-dashboard"]||[]).push([[0],{209:function(e,t,r){},271:function(e,t){},394:function(e,t,r){},395:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(13),o=r.n(i),c=(r(209),r(34)),s=r(12),u=r(427),l=r(429),f=r(97),d=r(428),p=r(91),m={token:null,organisation:null,repositories:[],filteredTags:[],requiredTags:[],daysBeforeWarning:"1",daysBeforeCritical:"2",hoursUntilNotNew:"2",autoScroll:"false",cdoRotation:[],minNbReviews:2,onlyNotReviewed:"true"};function v(e,t){switch(t.type){case"update":return e.hasOwnProperty(t.key)?Object(c.a)({},e,Object(p.a)({},t.key,t.value)):e;default:throw new Error}}var b=r(9),g=r.n(b),h=r(24),w=r(15),x=r(182),y=r(183),O=r(184),k=r.n(O),j=function(){function e(t){Object(x.a)(this,e),this.api=new k.a,this.api.authenticate({type:"token",token:t.token}),this.org=t.org}return Object(y.a)(e,[{key:"getMe",value:function(){var e=Object(w.a)(g.a.mark((function e(){var t,r,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.users.get({});case 2:return t=e.sent.data,r=t.login,n=t.id,e.abrupt("return",{login:r,id:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFilteredData",value:function(e,t,r){var n=e.filter((function(e){return Date.parse(e[t])>r}));return[n,e.length===n.length]}},{key:"paginate",value:function(){var e=Object(w.a)(g.a.mark((function e(t,r,n,a){var i,o,c,u,l,f,d,p;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=!0,e.next=3,t(r);case 3:o=e.sent,c=o.data,n&&a&&(u=this.getFilteredData(c,n,a),l=Object(s.a)(u,2),c=l[0],i=l[1]);case 6:if(!this.api.hasNextPage(o)||!i){e.next=15;break}return e.next=9,this.api.getNextPage(o);case 9:o=e.sent,f=null,n&&a&&(d=this.getFilteredData(o.data,n,a),p=Object(s.a)(d,2),f=p[0],i=p[1]),c=c.concat(f),e.next=6;break;case 15:return e.abrupt("return",c);case 16:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a){return e.apply(this,arguments)}}()},{key:"getOpenPrs",value:function(){var e=Object(w.a)(g.a.mark((function e(t){var r,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={owner:this.org,repo:t,state:"open"},e.next=3,this.paginate(this.api.pullRequests.getAll,r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getClosedPrsLastWeek",value:function(){var e=Object(w.a)(g.a.mark((function e(t){var r,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={owner:this.org,repo:t,state:"closed",sort:"updated",direction:"desc",per_page:50},n=Date.now()-6048e5,e.next=4,this.paginate(this.api.pullRequests.getAll,r,"closed_at",n);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPrDetails",value:function(){var e=Object(w.a)(g.a.mark((function e(t,r){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.pullRequests.get({owner:this.org,repo:t,number:r});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPrReviews",value:function(){var e=Object(w.a)(g.a.mark((function e(t,r){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={owner:this.org,repo:t,number:r},e.next=3,this.paginate(this.api.pullRequests.getReviews,n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPrMergeStatus",value:function(){var e=Object(w.a)(g.a.mark((function e(t,r){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,this.api.pullRequests.checkMerged({owner:this.org,repo:t,number:r});case 4:n=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:return e.abrupt("return",n&&204===n.status);case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(w.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.users.getForUser({username:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),E=r(185),N=new(r.n(E).a)(void 0,{speed:4e4}),C=r(424),R=r(434),S=r(425),A=r(423),D=r(192),P=r.n(D),L=r(193),I=r.n(L),T=r(194),_=r.n(T),B=r(433),W=r(186),M=r.n(W),z=r(22),U=r.n(z),q=r(420),F=r(7),$=r(191),G=r.n($),V=r(422),H="#fcbb26",J="#ff5c39",Q="#00b388",Y=Object(q.a)((function(e){return{root:{width:"100%"},item:{backgroundColor:e.palette.background.paper,marginBottom:"2em",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",position:"relative",transition:"background-color 200ms ease-in-out"},warning:{backgroundColor:Object(F.e)(H,.6),"&:hover":{backgroundColor:Object(F.e)(H,.4)}},critical:{backgroundColor:Object(F.e)(J,.6),"&:hover":{backgroundColor:Object(F.e)(J,.4)}},mergeable:{backgroundColor:Object(F.e)(Q,.6),"&:hover":{backgroundColor:Object(F.e)(Q,.45)},"&$warning $timeAgo":{color:H},"&$critical $timeAgo":{color:J}},progress:{position:"absolute",top:0,left:0,right:0},avatar:{width:60,height:60,borderRadius:"3px",marginRight:"1em"},extraDataContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:"17vw"},reviewNumbersContainer:{display:"flex",alignItems:"center","&:not(:last-of-type)":{marginBottom:"0.5em"},"& svg":{marginLeft:"0.5em",fontSize:"2.5em"},"&.green svg":{color:Q},"&.red svg":{color:J},"&.grey svg":{color:"#d9d9d6"}},newChip:{backgroundColor:J,color:"white",position:"absolute",top:-15,left:50,fontSize:"1.8vw"},prTitle:{fontSize:"2vw"},prProject:{fontSize:"1.8vw"},timeAgo:{fontSize:"1.8vw"},reviewNumber:{fontSize:"1.8vw"}}})),K=G()({root:{height:2,backgroundColor:Object(F.e)(Q,.5)},bar:{backgroundColor:Q}})(V.a),X=function(e){var t=e.pullRequest,r=e.settings,i=e.forwardRef,o=function(e,t){return Object(n.useMemo)((function(){var r="NEUTRAL",n=U()(e),a=n.fromNow(),i=U()(),o=U()().subtract(+t.hoursUntilNotNew,"hours");if(n.isBetween(o,i))r="NEW";else{var c=i.diff(n,"days");for(0!==i.day()&&6!==i.day()||!(i.hours()>n.hours()||i.hours()===n.hours()&&i.minutes()>n.minutes())||c--,i.subtract(1,"days");i.diff(n,"days")>0;)0!==i.day()&&6!==i.day()||c--,i.subtract(1,"days");c>=+t.daysBeforeCritical?r="CRITICAL":c>=+t.daysBeforeWarning&&(r="WARNING")}return{timeAgoText:a,timeState:r}}),[e,t.hoursUntilNotNew,t.daysBeforeWarning,t.daysBeforeCritical])}(t.created_at,r),c=o.timeAgoText,s=o.timeState,u=function(e){return Object(n.useMemo)((function(){var t=0,r=0,n=e.detail?e.detail.comments:0;if(e.reviews){var a=!0,i=!1,o=void 0;try{for(var c,s=e.reviews[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var u=c.value;if(u)switch(u.state){case"APPROVED":t++;break;case"CHANGES_REQUESTED":var l=!1,f=!0,d=!1,p=void 0;try{for(var m,v=e.reviews[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){var b=m.value;b&&b.id!==u.id&&b.user.login===u.user.login&&"APPROVED"===b.state&&Date.parse(b.submitted_at)-Date.parse(u.submitted_at)>0&&(l=!0)}}catch(g){d=!0,p=g}finally{try{f||null==v.return||v.return()}finally{if(d)throw p}}l||r++}}}catch(g){i=!0,o=g}finally{try{a||null==s.return||s.return()}finally{if(i)throw o}}}return{nbApprove:t,nbRefuse:r,nbComments:n}}),[e])}(t),l=u.nbApprove,d=u.nbRefuse,p=u.nbComments,m=Y(),v=l>=r.minNbReviews&&t.detail&&!0===t.detail.mergeable&&"clean"===t.detail.mergeable_state;return"true"===r.onlyNotReviewed&&l>=r.minNbReviews?null:a.a.createElement(A.a,{ref:i,className:M()(m.item,v&&m.mergeable,"WARNING"===s&&m.warning,"CRITICAL"===s&&m.critical),component:"a",href:t.html_url,target:"_blank",button:!0},(!t.detail||!t.reviews)&&a.a.createElement(K,{className:m.progress}),"NEW"===s&&a.a.createElement(B.a,{label:"New",className:m.newChip}),a.a.createElement(C.a,null,a.a.createElement(R.a,{className:m.avatar,src:t.user.avatar_url})),a.a.createElement(S.a,{primary:t.title,secondary:t.base.repo.name,classes:{primary:m.prTitle,secondary:m.prProject}}),a.a.createElement("div",{className:m.extraDataContainer},a.a.createElement("div",null,a.a.createElement("div",{className:"".concat(m.reviewNumbersContainer," green")},a.a.createElement(f.a,{className:m.reviewNumber},t.reviews?l:"-"),a.a.createElement(P.a,null)),a.a.createElement("div",{className:"".concat(m.reviewNumbersContainer," red")},a.a.createElement(f.a,{className:m.reviewNumber},t.reviews?d:"-"),a.a.createElement(I.a,null)),a.a.createElement("div",{className:"".concat(m.reviewNumbersContainer," grey")},a.a.createElement(f.a,{className:m.reviewNumber},t.detail?p:"-"),a.a.createElement(_.a,null))),a.a.createElement(f.a,{className:m.timeAgo},c)))},Z=r(431),ee=r(426),te=r(196),re=r.n(te),ne=r(432),ae=Object(q.a)((function(e){return{shareButton:{marginRight:"2em","& svg":{fontSize:"2em"}}}})),ie=function(e){var t=function(e){return Object(n.useMemo)((function(){for(var t=new URL("".concat(window.location.origin).concat(window.location.pathname)),r=0,n=Object.keys(e);r<n.length;r++){var a=n[r];"token"!==a&&t.searchParams.set(a,Array.isArray(e[a])?e[a].join(","):e[a])}return t.toString()}),[e])}(e.settings),r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],c=i[1],u=Object(n.useCallback)((function(e){e.clipboardData?(e.clipboardData.setData("text/plain",t),c(!0)):window.clipboardData?(window.clipboardData.setData("Text","custom content from click"),c(!0)):navigator.clipboard&&navigator.clipboard.writeText(t).then((function(){return c(!0)}))}),[t]),l=Object(n.useCallback)((function(){c(!1)}),[]),f=ae();return a.a.createElement(a.a.Fragment,null,a.a.createElement(ne.a,{title:t},a.a.createElement(ee.a,{className:f.shareButton,onClick:u},a.a.createElement(re.a,null))),a.a.createElement(Z.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:o,autoHideDuration:2e3,onClose:l,message:"Copied to clipboard !"}))},oe=(r(394),Object(q.a)((function(e){return{app:{position:"relative"},list:{width:"100%",paddingTop:165},header:{zIndex:2,position:"fixed",top:0,left:0,right:0,backgroundColor:"#fafafa",display:"flex",alignItems:"center",justifyContent:"space-around"},title:{position:"relative",margin:"1em 0",flex:1},username:{fontSize:18},loader:{marginLeft:"1em",position:"absolute"},nbMergedContainer:{flex:1},headerEndContainer:{flex:1,display:"flex",alignItems:"center",justifyContent:"flex-end"},cdoContainer:{marginRight:"5vw",display:"flex",flexDirection:"column",alignItems:"center"},cdoAvatar:{width:60,height:60,borderRadius:"3px"}}})));var ce=function(){var e,t,r,i=function(){var e=Object(n.useReducer)(v,m),t=Object(s.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){new URLSearchParams(window.location.search).forEach((function(e,t){return a({type:"update",key:t,value:Array.isArray(m[t])?e.split(","):e})}))}),[]),r}(),o=function(e,t){var r=Object(n.useState)(null),a=Object(s.a)(r,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){o(e&&t?new j({token:e,org:t}):null)}),[e,t]),i}(i.token,i.organisation),p=function(e){var t=Object(n.useState)({login:null,id:null}),r=Object(s.a)(t,2),a=r[0],i=r[1];return Object(n.useEffect)((function(){e&&e.getMe().then(i).catch((function(e){return console.error("getMe failed",e)}))}),[e]),a}(o),b=function(e,t){var r=t.me,a=t.repositories,i=t.filteredTags,o=t.requiredTags,u=t.onlyNotReviewed,l=Object(n.useState)([]),f=Object(s.a)(l,2),d=f[0],p=f[1],m=Object(n.useState)(!1),v=Object(s.a)(m,2),b=v[0],x=v[1];return Object(n.useEffect)((function(){var t=null;function n(){return s.apply(this,arguments)}function s(){return(s=Object(w.a)(g.a.mark((function t(){var n,s,l,f,d,m,v,b,w,y,O;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(!0),n=[],s=!0,l=!1,f=void 0,t.prev=5,d=a[Symbol.iterator]();case 7:if(s=(m=d.next()).done){t.next=16;break}return v=m.value,t.next=11,e.getOpenPrs(v);case 11:b=t.sent,n=[].concat(Object(h.a)(n),Object(h.a)(b.filter((function(e){return!e.draft&&!e.labels.find((function(e){return!!i.find((function(t){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))}))&&(!o.length||e.labels.find((function(e){return!!o.find((function(t){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))})))}))));case 13:s=!0,t.next=7;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(5),l=!0,f=t.t0;case 22:t.prev=22,t.prev=23,s||null==d.return||d.return();case 25:if(t.prev=25,!l){t.next=28;break}throw f;case 28:return t.finish(25);case 29:return t.finish(22);case 30:p(n.map((function(e){return Object(c.a)({},e,{detail:null,reviews:null})})).sort((function(e,t){return e.created_at.localeCompare(t.created_at)}))),x(!1),w=g.a.mark((function t(){var n,a,i,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=O[y],t.next=3,e.getPrReviews(n.base.repo.name,n.number);case 3:if(a=t.sent,i=null!==r.id&&a.find((function(e){return e&&"APPROVED"===e.state&&e.user.id===r.id})),!u||!i){t.next=9;break}p((function(e){var t=e.findIndex((function(e){return e.id===n.id}));return t>=0?[].concat(Object(h.a)(e.slice(0,t)),Object(h.a)(e.slice(t+1))):e})),t.next=13;break;case 9:return t.next=11,e.getPrDetails(n.base.repo.name,n.number);case 11:o=t.sent,p((function(e){var t=e.findIndex((function(e){return e.id===n.id}));return t>=0?[].concat(Object(h.a)(e.slice(0,t)),[Object(c.a)({},e[t],{detail:o,reviews:a})],Object(h.a)(e.slice(t+1))):e}));case 13:case"end":return t.stop()}}),t)})),y=0,O=n;case 34:if(!(y<O.length)){t.next=39;break}return t.delegateYield(w(),"t1",36);case 36:y++,t.next=34;break;case 39:case"end":return t.stop()}}),t,null,[[5,18,22,30],[23,,25,29]])})))).apply(this,arguments)}return clearInterval(t),e&&r.id&&(n().catch(console.error),t=window.setInterval((function(){n().catch(console.error)}),12e4)),function(){clearInterval(t)}}),[e,a,i,o,r,u]),[d,b]}(o,Object(c.a)({},i,{me:p})),x=Object(s.a)(b,2),y=x[0],O=x[1],k=function(e,t){var r=t.repositories,a=t.users,i=t.filters,o=Object(n.useState)(0),c=Object(s.a)(o,2),u=c[0],l=c[1];return Object(n.useEffect)((function(){function t(){return(t=Object(w.a)(g.a.mark((function t(){var n,a,i,o,c,s,u,f;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],a=!0,i=!1,o=void 0,t.prev=4,c=r[Symbol.iterator]();case 6:if(a=(s=c.next()).done){t.next=15;break}return u=s.value,t.next=10,e.getClosedPrsLastWeek(u);case 10:f=t.sent,n=[].concat(Object(h.a)(n),Object(h.a)(f));case 12:a=!0,t.next=6;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(4),i=!0,o=t.t0;case 21:t.prev=21,t.prev=22,a||null==c.return||c.return();case 24:if(t.prev=24,!i){t.next=27;break}throw o;case 27:return t.finish(24);case 28:return t.finish(21);case 29:n=n.filter((function(e){return e.merged_at})),l(n.length);case 31:case"end":return t.stop()}}),t,null,[[4,17,21,29],[22,,24,28]])})))).apply(this,arguments)}e&&function(){return t.apply(this,arguments)}().catch(console.error)}),[e,r,a,i]),u}(o,i),E=Object(n.useRef)(null),C=function(e,t){var r=Object(n.useState)(null),a=Object(s.a)(r,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){function r(){return(r=Object(w.a)(g.a.mark((function r(){var n,a,i;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=U()().week(),a=t.cdoRotation[n%t.cdoRotation.length],r.next=4,e.getUser(a);case 4:i=r.sent,o(i);case 6:case"end":return r.stop()}}),r)})))).apply(this,arguments)}e&&t.cdoRotation.length&&function(){return r.apply(this,arguments)}().catch(console.error)}),[e,t.cdoRotation]),i}(o,i),S=Object(n.useMemo)((function(){return U()().week()}),[]);e=i.autoScroll,t=E.current,r=y.length,Object(n.useEffect)((function(){if("true"===e&&t&&r>4){var n=function e(){document.removeEventListener("scrollStop",e),o()},a=function e(){document.removeEventListener("scrollStop",e),i()},i=function(){document.addEventListener("scrollStop",n),N.animateScroll(t,void 0,{speed:4e4,easing:"linear"})},o=function(){document.addEventListener("scrollStop",a),N.animateScroll(0,void 0,{speed:5e3,easing:"linear"})};document.removeEventListener("scrollStop",n),document.removeEventListener("scrollStop",a),i()}}),[e,t,r]);var A=oe();return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,null),a.a.createElement("div",{className:A.app},a.a.createElement("div",{className:A.header},a.a.createElement("div",{className:A.nbMergedContainer},a.a.createElement(f.a,{align:"center",variant:"h3"},k),a.a.createElement(f.a,{align:"center",variant:"h4"},"Merged since last week")),a.a.createElement(f.a,{variant:"h3",align:"center",className:A.title,component:"div"},"Week ",S,O&&a.a.createElement(d.a,{className:A.loader}),p.login&&a.a.createElement("div",{className:A.username},p.login)),a.a.createElement("div",{className:A.headerEndContainer},C&&a.a.createElement("div",{className:A.cdoContainer},a.a.createElement(f.a,{variant:"h5"},"CDO"),a.a.createElement(R.a,{src:C.avatar_url,className:A.cdoAvatar}),a.a.createElement(f.a,{variant:"h5"},C.name||C.login)),a.a.createElement(ie,{settings:i}))),a.a.createElement(l.a,{className:A.list},y.map((function(e,t){return a.a.createElement(X,{key:"pr-".concat(e.id),forwardRef:t===y.length-1?E:void 0,pullRequest:e,settings:i})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));U.a.locale("fr"),o.a.render(a.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[395,1,2]]]);
//# sourceMappingURL=main.14a9d459.chunk.js.map