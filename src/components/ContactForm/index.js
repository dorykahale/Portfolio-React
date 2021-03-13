import React from "react";
import ContactFormHeader from "./ContactFormHeader";

import "./style.css";

const ContactForm = (props) => (
  <div className="container ContactContainer">
    <ContactFormHeader />
    <div className="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <form className="formInfo">
          <div className="form-group">
            <label for="nameInput" id="allText">Name</label>
            <input
              type="email"
              class="form-control"
              name="nameInput"
            />
          </div>
          <div className="form-group">
            <label for="emailInput" id="allText">Email</label>
            <input
              type="email"
              class="form-control"
              name="emailInput"

            />
          </div>
          <div className="form-group">
            <label for="message" id="allText">Message</label>
            <textarea
              class="form-control"
              name="message"
              rows="3"
            ></textarea>
          </div>
          <br/>
          <button type="button" className="btn btn-primary btn-lg SubmitButton">
            Submit
          </button>
          <br/><br/><br/><br/><br/>
        </form>
      </div>
    </div>
  </div>
);

export default ContactForm;