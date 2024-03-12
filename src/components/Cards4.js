import React from "react";
import '../styles/Card.css';
import Card from "./Card.js";

const CardsAmbasadorProgram = () => {

  return (

    <div className="cardSection centeredCards">
      <Card
        h2='ambassadorP'
        text=''
        price='4999+'
        text1={'ambassadorPText1'}
        text2={'ambassadorPText2'}
        text3={'ambassadorPText3'}
        text4={'ambassadorPText4'}
      />

      <Card
        className='top'
        h2='ambassadorPMod'
        text='teamOfThreeChatting'
        price='699'
        text1={'ambassadorPModText1'}
        text2={'ambassadorPModText2'}
        text3={'ambassadorPModText3'}
      />

      
    </div>
  );
}

export default CardsAmbasadorProgram;