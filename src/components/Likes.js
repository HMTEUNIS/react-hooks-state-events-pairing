import {useState} from 'react'

const Likes = ({info}) => {
    const [up, setUp] = useState (info.upvotes)
    const [down, setDown] = useState(info.downvotes)


    return (
        <div>
            
        <button onClick={() => setUp(up + 1)}>{up}👍</button> <button onClick={() => setDown(down - 1)}>{down}👎</button>
        
        </div>
    )
}

export default Likes
