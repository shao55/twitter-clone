import './main.css'
import NewTweet from './NewTweet'
import TweetsList from './TweetsList'
export default function Home () {
    return (
        <div className="home" style={{marginTop: 50, marginLeft: 10}}>
            <p style={{fontWeight: 600}}>Home</p>
            <NewTweet/>
            <TweetsList/>
        </div>
    )

}