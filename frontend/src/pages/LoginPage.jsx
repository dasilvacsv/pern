import React from "react";
import { Card, Button, Input, Label, Container } from "./../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "./../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);

    if (user) {
      navigate("/tasks");
    }
  });

  return (
    <Container className="h-[calc(100vh-10rem)] flex justify-center items-center">
      <Card>
        {loginErrors &&
          loginErrors.map((err) => (
            <p
              className="bg-red-600
               text-white text-center p-1"
            >
              {err}
            </p>
          ))}
        <h1 className="text-4xl font-bold my-2 text-center">Login</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />

          {errors.email && <p className="text-red-500">Email is required</p>}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <Button>Sign In</Button>
          <div className="flex justify-between my-4">
            <p>
              Dont have an acount?{" "}
              <Link to="/register" className="font-bold">
                Register
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default LoginPage;
