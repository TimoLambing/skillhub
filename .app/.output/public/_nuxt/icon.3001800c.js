import{_ as a}from"./BaseListbox.vue.66b0502c.js";import{d as s,x as r,o as l,e as m,g as d,j as p,H as u}from"./entry.adb22a9c.js";import"./BaseIconBox.vue.4761f716.js";import"./use-tracked-pointer.efb4822b.js";import"./use-resolve-button-type.1fcf5752.js";import"./use-controllable.2ba02657.js";import"./use-text-value.d40d5d45.js";const c={class:"grid gap-6 md:max-w-lg md:grid-cols-2"},T=s({__name:"icon",setup(_){const e=r({id:2,name:"Travel",text:"Tourism & travel",icon:"ph:airplane-duotone"}),n=[{id:1,name:"Movies",text:"Cinema & shows",icon:"ph:sword-duotone"},{id:2,name:"Travel",text:"Tourism & travel",icon:"ph:airplane-duotone"},{id:3,name:"Drinks",text:"Wines & fine drinks",icon:"ph:brandy-duotone"},{id:4,name:"Arts",text:"Paintings & scultpure",icon:"ph:paint-brush-duotone"},{id:5,name:"Karaoke",text:"singing with friends",icon:"ph:microphone-stage-duotone"}];return(x,o)=>{const t=a;return l(),m("div",c,[d(t,{modelValue:p(e),"onUpdate:modelValue":o[0]||(o[0]=i=>u(e)?e.value=i:null),label:"Hobbies",items:n,properties:{value:"id",label:"name",sublabel:"text",icon:"icon"}},null,8,["modelValue"])])}}});export{T as default};