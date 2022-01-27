import getUserInput, { diskArray_node1, diskArray_node2, diskArray_node3 } from "../components/Disks";
import { SetInterval, setSpeed, speed } from "./animatingDisks";
import { userInput } from "./Submit";

var A1, B2, C3, N, Check = true, varible= true, setManual, Stop;

var x_move, y_move, id,move_counter = 0, y_moveDown, check_manual_automatic = true;

const saveMoveDisks = [];

const DiskArray_node1 = diskArray_node1, DiskArray_node2 = diskArray_node2, DiskArray_node3 = diskArray_node3;

function setVaribles(){
    A1 = diskArray_node1[diskArray_node1.length - 1];
    B2 = diskArray_node2[diskArray_node2.length - 1];
    C3 = diskArray_node3[diskArray_node3.length - 1];
    N = diskArray_node1.length;
}


function hanoi(C, A, B, n, check){

    if (check){
        C = B2;
        B = C3;
        check = false;
    }
    if (n === 1){
        save_moves(C.number, A.number, B.number);
    }
    else{
        hanoi(C, B, A, n-1, check);
        save_moves(C.number, A.number, B.number);
        hanoi(A, C, B, n-1, check);
    }

}

function exhanoi(A, B, C, n){

    if (n === 1){

        save_moves(C.number, A.number, B.number);
        save_moves(A.number, B.number, C.number);
        save_moves(B.number, C.number, A.number);
        save_moves(B.number, A.number, C.number);
        save_moves(A.number, B.number, C.number);
        return;
    }

    else{
        exhanoi(A, B, C, n-1);
        hanoi(C, A, B, 3 * n - 2, false);
        save_moves(A.number, B.number, C.number);
        hanoi(B, A, C, 3 * n - 1, true);
    }
    
}

function start(e){

    e.preventDefault();
    if (varible){
        setVaribles();
        exhanoi(A1, B2, C3, N);
        varible = false;
    }
    Check = true;
    setManual = true;
    check_manual_automatic = false;
    atomoutic_start();
}

function Continue(e){

    e.preventDefault();
    if (!varible){
        Check = true;
        setManual = true;
        check_manual_automatic = false;
        atomoutic_start();
    }
}

function manual(e){

    e.preventDefault();

    if (varible){
        setVaribles();
        exhanoi(A1, B2, C3, N);
        varible = false;
        setManual = false;
    }
    if (move_counter < saveMoveDisks.length && check_manual_automatic){

        SetInterval();
        move_counter++;
    }
     
}

function setEnd(){
    var temperory;
    for (let i = 1, y = 0; i <= userInput * 3; i++, y += 30){

        temperory = 950 + Math.floor(i / 3) * 15;
        if (i % 3 === 1)
            temperory += 5;
        
        if (i % 3 === 2)
            temperory += 10;

        document.getElementById(i.toString()).style.left = temperory + "px";
        document.getElementById(i.toString()).style.top = 607 - y + "px";
    }

    move_counter = 100000000;
}

function setStop(e){

    e.preventDefault();
    varible = false;

    setManual = false;
    check_manual_automatic = true;

    move_counter++;
}

function setReset(){
    move_counter = 0;
    getUserInput(userInput);
    
    for (let i = 0, j = 1; i < userInput; i++, j++){
        document.getElementById(j.toString()).style.left = diskArray_node1[i].x;
        document.getElementById(j.toString()).style.top = diskArray_node1[i].y;
        j++;

        document.getElementById(j.toString()).style.left = diskArray_node2[i].x;
        document.getElementById(j.toString()).style.top = diskArray_node2[i].y;
        j++;

        document.getElementById(j.toString()).style.left = diskArray_node3[i].x;
        document.getElementById(j.toString()).style.top = diskArray_node3[i].y;

    }
}

function countingMove(){
    move_counter++;
    Check = true;
    atomoutic_start();
}

function setSlower(){
    setSpeed(speed + 5)
}

function setFaster(){
    setSpeed(speed - 5);
}

function atomoutic_start(){

    
    //for (; move_counter < saveMoveDisks.length;){
        //myVar = setTimeout(SetInterval);
        //setTimeout({},10000)
        if(Check && move_counter < saveMoveDisks.length)
          setTimeout(SetInterval, 1);
        Check = false;
        if (move_counter === saveMoveDisks.length){
            clearTimeout();
            return;
        }
        //move_counter++;
    //}
    
}

