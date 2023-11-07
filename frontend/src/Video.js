// rfce

import React, { useEffect, useState } from 'react'
import Header from './Header'
import tmkoc from './images/tmkoc.jpg'
import avtar from './images/avtar.png'
import {LiaThumbsDown, LiaThumbsUp, LiaDownloadSolid} from 'react-icons/lia'
import {PiShareFatLight} from 'react-icons/pi'

function SuggestedVideo(){
  return (<>
    <div className='suggested-video'>
      <div className='suggestion-image'>
        <img src={tmkoc} width={'230px'} />
      </div>
      <div className='suggestion-content'>
        <div class="video-info">
            <p class="track-title margin-0 video-info-title">
              Kalank Title Track - Lyrical | Alia Bhatt
            </p>
            <p class="margin-0 smaller-fontsize">T-Series</p>
            <p class="margin-0 smaller-fontsize">230M views . 4 years ago</p>
        </div>
      </div>
    </div>
  </>);
}

function VideoInfo(){
  return (
    <>
      <h5 className='video-title'>
        Kalank Title Track - Lyrical | Alia Bhatt , Varun Dhawan | Arijit Singh | Pritam| Amitabh
      </h5>
      <div className='video-details'>
        <div className='channel-info'>
          <img src={avtar} height={'30px'} width={'30px'}/>
          <h6 className='channel-name'>Zee Music Company</h6>
          <button className='subscribe'>Subscribe</button>
        </div>
        <div className='video-action-buttons'>
          <button>
            <LiaThumbsUp size={'1.4rem'} />597K | <LiaThumbsDown size={'1.4rem'} /></button>
          <button>
            <PiShareFatLight size={'1.4rem'}/>
            Share</button>
          <button>
            <LiaDownloadSolid size={'1.4rem'}/>
            Download</button>
        </div>
        
      </div>
      <div className='video-desc'>
          <p>434K views &nbsp; 1 year ago</p>
          <p>Here is the compilation video for all the random suggestions Shukla Ji gave from 
                      the film Chhalaang. Watch this video for non stop laughter and let us know in 
                      the comments which suggestion did you relate with the most.
                      </p>
        </div>
    </>
  );
}

function Video() {
  // const [seconds, setSeconds] = useState(10);
  // const targetTime = Math.floor((new Date()).getTime()/1000 + 10);

  // when page renders
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     const currentTime = Math.floor((new Date()).getTime()/1000);
  //     const remainingTime = targetTime - currentTime;

  //     if(remainingTime >= 0) setSeconds(remainingTime);

  //   }, 1000)
  // }, []);

  let videos = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      {/* Video comp
      <h3>Remaining time : {seconds}</h3> */}
      <Header />
      <div className='video-main-page'>
        <div className='video-frame'>
          <iframe className='iframe-video' src="https://www.youtube.com/embed/Grr0FlC8SQA?si=8TyAKqTfvtCYcIdO?rel=0&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <VideoInfo />
        </div>
        <div className='suggestions'>
          <p>Suggested Videos:</p>
          {videos.map((videoId) => {
              return <SuggestedVideo />
          })}
        </div>
      </div>
    </div>
  )
}

export default Video
