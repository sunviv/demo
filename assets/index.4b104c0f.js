var oe=Object.defineProperty,ne=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var A=(o,t,r)=>t in o?oe(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,u=(o,t)=>{for(var r in t||(t={}))se.call(t,r)&&A(o,r,t[r]);if(N)for(var r of N(t))re.call(t,r)&&A(o,r,t[r]);return o},m=(o,t)=>ne(o,ie(t));import{N as ae,a as ce,b as le,o as de,c as ue,S as fe,C as R,P as pe,O as me,A as ge,d as he,D as we,W as Pe,G as ye,r as be,e as M,R as ve,V as z,E as Ce,f as _e,g as ke,t as Le,h as _,i as k,j as Fe,w as je,v as xe,k as B,l as L,m as E,n as D,p as Oe,F as Se,q as W,s as V,u as q,x as Ne}from"./vendor.fd088bc9.js";const Ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}};Ae();var Re=(o,t)=>{for(const[r,i]of t)o[r]=i;return o};const Me={name:"CapStructure",components:{NProgress:ae,NButton:ce,NColorPicker:le},setup(){let o,t,r,i,a,l,f,d;de(()=>{b()}),ue(()=>{document.removeEventListener("click",S)});async function b(){H(),I(),T(),K(),U(),G(),f=await X(),ee(),te(),requestAnimationFrame(F)}function H(){i=document.querySelector("#structure")}function I(){o=new fe,o.background=new R(15067115)}function T(){const e=45,n=2,s=1,c=100;t=new pe(e,n,s,c),t.position.set(8,8,8),t.lookAt(0,0,0)}function G(){a=new me(t,i),a.target.set(0,0,0),a.update()}function K(){const e=new ge(16777215,.8);o.add(e);const n=new he(8947848,.5);n.position.set(0,0,100),o.add(n);const s=new we(8947848,1);s.position.set(0,10,0),s.target.position.set(0,0,0),o.add(s),o.add(s.target)}function U(){r=new Pe({canvas:i,antialias:!0}),r.setPixelRatio(window.devicePixelRatio)}async function X(){d=await J("../assets/models/cap.glb"),d.scene.position.set(0,0,0),d.scene.scale.set(.07,.07,.07),d.scene.rotation.set(-.7,0,.1);const e=d.scene.getObjectByName("cap-o"),n=d.scene.getObjectByName("cap-i-t"),s=d.scene.getObjectByName("cap-i-m"),c=d.scene.getObjectByName("cap-i-b");return e.fromPosition=u({},e.position),e.toPosition=m(u({},e.fromPosition),{y:e.fromPosition.y+60}),n.fromPosition=u({},n.position),n.toPosition=m(u({},n.fromPosition),{y:n.fromPosition.y-3.75}),s.fromPosition=u({},s.position),s.toPosition=m(u({},s.fromPosition),{y:s.fromPosition.y-30}),c.fromPosition=u({},c.position),c.toPosition=m(u({},c.fromPosition),{y:c.fromPosition.y-60}),o.add(d.scene),{capOuter:e,capInnerTop:n,capInnerMiddle:s,capInnerBottom:c}}function F(e){Y(r)&&(t.aspect=i.clientWidth/i.clientHeight,t.updateProjectionMatrix()),g.render(),requestAnimationFrame(F)}function Y(e){const n=i.clientWidth,s=i.clientHeight,c=i.width!=n||i.height!=s;return c&&(e.setSize(n,s,!1),g.setSize(n,s,!1)),c}let w=be({isLoading:!1,percentage:0});function J(e){return new Promise((n,s)=>{w.isLoading=!0,l||(l=new ye),l.load(e,c=>{n(c),w.isLoading=!1},({loaded:c,total:y})=>{w.percentage=parseInt(c/y*100)})})}let P=M(!1);function Q(){P.value=!P.value,P.value?x(d.scene,.05,{ease:"Power4.in",duration:.3}).then(()=>Object.values(f).forEach(e=>j(e,e.fromPosition,e.toPosition,{duration:.6,delay:Math.random()*.2,ease:"Power4.out"}))):Promise.all(Object.values(f).map(e=>j(e,e.toPosition,e.fromPosition,{duration:.8,delay:Math.random()*.2,ease:"back.in(6)"}))).then(()=>x(d.scene,.07,{ease:"Power4.out",duration:.3}))}function j(e,n,s,c){return new Promise((y,Ve)=>{W.to(e.position,m(u(u({},s),c),{onComplete(){y()}}))})}function x(e,n,s){return new Promise((c,y)=>{W.to(e.scale,m(u({x:n,y:n,z:n},s),{onComplete(){c()}}))})}let v=M(!1);function Z(){v.value=!v.value}function $(e){if(console.log("complete:",e),h){let n=h.material.clone();n.color=new R(e),h.material=n}}function ee(){document.body.addEventListener("click",S)}let O=new ve,C=new z,h=null;function S(e){if(e.target!=i)return;C.x=e.clientX/i.clientWidth*2-1,C.y=-(e.clientY/i.clientHeight)*2+1,O.setFromCamera(C,t);let n=O.intersectObjects(d.scene.children,!0);n.length>0&&(h=n[0].object,p.selectedObjects=[h])}let g,p;function te(){g=new Ce(r),g.setPixelRatio(window.devicePixelRatio);let e=new _e(o,t);g.addPass(e),p=new ke(new z(i.clientWidth,i.clientHeight),o,t),p.visibleEdgeColor.set("#10b981"),p.edgeStrength=4,p.edgeGlow=1.2,p.edgeThickness=2,g.addPass(p)}return u({hasDisassembled:P,toggleAssemble:Q,toggleColor:Z,showColorPicker:v,onColorPickerComplete:$},Le(w))}},ze={id:"structure",class:"block w-full h-full"},Be={class:"absolute right-0 z-10 flex flex-col items-center justify-center px-4 py-1 overflow-hidden transform -translate-y-1/2 top-1/2 focus:outline-none"};function Ee(o,t,r,i,a,l){const f=_("n-button"),d=_("n-color-picker"),b=_("n-progress");return k(),Fe(Se,null,[je(B("canvas",ze,null,512),[[xe,!o.isLoading]]),B("div",Be,[L(f,{onClick:i.toggleAssemble,circle:"",size:"large",color:"#3b82f6"},{default:E(()=>[V(q(i.hasDisassembled?"\u8FD8\u539F":"\u5206\u89E3"),1)]),_:1},8,["onClick"]),L(f,{onClick:i.toggleColor,circle:"",size:"large",color:"#3b82f6",class:"mt-4"},{default:E(()=>[V(q(i.showColorPicker?"\u5173\u95ED":"\u6362\u80A4")+" ",1),L(d,{show:i.showColorPicker,"show-preview":!1,"default-show":!1,"show-alpha":!1,swatches:["#FFFFFF","#18A058","#2080F0","#F0A020","rgb(208, 48, 80)"],class:"absolute opacity-0 pointer-events-none","on-complete":i.onColorPickerComplete},null,8,["show","swatches","on-complete"])]),_:1},8,["onClick"])]),o.isLoading?(k(),D(b,{key:0,type:"circle",percentage:o.percentage,class:"absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"},null,8,["percentage"])):Oe("",!0)],64)}var De=Re(Me,[["render",Ee]]);const We={setup(o){return(t,r)=>(k(),D(De))}};Ne(We).mount("#app");
