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
