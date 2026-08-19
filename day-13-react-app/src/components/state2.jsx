import { useState } from "react";
function ToggleText(params){
    const[showText,setShowText]=useState(true);
    return(
        <div>
            <h2>
                Toggle Text
            </h2>
            <button onClickCapture={()=>setShowText(!showText)}>{showText ?"hide":"show"}</button>
            {showText && <p>hello,now you can see me!!</p>}
        </div>
    );
}
export default ToggleText;
