import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const LoginPage = () => (
  <div>
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(username, password) =>
        axios
          .post("http://localhost:9000/api/user/login", {
            username: username,
            password: password,
          })
          .then(() => console.log("login Succes!"))
          .catch((err) => console.log(err, "err!"))
      }
    >
      {() => (
        <Form>
          <Field name="username" type="text" />
          <Field name="password" type="password" />
          <button type="submit">sing in</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginPage;
