import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";
import $ from "jquery";
class CSVFileUploadForm extends Form {
  state = { data: {}, errors: {} };
  schema = {
    fileName: Joi.string()
      .required()
      .label("File Name")
  };

  componentDidMount() {
    $(".custom-file-input").on("change", function() {
      var fileName = $(this)
        .val()
        .split("\\")
        .pop();
      $(this)
        .siblings(".custom-file-label")
        .addClass("selected")
        .html(fileName);
    });
  }
  dofileUpload = () => {
    const { name, onCSVFormatSubmit } = this.props;
    onCSVFormatSubmit(name);
  };
  render() {
    return (
      <div className="form-group">
        <form>{this.renderFile("fileName", "Browse")}</form>
      </div>
    );
  }
}

export default CSVFileUploadForm;
