import React from "react";

const CustomModal = ({title,content,textConfirm}) => {
  return (
    <div>
      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="transportModal">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                {content}
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-primary" >
                {textConfirm}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
