import React, { useRef } from "react";
import '../styles/Card.css';
import Card from "./Card.js";
import ScrollButtons from "./ScrollButtons.js";

const CM = () => {
  const scrollRef = useRef(null);

  return (
    <>
      <div ref={scrollRef} className="cardSection centeredCards gorilla ">
        <Card
          h2='cmRullingSilver'
          text=''
          price='699'
          text1={'cmRullingSilverText1'}
          text2={'cmRullingSilverText2'}
          text3={'cmRullingSilverText3'}
          text4={'cmRullingSilverText4'}
          text5={'cmRullingSilverText5'}
          text6={'cmRullingSilverText6'}
        />
        <Card
          h2='cmRullingGold'
          text=''
          price='1259'
          text1={'cmRullingGoldText1'}
          text2={'cmRullingGoldText2'}
          text3={'cmRullingGoldText3'}
          text4={'cmRullingGoldText4'}
          text5={'cmRullingGoldText5'}
          text6={'cmRullingGoldText6'}
        />
        <Card
          h2='designerOfProject'
          text='designerOfProjectText'
          price='15'
          text1={'designerOfProjectText1'}
          text2={'designerOfProjectText2'}
          text3={'designerOfProjectText3'}
          text4={'designerOfProjectText4'}

        />
        <Card
          h2='copyWriter'
          text='copyWriterText'
          price='700'
          text1={'copyWriterText1'}
          text2={'copyWriterText2'}
          text3={'copyWriterText3'}
          text4={'copyWriterText4'}
        />
        <Card
          h2='motionDesigner'
          text='motionDesignerText'
          price='0'
          text1='motionDesignerText1'
          text2='motionDesignerText2'
        />
      </div>
      <div className="card5">
        <ScrollButtons scrollRef={scrollRef} />
      </div>
    </>

  );
}

export default CM;