import React from "react";
import flash from "./FlashDeals/flashDealsJSON";
import Header from "../Common/Header";
import Footer from "../Common/Footer"
import SlideProducts from "./SlideProducts/SlideProducts";
import FlashDeals from "./FlashDeals/FlashDeals";
import TopCategories from "./TopCategories/TopCategories";
import NewArrival from "./NewArrival/NewArrival";
import BigDiscounts from "./BigDiscounts/BigDiscounts";
import MobilePhonesContainer from "./MobilePhones/MobilePhonesContainer";
import Banner from "./Banner/Banner.jsx";
import HomeData from "./HomeData/HomeData";
import { Helmet } from "react-helmet";

function Home() {

  const mql = matchMedia("(min-width: 0) and (max-width: 1279px)")

  return (
    <>
      <Helmet>
        <title>Bonik</title>
      </Helmet>

      <Header />

      <main>
        <SlideProducts />

        <FlashDeals products={flash} swiper={true} />

        <TopCategories />

        <NewArrival />

        <BigDiscounts />

        <MobilePhonesContainer />

        { mql.matches ? null : <Banner/>  }

        <HomeData/>
      </main>

      <Footer/>
    </>
  );
}

export default Home;
