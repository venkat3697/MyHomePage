import { Tasks } from "../data";

export const TaskCard = () => {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <input
            type="text"
            class="form-control form-control-sm"
            id="exampleFormControlInput1"
            placeholder="Create task"
          />
        </div>
        <button type="button" class="btn btn-danger btn-sm">
          Save
        </button>
      </div>
      <hr />
      {Tasks.map((item) => (
        <div className="row">
          <div className="col">
            <div className="row align-items-center">
              <div className="col">
                <div className="shadow p-1 mb-1 bg-body-tertiary rounded">
                  <div className="d-flex justify-content-between custom-font text-info">
                    {item.tasktitle}
                    <div className="d-flex align-items-center">
                      <input type="checkbox" color="red" />
                      <i class="bi bi-gear text-danger ms-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center mt-3">
        <nav aria-label="...">
          <ul class="pagination pagination-sm">
            <li class="page-item disabled">
              <span class="page-link"><i class="bi bi-arrow-left-short"></i>Previous</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next <i class="bi bi-arrow-right-short"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
