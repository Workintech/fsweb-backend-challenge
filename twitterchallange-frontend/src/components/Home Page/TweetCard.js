import React from 'react'

function TweetCard({tweet}) {
  return (
    <section id='tweetCardContainer' key={tweet.tweet_id}>
      <div id='tweetCardImg'><i className="fa-solid fa-user fa-xl"></i></div>
      <div id='tweetContainer'>
        <div id='tweetContainerTop'>
          <h3 id="tweetContainerTopName">{tweet.name}</h3>
          <h3 id="tweetContainerTopUserName">@{tweet.userName}</h3>
          <div id='tweetContainerTopIconWrapper'>
            <button id='tweetContainerTopIcon'><i id='tweetContainerIcons' className="fa-solid fa-ellipsis fa-xl"></i></button>
          </div>
        </div>
        <div id='tweetContainerMid'> {tweet.tweet} </div>
        <div id='tweetContainerBottom'> 
        <button id='tweetContainerMessageIcon'><i id='tweetContainerIcons' className="fa-regular fa-comment fa-xl"></i></button>
        <button id='tweetContainerRetweetIcon'><i id='tweetContainerIcons' className="fa-solid fa-retweet fa-xl"></i></button>
        <button id='tweetContainerLikeIcon'><i id='tweetContainerIcons' className="fa-solid fa-heart fa-xl"></i></button> 
        <button id='tweetContainerCountIcon'><i id='tweetContainerIcons' className="fa-solid fa-chart-simple fa-xl"></i></button> 
        <button id='tweetContainerForwardIcon'><i id='tweetContainerIcons' className="fa-regular fa-share-from-square fa-xl"></i></button>   
        </div>
      </div>

    </section>
  )
}

export default TweetCard