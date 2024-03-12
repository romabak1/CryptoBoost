import React, { useRef } from "react";
import '../styles/Card.css';
import Card from "./Card.js";
import ScrollButtons from "./ScrollButtons.js";

const OtherCard = () => {
  const scrollRef = useRef(null);

  return (

    <>
      
    
      <div ref={scrollRef} className="cardSection">
      <Card
        h2='twitterCommentaries'
        text='twitterCommentariesText'
        price='1399'
        text1={'twitterCommentariesText1'}
        text2={'twitterCommentariesText2'}
        text3={'twitterCommentariesText3'}
        text4={'twitterCommentariesText4'}
      />
      <Card
        h2='instagramCommentaries'
        text='instagramCommentariesText'
        price='1199'
        text1={'instagramCommentariesText1'}
        text2={'instagramCommentariesText2'}
        text3={'instagramCommentariesText3'}
        text4={'instagramCommentariesText4'}
      />
      <Card
        className='top'
        h2='Twitter 5K DM'
        text='5kdmText'
        price='1199'
        text1={'5kdmText1'}
        text2={'5kdmText2'}
        text3={'5kdmText3'}
        text4={'5kdmText4'}
        text5={'5kdmText5'}
      />
      <Card
        className='top'
        h2='twitterPosts'
        text='twitterPostsText'
        price='1499'
        text1={'twitterPostsText1'}
        text2={'twitterPostsText2'}
        text3={'twitterPostsText3'}
        text4={'twitterPostsText4'}
      />

      <Card
        h2='statesWriting'
        text='statesWritingText'
        price='1299'
        text1={'statesWritingText1'}
        text2={'statesWritingText2'}
        text3={'statesWritingText3'}
        text4={'statesWritingText4'}
      />
      <Card
        h2='cmcCommentariesSilver'
        text='cmcCommentariesSilverText'
        price='1299'
        text1={'cmcCommentariesSilverText1'}
        text2={'cmcCommentariesSilverText2'}
        text3={'cmcCommentariesSilverText3'}
        text4={'cmcCommentariesSilverText4'}
        text5={'cmcCommentariesSilverText5'}
      />
      <Card
        h2='cmcCommentariesGold'
        text='cmcCommentariesGoldText'
        price='2399'
        text1={'cmcCommentariesGoldText1'}
        text2={'cmcCommentariesGoldText2'}
        text3={'cmcCommentariesGoldText3'}
        text4={'cmcCommentariesGoldText4'}
        text5={'cmcCommentariesGoldText5'}
      />
      <Card
        h2='mediumRedditComm'
        text='mediumRedditCommText'
        price='899'
        text1={'mediumRedditCommText1'}
        text2={'mediumRedditCommText2'}
        text3={'mediumRedditCommText3'}
      />

    </div>
    <div className="card8">
        <ScrollButtons scrollRef={scrollRef} />
      </div>
    </>
    
  );
}

export default OtherCard;