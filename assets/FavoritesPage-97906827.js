import{u as v,r as t,j as e,h as g,L as p,k as j,l as b,m as T,o as k}from"./index-97356e27.js";import{T as y}from"./TeacherCard-c256b8d7.js";const F=()=>{const{bg:o,hover:d}=v(),[c,n]=t.useState([]),[h,i]=t.useState({}),[l,u]=t.useState(!0);return t.useEffect(()=>{(()=>{const f=j.currentUser;if(f){const x=f.uid,m=b(T,`users/${x}/favorites`);k(m,r=>{const a=r.val();a?(n(Object.keys(a)),i(a)):(n([]),i({})),u(!1)},r=>{console.error("Error when getting selected teachers:",r),u(!1)})}})()},[]),l?e.jsx(g,{loading:l}):c.length===0?e.jsxs("div",{className:"flex flex-wrap mt-24 gap-1 justify-center items-center h-full",children:[e.jsx("p",{className:"text-lg text-center text-gray-600",children:"No favorite teachers found."}),e.jsx(p,{to:"/teachers",className:"inline-flex text-mainBlack text-lg font-bold py-1 px-4 rounded-xl",style:{backgroundColor:o,transition:"background-color 0.3s"},onMouseEnter:s=>s.currentTarget.style.backgroundColor=d,onMouseLeave:s=>s.currentTarget.style.backgroundColor=o,children:"Add some teachers"}),e.jsx("p",{children:"to your favorites list."})]}):e.jsx("div",{className:"gap-8 bg-pageBg flex flex-col p-24 items-center",children:c.map(s=>e.jsx(y,{teacher:h[s]},s))})},E=()=>e.jsxs("section",{className:"mx-auto",children:[e.jsx("h2",{className:"invisible text-sm",children:"Favorites"}),e.jsx(F,{})]});export{E as default};
