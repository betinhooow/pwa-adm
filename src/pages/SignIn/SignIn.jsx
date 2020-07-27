import React, { useRef, useEffect, useCallback } from "react";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import * as Yup from "yup";
import { useAuth } from "../../hooks/auth";
import { useHistory } from "react-router-dom";
import getValidationErrors from "../../utils/getvalidationErrors";
import Button from "../../components/Button/Button";

const SignIn = () => {
  const formRef = useRef(null);
  const auth = useAuth();
  const history = useHistory();

  useEffect(() => {
    var wrapper = document.getElementById("page-wrapper");
    var myobj = document.getElementById("nav-bar");
    myobj.remove();
    wrapper.setAttribute("id", "");
  }, []);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef["current"].setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatorio"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await auth["signIn"]({ email: data.email, password: data.password });
        history.push("/home");
      } catch (err) {
        if (err["name"] === "ValidationError") {
          const errors = getValidationErrors(err);
          console.log(formRef, errors);
          formRef["current"].setErrors(errors);

          return;
        }
      }
    },
    [auth, history]
  );

  return (
    <div>
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <h3>PWA ADM</h3>

          <Form className="m-t" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                type="email"
                className="form-control"
                name="email"
                placeholder="E-mail"
              />
            </div>
            <div className="form-group">
              <Input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
            </div>

            <Button
              type="submit"
              onClick={() => console.log("clicked")}
              className="btn btn-primary block full-width m-b"
            >
              Entrar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
