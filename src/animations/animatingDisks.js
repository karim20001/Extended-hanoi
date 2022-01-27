import { countingMove, id, move, setManual, x_move, y_move, y_moveDown } from "./ProccessAnimation";


var i, j, temp, i2, speed = 15;
var myvar, setTrue = true;
function SetInterval(){

    //if (setTrue){
        move();

        i = document.getElementById(id.toString()).style.top;
        i = i.substr(0, i.length - 2)
        i = parseInt(i);
        j = document.getElementById(id.toString()).style.left;
        j = j.substr(0, j.length - 2)
        j = parseInt(j);
        i2 = y_move;
        temp = x_move;
        doTimeout();
        
    //}
    

}

function doTimeout(){
    myvar =setTimeout(animation, speed);
}


function animation(){

    setTrue = false;
    
    if (i > y_move){
        
        document.getElementById(id.toString()).style.top = i + "px";
        i--
        
    }


    if (temp > 0 && i <= y_move){

        document.getElementById(id.toString()).style.left = j + "px";
        j--;
        temp--;
    }

    if (temp < 0 && i <= y_move){

        document.getElementById(id.toString()).style.left = j + "px";
        j++;
        temp++;
    }

    if (y_move === i && temp === 0 && y_moveDown - 29 > i2){
        
        document.getElementById(id.toString()).style.top = i2 + "px";
        i2 ++;
    }
    

     if(y_moveDown - 29 === i2){

        if (setManual)
            countingMove();
         clearInterval(myvar);
         setTrue = true;
         return;
     }
     else 
        doTimeout();

    // var y_pos = document.getElementById(id).style.top;
    // y_pos = y_pos.substr(0, y_pos.length - 2);
    // y_pos = parseInt(y_pos);
    // y_pos -= 1;
    // y_pos = y_pos + "px";
    // document.getElementById(id).style.top = y_pos;
}

function setSpeed(temp){
    speed = temp;
}

export {
    setTrue,
    myvar,
    animation,
    SetInterval,
    speed,
    setSpeed
}