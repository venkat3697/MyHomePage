import { contacts } from "../data";

export const Contacts = () => {
  return (
    <>
      {contacts.map((item) => (
        <div className="row fw-light mb-3 custom-font">
          <div className="col">
            <div className="row align-items-center ms-auto">
              <div className="col-auto">
                <img
                  src={item.imageUrl}
                  class=" rounded float-start"
                  alt="..."
                  width={30}
                />
              </div>
              <div className="col">
                <div className="text-primary">
                  {item.contactName}
                  {!item.lastUpdated ? " Online" : ""}
                </div>
                <div className="text-dark">{item.lastUpdated}</div>
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
