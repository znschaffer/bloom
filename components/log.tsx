import { FormEvent, useState } from "react";

export default function Log({ time }: { time: number }) {
  let logD: Log = {
    date: Date.toString(),
    bean: {
      name: "",
      roaster: "",
    },
    rating: "1",
    brewTime: 0,
    brewRatio: {
      water: 0,
      beans: 0,
    },
  };

  const [logData, setLogData] = useState(logD);

  function onChangeRating(e) {
    setLogData({ ...logData, rating: e.target.value });
  }

  function onChangeBrewTime(e) {
    setLogData({ ...logData, brewTime: e.target.value });
  }

  function onChangeCoffeeOut(e) {
    setLogData({
      ...logData,
      brewRatio: { ...logData.brewRatio, beans: e.target.value },
    });
  }

  function onChangeWaterIn(e) {
    setLogData({
      ...logData,
      brewRatio: { ...logData.brewRatio, water: e.target.value },
    });
  }

  function handleSubmit() {
    let localLogData = JSON.parse(localStorage.getItem("log"));
    if (localLogData) {
      localLogData.push(logData);
      localStorage.setItem("log", JSON.stringify(localLogData));
    } else {
      localLogData = [];
      localLogData.push(logData);
      localStorage.setItem("log", JSON.stringify(localLogData));
    }
  }
  return (
    <>
      <label htmlFor="log-brew" className="btn btn-ghost btn-sm">
        Save
      </label>

      <input type="checkbox" id="log-brew" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brew Time</span>
              </label>
              <label className="input-group">
                <input
                  onChange={onChangeBrewTime}
                  type="number"
                  id="brewTime"
                  value={logData.brewTime}
                  defaultValue={time}
                  className="input input-bordered"
                />
                <span>seconds</span>
              </label>
              <label className="label">
                <span className="label-text">Water In</span>
              </label>
              <label className="input-group">
                <input
                  onChange={onChangeWaterIn}
                  type="number"
                  id="waterIn"
                  value={logData.brewRatio.water}
                  className="input input-bordered"
                />
                <span>g</span>
              </label>
              <label className="label">
                <span className="label-text">Coffee Out</span>
              </label>
              <label className="input-group">
                <input
                  onChange={onChangeCoffeeOut}
                  type="number"
                  id="coffeeOut"
                  value={logData.brewRatio.beans}
                  className="input input-bordered"
                />
                <span>g</span>
              </label>
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <div className="rating" onChange={onChangeRating}>
                <input
                  type="radio"
                  name="rating-1"
                  value="1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  value="2"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  value="3"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  value="4"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  value="5"
                  className="mask mask-star"
                />
              </div>
            </div>
            <div className="modal-action">
              <label
                onClick={handleSubmit}
                htmlFor="log-brew"
                className="btn btn-sm"
              >
                Submit
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
