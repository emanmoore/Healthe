import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Track.css";

const Track = () => {
  const [userWaterInput, setUserWaterInput] = useState("");

  const [fruitConsumption, setFruitConsumption] = useState([]);
  const [waterintakes, setWaterIntake] = useState([]);
  const LITERS_PER_BOTTLE = 3;
  const LITERS_PER_CUP = 0.2;

  const getWaterIntakes = () => {
    axios
      .get("http://localhost:3001/water")
      .then((res) => res.data)
      .then((waterList) => {
        const transformedWaterIntakes = waterList.map((water) => {
          return {
            cups: water.cups,
            bottles: water.bottles,
            cup_liters: parseFloat(water.cups * LITERS_PER_CUP).toFixed(2),
            bottle_liters: parseFloat(water.bottles * LITERS_PER_BOTTLE).toFixed(2),
          };
        });

        setWaterIntake(transformedWaterIntakes);
      });
  };
  const getFruitsIntake = () => {
    axios
      .get("http://localhost:3001/fruit")
      .then((res) => res.data)
      .then((fruitList) => {
        const frutsConsumed = fruitList.map((frItem) => {
          return {
            cups: frItem.cups,
            fruit: frItem.fruit,
          };
        });

        setFruitConsumption(frutsConsumed);
      });
  };

  useEffect(() => {
    getWaterIntakes();
    getFruitsIntake();
  }, []);

  const updateUserWaterInput = (e) => {
    setUserWaterInput(e.target.value);
  };

  const handleWaterSubmit = (event) => {
    event.preventDefault();

    let { bottles, cups } = event.target.elements;

    const data = {
      cups: parseInt(cups.value),
      bottles: parseInt(bottles.value),
      datetime: new Date().toISOString(),
    };

    axios.post("http://localhost:3001/water", data).then(() => getWaterIntakes());
  };

  const handleFruitSubmit = (/**@type Event*/ event) => {
    event.preventDefault();

    let { fruit, cups } = event.target.elements;

    fruitConsumption.push();

    const data = {
      fruit: parseInt(fruit.value),
      cups: parseInt(cups.value),
      datetime: new Date().toISOString(),
    };

    axios.post("http://localhost:3001/fruit", data).then(() => getFruitsIntake());
  };

  return (
    <div className="main border w-50 mx-auto mt-5 shadow rounded-2 d-flex p-4">
      <form className="container water-tracker-container d-flex flex-column gap-4" onSubmit={handleWaterSubmit}>
        <h1 className="text-muted">Water</h1>

        <label className="d-flex justify-content-between">
          <span>Cups</span>
          <input onChange={updateUserWaterInput} type="number" min={0} name="cups" required title="0.2 liters" autoFocus />
        </label>

        <label className="d-flex justify-content-between">
          <span>Bottles</span>
          <input onChange={updateUserWaterInput} type="number" min={0} name="bottles" required title="each bottle 3 liters" />
        </label>

        <label className="d-flex justify-content-between">
          <span>Liters</span>
          <input onChange={updateUserWaterInput} type="text" name="liters" readOnly />
        </label>

        <button className="btn btn-primary" type="submit">
          Drink
        </button>

        <ul>
          <h3>Past water consumption {waterintakes.length}</h3>
          {waterintakes.map(({ cups, bottles, cup_liters, bottle_liters }, index) => (
            <li key={index}>
              {index + 1}__ cups: {cups} bottles:{bottles} cup_liters: {cup_liters} bottle_liters: {bottle_liters}
            </li>
          ))}
        </ul>
      </form>

      <form
        className="container fruit-tracker-container d-flex flex-column gap-4"
        action="https://google.com"
        method="GET"
        onSubmit={handleFruitSubmit}
      >
        <h1 className="text-muted">Fruit</h1>

        <label className=" d-flex justify-content-between">
          <span>Fruit</span>
          <input type="text" name="fruit" required/>
        </label>

        <label className=" d-flex justify-content-between">
          <span> Cups</span>
          <input name="cups" type="number" alt="number of cups consumed" required min={0}/>
        </label>

        <button type="submit" value="eat" className="btn btn-primary">
          Eat
        </button>
        <ul>
          <h3>Past fruit consumption</h3>
          {fruitConsumption.map((consumptionEvent, index) => (
            <li key={index}>
              {index + 1} - Cups: {consumptionEvent.cups} Fruit: {consumptionEvent.fruit}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Track;
