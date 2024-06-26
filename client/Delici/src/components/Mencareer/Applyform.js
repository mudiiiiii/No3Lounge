import React from "react";
import bg25 from "../../assets/images/03photos/logos/Wisemen Logo Black.png";
import restro from "../../assets/images/03photos/food/1Z6A1109.jpg";

function Applyform() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://no3lounge-9eeef24429d5.herokuapp.com/api/apply', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Your application has been submitted successfully!');
        event.target.reset(); // Optional: Reset the form after successful submission
      } else {
        const errorText = await response.text();
        throw new Error('Failed to submit application: ' + errorText);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting your application.');
    }
  };

  return (
    <>
      <section className="contact-page">
        <div className="left-bg">
          <img src={bg25} alt="" title="" />
        </div>

        <div className="auto-container">
          <div className="c-page-form-box">
            <div className="row clearfix">
              <div className="loc-block col-lg-6 col-md-12 col-sm-12">
                <div className="title-box centered">
                  <h2>Apply here</h2>
                  <div className="text desc">
                    Please fill out the form and a member of the team will reach out to you
                  </div>
                </div>
                <div className="default-form reservation-form">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
  <div className="clearfix">
    <div className="form-group">
      <div className="field-inner">
        <i className="fas fa-briefcase"></i>
        <select name="job" required>
          <option value="">Select Position</option>
          <option value="manager">Assistant Manager</option>
          <option value="chef">Chef</option>
          <option value="waiter">Sous Chef</option>
          <option value="hostess">Waiter</option>
          <option value="bartender">Bartender</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <div className="field-inner">
        <i className="fas fa-user"></i>
        <input
          type="text"
          name="first_name"
          placeholder="Your First Name"
          required
        />
      </div>
    </div>
    <div className="form-group">
      <div className="field-inner">
        <i className="fas fa-user"></i>
        <input
          type="text"
          name="last_name"
          placeholder="Your Last Name"
          required
        />
      </div>
    </div>
    <div className="form-group">
      <div className="field-inner">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>
    </div>
    <div className="form-group">
      <div className="field-inner">
        <i className="fas fa-phone"></i>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
        />
      </div>
    </div>

    <div className="form-group experience-section">
      <h3 className="section-title">Professional Experience</h3>
      <div className="experience-block">
        <div className="field-inner">
          <label htmlFor="previous_role">Previous Role</label>
          <i className="fas fa-briefcase"></i>
          <input
            type="text"
            id="previous_role"
            name="previous_role"
            placeholder="Previous Job Title"
            required
          />
        </div>
        <div className="field-inner">
          <label htmlFor="years_worked">Years Worked</label>
          <i className="fas fa-calendar-alt"></i>
          <input
            type="number"
            id="years_worked"
            name="years_worked"
            placeholder="Number of Years"
            min="0"
            required
          />
        </div>
        <div className="field-inner">
          <label htmlFor="work_summary">Summary of Work</label>
          <i className="fas fa-tasks"></i>
          <textarea
            id="work_summary"
            name="work_summary"
            placeholder="Describe your responsibilities and achievements"
            required
          ></textarea>
        </div>
      </div>
    </div>

    <div className="form-group">
      <div className="field-inner">
        <i className="fas fa-file-upload"></i>
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
          <span className="text-one">Send Your Application</span>
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

export default Applyform;
