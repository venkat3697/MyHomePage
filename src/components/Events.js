import { events } from "../data";

export const Events = () => {
  return (
    <>
      {events.map((item) => (
        <div className="row fw-light mb-2 custom-font">
          <div className="col">
            <div className="row d-flex justify-content-between ms-auto">
              <div className="col">
                <span className="text-primary">{item.eventName}</span>
              </div>
              <div className="col-auto">
                <i class="bi bi-gear text-danger m-2"></i>
              </div>
            </div>

            <div className="row ms-auto fw-normal">
              <span>
                {item.startDate}-{item.endDate}
              </span>
            </div>

            <div className="row ms-auto fw-normal">
              <span>
                {item.mangersCount} Manger,{item.workersCount} Workers,{" "}
                {item.guestsCount} Guests
              </span>
              <span></span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
