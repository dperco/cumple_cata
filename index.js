const getCumple = tiempoLimite =>{

 let hoy= new Date(),
     timeresto= (new Date(tiempoLimite)- hoy + 1000)/ 1000,
     restosec=('0' + Math.floor(timeresto % 60)).slice(-2),
     restomin=('0' + Math.floor(timeresto / 60 % 60)).slice(-2),
     restohora=('0' + Math.floor(timeresto / 3600 % 24)).slice(-2),
     restodia=Math.floor(timeresto / (3600 * 24));

   return{
     timeresto,
     restosec,
     restomin,
     restohora,
     restodia
   }
};

const contador = (tiempoLimite,elem,finalMessage) =>{
    const el = document.getElementById(elem);
    const timer= setInterval(() => {
        let t= getCumple(tiempoLimite);
        console.log(t.restosec);
        el.innerHTML=`     ${t.restodia}       #               ${t.restohora}         #        ${t.restomin}         `;
        if(t.timeresto <= 1){
            clearInterval(timer);
            el.innerHTML= finalMessage;
        }
    },1000)
};

contador('Nov 20 2022 22:00:00 GMT-0300','clock','Feliz Cumple Catita');
