
const diskArray_node1 = [];
const diskArray_node2 = [];
const diskArray_node3 = [];
const diskArray = [];

export default function getUserInput (input){

    diskArray_node1.length = 0;
    diskArray_node2.length = 0;
    diskArray_node3.length = 0;

    var y_position = 607;
    var width = 275;
    var backColor;
    var x_position = 185;

    for (let i = 1; i <= input * 3; i++){

        if (i % 3 === 1){
            x_position = 180 + Math.floor(i / 3) * 15;
            backColor = "rgb(168, 143, 0)"
            diskArray_node1.push({number: i, x: x_position + "px", y: y_position + "px", color: backColor, Width: width + "px"})

        } else if (i % 3 === 2){

            backColor = "darkgreen"
            x_position = 575 + Math.floor(i / 3) * 15;
            diskArray_node2.push({number: i, x: x_position + "px", y: y_position + "px", color: backColor, Width: width + "px"});

        }else if (i % 3 === 0){

            backColor = "rgb(100, 0, 0)"
            x_position = 950 + Math.floor(i / 3) * 15;
            diskArray_node3.push({number: i, x: x_position + "px", y: y_position + "px", color: backColor, Width: width + "px"});

        }

        diskArray.push({number: i, x: x_position + "px", y: y_position + "px", color: backColor, Width: width + "px"});

        if (i % 3 === 0)
            y_position -= 30;
        
        width -= 10;
    }
}

/*const CreateDisks = () => {

    const final = diskArray.map((obj) => (
        <Spring
            from = {{ opacity: 0}}
            to = {{ opacity: 1}}
            config = {{ delay: 1000, duration: 1000}}
        >

            {props => (
                <div style={props}>

                    <div style = {{backgroundColor: obj.color, position: "absolute", left: obj.x, top: obj.y, width: obj.Width, height: "60px", borderRadius: "50%", alignItems: "center"}}><p style = {{position: "relative", textAlign: "center", top: "10%"}}>{obj.number}</p></div>

                </div>
            )}

            
        </Spring>
    ));

    return final;
    
}*/


export {
    //CreateDisks,
    diskArray,
    diskArray_node1,
    diskArray_node2,
    diskArray_node3,
}