import React, { useEffect, useState } from "react";
import adminLayout from "../hoc/adminLayout";
import { blogPost } from "../api";

function PollPost() {
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogQuestion, setBlogQuestion] = useState("");
  const [blogOptionOne, setOptionOne] = useState("");
  const [blogOptionTwo, setBlogOptionTwo] = useState("");
  const [blogOptionThree, setBlogOptionThree] = useState("");
  const [blogOptionFour, setBlogOptionFour] = useState("");

  const handleFileChange = (event) => {
    setBlogImage(event.target.files[0]);
  };

  const handlePost = (event) => {
    event.preventDefault();
    window.location.reload();
    setValue(false);
    window.location.reload();
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append("hastag", category);
      formData.append("blogTitle", blogTitle);
      formData.append("blogQuestion", blogQuestion);
      formData.append("blogoption_one", blogOptionOne);
      formData.append("blogoption_two", blogOptionTwo);
      formData.append("blogoption_three", blogOptionThree);
      formData.append("blogoption_four", blogOptionFour);

      const result = await blogPost(formData);
      console.log(result);
      if (result.status) {
        setValue(true);
        // window.location.href = "/";
      }
      // setStatus(result);
    } catch (error) {
      console.error("Error registering user:", error);
      // setStatus("Error registering user.");
    }
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col">
            <h5 className="pb-2 mb-0">Post Your Poll</h5>
          </div>
        </div>
        <div className="">
          <div>
            <div className="bd-example">
            {value ? <><h1>Blog posted successfully</h1><button onClick={handlePost} className="btn btn-primary mb-5">
                  Post Another Blog
                </button></>: <><form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Blog Description
                  </label>
                  
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    value={blogDescription}
                    onChange={(e) => setBlogDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="customFile">
                    Upload Blog Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="customFile"
                    onChange={handleFileChange}
                  />
                </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Blog Question
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={blogQuestion}
                    onChange={(e) => setBlogQuestion(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Blog Question Option 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={blogOptionOne}
                    onChange={(e) => setOptionOne(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Blog Question Option 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={blogOptionTwo}
                    onChange={(e) => setBlogOptionTwo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Blog Question Option 3
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={blogOptionThree}
                    onChange={(e) => setBlogOptionThree(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Blog Question Option 4
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={blogOptionFour}
                    onChange={(e) => setBlogOptionFour(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary mb-5">
                  Submit
                </button>
                
              </form></>}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default adminLayout(PollPost);
