document.addEventListener('DOMContentLoaded',()=>{

const head=document.querySelector('head'); const link=document.createElement('link'); link.setAttribute('rel','stylessheet'); link.setAttribute('href','./stylesLink.css'); 
head.appendChild(link); const style=document.createElement('style'); style.INNERhtml+='font-size:15px;color:white;border:1px dotted yellow;border-radius:5%;box-shadow:2px 2px 8px red;width 
270px;height:30px;background: red;display:flex;justify-content:center;align-items:center;'; head.appendChild(style); const tag=document.getElementById('four'); 
tag.setAttribute('style','font-size:15px;color:white;border: 1px dotted yellow;border-radius:5%;box-shadow:2px 2px 8px 
blue;widht:270px;height:30px;bakcground:blue;display:flex;justify-content:center;align-items:center;');

})
