import { organizations } from "../data";
export const OrganizationCard = () => {
  return (
    <>
      {organizations.map((item) => (
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
                <div className="text-primary">{item.orgName}</div>
                <div className="text-secondary">{item.role}</div>
              </div>
              <div className="col-auto">
                <i class="bi bi-gear text-danger m-2"></i>
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
