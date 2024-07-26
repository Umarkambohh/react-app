// pages/Home.js
import React from "react";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/slices/counterSlice";

const Home = () => {
  const suggestions = [
    {
      id: 1,
      bgColor: "wheat",
      heading:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione fugit, nam quidem odio earum similique sequi itaque soluta quae et?",
      desc: "this is some text",
      path: "about/123",
    },
    {
      id: 2,
      bgColor: "lightblue",
      heading:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione fugit, nam quidem odio earum similique sequi itaque soluta quae et?",
      desc: "this is some text",
      path: "about/456",
    },
    {
      id: 3,
      bgColor: "lightgreen",
      heading:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione fugit, nam quidem odio earum similique sequi itaque soluta quae et?",
      desc: "this is some text",
      path: "about/789",
    },
    {
      id: 4,
      bgColor: "lightcoral",
      heading:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione fugit, nam quidem odio earum similique sequi itaque soluta quae et?",
      desc: "this is some text",
      path: "about/101",
    },
  ];

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {/* <div className="d-flex mb-5">
        {suggestions.map((suggestion) => (
          <Card key={suggestion.id} suggestion={suggestion} />
        ))}
      </div>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Swiper
        className="pb-5"
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
      >
        {suggestions.map((suggestion) => (
          <SwiperSlide key={suggestion.id}>
            <Card suggestion={suggestion} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SearchForm />

      <div className="my-5">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div> */}
    </div>
  );
};

export default Home;
