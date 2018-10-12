import React from 'react';
import styled from 'styled-components';
import Button from '../components/shared/Button';

class UserLogin extends React.Component {
  render() {
    return (
      <LoginContainer>
        <Card>
          <Label>User Name</Label>
          <Password placeholder="Masukkan user name Anda" />
        </Card>
        <Card>
          <Label>Password</Label>
          <Password placeholder="Masukkan password Anda" />
        </Card>
        {/* <Card>
          <Button logout>Log In</Button>
        </Card> */}
      </LoginContainer>
    );
  }
}

export default UserLogin;

const LoginContainer = styled.div`
  /* text-align: center;
  line-height: 2em; */
  display: flex;
  flex-direction: column;
  /* width: 40%; */
`;

const Card = styled.div`
  width: 200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 0.7em;
  /* text-align: left; */
`;

const Label = styled.label`
  text-align: left;
  /* padding: 5px; */
`;

const Password = styled.input`
  border-radius: 2px;
  margin: 5px 0;
  padding: 8px 1px;
`;
