import React from "react";

const Box = ({ title, children }) => {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="row">
        <div className="col-lg-12">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h5>{title}</h5>
            </div>
            <div className="ibox-content">
{children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
