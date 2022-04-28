import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Authlayout } from "../components/Authlayout";
import { Bottom } from "../components/Bottom";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { routes } from "../routes";

export const Login = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    console.log(getValues);
  };

  console.log(isValid);

  return (
    <Authlayout>
      <Title>로그인</Title>
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

        <Button opacity={isValid ? "1" : "0.5"} text="로그인" />

        <Bottom
          text="아이디가 없나요?"
          link={routes.signup}
          linkText="회원가입"
        />
      </Form>
    </Authlayout>
  );
};
