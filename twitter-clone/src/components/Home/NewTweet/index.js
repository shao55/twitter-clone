import { PROFILE_IMG_PATH } from "../images/images";

export default function NewTweet () {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <img src={PROFILE_IMG_PATH} style={{width: 50}}/>
            <input placeholder="What's happening?" style={{border: 'none', margin: '0 15px', fontSize: 18, outline: 'none'}}/>
        </div>
    )
}