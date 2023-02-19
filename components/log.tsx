export default function Log({ time }) {
  console.log(time);
  return (
    <>
      <label htmlFor="log-brew" className="btn btn-sm">
        Log
      </label>

      <input type="checkbox" id="log-brew" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="form-control">
            <label className="input-group">
              <span>Brew Time</span>
              <input
                type="number"
                defaultValue={time}
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group">
              <span>Brew Time</span>
              <input
                type="number"
                defaultValue={time}
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="modal-action">
            <label htmlFor="log-brew" className="btn">
              Log
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
