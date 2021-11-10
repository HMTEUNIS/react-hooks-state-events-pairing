
const DisplayCom = ({info}) => {
    console.log(info[0].user)
    return (
        <div>
            <h2>{info[0].user}</h2>
            <p>{info[0].comment}</p>
            <h2>{info[1].user}</h2>
            <p>{info[1].comment}</p>
        </div>
    )
}

export default DisplayCom
