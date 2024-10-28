import { LeftSection } from "./LeftSection";
import { MiddleSection } from "./MiddleSection";
import { RightSection } from "./RightSection";

export const Layout = () => {
  return (
    <div className="container-fluid full-height">
      <div className="row  h-100">
        <div className="col-3">
          <LeftSection/>
        </div>
        <div className="col-6">
          <MiddleSection/>
        </div>
        <div className="col-3">
          <RightSection/>
        </div>
      </div>
    </div>
  );
};
