function calcular () 
{
    var vacation=document.getElementById("vacation").value;
    var weekday=parseInt(document.getElementById("day").value);
    
    var isVacation = false;
    var isWeekday = false;
    
    var salida = document.getElementById("salida");

    if (vacation == "1") {
        isVacation = true;
    }

    if (weekday < 6){
        isWeekday = true;
    }

    if (isVacation)
    {
        //dormir
        salida.innerHTML = "Si puedes dormir";

    }else{
         if (isWeekday)
         {
            salida.innerHTML = "No puedes dormir";
         }else {
            salida.innerHTML = "Si puedes dormir";
         }   
        }
}
