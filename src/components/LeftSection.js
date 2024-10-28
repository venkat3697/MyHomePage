import { AlbumCard } from "./Albums";
import { Contacts } from "./Contacts";
import { Events } from "./Events";
import { OrganizationCard } from "./Organization";
import { ProjectsCard } from "./Projects";

export const LeftSection = () => {
  return (
    <>
      <div className="card m-1 shadow border-0">
        <div className="card-header text-primary custom-title">
          <i
            class="bi bi-calendar-event-fill  me-2"
            style={{ color: "#fa1b6d" }}
          ></i>
          Events
        </div>
        <div className="m-1">
          <Events />
        </div>
      </div>

      <div className="card m-1 shadow border-0  justify-content-between">
        <div className="card-header text-primary custom-title d-flex align-items-center">
          <div>
            <i
              className="bi bi-person-vcard-fill me-2"
              style={{ color: "#1bfa1b" }}
            ></i>
            Contacts
          </div>
          <div className="ms-auto">
            <button type="button" className="btn btn-primary btn-sm">
              +
            </button>
          </div>
        </div>

        <div className="m-1">
          <Contacts />
        </div>
      </div>

      <div className="card m-1 shadow border-0  justify-content-between">
        <div className="card-header text-primary custom-title d-flex align-items-center">
          <div>
            <i
              class="bi bi bi-folder-fill me-2"
              style={{ color: "#910044" }}
            ></i>
            Projects
          </div>
          <div className="ms-auto">
            <button type="button" className="btn btn-primary btn-sm">
              +
            </button>
          </div>
        </div>

        <div className="m-1">
          <ProjectsCard />
        </div>
      </div>

      <div className="card m-1 shadow border-0  justify-content-between">
        <div className="card-header text-primary custom-title d-flex align-items-center">
          <div>
            <i
              class="bi bi-inboxes-fill  me-2"
              style={{ color: "#16eaf5" }}
            ></i>
            Albums
          </div>
          <div className="ms-auto">
            <button type="button" className="btn btn-primary btn-sm">
              +
            </button>
          </div>
        </div>
        <div className="m-1">
          <AlbumCard />
          
        </div>
      </div>

      <div className="card m-1 shadow border-0">
        <div className="card-header text-primary custom-title">
          <i class="bi bi-building-fill  me-2" style={{ color: "#e37210" }}></i>
          Organizations
        </div>
        <div className="m-1">
          <OrganizationCard/>
        </div>
      </div>
    </>
  );
};
