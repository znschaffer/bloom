import { useEffect, useState } from "react";
import { baseRecipes } from "@/components/recipe";

function timeToMinutesSeconds(time: number) {
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}

export default function Recipes() {
  const initialState = {};
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState(initialState);

  function removeRecipe(e) {
    setRecipes((prevRecipes) => {
      const newRecipes = { ...prevRecipes };
      delete newRecipes[e.target.value];
      return newRecipes;
    });
  }

  function Recipe({ recipe }: { recipe: Recipe }) {
    if (recipe == null) {
      return (
        <>
          <h1>No Recipe Selected</h1>
        </>
      );
    }
    return (
      <>
        <h1 className=" flex gap-2 items-center">
          {recipe.name}{" "}
          <button
            onClick={removeRecipe}
            value={recipe.name}
            className="btn btn-circle btn-xs btn-accent"
          >
            X
          </button>
        </h1>
        <div className="flex gap-2">
          <span className="badge">{recipe.method}</span>
          <span className="badge badge-ghost">{recipe.ratio.water}g Water</span>
          <span className="badge badge-accent">
            {recipe.ratio.beans}g Beans
          </span>
        </div>
        <table>
          <thead>
            <th>Time</th>
            <th>Step</th>
          </thead>
          <tbody>
            {recipe.steps.map((step: Step, i: number) => (
              <tr key={i}>
                <td>{timeToMinutesSeconds(step.time)}</td>
                <td>{step.action} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  useEffect(() => {
    const recipeData = JSON.parse(localStorage.getItem("recipes"));
    if (recipeData) {
      setRecipes(recipeData);
    }
    if (!recipeData || Object.keys(recipeData).length == 0) {
      setRecipes(baseRecipes);
    }
  }, []);

  useEffect(() => {
    if (recipes !== initialState) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  const [newRecipe, SetNewRecipe] = useState(baseRecipes["James Hoffman V60"]);

  function onChangeName(e) {
    SetNewRecipe({ ...newRecipe, name: e.target.value });
  }
  function onChangeAuthor(e) {
    SetNewRecipe({ ...newRecipe, author: e.target.value });
  }
  function onChangeMethod(e) {
    SetNewRecipe({ ...newRecipe, method: e.target.value });
  }
  function onChangeWaterRatio(e) {
    SetNewRecipe({
      ...newRecipe,
      ratio: { ...newRecipe.ratio, water: e.target.value },
    });
  }
  function onChangeBeanRatio(e) {
    SetNewRecipe({
      ...newRecipe,
      ratio: { ...newRecipe.ratio, beans: e.target.value },
    });
  }
  function onChangeLink(e) {
    SetNewRecipe({ ...newRecipe, link: e.target.value });
  }

  function onChangeStepTime(e) {
    SetNewRecipe({
      ...newRecipe,
      steps: newRecipe.steps.map((el, i) =>
        e.target.id == `time-${i}` ? { ...el, time: e.target.value } : el
      ),
    });
  }
  function onChangeStepAction(e) {
    SetNewRecipe({
      ...newRecipe,
      steps: newRecipe.steps.map((el, i) =>
        e.target.id == `action-${i}` ? { ...el, action: e.target.value } : el
      ),
    });
  }

  function addStep() {
    SetNewRecipe({
      ...newRecipe,
      steps: [...newRecipe.steps, { time: 0, action: "" }],
    });
  }

  function removeStep(e) {
    SetNewRecipe({
      ...newRecipe,
      steps: newRecipe.steps.filter((el, i) => `step-${i}` !== e.target.id),
    });
  }

  function changeRecipe(e) {
    let recipesData = JSON.parse(localStorage.getItem("recipes"));

    if (recipesData && recipesData[e.target.textContent]) {
      setRecipe(recipesData[e.target.textContent]);
    } else if (!recipesData) {
      localStorage.setItem("recipes", JSON.stringify(baseRecipes));
    }
  }

  function saveRecipe() {
    setRecipes({ ...recipes, [newRecipe.name]: newRecipe });
  }

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="drawer"
            className="btn btn-square btn-ghost drawer-button lg:hidden"
          >
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <div className="px-6 xl:pr-2 pb-16">
            <div className="prose w-full max-w-4xl flex-grow">
              <Recipe recipe={recipe} />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer" className="drawer-overlay"></label>
          <aside className="bg-base-200 pt-3 pl-2 w-80">
            <ul
              onClick={changeRecipe}
              className="menu menu-compact flex flex-col"
            >
              <li key="create-recipe">
                <a>
                  <label htmlFor="create-recipe" className="cursor-pointer">
                    <span>Create Recipe</span>
                  </label>
                </a>
              </li>
              <li key="title" className="menu-title">
                <a>
                  <span>Recipes</span>
                </a>
              </li>
              {Object.keys(recipes).map((el) => {
                return (
                  <>
                    <li key={el}>
                      <a>
                        <span>{el}</span>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
      <input type="checkbox" id="create-recipe" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Recipe</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              onChange={onChangeName}
              type="text"
              id="name"
              value={newRecipe.name}
              defaultValue={newRecipe.name}
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              onChange={onChangeAuthor}
              type="text"
              id="author"
              value={newRecipe.author}
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">Method</span>
            </label>
            <select
              onChange={onChangeMethod}
              id="method"
              value={newRecipe.method}
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">Water</span>
            </label>
            <label className="input-group">
              <input
                onChange={onChangeWaterRatio}
                type="number"
                id="water"
                value={newRecipe.ratio.water}
                className="input input-bordered"
              />
              <span>g</span>
            </label>
            <label className="label">
              <span className="label-text">Beans</span>
            </label>
            <label className="input-group">
              <input
                onChange={onChangeBeanRatio}
                type="number"
                id="beans"
                value={newRecipe.ratio.beans}
                className="input input-bordered"
              />
              <span>g</span>
            </label>
            <label className="label">
              <span className="label-text">Steps</span>
            </label>
            {newRecipe.steps.map((e, i) => {
              return (
                <>
                  <label className="input-group">
                    <input
                      onChange={onChangeStepTime}
                      type="number"
                      key={`time-${i}`}
                      id={`time-${i}`}
                      value={e.time}
                      className="input w-20 input-bordered"
                    />
                    <input
                      onChange={onChangeStepAction}
                      type="text"
                      key={`action-${i}`}
                      id={`action-${i}`}
                      value={e.action}
                      className="input  w-full input-bordered"
                    />
                    <button
                      id={`step-${i}`}
                      onClick={removeStep}
                      className="btn btn-ghost"
                    >
                      X
                    </button>
                  </label>
                </>
              );
            })}
          </div>
          <button onClick={addStep} className="btn btn-sm btn-ghost">
            Add Step
          </button>
          <div className="modal-action">
            <label onClick={saveRecipe} htmlFor="create-recipe" className="btn">
              Save
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
