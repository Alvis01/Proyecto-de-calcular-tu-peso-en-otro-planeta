

let enviar = document.getElementById("submit")
let form = document.getElementById("form")
console.log(form)

console.log(enviar)
form.addEventListener( "submit", pesoplaneta)


function pesoplaneta(e) {
    e.preventDefault() 
    const tierra = 9.8
    const jupiter = 24.79
    let mercurio = 3.7
    let venus = 8.87
    let marte = 3.711
    let neptuno = 11.15
    let urano = 8.87    
    let pluton = 0.62

    let output = document.getElementById("output");
    let pesoUser = document.getElementById("PU")
        let PUvalue = parseInt(pesoUser.value)
            console.log(PUvalue)
           
    const PS = document.getElementById("PS")    
    let PSvalue = PS.value.toLowerCase()
    let PsvalueOptional =PS.value;
    console.log(PSvalue)

    if(PSvalue=="tierra"){
        let planeta = tierra*PUvalue;
        output.innerHTML = (`Tu peso en la ${PSvalue} es de ${planeta} kilos`)
    }

   else if(PSvalue=="jupiter"){
        let planeta =  jupiter*PUvalue;
        output.innerHTML = (`Tu peso en ${PSvalue} es de ${planeta} kilos`)
    }
    
   else if(PSvalue=="mercurio"){
        let planeta =  mercurio*PUvalue;
        output.innerHTML = (`Tu peso en ${PSvalue} es de ${planeta} kilos`)
    }
    
   else if(PSvalue=="venus"){
        let planeta = venus*PUvalue;
        output.innerHTML = (`Tu peso en ${PSvalue} es de ${planeta} kilos`)
    }

    else if(PSvalue=="marte"){
        let planeta =  marte*PUvalue;
        output.innerHTML = (`Tu peso en ${PSvalue} es de ${planeta} kilos`)
    }

    else if(PSvalue=="neptuno"){
        let planeta = neptuno*PUvalue;
        output.innerHTML = (`Tu peso en ${PSvalue} es de ${planeta} kilos`)
    }
    
    else if(PSvalue=="urano"){
        let planeta =  urano*PUvalue;
        output.innerHTML = (`Tu peso en ${PSvalue} es de ${planeta} kilos`)
    }
    else if(PSvalue=="pluton"){
        
        let planeta =pluton*PUvalue;
        output.innerHTML = (`Tu peso en ${PSvalue} es de ${planeta} kilos`)
    }
    
    else{ 
        alert(`No tenemos ningún valor con el nombre :"${ PsvalueOptional }", verifique que está bien escrito`)
    }
  
    /*
     
    let PF = PUvalue * jupiter / tierra;*/
    //output.innerHTML = (`Tu peso en Jupiter es de ${planeta} kilos`)
