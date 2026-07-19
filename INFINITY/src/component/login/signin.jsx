import Dialog from '@mui/material/Dialog';
import { useState, useContext } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/dataProvider';
import {
  TextField,
  Typography,
  Box,
  Button,
  styled,
} from '@mui/material';

const Wrapper = styled(Box)({
  width: "100%",
  display: 'flex',
  flexDirection: 'column',
  padding: "40px",
  gap: "20px",
  justifyContent: "center",
});

const RequestOTP = styled(Button)({
  textTransform: "none",
  backgroundColor: "#fff",
  color: "#2874f0",
  height: "48px",
  borderRadius: "9px",
});

const Login = styled(Button)({
  textTransform: "none",
  backgroundColor: "#fff",
  color: "#2874f0",
  height: "48px",
  borderRadius: "9px",
});

const AccountInitialValues = {
  login: {
    view: 'login'
  },
  signup: {
    view: 'signup'
  }
}
const initialData = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  phoneNo: ''
}

const loginInitialValues = {
  userName: '',
  password: ''
}


export default function SimpleDialog(props) {
  const [login, setLogin] = useState(loginInitialValues);

  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const [account, toogleAccount] = useState(AccountInitialValues.login);
  const [signup, setSignup] = useState(initialData);

  const { setAccount } = useContext(DataContext);

  const signupData = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }
  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstName);
  }
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login);

    console.log(response.data);

    if (response.status === 200) {
      handleClose();
      localStorage.setItem("account", JSON.stringify(response.data.data.firstName));
      setAccount(response.data.data.firstName);
    }
  }
  return (
    account.view === "login" ?

      <Dialog
        onClose={handleClose}
        open={open}
        disableRestoreFocus
      >
        <Wrapper>
          <Typography variant="h5">
            Welcome to Infinity
          </Typography>

          <Typography variant="body2">
            Your Premium Store
          </Typography>

          <TextField
            variant='standard'
            onChange={(e) => onValueChange(e)}
            name='userName'
            label="Enter E-mail / Mobile no."
          />

          <TextField
            variant='standard'
            onChange={(e) => onValueChange(e)}
            name='password'
            label="Enter Password"
            type="password"
          />

          <Typography variant="body2">
            By continuing, you agree to Infinity Terms of Use and Privacy Policy.
          </Typography>

          <Login variant="contained"
            onClick={() => { loginUser() }}
          >
            Login
          </Login>

          <Button color="primary" align='center' onClick={() => toogleAccount(AccountInitialValues.signup)}>
            New to Infinity? Create an account
          </Button>
        </Wrapper>
      </Dialog>

      :

      <Dialog
        onClose={handleClose}
        open={open}
        disableRestoreFocus
      >
        <Wrapper>

          <TextField
            variant='standard'
            label="Enter First Name"
            name='firstName'
            onChange={(e) => signupData(e)}
          />

          <TextField
            variant='standard'
            label="Enter Last Name"
            name='lastName'
            onChange={(e) => signupData(e)}
          />

          <TextField
            variant='standard'
            label="Enter userName"
            name='userName'
            onChange={(e) => signupData(e)}
          />

          <TextField
            variant='standard'
            label="Enter Email"
            name='email'
            onChange={(e) => signupData(e)}
          />

          <TextField
            variant='standard'
            label="Enter Password"
            name='password'
            onChange={(e) => signupData(e)}
          />

          <TextField
            variant='standard'
            label="Enter Phone"
            name='phoneNo'
            onChange={(e) => signupData(e)}
          />

          <Button variant="contained" onClick={() => signupUser()}>
            Continue
          </Button>
          <Button
            color="primary"
            onClick={() => toogleAccount(AccountInitialValues.login)}
          >
            Already have an account? Login
          </Button>
        </Wrapper>
      </Dialog>
  );
}