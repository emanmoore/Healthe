import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Track.css";

const Track = () => {
  const [userWaterInput, setUserWaterInput] = useState("");
  const [waterConsumption, setWaterConsumption] = useState([]);
  const [waterintakes, setWaterIntake] = useState([]);
  const LITERS_PER_BOTTLE = 3;
  const LITERS_PER_CUP = 0.2;

  const addWaterConsumption = (numberCups) => {
    if (!numberCups) {
      alert("You must enter a number of cups");
      return;
    }
    const consumptionEvent = {
      numberOfCups: numberCups,
      time: new Date(),
    };
    const newWaterConsumption = [...waterConsumption];
    newWaterConsumption.push(consumptionEvent);
    setWaterConsumption(newWaterConsumption);
    setUserWaterInput("");
  };

  useEffect(() => {
    console.log("waterintake length:", waterintakes.length);
  }, [waterintakes]);

  const updateUserWaterInput = (e) => {
    setUserWaterInput(e.target.value);
  };

  const handleWaterSubmit = (event) => {
    event.preventDefault();

    let { bottles, cups } = event.target.elements;

    axios.post("http://localhost:3001/water" , {
      cups: parseInt(cups.value),
      bottles: parseInt(bottles.value)
    });

    setWaterIntake([
      ...waterintakes,
      {
        cups: parseInt(cups.value),
        bottles: parseInt(bottles.value),
        cup_liters: parseFloat(parseInt(cups.value) * LITERS_PER_CUP).toFixed(2),
        bottle_liters: parseInt(bottles.value) * LITERS_PER_BOTTLE,
      },
    ]);

    alert(
      `CUPS ${parseFloat(parseInt(cups.value) * LITERS_PER_CUP).toFixed(2)} liters   Bottles: ${
        parseInt(bottles.value) * LITERS_PER_BOTTLE
      } liters`
    );
  };

  const handleFruitSubmit = (/**@type Event*/ event) => {
    event.preventDefault();

    let { fruit, cups } = event.target.elements;

    axios.post("http://localhost:3001/fruit" , {
      cups: parseInt(cups.value),
      fruit: fruit.value
    });
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
          <input type="text" name="fruit" />
        </label>

        <label className=" d-flex justify-content-between">
          <span> Cups</span>
          <input name="cups" type="number" alt="number of cups consumed" />
        </label>

        <button type="submit" value="eat" className="btn btn-primary">
          Eat
        </button>

        <ul>
          <h3>Past fruit consumption</h3>
          {waterConsumption.map((consumptionEvent) => (
            <li>cups: {consumptionEvent.numberOfCups}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Track;
