(this["webpackJsonpgithub-pr-dashboard"]=this["webpackJsonpgithub-pr-dashboard"]||[]).push([[0],{207:function(e,t,r){},269:function(e,t){},392:function(e,t,r){},393:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(12),i=r.n(o),c=(r(207),r(13)),s=r(424),u=r(426),l=r(94),p=r(425),f=r(431),m=r(89),d=r(49),v={token:null,organisation:null,repositories:[],filteredTags:[],requiredTags:[],daysBeforeWarning:"1",daysBeforeCritical:"2",hoursUntilNotNew:"2",autoScroll:"false",cdoRotation:[],minNbReviews:2,onlyNotReviewed:"true"};function b(e,t){switch(t.type){case"update":return e.hasOwnProperty(t.key)?Object(d.a)({},e,Object(m.a)({},t.key,t.value)):e;default:throw new Error}}var g=r(9),h=r.n(g),w=r(15),y=function(){var e=Object(w.a)(h.a.mark((function e(t,r,a){var n,o,i,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.repositories,o=a.filteredTags,i=a.requiredTags,a.onlyNotReviewed,e.next=3,Promise.all(n.map((function(e){return t.getOpenPrs(e)})));case 3:return c=e.sent.flat(),e.abrupt("return",c.filter((function(e){return!e.draft&&!e.labels.some((function(e){return o.some((function(t){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))}))&&(!i.length||e.labels.some((function(e){return i.some((function(t){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))})))})).map((function(e){return Object(d.a)({},e,{detail:null,reviews:null})})).sort((function(e,t){return e.created_at.localeCompare(t.created_at)})));case 5:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(w.a)(h.a.mark((function e(t,r,a,n){var o,i,c,s,u,l,p,f;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.onlyNotReviewed,e.next=3,Promise.all(a.map((function(e){return t.getPrReviews(e.base.repo.name,e.number)})));case 3:for(i=e.sent,c=[],s=0;s<i.length;s++)u=a[s],l=i[s],p=r.id&&l.some((function(e){var t;return(null===(t=e.user)||void 0===t?void 0:t.id)===r.id&&"APPROVED"===e.state})),"true"===o&&p||c.push(Object(d.a)({},u,{reviews:l}));return e.next=8,Promise.all(c.map((function(e){return t.getPrDetails(e.base.repo.name,e.number)})));case 8:return f=e.sent,e.abrupt("return",c.map((function(e,t){return Object(d.a)({},e,{detail:f[t]})})));case 10:case"end":return e.stop()}}),e)})));return function(t,r,a,n){return e.apply(this,arguments)}}(),O=r(179),E=r(180),j=r(181),k=r.n(j),N=function(){function e(t){Object(O.a)(this,e),this.api=new k.a,this.api.authenticate({type:"token",token:t.token}),this.org=t.org}return Object(E.a)(e,[{key:"getMe",value:function(){var e=Object(w.a)(h.a.mark((function e(){var t,r,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.users.get({});case 2:return t=e.sent.data,r=t.id,a=t.login,n=t.avatar_url,e.abrupt("return",{id:r,login:a,avatarUrl:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFilteredData",value:function(e,t,r){var a=e.filter((function(e){return Date.parse(e[t])>r}));return[a,e.length===a.length]}},{key:"paginate",value:function(){var e=Object(w.a)(h.a.mark((function e(t,r,a,n){var o,i,s,u,l,p,f,m;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=!0,e.next=3,t(r);case 3:i=e.sent,s=i.data,a&&n&&(u=this.getFilteredData(s,a,n),l=Object(c.a)(u,2),s=l[0],o=l[1]);case 6:if(!this.api.hasNextPage(i)||!o){e.next=15;break}return e.next=9,this.api.getNextPage(i);case 9:i=e.sent,p=null,a&&n&&(f=this.getFilteredData(i.data,a,n),m=Object(c.a)(f,2),p=m[0],o=m[1]),s=s.concat(p),e.next=6;break;case 15:return e.abrupt("return",s);case 16:case"end":return e.stop()}}),e,this)})));return function(t,r,a,n){return e.apply(this,arguments)}}()},{key:"getOpenPrs",value:function(){var e=Object(w.a)(h.a.mark((function e(t){var r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={owner:this.org,repo:t,state:"open"},e.next=3,this.paginate(this.api.pullRequests.getAll,r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getClosedPrsLastWeek",value:function(){var e=Object(w.a)(h.a.mark((function e(t){var r,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={owner:this.org,repo:t,state:"closed",sort:"updated",direction:"desc",per_page:50},a=Date.now()-6048e5,e.next=4,this.paginate(this.api.pullRequests.getAll,r,"closed_at",a);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPrDetails",value:function(){var e=Object(w.a)(h.a.mark((function e(t,r){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.pullRequests.get({owner:this.org,repo:t,number:r});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPrReviews",value:function(){var e=Object(w.a)(h.a.mark((function e(t,r){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={owner:this.org,repo:t,number:r},e.next=3,this.paginate(this.api.pullRequests.getReviews,a);case 3:return n=e.sent,e.abrupt("return",n.filter(Boolean));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPrMergeStatus",value:function(){var e=Object(w.a)(h.a.mark((function e(t,r){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,this.api.pullRequests.checkMerged({owner:this.org,repo:t,number:r});case 4:a=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:return e.abrupt("return",a&&204===a.status);case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(w.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.users.getForUser({username:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),C=r(182),R=new(r.n(C).a)(void 0,{speed:4e4}),S=r(421),A=r(422),D=r(420),P=r(189),L=r.n(P),I=r(190),T=r.n(I),B=r(191),U=r.n(B),_=r(430),W=r(183),z=r.n(W),q=r(22),M=r.n(q),F=r(417),$=r(7),G=r(188),V=r.n(G),H=r(419),J="#fcbb26",Q="#ff5c39",K="#00b388",X=Object(F.a)((function(e){return{root:{width:"100%"},item:{backgroundColor:e.palette.background.paper,marginBottom:"2em",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",position:"relative",transition:"background-color 200ms ease-in-out"},warning:{backgroundColor:Object($.e)(J,.6),"&:hover":{backgroundColor:Object($.e)(J,.4)}},critical:{backgroundColor:Object($.e)(Q,.6),"&:hover":{backgroundColor:Object($.e)(Q,.4)}},mergeable:{backgroundColor:Object($.e)(K,.6),"&:hover":{backgroundColor:Object($.e)(K,.45)},"&$warning $timeAgo":{color:J},"&$critical $timeAgo":{color:Q}},progress:{position:"absolute",top:0,left:0,right:0},avatar:{width:60,height:60,borderRadius:"3px",marginRight:"1em"},extraDataContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:"17vw"},reviewNumbersContainer:{display:"flex",alignItems:"center","&:not(:last-of-type)":{marginBottom:"0.5em"},"& svg":{marginLeft:"0.5em",fontSize:"2.5em"},"&.green svg":{color:K},"&.red svg":{color:Q},"&.grey svg":{color:"#d9d9d6"}},newChip:{backgroundColor:Q,color:"white",position:"absolute",top:-15,left:50,fontSize:"1.8vw"},prTitle:{fontSize:"2vw"},prProject:{fontSize:"1.8vw"},timeAgo:{fontSize:"1.8vw"},reviewNumber:{fontSize:"1.8vw"}}})),Y=V()({root:{height:2,backgroundColor:Object($.e)(K,.5)},bar:{backgroundColor:K}})(H.a),Z=function(e){var t=e.pullRequest,r=e.settings,o=e.forwardRef,i=function(e,t){return Object(a.useMemo)((function(){var r="NEUTRAL",a=M()(e),n=a.fromNow(),o=M()(),i=M()().subtract(+t.hoursUntilNotNew,"hours");if(a.isBetween(i,o))r="NEW";else{var c=o.diff(a,"days");for(0!==o.day()&&6!==o.day()||!(o.hours()>a.hours()||o.hours()===a.hours()&&o.minutes()>a.minutes())||c--,o.subtract(1,"days");o.diff(a,"days")>0;)0!==o.day()&&6!==o.day()||c--,o.subtract(1,"days");c>=+t.daysBeforeCritical?r="CRITICAL":c>=+t.daysBeforeWarning&&(r="WARNING")}return{timeAgoText:n,timeState:r}}),[e,t.hoursUntilNotNew,t.daysBeforeWarning,t.daysBeforeCritical])}(t.created_at,r),c=i.timeAgoText,s=i.timeState,u=function(e){return Object(a.useMemo)((function(){var t=0,r=0,a=e.detail?e.detail.comments:0;if(e.reviews){var n=!0,o=!1,i=void 0;try{for(var c,s=e.reviews[Symbol.iterator]();!(n=(c=s.next()).done);n=!0){var u=c.value;if(u)switch(u.state){case"APPROVED":t++;break;case"CHANGES_REQUESTED":var l=!1,p=!0,f=!1,m=void 0;try{for(var d,v=e.reviews[Symbol.iterator]();!(p=(d=v.next()).done);p=!0){var b=d.value;b&&b.id!==u.id&&b.user.login===u.user.login&&"APPROVED"===b.state&&Date.parse(b.submitted_at)-Date.parse(u.submitted_at)>0&&(l=!0)}}catch(g){f=!0,m=g}finally{try{p||null==v.return||v.return()}finally{if(f)throw m}}l||r++}}}catch(g){o=!0,i=g}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}}return{nbApprove:t,nbRefuse:r,nbComments:a}}),[e])}(t),p=u.nbApprove,m=u.nbRefuse,d=u.nbComments,v=X(),b=p>=r.minNbReviews&&t.detail&&!0===t.detail.mergeable&&"clean"===t.detail.mergeable_state;return"true"===r.onlyNotReviewed&&p>=r.minNbReviews?null:n.a.createElement(D.a,{ref:o,className:z()(v.item,b&&v.mergeable,"WARNING"===s&&v.warning,"CRITICAL"===s&&v.critical),component:"a",href:t.html_url,target:"_blank",button:!0},(!t.detail||!t.reviews)&&n.a.createElement(Y,{className:v.progress}),"NEW"===s&&n.a.createElement(_.a,{label:"New",className:v.newChip}),n.a.createElement(S.a,null,n.a.createElement(f.a,{className:v.avatar,src:t.user.avatar_url})),n.a.createElement(A.a,{primary:t.title,secondary:t.base.repo.name,classes:{primary:v.prTitle,secondary:v.prProject}}),n.a.createElement("div",{className:v.extraDataContainer},n.a.createElement("div",null,n.a.createElement("div",{className:"".concat(v.reviewNumbersContainer," green")},n.a.createElement(l.a,{className:v.reviewNumber},t.reviews?p:"-"),n.a.createElement(L.a,null)),n.a.createElement("div",{className:"".concat(v.reviewNumbersContainer," red")},n.a.createElement(l.a,{className:v.reviewNumber},t.reviews?m:"-"),n.a.createElement(T.a,null)),n.a.createElement("div",{className:"".concat(v.reviewNumbersContainer," grey")},n.a.createElement(l.a,{className:v.reviewNumber},t.detail?d:"-"),n.a.createElement(U.a,null))),n.a.createElement(l.a,{className:v.timeAgo},c)))},ee=r(428),te=r(423),re=r(193),ae=r.n(re),ne=r(429),oe=Object(F.a)((function(e){return{shareButton:{marginRight:"2em","& svg":{fontSize:"2em"}}}})),ie=function(e){var t=function(e){return Object(a.useMemo)((function(){for(var t=new URL("".concat(window.location.origin).concat(window.location.pathname)),r=0,a=Object.keys(e);r<a.length;r++){var n=a[r];"token"!==n&&t.searchParams.set(n,Array.isArray(e[n])?e[n].join(","):e[n])}return t.toString()}),[e])}(e.settings),r=Object(a.useState)(!1),o=Object(c.a)(r,2),i=o[0],s=o[1],u=Object(a.useCallback)((function(e){e.clipboardData?(e.clipboardData.setData("text/plain",t),s(!0)):window.clipboardData?(window.clipboardData.setData("Text","custom content from click"),s(!0)):navigator.clipboard&&navigator.clipboard.writeText(t).then((function(){return s(!0)}))}),[t]),l=Object(a.useCallback)((function(){s(!1)}),[]),p=oe();return n.a.createElement(n.a.Fragment,null,n.a.createElement(ne.a,{title:t},n.a.createElement(te.a,{className:p.shareButton,onClick:u},n.a.createElement(ae.a,null))),n.a.createElement(ee.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:i,autoHideDuration:2e3,onClose:l,message:"Copied to clipboard !"}))},ce=(r(392),Object(F.a)((function(e){return{app:{position:"relative"},list:{width:"100%",paddingTop:165},header:{zIndex:2,position:"fixed",top:0,left:0,right:0,backgroundColor:"#fafafa",display:"flex",alignItems:"center",justifyContent:"space-around"},title:{position:"relative",margin:"1em 0",flex:1},username:{fontSize:18},loader:{marginLeft:"1em",position:"absolute"},loginContainer:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},avatar:{marginRight:"1em"},headerEndContainer:{flex:1,display:"flex",alignItems:"center",justifyContent:"flex-end"},cdoContainer:{marginRight:"5vw",display:"flex",flexDirection:"column",alignItems:"center"},cdoAvatar:{width:60,height:60,borderRadius:"3px"}}})));var se=function(){var e,t,r,o=function(){var e=Object(a.useReducer)(b,v),t=Object(c.a)(e,2),r=t[0],n=t[1];return Object(a.useEffect)((function(){new URLSearchParams(window.location.search).forEach((function(e,t){return n({type:"update",key:t,value:Array.isArray(v[t])?e.split(","):e})}))}),[]),r}(),i=function(e,t){var r=Object(a.useState)(null),n=Object(c.a)(r,2),o=n[0],i=n[1];return Object(a.useEffect)((function(){i(e&&t?new N({token:e,org:t}):null)}),[e,t]),o}(o.token,o.organisation),m=function(e){var t=Object(a.useState)({id:null,login:null,avatarUrl:null}),r=Object(c.a)(t,2),n=r[0],o=r[1];return Object(a.useEffect)((function(){e&&e.getMe().then(o).catch((function(e){return console.error("getMe failed",e)}))}),[e]),n}(i),d=function(e,t,r){var n=Object(a.useState)([]),o=Object(c.a)(n,2),i=o[0],s=o[1],u=Object(a.useState)(!1),l=Object(c.a)(u,2),p=l[0],f=l[1];return Object(a.useEffect)((function(){var a=null;function n(){return o.apply(this,arguments)}function o(){return(o=Object(w.a)(h.a.mark((function a(){var n,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return f(!0),a.next=3,y(e,t,r);case 3:return n=a.sent,s(n),f(!1),a.next=8,x(e,t,n,r);case 8:o=a.sent,s(o);case 10:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return clearInterval(a),e&&t.id&&(n().catch(console.error),a=window.setInterval((function(){n().catch(console.error)}),12e4)),function(){clearInterval(a)}}),[e,t,r]),[i,p]}(i,m,o),g=Object(c.a)(d,2),O=g[0],E=g[1],j=Object(a.useRef)(null),k=function(e,t){var r=Object(a.useState)(null),n=Object(c.a)(r,2),o=n[0],i=n[1];return Object(a.useEffect)((function(){function r(){return(r=Object(w.a)(h.a.mark((function r(){var a,n,o;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=M()().week(),n=t.cdoRotation[a%t.cdoRotation.length],r.next=4,e.getUser(n);case 4:o=r.sent,i(o);case 6:case"end":return r.stop()}}),r)})))).apply(this,arguments)}e&&t.cdoRotation.length&&function(){return r.apply(this,arguments)}().catch(console.error)}),[e,t.cdoRotation]),o}(i,o),C=Object(a.useMemo)((function(){return M()().week()}),[]);e=o.autoScroll,t=j.current,r=O.length,Object(a.useEffect)((function(){if("true"===e&&t&&r>4){var a=function e(){document.removeEventListener("scrollStop",e),i()},n=function e(){document.removeEventListener("scrollStop",e),o()},o=function(){document.addEventListener("scrollStop",a),R.animateScroll(t,void 0,{speed:4e4,easing:"linear"})},i=function(){document.addEventListener("scrollStop",n),R.animateScroll(0,void 0,{speed:5e3,easing:"linear"})};document.removeEventListener("scrollStop",a),document.removeEventListener("scrollStop",n),o()}}),[e,t,r]);var S=ce();return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null),n.a.createElement("div",{className:S.app},n.a.createElement("div",{className:S.header},n.a.createElement("div",{className:S.loginContainer},m.avatarUrl&&n.a.createElement(f.a,{className:S.avatar,src:m.avatarUrl}),m.login&&n.a.createElement(l.a,{variant:"h3",align:"center",className:S.username,component:"div"},m.login)),n.a.createElement(l.a,{variant:"h3",align:"center",className:S.title,component:"div"},"Week ",C,E&&n.a.createElement(p.a,{className:S.loader})),n.a.createElement("div",{className:S.headerEndContainer},k&&n.a.createElement("div",{className:S.cdoContainer},n.a.createElement(l.a,{variant:"h5"},"CDO"),n.a.createElement(f.a,{src:k.avatar_url,className:S.cdoAvatar}),n.a.createElement(l.a,{variant:"h5"},k.name||k.login)),n.a.createElement(ie,{settings:o}))),n.a.createElement(u.a,{className:S.list},O.map((function(e,t){return n.a.createElement(Z,{key:"pr-".concat(e.id),forwardRef:t===O.length-1?j:void 0,pullRequest:e,settings:o})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));M.a.locale("fr"),i.a.render(n.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[393,1,2]]]);
//# sourceMappingURL=main.4b322c64.chunk.js.map