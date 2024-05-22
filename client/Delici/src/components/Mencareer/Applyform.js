import React from "react";
import bg25 from "../../assets/images/03photos/logos/Wisemen Logo Black.png";
// import bg6 from '../../assets/images/03'
import restro from "../../assets/images/03photos/food/1Z6A1109.jpg";

function Contactbanner() {
  return (
    <>
      <section className="contact-page">
        <div className="left-bg">
          <img src={bg25} alt="" title="" />
        </div>
        {/* <div className="right-bg"><img src={bg6} alt="" title="" /></div> */}

        <div className="auto-container">
          <div className="c-page-form-box">
            <div className="row clearfix">
              <div className="loc-block col-lg-6 col-md-12 col-sm-12">
                <div className="title-box centered">
                  <h2>Apply here</h2>
                  <div className="text desc">
                    Please fill out the form and a member of the team will reach
                    out to you{" "}
                  </div>
                </div>
                <div className="default-form reservation-form">
                  <form method="post" action="api/apply" encType="multipart/form-data">
                    <div className="clearfix">
                    <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="job"
                            placeholder="Position"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="first_name"
                            placeholder="Your First Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="last_name"
                            placeholder="Your Last Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="form-group experience-section">
                        <h3 className="section-title">
                          Professional Experience
                        </h3>
                        <div className="experience-block">
                          <div className="field-inner">
                            <label htmlFor="previous_role">Previous Role</label>
                            <input
                              type="text"
                              id="previous_role"
                              name="previous_role"
                              placeholder="Previous Job Title"
                              required=""
                            />
                          </div>
                          <div className="field-inner">
                            <label htmlFor="years_worked">Years Worked</label>
                            <input
                              type="number"
                              id="years_worked"
                              name="years_worked"
                              placeholder="Number of Years"
                              min="0"
                              required=""
                            />
                          </div>
                          <div className="field-inner">
                            <label htmlFor="work_summary">
                              Summary of Work
                            </label>
                            <textarea
                              id="work_summary"
                              name="work_summary"
                              placeholder="Describe your responsibilities and achievements"
                              required=""
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="field-inner">
                          <input type="file" name="cv" required />
                          <label>Upload CV</label>
                        </div>
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one clearfix"
                        >
                          <span className="btn-wrap">
                            <span className="text-one">
                              Send Your Application
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="loc-block col-lg-6 col-md-12 col-sm-12">
                <img src={restro} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactbanner;
