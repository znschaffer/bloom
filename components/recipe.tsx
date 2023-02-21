import { useEffect, useState } from "react";

export const baseRecipes = {
  "James Hoffman V60": {
    name: "James Hoffman V60",
    author: "James Hoffman",
    method: "Pour Over",
    ratio: {
      water: 500,
      beans: 30,
    },
    link: null,
    steps: [
      { time: 0, action: "Pour 60g" },
      { time: 45, action: "Pour 240g" },
      { time: 75, action: "Pour 200g" },
      { time: 120, action: "Swirl V60 gently" },
      { time: 180, action: "Done!" },
    ],
  },
  "Scott Rao V60": {
    name: "Scott Rao V60",
    author: "Scott Rao",
    method: "Pour Over",
    ratio: {
      water: 360,
      beans: 22,
    },
    link: null,
    steps: [
      { time: 0, action: "Pour 66g" },
      { time: 45, action: "Pour 300g" },
      { time: 105, action: "Swirl V60 gently" },
      { time: 180, action: "Done!" },
    ],
  },
  "Tetsu Kasuya 4:6": {
    name: "Tetsu Kasuya 4:6",
    author: "Tetsu Kasuya",
    method: "Pour Over",
    ratio: {
      water: 300,
      beans: 20,
    },
    link: "https://www.youtube.com/watch?v=wmCW8xSWGZY",
    steps: [
      { time: 0, action: "Pour 60g" },
      { time: 45, action: "Pour 60g" },
      { time: 90, action: "Pour 60g" },
      { time: 135, action: "Pour 60g" },
      { time: 180, action: "Pour 60g" },
    ],
  },
  Intelligentsia: {
    name: "Intelligentsia",
    author: "Intelligentsia",
    method: "Pour Over",
    ratio: {
      water: 468,
      beans: 26,
    },
    link: "https://www.intelligentsiacoffee.com/v60-pourover-brew-guide",
    steps: [
      { time: 0, action: "Pour 52g" },
      { time: 60, action: "Pour 70g" },
      { time: 70, action: "Pour 70g" },
      { time: 80, action: "Pour 70g" },
      { time: 90, action: "Pour 70g" },
      { time: 100, action: "Pour 70g" },
      { time: 100, action: "Pour 70g" },
    ],
  },
};

export default function Recipe({ setRecipe }) {
  const initialState = {};
  const [recipes, setRecipes] = useState(initialState);
  useEffect(() => {
    const recipeData = JSON.parse(localStorage.getItem("recipes"));
    if (recipeData) {
      setRecipes(recipeData);
    }
    if (!recipeData || Object.keys(recipeData).length == 0) {
      setRecipes(baseRecipes);
    }
  }, []);

  function selectRecipe(e) {
    setRecipe(recipes[e.target.value]);
  }

  return (
    <>
      <select
        onChange={selectRecipe}
        defaultValue="Brew Recipe"
        className=" bg-base-100 select select-sm select-ghost "
      >
        <option key="brew recipe" disabled>
          Brew Recipe
        </option>
        {Object.keys(recipes).map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
    </>
  );
}
