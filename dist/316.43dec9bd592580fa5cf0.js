"use strict";(self.webpackChunkfibonacci_numbers_generator=self.webpackChunkfibonacci_numbers_generator||[]).push([[316],{316:(e,t,n)=>{n.r(t),n.d(t,{button:()=>l,input:()=>a,label:()=>i});const r=JSON.parse('{"name":"input","attrs":{"id":"input-number","type":"number","name":"input-number","min":0},"children":""}');var u=n(924);const c=(0,u.Z)(r);c.addEventListener("change",(e=>e.target.setAttribute("value",e.target.value)));const a=c,o=JSON.parse('{"name":"label","attrs":{"for":"fibonacci-number"},"children":"Type a sequence number:"}'),i=(0,u.Z)(o),s=JSON.parse('{"name":"button","attrs":{"id":"fibonacci-button","type":"button","form":"fibonacci-form"},"children":"Send"}'),b=e=>{const t=Math.sqrt(5),n=(1+t)/2,r=(1-t)/2;return Math.round((n**e-r**e)/t)};var m=n(194);const d=(0,u.Z)(s);d.addEventListener("click",(()=>{(0,m.Z)(document.querySelector("#fibonacci-form"),"d-flex","d-none"),(0,m.Z)(document.querySelector("#output"),"d-none","d-flex"),((e,t,n)=>{const r=t(e);n.innerText=`The Fibonacci number at the sequence number ${e} is: ${r}`})(Number(document.querySelector("#input-number").getAttribute("value")),b,document.querySelector("#output h2"))}));const l=d},194:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(e,t,n)=>e.classList.replace(t,n)}}]);
//# sourceMappingURL=316.43dec9bd592580fa5cf0.js.map