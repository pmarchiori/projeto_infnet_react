import Button from "@mui/material/Button";
import AlertComponent from "../components/alert";
import ContainerComponent from "../components/container";
import IconButtonComponent from "../components/iconbutton";
import SnackbarComponent from "../components/snackbar";

const SignIn = () => {
  return (
    <ContainerComponent>
      <Button variant="contained" color="primary" sx={{ marginBottom: "20px" }}>
        Sign In
      </Button>
      <AlertComponent severity="info" sx={{ marginBottom: "20px" }}>
        Teste de funcionamento do alert
      </AlertComponent>
      <IconButtonComponent>Teste iconbutton</IconButtonComponent>
    </ContainerComponent>
  );
};

export default SignIn;
