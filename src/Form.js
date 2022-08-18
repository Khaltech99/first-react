import {} from "./images/bg-intro-mobile.png";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const Form = () => {
  const schema = yup.object().shape({
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(10).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="rug">
      <Button />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First Name "
          {...register("firstName")}
        />
        <p className="error">{errors.firstName?.message}</p>
        <input type="text" placeholder="last Name " {...register("lastName")} />
        <p className="error">{errors.lastName?.message}</p>
        <input type="text" placeholder="Email Address" {...register("email")} />
        <p className="error">{errors.email?.message}</p>
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <p className="error">{errors.password?.message}</p>
        <input
          type="submit"
          value={"CLAIM YOUR FREE TRIAL"}
          className="submit"
          onSubmit={handleSubmit(onSubmit)}
        />
        <h5>
          By clicking this you are agreeing to our
          <span className="red">terms and services</span>
        </h5>
      </form>
    </div>
  );
};
