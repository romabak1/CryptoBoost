import React from "react";
import '../styles/Card.css';
import Card from "./Card.js";

const SocialMediaPromotionCard = () => {

  return (

    <div className="cardSection centeredCards">
      <Card
        className='top'
        h2='Instagram'
        text='instagramText'
        price='1499'
        text1={'instagramText1'}
        text2={'instagramText2'}
        text3={'instagramText3'}
        text4={'instagramText4'}
        text5={'instagramText5'}
      />
      <Card
        className='top'
        h2='Twitter'
        text='twitterText'
        price='1699'
        text1={'twitterText1'}
        text2={'twitterText2'}
        text3={'twitterText3'}
        text4={'twitterText4'}
        text5={'twitterText5'}
        text6={'twitterText6'}
      />

      <Card
        h2='Telegram'
        text='telegramText'
        price='1599'
        text1={'telegramText1'}
        text2={'telegramText2'}
        text3={'telegramText3'}
        text4={'telegramText4'}
        text5={'telegramText5'}
      /> </div>
  );
}

export default SocialMediaPromotionCard;