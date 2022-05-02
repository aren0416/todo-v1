import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginUser } from "../apollo";
import { Authlayout } from "../components/Authlayout";
import { Bottom } from "../components/Bottom";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PageTitle } from "../components/PageTitle";
import { Title } from "../components/Title";
import { routes } from "../routes";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  // console.log(message);
  const onCompleted = (data) => {
    console.log(data);
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      setError("result", {
        message: error,
      });
    } else {
      loginUser(token);
      navigate(routes.home, {
        replace: true,
      });
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({ mode: "onChange" });

  console.log(errors);

  const onSubmit = () => {
    // console.log(getValues());
    const { username, password: pwd } = getValues();
    login({
      variables: {
        username: username,
        password: pwd,
      },
    });
  };

  return (
    <Authlayout>
      <PageTitle title="로그인" />
      <Title>로그인</Title>

      {location?.state?.message}

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
        {errors?.result?.message}

        <Bottom
          text="아이디가 없나요?"
          link={routes.signup}
          linkText="회원가입"
        />
      </Form>
    </Authlayout>
  );
};
