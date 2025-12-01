document.addEventListener('DOMContentLoaded',()=>{

    const head = document.querySelector('head');
    const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './stylesLink.css');
        head.appendChild(link);
    
    
    const style = document.createElement('style'); 
    // Corregido: Uso de template literals (``) para permitir saltos de línea
    style.innerHTML += `#three {
    font-size: 15px;
    color:white;
    border:1px dotted yellow;
    border-radius:5%;
    box-shadow:2px 2px 8px red; 
    width:270px;
    height:30px;
    background:red;
    display:flex;
    justify-content:center;
    align-items:center;}`;
    
    head.appendChild(style);
    
    const tag = document.getElementById('four');
    // Corregido: Se usa la variable 'tag' declarada anteriormente y se elimina el salto de línea
    tag.setAttribute('style', "font-size:15px;color:white;border:1px dotted yellow;border-radius:5%;box-shadow:2px 2px 8px blue;width:270px;height:30px;background:blue;display:flex;justify-content:center;align-items:center;");
    
});

