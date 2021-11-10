import { useState } from "react"
import DisplayCom from "./DisplayCom"
const Comments = ({info}) => {
    const [switcher, setSwitcher] = useState (true)
    const rend  = () => {
        setSwitcher(!switcher)
    }
    return (
        <div>
         {switcher ? (
          <button onClick={rend} >Hide Comments</button>
        ) : (
          <button  onClick={rend} >Show Comments</button>
        )}
        <h2>{info.length} Comments</h2>
        {switcher ? (
            <DisplayCom info ={info} />
        ): null}
      

        </div>
    )
}

export default Comments
