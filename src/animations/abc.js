import { diskArray } from "../components/Disks";
import styled, { keyframes } from 'styled-components'


const CreateDisks = () => {

    return <Wrapper>
        {
                diskArray.map((obj) => (
                <div id={obj.number} style = {{backgroundColor: obj.color, position: "absolute", left: obj.x, top: obj.y, width: obj.Width, height: "30px", border: "1px solid white", borderRadius: "25px", alignItems: "center"}}><p style = {{position: "relative", textAlign: "center", fontSize: "15px", top: "-7px"}}>{obj.number}</p></div>
                ))
        }
    </Wrapper>
         
}

const animation = keyframes`
    
     0%{transform: translateY(-1600px); }
     100%{transform: translateY(-670px); }
 `

const Wrapper = styled.span`
  animation-name: ${animation};
 `

export default CreateDisks;