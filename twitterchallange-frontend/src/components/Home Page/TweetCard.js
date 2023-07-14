import React from 'react'

function TweetCard({tweet}) {
  return (
    <section id='tweetCardContainer' key={tweet.tweet_id}>
      <div id='tweetCardImg'><i class="fa-solid fa-user fa-xl"></i></div>
      <div id='tweetContainer'>
        <div id='tweetContainerTop'>
          <h3 id="tweetContainerTopName">Serkan</h3>
          <h3 id="tweetContainerTopUserName">@{tweet.userName}</h3>
          <div id='tweetContainerTopIconWrapper'>
            <button id='tweetContainerTopIcon'><i id='tweetContainerIcons' class="fa-solid fa-ellipsis fa-xl"></i></button>
          </div>
        </div>
        <div id='tweetContainerMid'> Deneme Yazisidir sonrasinda Backend baglanacaktir </div>
        <div id='tweetContainerBottom'> 
        <button id='tweetContainerMessageIcon'><i id='tweetContainerIcons' class="fa-regular fa-comment fa-xl"></i></button>
        <button id='tweetContainerRetweetIcon'><i id='tweetContainerIcons' class="fa-solid fa-retweet fa-xl"></i></button>
        <button id='tweetContainerLikeIcon'><i id='tweetContainerIcons' class="fa-solid fa-heart fa-xl"></i></button> 
        <button id='tweetContainerCountIcon'><i id='tweetContainerIcons' class="fa-solid fa-chart-simple fa-xl"></i></button> 
        <button id='tweetContainerForwardIcon'><i id='tweetContainerIcons' class="fa-regular fa-share-from-square fa-xl"></i></button>
         
          
        </div>
      </div>

    </section>
  )
}

export default TweetCard