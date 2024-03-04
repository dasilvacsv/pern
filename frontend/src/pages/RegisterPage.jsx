import { useForm } from "react-hook-form";
import { Button, Card, Input, Label } from "./../components/ui";
import axios from 'axios'
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post('http://localhost:80/api/signup', data, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    console.log(res);
  };

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2xl font-bold text-yellow-500">Register</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="username">
            Username
          </Label>
          <Input
            {...register("username", {
              required: true,
            })}
            placeholder="Enter your Username"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            {...register("email", {
              required: true,
            })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <Label htmlFor="password">
            Password
          </Label>
          <Input
            {...register("password", {
              required: true,
            })}
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <Button type="submit">Register</Button>
            <div className="flex justify-between my-4">
              <p>Already have an account?
              <Link to="/login" className="font-bold"> Log In</Link></p>
            </div>
          
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