function move(){

        x_move = (saveMoveDisks[move_counter].from - saveMoveDisks[move_counter].to) * 385;

        if (saveMoveDisks[move_counter].from % 3 === 1){

            id = parseInt(DiskArray_node1[DiskArray_node1.length - 1].number);
             
            let temp = document.getElementById(id.toString()).style.top;
            temp = parseInt(temp.substr(0, temp.length - 2));
            y_move = temp - 575 ;

            if (1 < DiskArray_node1.length)
                y_move += (diskArray_node1.length - 1) * 30;
            
            
            if(saveMoveDisks[move_counter].to % 3 === 2){

                x_move -= 6;
                if (DiskArray_node2.length !== 0){
                    y_moveDown = document.getElementById(DiskArray_node2[DiskArray_node2.length - 1].number).style.top;
                    y_moveDown = parseInt(y_moveDown.substr(0, y_moveDown.length - 2));
                }else
                    y_moveDown = 637 + 30;

                DiskArray_node2.push(DiskArray_node1[DiskArray_node1.length - 1])
                DiskArray_node1.pop(DiskArray_node1.length - 1);
            }
            if(saveMoveDisks[move_counter].to % 3 === 0){

                x_move -= 6;

                if (DiskArray_node3.length !== 0){
                    y_moveDown = document.getElementById(DiskArray_node3[DiskArray_node3.length - 1].number).style.top;
                    y_moveDown = parseInt(y_moveDown.substr(0, y_moveDown.length - 2));
                }else
                    y_moveDown = 637 + 30;

                
                DiskArray_node3.push(DiskArray_node1[DiskArray_node1.length - 1])
                DiskArray_node1.pop(DiskArray_node1.length - 1);
            }
        }

        if (saveMoveDisks[move_counter].from % 3 === 2){
            id = parseInt(DiskArray_node2[DiskArray_node2.length - 1].number);

            let temp = document.getElementById(id).style.top;
            temp = parseInt(temp.substr(0, temp.length - 2));
            y_move = temp - 575 ;
            if (1 < DiskArray_node2.length)
                 y_move += (DiskArray_node2.length - 1) * 30;
            

            if (saveMoveDisks[move_counter].to % 3 === 1){

                x_move += 6;
                if (DiskArray_node1.length !== 0){
                    y_moveDown = document.getElementById(DiskArray_node1[DiskArray_node1.length - 1].number).style.top;
                    y_moveDown = parseInt(y_moveDown.substr(0, y_moveDown.length - 2));
                }else
                    y_moveDown = 637 + 30;

                DiskArray_node1.push(DiskArray_node2[DiskArray_node2.length - 1])
                DiskArray_node2.pop(DiskArray_node2.length - 1);
            }
            if (saveMoveDisks[move_counter].to % 3 === 0){

                x_move -= 1;
                if (DiskArray_node3.length !== 0){
                    y_moveDown = document.getElementById(DiskArray_node3[DiskArray_node3.length - 1].number).style.top;
                    y_moveDown = parseInt(y_moveDown.substr(0, y_moveDown.length - 2));
                }else
                    y_moveDown = 637 + 30;

                DiskArray_node3.push(DiskArray_node2[DiskArray_node2.length - 1])
                DiskArray_node2.pop(DiskArray_node2.length - 1);
            }
        }

        if (saveMoveDisks[move_counter].from % 3 === 0){


            id = parseInt(DiskArray_node3[DiskArray_node3.length - 1].number);

            let temp = document.getElementById(id).style.top;
            temp = parseInt(temp.substr(0, temp.length - 2));
            y_move = temp - 575 ;
            if (1 < DiskArray_node3.length){
                 y_move += (DiskArray_node3.length - 1) * 30;
                
            }
            
            if (saveMoveDisks[move_counter].to % 3 === 1){
                x_move += 6;

                if (DiskArray_node1.length !== 0){
                    y_moveDown = document.getElementById(DiskArray_node1[DiskArray_node1.length - 1].number).style.top;
                    y_moveDown = parseInt(y_moveDown.substr(0, y_moveDown.length - 2));
                }else
                    y_moveDown = 637 + 30;

                DiskArray_node1.push(DiskArray_node3[DiskArray_node3.length - 1])
                DiskArray_node3.pop(DiskArray_node3.length - 1);
            }
            if (saveMoveDisks[move_counter].to % 3 === 2){
                
                x_move += 1;
                if (DiskArray_node2.length !== 0){
                    y_moveDown = document.getElementById(DiskArray_node2[DiskArray_node2.length - 1].number).style.top;
                    y_moveDown = parseInt(y_moveDown.substr(0, y_moveDown.length - 2));
                }
                else{
                    y_moveDown = 637 + 30;
                }

                let u = DiskArray_node3[DiskArray_node3.length - 1];
                DiskArray_node2.push(u)
                DiskArray_node3.pop(DiskArray_node3.length - 1);
            }
            
        }

} 

// function change(){
//     A1 = diskArray_node1[diskArray_node1.length - 1];
//     B2 = diskArray_node2[diskArray_node2.length - 1];
//     C3 = diskArray_node3[diskArray_node3.length - 1];
// }

function save_moves(x, y, z){
    saveMoveDisks.push({from: x, aux: y, to: z});
}

export{
    start,
    manual,
    move,
    y_moveDown,
    saveMoveDisks,
    x_move,
    y_move,
    id,
    countingMove,
    setManual,
    Stop,
    setStop,
    setEnd,
    setReset,
    Continue,
    setSlower,
    setFaster,
}