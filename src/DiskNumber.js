import './FirstPage.css'
import Text2 from './animations/FirstPage1';
import AnimatedText from './animations/FirstPage_ani';
import InputAni from './animations/InputAnime';
import SubmitAni from './animations/Submit';


function DiskNumber(){

    return(
        <div id="base" className= "baseDiv">
            <span><AnimatedText /></span>
            <span><Text2 /></span>
            <span><InputAni /></span>
            <span><SubmitAni /></span>
        </div>
    )
    
}

export default DiskNumber;