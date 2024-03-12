import React, { useRef } from "react";
import '../styles/Card.css';
import Card from "./Card.js";
import ScrollButtons from "./ScrollButtons.js";

const ShillCard = () => {
  const scrollRef = useRef(null);

  return (
    <>


      <div ref={scrollRef} className="cardSection centeredCards gorilla ">
        <Card
          h2='shillingPackageSilver'
          text='teamChattingSilver'
          price='1599'
          text1={'shillSilver1'}
          text2={'shillSilver2'}
          text3={'shillSilver3'}
          text4={'shillSilver4'}
          text5={'shillSilver5'}
        />
        <Card
          h2='shillingPackageGold'
          text='teamChattingGold'
          price='3099'
          text1={'shillGold1'}
          text2={'shillGold2'}
          text3={'shillGold3'}
          text4={'shillGold4'}
          text5={'shillGold5'}
        />
        <Card
          // h1='bestOffer'
          h2='shillingPackagePlatinum'
          text='teamChattingPlatinum'
          price='5599'
          text1={'shillPlatinum1'}
          text2={'shillPlatinum2'}
          text3={'shillPlatinum3'}
          text4={'shillPlatinum4'}
          text5={'shillPlatinum5'}
        />
        <Card
          h2='orgShillingSilver'
          text='orgShillingSilverText'
          price='3299'
          text1={'orgShillingSilverText1'}
          text2={'orgShillingSilverText2'}
          text3={'orgShillingSilverText3'}
          text4={'orgShillingSilverText4'}
        />

        <Card
          h2='orgShillingGold'
          text={'orgShillingGoldText'}
          price='4999'
          text1={'orgShillingGoldText1'}
          text2={'orgShillingGoldText2'}
          text3={'orgShillingGoldText3'}
          text4={'orgShillingGoldText4'}
        />


      </div>
      <div className="card5">
        <ScrollButtons scrollRef={scrollRef} />
      </div>
    </>
  );
}

export default ShillCard;