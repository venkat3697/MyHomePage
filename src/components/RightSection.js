import { BoardsCard } from "./Boards";
import { ProgressCard } from "./Progress";
import { TaskCard } from "./Tasks";
export const RightSection = () => {
  return (
    <>
      <div className="card m-1 shadow border-0  justify-content-between">
        <div className="card-header text-primary custom-title d-flex align-items-center">
          <div>
            <i
              class="bi bi-motherboard-fill  me-2"
              style={{ color: "#c400cf" }}
            ></i>
            Boards
          </div>
          <div className="ms-auto">
            <button type="button" className="btn btn-primary btn-sm">
              +
            </button>
          </div>
        </div>
        <div className="m-1">
          <BoardsCard />
        </div>
      </div>

      <div className="card m-1 shadow border-0  justify-content-between">
        <div className="card-header text-primary custom-title d-flex align-items-center">
          <div>
            <i
              class="bi bi-bar-chart-line-fill me-2"
              style={{ color: "#009bd9" }}
            ></i>
            Personal Progress
          </div>
          <div className="ms-auto">
            <span className="custom-font text-warning">Go to board</span>
          </div>
        </div>
        <div className="m-1">
          <ProgressCard />
        </div>
      </div>

      <div className="card m-1 shadow border-0  justify-content-between">
        <div className="card-header text-primary custom-title d-flex align-items-center">
          <div>
            <i
              class="bi bi-list-task me-2"
              style={{ color: "#009bd9" }}
            ></i>
            Tasks
          </div>
          <div className="ms-auto">
            <span class="badge text-bg-dark me-2" style={{fontWeight:"lighter"}}>24 Todo</span>
            <span class="badge text-bg-success" style={{fontWeight:"lighter"}}>42 Done</span>
          </div>
        </div>
        <div className="m-1">
          <TaskCard />
        </div>
      </div>
    </>
  );
};
