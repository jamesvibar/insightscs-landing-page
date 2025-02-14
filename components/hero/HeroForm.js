import React from "react";
import PropTypes from "prop-types";
import { heroValidationSchema } from "../../lib/validationSchemas";
import { formSubmission } from "../../lib/formSubmission";
import { Formik, Form, Field } from "formik";

import HeroSubmit from "./HeroSubmit";

import { Button, TextInputGroup } from "../../elements";

// import * as gtag from "../../lib/gtag";

export default function HeroForm({ theme }) {
  return (
    <div className="form__wrapper" id="section1">
      <Formik
        validationSchema={heroValidationSchema}
        initialValues={{
          name: "",
          email: "",
          contact: "",
          no_of_trucks: ""
        }}
        onSubmit={(values, { setStatus, resetForm }) => {
          // Set form to submitting
          setStatus({ submitting: true, success: false });

          formSubmission(values)
            .then(() => {
              resetForm();
              setStatus({ submitting: false, success: true });
            })
            .catch(err => {
              console.log(err);
              resetForm();
            });
          // Send gtag event
          // gtag.event({
          //   action: "submit_form",
          //   category: "Hero",
          //   label: values.email
          // });
        }}
      >
        {({ status = { submitting: false, success: false } }) =>
          status.success ? (
            <HeroSubmit />
          ) : (
            <Form>
              <Field
                name="name"
                id="name"
                label="Name"
                required
                component={TextInputGroup}
              />
              <Field
                name="email"
                id="email"
                label="Email"
                type="email"
                required
                component={TextInputGroup}
              />
              <Field
                name="contact"
                id="contact"
                label="Contact Number"
                type="number"
                required
                component={TextInputGroup}
              />
              <Field
                name="no_of_trucks"
                id="no_of_trucks"
                label="How many trucks do you have?"
                type="number"
                required
                component={TextInputGroup}
              />
              <Button
                variant="primary"
                block
                type="submit"
                disabled={status.submitting}
              >
                {status.submitting ? "Submitting..." : "Submit"}
              </Button>
            </Form>
          )
        }
      </Formik>
      <style jsx>
        {`
          .form__wrapper {
            width: 100%;
            box-shadow: 0 30px 60px 1px rgba(0, 0, 0, 0.15);
            border-radius: 15px;
            padding: 1rem;
            background: ${theme.palette.white};
            min-height: 400px;
          }

          @media (min-width: ${theme.breakpoints.md}) {
            .form__wrapper {
              padding: 3rem 2rem;
            }
          }
        `}
      </style>
    </div>
  );
}

HeroForm.propTypes = {
  theme: PropTypes.object.isRequired
};
