import { useForm } from "react-hook-form";
import { Button, Card, Input, Label, Container} from "./../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../context/AuthContext"

// Funcion Register Page
function RegisterPage() {
  const {
    // extraigo las propiedads del hook useForm
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // extraigo la funcion signup del hook useAuth de authContext
  const {signup, errors : signupErrors} = useAuth()
  // extraigo la funcion navigate del hook useNavigate de react router dom
  const navigate = useNavigate()
  // Funcion onSubmit, que extrae los datos del formulario y los envia a la funcion signup que utiliza el auth Context
  const onSubmit = async (data) => {
    const user = await signup(data)
    if (user !== false) {
      navigate('/tasks')
    }
  };
  return (
    <Container className="h-[calc(100vh-7rem)] flex items-center justify-center">
      <Card>
      {
          signupErrors && (
            signupErrors.map(err => (
              <p className='bg-red-600
               text-white text-center p-1'>
                {err}
              </p>
            ))
          )
        }
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
          {errors.username && <p className="text-red-500">Username is required</p>}
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
    </Container>
  );
}

export default RegisterPage;
