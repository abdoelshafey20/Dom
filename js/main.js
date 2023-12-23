

   

document.querySelector("form").onsubmit=function(){
    var mouse= document.querySelector("#mouse").value;
    var start= document.querySelector("#start").value;
    var end= document.querySelector("#end").value;
    var note= document.querySelector("#note").value;
    var result= document.querySelector(".dell");

    if(mouse=="" || start=="" || end==""){
        alert("Enter Time Or Appointment");
        return false
    }else{
        var tdOne = document.createElement("td");
        tdOne.innerHTML= mouse;
     
        var tdTwo = document.createElement("td");
        tdTwo.innerHTML= start;
        
        var tdThree = document.createElement("td");
        tdThree.innerHTML= end;

        var tdFour = document.createElement("td");
        tdFour.innerHTML= note;
        
        var trTable = document.createElement("tr");
        trTable.append(tdOne);
        trTable.append(tdTwo);
        trTable.append(tdThree);
        trTable.append(tdFour);
        result.appendChild(trTable);

        document.querySelector("#mouse").value="" ;
        document.querySelector("#start").value="";
        document.querySelector("#end").value="";
        document.querySelector("#note").value="";
        return false;



        
    }
}
