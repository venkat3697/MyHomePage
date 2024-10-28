import ReactShowMoreText from "react-show-more-text";

export const PostCard = ({ data }) => {
  const item = data;
  return (
    <>
      <div className="card m-1 shadow border-0  justify-content-between">
        <div className="m-1">
          <div className="row fw-light mb-3 custom-font">
            <div className="col">
              <div className="row align-items-center ms-auto">
                <div className="col-auto">
                  <img
                    src={item.userImageUrl}
                    class=" rounded float-start"
                    alt="..."
                    width={30}
                  />
                </div>
                <div className="col">
                  <div className="text-primary">{item.postBy}</div>
                  <div className="text-secondary">
                    Posted at {item.postTime} on {item.postDate}
                    <div>
                      <span
                        className={
                          item.postType == "Update"
                            ? "badge text-bg-success"
                            : "badge text-bg-info text-light"
                        }
                      >
                        {item.postType}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col m-3">
                <ReactShowMoreText anchorClass="text-primary">{item.postDetails}</ReactShowMoreText>
                
                </div>
            </div>
            <div className="d-flex align-items-start ms-3 ">
              <i class="bi bi-hearts text-danger me-3">
                <span className="text-secondary custom-font">14</span>
              </i>
              <i class="bi bi-chat-square-text-fill text-success">
                <span className="text-secondary custom-font ms-1">6</span>
              </i>
            </div>
            <div className="d-flex align-items-start ms-3">
              <div>
                <img
                  src={item.userImageUrl}
                  className="rounded float-start"
                  alt="..."
                  width={30}
                />
              </div>
              <div className="ms-2 flex-grow-1">
                <input
                  className="form-control form-control-sm "
                  type="text"
                  placeholder="Write Comment"
                  aria-label=".form-control-sm example"
                />
              </div>
              <div className="ms-2 flex-grow-1">
                <button
                  type="button"
                  class="btn btn-outline-success btn-sm border-0"
                >
                  <span class="badge text-bg-success">Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
