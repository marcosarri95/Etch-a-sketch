
function limpiarBoton(a){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        switch(a){
            case "color":
                if(button.classList.value != "color seleccion"){
                    button.classList.remove("seleccion");
                }
            break;
            case "arcoi":
                if(button.classList.value != "arcoi seleccion"){
                    button.classList.remove("seleccion");
                }
            break;
            case "borrar":
                if(button.classList.value != "borrar seleccion"){
                    button.classList.remove("seleccion");
                }
            break;
            default:
            if(button.classList.value != "limpiar seleccion"){
                button.classList.remove("seleccion");
            }
            
        }
        
    });
    }

function determinarBoton(){
    const button1 = document.querySelector('.color');
    const button2 = document.querySelector('.arcoi');
    const button3 = document.querySelector('.borrar');
    const button4 = document.querySelector('.limpiar');
    let a;
        
            if(button1.classList.value == "color seleccion"){
                a = 0;
            }
            else if(button2.classList.value == "arcoi seleccion"){
                a = 1;
                }
            else if(button3.classList.value == "borrar seleccion"){
                a = 2;
                }
            else if(button4.classList.value == "limpiar seleccion"){
                a = 3;
                }
            else{
                a = 4;
            }        
        return a;
}


//inicialmente

    const rango = document.querySelector('#rango');
    const rango1 = document.querySelector('.rango1');
    const rango2 = document.querySelector('.rango2');
    rango1.textContent = "16";
    rango2.textContent = "16";
    const grilla = document.querySelector("#grilla");  
    let a = rango.value;
    for(let i = 1; i<=(a*a) ; i++){
        const div = document.createElement('div');
        div.setAttribute('style',`background-color: white; width: ${String( (500/a * 100)/100 )}px; height: ${String( (500/a * 100)/100) }px; border: none; padding:none; margin:none;`);
        div.classList.add('caja');
        grilla.appendChild(div);
    }


//cada vez que se mueve la barrita//


    rango.addEventListener('input',function(e){
    const rango1 = document.querySelector('.rango1');
    const rango2 = document.querySelector('.rango2');
    rango1.textContent = String(rango.value);
    rango2.textContent = String(rango.value);
    const grilla = document.querySelector("#grilla");

    while (grilla.firstChild) {
        grilla.removeChild(grilla.firstChild);
      }
      
    let a = rango.value;
    for(let i = 1; i<=(a*a) ; i++){
        const div = document.createElement('div');
        div.setAttribute('style',`background-color: white; width: ${String( (500/a * 100)/100 )}px; height: ${String( (500/a * 100)/100) }px; border: none; padding:none; margin:none;`);
        div.classList.add('caja');
        grilla.appendChild(div);
    }

});
// fin

let arrastrar = false;
const dibujo = document.querySelectorAll('div');
dibujo.forEach(div => 
div.addEventListener('mousedown', function(e){
        e.stopPropagation();
        if(e.target.classList.value == "caja" && event.button == 0){
            switch(determinarBoton()){
                case 0:                        
                    arrastrar = true;
                    const color = document.querySelector('#colores');
                    e.target.style.background = String(color.value)
                break;
                case 1:
                    arrastrar = true;
                    let p1 = Math.floor(Math.random() * 254);
                    let p2 = Math.floor(Math.random() * 254);
                    let p3 = Math.floor(Math.random() * 254);
                    e.target.style.background = `rgb(${String(p1)},${String(p2)},${String(p3)})`;
                break;
                case 2:
                    arrastrar = true;
                    e.target.style.background = 'white';
                break;
                case 3:
                    arrastrar = false;
                break;
                default:
                    //console.log(e.target.classList.value);
            }
            //console.log(arrastrar);
        } 
    }));

    dibujo.forEach(div => 
        div.addEventListener('mouseover',function(e){
        e.stopPropagation();
        
        let a = determinarBoton();
        if(a == 0){
        if((e.target.classList.value == "caja") && (arrastrar == true)){
            const color = document.querySelector('#colores');
            e.target.style.background = String(color.value);
        }
        }
        else if(a==1){
            if((e.target.classList.value == "caja") && (arrastrar == true)){
            let p1 = Math.floor(Math.random() * 254);
            let p2 = Math.floor(Math.random() * 254);
            let p3 = Math.floor(Math.random() * 254);
             e.target.style.background = `rgb(${String(p1)},${String(p2)},${String(p3)})`;
            }
        }
        else if(a==2){
            if((e.target.classList.value == "caja") && (arrastrar == true)){
                e.target.style.background = 'white';
            }
        }
    }));

    dibujo.forEach(div => 
  div.addEventListener('mouseup',function(e){
        e.stopPropagation();
        arrastrar = false;  
        //console.log(arrastrar); 
        }));


const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', function(e){
    let a = this.classList.value;
    e.stopPropagation();
    
    if(a == "color efecto cursor"){
        this.classList.remove("efecto");
        this.classList.remove("cursor");
        const but = document.querySelector('.color');
        but.classList.add('seleccion');
        limpiarBoton("color");

    }
    else if(a == "arcoi efecto cursor"){
        this.classList.remove("efecto");
        this.classList.remove("cursor");
        const but = document.querySelector('.arcoi');
        but.classList.add('seleccion');
        limpiarBoton("arcoi");
    }
    else if(a == "borrar efecto cursor"){
        this.classList.remove("efecto");
        this.classList.remove("cursor");
        const but = document.querySelector('.borrar');
        but.classList.add('seleccion');
        limpiarBoton("borrar");
    }
    else if(a == "limpiar efecto cursor"){
        this.classList.remove("efecto");
        this.classList.remove("cursor");
        const but = document.querySelector('.limpiar');
        but.classList.add('seleccion');
        limpiarBoton("limpiar");

        const dibujo = document.querySelectorAll('.caja');
        dibujo.forEach(div => 
            div.style.background = 'white'
            );
    }
    else{

    }
}));

buttons.forEach(button => button.addEventListener('mouseover', function(e) {
    let a = this.classList.value;
    //console.log(a);
    e.stopPropagation(); // stop bubbling!
    if(a == "color"){
        const but = document.querySelector('.color');
        but.classList.add('efecto');
        but.classList.add('cursor');
    }
    else if(a == "arcoi"){
        const but = document.querySelector('.arcoi');
        but.classList.add('efecto');
        but.classList.add('cursor');
    }
    else if(a == "borrar"){
        const but = document.querySelector('.borrar');
        but.classList.add('efecto');
        but.classList.add('cursor');
    }
    else if(a == "limpiar"){
        const but = document.querySelector('.limpiar');
        but.classList.add('efecto');
        but.classList.add('cursor');
    }
    else{

    }
}));

buttons.forEach(button => button.addEventListener('mouseout', function(e) {
this.classList.remove('efecto');
this.classList.remove('cursor');
}));

const colorcito = document.querySelector('#colores');
colorcito.addEventListener('mouseover',function(e){
    this.classList.add('efecto2');
    this.classList.add('cursor');
});

colorcito.addEventListener('mouseout',function(e){
    this.classList.remove('efecto2');
    this.classList.remove('cursor');
});