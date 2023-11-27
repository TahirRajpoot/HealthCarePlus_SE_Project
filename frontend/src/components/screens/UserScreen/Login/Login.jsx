import React, { useEffect } from "react";
import Button from "../../../Global/components/Button/Button";
import Input from "../../../Global/components/Input/Input";
import Label from "../../../Global/components/Label/Label";
import LoginLayout from "../../../Global/components/LoginLayout/LoginLayout";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../../../actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm();

  useEffect(() => {
    if (userLogin.userInfo?._id) {
      let id = userLogin.userInfo._id;
      console.log(userLogin, id);
      history(`/${id}/userDashboard`);
    }
  }, [history, userLogin]);

  const onSubmit = async (data) => {
    const { useremail, userpassword } = data;
    try {
      dispatch(userLoginAction(useremail, userpassword));
      reset({ useremail: "", userpassword: "" });
    } catch (err) {
      console.log(err.response);
      setError("useremail", {
        type: "server",
        message: "Invalid email or password",
      });

      setError("userpassword", {
        type: "server",
        message: "Invalid email or password",
      });
    }
  };

  useEffect(() => {
    if (userLogin.userInfo?._id) {
      let id = userLogin.userInfo?._id;
      history(`/${id}/userDashboard`);
    }
  }, [history, userLogin]);
  return (
    <LoginLayout>
      <div className="form-container">
        <h2 className="title">Client Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <Label htmlFor="useremail">Email</Label>
            <Input
              fluid
              type="email"
              error={errors.useremail ? true : false}
              id="useremail"
              aria-invalid={errors.useremail ? "true" : "false"}
              {...register("useremail", {
                required: { value: true, message: "Email Required" },
              })}
            />
            {errors.useremail && (
              <div className="error" role="alert">
                {errors.useremail.message}
              </div>
            )}
          </div>
          <div className="input-group">
            <Label htmlFor="userpassword">Password</Label>
            <Input
              fluid
              type="password"
              id="userpassword"
              error={errors.userpassword ? true : false}
              aria-invalid={errors.userpassword ? "true" : "false"}
              {...register("userpassword", {
                required: { value: true, message: "Password required" },
                minLength: {
                  value: 5,
                  message: "Password should be atleast 8 charactes long",
                },
              })}
            />
            {errors.userpassword && (
              <div className="error" role="alert">
                {errors.userpassword.message}
              </div>
            )}
          </div>
          <br />
          <Button
            className="submit-button"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </LoginLayout>
  );
};

export default Login;
