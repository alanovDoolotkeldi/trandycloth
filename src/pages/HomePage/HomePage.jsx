import React from "react";
// import IndividualIntervalsExample from '../../components/IndividualIntervalsExample/IndividualIntervalsExample'
import Card from "../../components/card/Card";
import { CarouselCustomNavigation } from "../../components/CarouselCustomNavigation/CarouselCustomNavigation";

function HomePage() {
  return (
    <div className="home">
      {/* <IndividualIntervalsExample/> */}
      <CarouselCustomNavigation />
      <div className="wrapper">
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
