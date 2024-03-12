import React, { useRef } from "react";
import '../styles/Card.css';
import Card from "./Card.js";

const Commentaries = () => {

  return (
    <>
      <div className="cardSection centeredCards ">


        <Card
          // h1='bestOffer'
          // className='top'
          h2='activitiesB'
          text=''
          // crossedPrice='3000'
          price='399'
          text1={"activitiesBText1"}
          text2={"activitiesBText2"}
          text3={"activitiesBText3"}
          text4={"activitiesBText4"}
        />

        <Card
          h2='activitiesS'
          text=''
          // crossedPrice='3000'
          price='899'
          text1={"activitiesSText1"}
          text2={"activitiesSText2"}
          text3={"activitiesSText3"}
          text4={"activitiesSText4"}
        />
        <Card
          h2='activitiesG'
          text=''
          // crossedPrice='3000'
          price='1199'
          text1={"activitiesGText1"}
          text2={"activitiesGText2"}
          text3={"activitiesGText3"}
          text4={"activitiesGText4"}
        />

      </div>
    </>

  );
}

export default Commentaries;