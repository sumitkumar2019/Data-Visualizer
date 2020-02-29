import React from "react";
import Table from "../common/table";
const TableModal = ({ mappingRecords }) => {
  return (
    <div>
      <button
        className="btn btn-primary mini-icon-card"
        data-toggle="modal"
        data-target="#tableModal"
      >
        <i className="fa fa-table fa-2x" aria-hidden="true"></i>
      </button>
      <div
        className="modal fade"
        id="tableModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Mapped Table
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Table previewData={mappingRecords} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
