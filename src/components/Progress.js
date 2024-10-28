import { Progress } from "../data";

export const ProgressCard = () => {
  return (
    <>
      {Progress.map((item) => (
        <div className="row fw-light mb-3 custom-font">
          <div className="col">
            <div className="row align-items-center ms-auto">
              <div className="col-auto">
                <img
                  src={item.imageUrl}
                  class="rounded float-start"
                  alt="..."
                  width={30}
                />
              </div>
              <div className="col justify-content-between">
                <div className="text-primary">{item.progtype}</div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    style={{
                      width:
                        item.id === 1 ? "75%" : item.id === 2 ? "50%" : "25%",
                      backgroundColor:
                        item.id === 1
                          ? "#ff5733"
                          : item.id === 2
                          ? "#bd61ff"
                          : "#00b818",
                    }}
                  >
                    {item.id === 1 ? "75%" : item.id === 2 ? "50%" : "25%"}
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i class="bi bi-plus-square-fill text-danger m-2"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex">
        <span className="ms-auto custom-font text-primary">Show All</span>
      </div>
    </>
  );
};
