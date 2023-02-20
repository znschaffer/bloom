import Brew from "./brew";
import Timer from "./timer";
import History from "./history";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="md:hero bg-base">
      <div className="hero-content  gap-8 flex-col lg:flex-row ">
        <img
          src="https://images.unsplash.com/photo-1618263665307-b31318809fae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          className="max-w-sm max-h-sm rounded-lg "
        />
        <div className="prose">
          <h1>Perfect your brew.</h1>
          <span className="fa-solid fa-user"></span>
          <p>
            Use <strong>bloom</strong>'s easy to follow recipes, integrated
            timer, and brewing log to pick out blind spots in your morning
            routine. We've collected well-tested pour-over recipes from creators
            such as <strong>James Hoffman</strong> and more. Experiment and add
            your own recipes and variations.
          </p>
          <h2>Save your tastes.</h2>
          <p>
            Add your collection of beans from different roasters to compare and
            rate. Save tags to filter styles of beans, brewing methods, and
            techniques. Share links to your recipes with friends.
          </p>
          <p>
            This is also a silly portfolio project I made in a weekend to
            refamiliarise myself with React! Feel free to use any of the current
            functionality to help yourself perfect your brew. Reach out to me
            for any questions or improvements.
          </p>
        </div>
      </div>
    </div>
  );
}
