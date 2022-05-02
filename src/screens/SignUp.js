import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Authlayout } from "../components/Authlayout";
import { Bottom } from "../components/Bottom";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PageTitle } from "../components/PageTitle";
import { Title } from "../components/Title";
import { routes } from "../routes";

const SIGNUP_MUTAION = gql`
  mutation createAccount(
    $username: String!
    $nickName: String!
    $password: String!
  ) {
    createAccount(
      username: $username
      nickName: $nickName
      password: $password
    ) {
      ok
      error
    }
  }
`;

export const SignUp = () => {
  const navigate = useNavigate();

  const onCompleted = (data) => {
    console.log(data);
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      setError("results", {
        message: error,
      });
    } else {
      navigate(routes.home);
    }
  };

  const [createAccount, { loading }] = useMutation(SIGNUP_MUTAION, {
    onCompleted,
  });

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setError,
  } = useForm({ mode: "onChange" });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (/* data */) => {
    console.log(getValues());
    // console.log(data);
    // console.log({ ...data });
    const { username, nickName, password } = getValues();
    createAccount({
      variables: {
        username,
        nickName,
        password,
      },
    });
  };

  console.log(isValid);

  return (
    <Authlayout>
      <PageTitle title="회원가입" />
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
        {/* {errors && errors.username && errors.username.message} */}

        <Input
          {...register("nickName", {
            required: "닉네임은 필수입니다",
          })}
          type="text"
          placeholder="닉네임"
        />

        {errors?.nickName?.message}

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

        {errors?.results?.message}

        <Bottom text="아이디가 있나요?" link={routes.home} linkText="로그인" />
      </Form>
    </Authlayout>
  );
};
