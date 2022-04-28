import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Authlayout } from "../components/Authlayout";
import { Bottom } from "../components/Bottom";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { routes } from "../routes";

export const SignUp = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (/* data */) => {
    console.log(getValues());
    // console.log(data);
    // console.log({ ...data });
  };

  console.log(isValid);

  return (
    <Authlayout>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", {
            required: "아이디는 필수입니다",
            minLength: {
              value: 3,
              message: "아이디는 3자리 이상 작성해주세요",
            },
          })}
          type="text"
          placeholder="아이디"
        />

        {errors?.username?.message}

        <Input
          {...register("password", {
            required: "패스워드는 필수입니다",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해주세요",
            },
          })}
          type="password"
          placeholder="패스워드"
        />

        {errors?.password?.message}

        <Input
          {...register("re_password", {
            required: "패스워드 확인은 필수입니다",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해주세요",
            },
            validate: (value) =>
              value === password.current || "패스워드가 일치하지 않습니다",
          })}
          type="password"
          placeholder="패스워드 확인"
        />

        {errors?.re_password?.message}

        <Button opacity={isValid ? "1" : "0.5"} text="회원가입" />

        <Bottom text="아이디가 있나요?" link={routes.home} linkText="로그인" />
      </Form>
    </Authlayout>
  );
};
