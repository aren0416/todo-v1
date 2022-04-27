import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3``;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input``;

const Button = styled.button``;

export const Login = () => {
  return (
    <Wrap>
      <Container>
        <Title>Login</Title>
        <Form>
          <Input type="text" placeholder="아이디" />
          <Input type="password" placeholder="패스워드" />
          <Button>LOGIN</Button>
        </Form>
      </Container>
    </Wrap>
  );
};
