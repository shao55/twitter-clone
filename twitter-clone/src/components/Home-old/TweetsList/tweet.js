// import { COMMENTS, KZ_IMG_PATH, LIKES, RETWEETS, SHARE } from "../images/images";

// export default function Tweet (tweet) {
//     return (
//         <div style={{borderBottom: '2px solid whitesmoke'}}>
//             <p style={{marginLeft: 70, fontSize: 13, fontWeight: 600}}>You might like! <span style={{color: "blue"}}>See more</span></p>
//             <div style={{display: 'flex', alignItems: 'center'}}>
//                 <img src={tweet.img} style={{width: 50, height: 50, borderRadius: 50, marginLeft: 10}}/>
//                 <div style={{marginLeft: 10}}>
//                     <p style={{fontWeight: 600}}>{tweet.authorName}<span style={{paddingLeft: 5, color: "grey"}}>{tweet.authorUserName}</span></p>
//                     <p>{tweet.content.length>200 ? tweet.content.slice(0, 100) + "..." : tweet.content}</p>
//                 </div>
//             </div>
//             <div style={{display: 'flex', alignItems: 'center', justifyContent: "space-around", paddingLeft: 40}}>
//                 <div style={{display: 'flex', alignItems: 'center', paddingLeft: 10}}>
//                     <div style={{width: 20, height: 20}}>
//                         {COMMENTS}
//                     </div>
//                     <p style={{paddingLeft: 5}}>{tweet.comments}</p>
//                 </div>
//                 <div style={{display: 'flex', alignItems: 'center', paddingLeft: 10}}>
//                     <div style={{width: 20, height: 20}}>
//                         {RETWEETS}
//                     </div>
//                     <p style={{paddingLeft: 5}}>{tweet.retweets}</p>
//                 </div>
//                 <div style={{display: 'flex', alignItems: 'center', paddingLeft: 10}}>
//                     <div style={{width: 20, height: 20}}>
//                         {SHARE}
//                     </div>
//                     <p style={{paddingLeft: 5}}>{tweet.replies}</p>
//                 </div>
//                 <div style={{display: 'flex', alignItems: 'center', paddingLeft: 10}}>
//                     <div style={{width: 20, height: 20}}>
//                         {LIKES}
//                     </div>
//                     <p style={{paddingLeft: 5}}>{tweet.likes}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }