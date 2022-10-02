const $ = sel => document.querySelector(sel) , id = ID => document.getElementById(ID) , $$ = sel => document.querySelectorAll(sel)


let btn_sound = $$('#voz') ; 


btn_sound.forEach((btn)=>{
    btn.addEventListener('click',(event) => {
        let  audio =  id(btn.name)  ;
        audio.play();  
    });

});

