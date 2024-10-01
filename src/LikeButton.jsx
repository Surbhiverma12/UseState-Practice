import { useState } from "react";

export default function LikeButton() {
    let [isLike, setIsLike] = useState(true)
    let toggleLike = () => {
        setIsLike(!isLike)
    }

    let likeStyle = {
        color: "red",
    }

    return(
        <>
        <h2>Like !</h2>
        <h1 onClick={toggleLike} >
            {/* {isLike.toString()} */}
            {
                isLike ? (<i className="fa-regular fa-heart"></i>) : (<i className="fa-solid fa-heart" style={likeStyle}></i>)
            }
             
        </h1>
        </>
    )
}