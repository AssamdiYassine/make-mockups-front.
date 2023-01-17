import React from "react";
import Carouselshirt from "./carousel";
import { useState as UseState, Fragment, useEffect as UseEffect } from "react";
import Progress from "./Progress";
import Message from "./Message";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import API from "../api";

function upload() {
  const [file, setFile] = UseState([]);
  const [uploadedFile, setUploadedFile] = UseState({});
  const [message, setMessage] = UseState("");
  const [uploadPercentage, setUploadPercentage] = UseState(0);
  const [modalShow, setModalShow] = UseState(false);

  const onChange = async (e) => {
    setFile(e.target.files);

  };


  UseEffect(()=>{
 console.log("dsfsd");
  },[onChange])
  
  const handleChange = async (e) => {
    e.preventDefault();

    console.log(file);
    var formData = new FormData();
    for (var i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }

    try {
      const res = await API.post(`upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Accept: "application/json",
          // "Content-Type": "application/json",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
    const timer = setTimeout(() => {
      setModalShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  };
  const handleClear = async (e) => {
    e.preventDefault();

    try {
      await API.get(`/Clear`);
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      }
    }
  };
  const handleView = async (e) => {
    e.preventDefault();

    try {
      await API.get(`ViewMockups`);
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      }
    }
  };

  UseEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }, [handleChange]);

  return (
    <Fragment>
      <div className="container px-5 py-5  ">
        {" "}
        <div className="d-flex">
          <div className=" col-md-6   ">
            <Carouselshirt />
          </div>{" "}
          <div className=" col-md-6 p-3 ms-5  ">
            <div>
              <div className="row ">
                <h5 className="text-muted d-flex justify-content-center ">
                  THE #1 PRODUCT MOCKUP GENERATOR
                </h5>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  {" "}
                  <h2 className="text-dark py-4  ">
                    Create stunning product mockups
                    <br />
                    <strong className="text-warning"> easily</strong> and online
                  </h2>
                </div>
              </div>
              <hr className="border border-warning border-2 opacity-50 w-100" />

              <div className="row pt-4">
                <div className="d-flex  ">
                  <h6 className="text-muted  py-2 ">
                    Give it a try with our samples or upload your own logos
                  </h6>
                </div>

                <Button
                  className="btn btn-warning btn-block mt-4 w-100"
                  onClick={() => setModalShow(true)}
                >
                  Make MOCKUPs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="justify-content-center">
          <Modal.Title
            className="text-warning   "
            id="contained-modal-title-vcenter"
          >
            upload your design
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {message ? <Message msg={message} /> : null}

            <div className="py-4">
              <input
                type="file"
                id="customFile"
                className="d-none"
                onChange={onChange}
                multiple
              />
              <label
                htmlFor="customFile"
                className="border border-warning border-2 border-dashed px-5 py-5 text-center cur-p d-black w-100"
              >
                <p className="mb-1 text-black px-29">
                  Déposez votre bon document ici ou cliquez pour la télécharger.
                </p>
                <small className="text-muted">
                  Vos fichiers ne doit pas dépasser 5Mb
                </small>
              </label>

              {uploadPercentage ? (
                <div className=" mt-4">
                  {" "}
                  <Progress percentage={uploadPercentage} />{" "}
                </div>
              ) : null}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="justify-content-between px-5">
          <Button
            className="btn-warning"
            onClick={
              handleChange
              //  onHide();
            }
          >
            Start make mockup
          </Button>
          <div className="d-flex">
            <div className="">
              <Button className="btn btn-warning " onClick={handleClear}>
                {" "}
                Clear{" "}
              </Button>
            </div>
            <div className="ps-4">
              {" "}
              <Button className="btn btn-success " onClick={handleView}>
                {" "}
                View Mockups{" "}
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
      )
    </Fragment>
  );
}

export default upload;
