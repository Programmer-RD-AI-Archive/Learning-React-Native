import { Formik } from "formik";
import React from "react";

function AppForm({ initValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
