import { useState } from "react";
import Recipe from "./recipe";
import Steps from "./steps";
import Timer from "./timer";

export default function Brew() {
  const [recipe, setRecipe] = useState({} | null);
  return (
    <div className="card m-8 border bg-base-100 border-base-200 max-w-[80rem]">
      <div className="card-body ">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex flex-col gap-8">
            <Recipe setRecipe={setRecipe} />
            <Timer />
          </div>
          <Steps recipe={recipe} />
        </div>
      </div>
    </div>
  );
}
