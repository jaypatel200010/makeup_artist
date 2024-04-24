import React from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";

function Add_blog() {
  return (
    <>
      <div>
        <Aheader title={"Add-Blogs"} />
        <div className="container mt-5">
          <h2>Create a New Blog</h2>
          <form encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="blogTitle">Blog Title:</label>
              <input
                type="text"
                className="form-control"
                id="blogTitle"
                placeholder="Enter blog title"
                required
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="blogContent">Blog Content:</label>
              <textarea
                className="form-control"
                id="blogContent"
                rows={6}
                placeholder="Enter blog content"
                required
                defaultValue={""}
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="blogImage">Blog Image:</label>
              <input
                type="file"
                className="form-control-file"
                id="blogImage"
                accept="image/*"
              />
            </div>
            <button type="submit" className="mb-5 btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <Afooter />
      </div>
    </>
  );
}

export default Add_blog;
