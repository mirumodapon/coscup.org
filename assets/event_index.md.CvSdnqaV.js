import{d as k,o as v,c as I,j as n,I as t,a as s,t as u,k as g,w as a,F as S,a4 as y,p as E,l as M,_ as V}from"./chunks/framework.CAtZryCM.js";import{_ as A,a as B,b as G,c as N,d as O,e as j,f as q,g as Q,h as R,i as T,j as F}from"./chunks/calendar-dots.C7N8orRX.js";import{c}from"./chunks/theme.D6VZ9l9u.js";const J=_=>(E("data-v-2b142359"),_=_(),M(),_),z={class:"info custom-block"},Y={class:"info-section"},H={class:"custom-block-title"},K={class:"actions"},U={class:"info custom-block"},W={class:"info-section"},X={class:"custom-block-title"},Z=J(()=>n("h2",null,"國立臺灣科技大學",-1)),tt={class:"actions"},m="106 台北市大安區基隆路四段 43 號",ot=k({__name:"index",setup(_){const h=c.startDate.toLocaleDateString(),f=c.endDate.toLocaleDateString();async function p(l){const{[l]:e}=await y(async()=>{const{[l]:o}=await import("./chunks/index.modern.D5YZqYwE.js");return{[l]:o}},[]),r={title:c.title,description:`<a href="${document.location.origin}">${c.description}</a>`,start:c.startDate,end:c.endDate,allDay:!0,location:m},i=e(r);if(l==="ics"){const o=document.createElement("a");o.href=i,o.download=`${c.title}.ics`,o.click()}else window.open(i,"_blank")}return(l,e)=>{const r=A,i=B,o=G,P=N,w=O,C=j,b=q,D=Q,x=R,L=T,$=F;return v(),I(S,null,[n("section",z,[n("div",Y,[n("p",H,[t(r),s("日期 ")]),n("h2",null,u(g(h))+" – "+u(g(f)),1),n("div",K,[t(o,{theme:"alt",onClick:e[0]||(e[0]=d=>p("google"))},{default:a(()=>[t(i),s(" Google 日曆 ")]),_:1}),t(o,{theme:"alt",onClick:e[1]||(e[1]=d=>p("outlookMobile"))},{default:a(()=>[t(P),s(" Outlook ")]),_:1}),t(o,{theme:"alt",onClick:e[2]||(e[2]=d=>p("yahoo"))},{default:a(()=>[t(w),s(" Yahoo ")]),_:1}),t(o,{theme:"alt",onClick:e[3]||(e[3]=d=>p("ics"))},{default:a(()=>[t(C),s(" ICS ")]),_:1})])])]),n("section",U,[n("div",W,[n("p",X,[t(b),s("位置 ")]),Z,n("p",null,[s(u(m)),t(D,{source:m})]),t(x,{class:"map"}),n("div",tt,[t(o,{href:"https://www.openstreetmap.org/relation/5355856",target:"_blank",theme:"alt"},{default:a(()=>[t(L),s(" 開放街圖 ")]),_:1}),t(o,{href:"https://www.google.com/maps/search/?api=1&query=國立臺灣科技大學&query_place_id=ChIJrcDEdiGqQjQRVfQp7kRe25A",target:"_blank",theme:"alt"},{default:a(()=>[t(i),s(" Google 地圖 ")]),_:1}),t(o,{href:"https://maps.apple.com/place?auid=1091116063745527859",target:"_blank",theme:"alt"},{default:a(()=>[t($),s(" Apple 地圖 ")]),_:1})])])])],64)}}}),nt=V(ot,[["__scopeId","data-v-2b142359"]]),_t=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"event/index.md","filePath":"zh_tw/event/index.md"}'),et={name:"event/index.md"},lt=k({...et,setup(_){return(h,f)=>(v(),I("div",null,[t(nt)]))}});export{_t as __pageData,lt as default};
