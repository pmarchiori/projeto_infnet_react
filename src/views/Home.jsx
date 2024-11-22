import { useState } from "react";

import AvatarComponent from "../components/avatar";
import BoxComponent from "../components/box";
import CardComponent from "../components/card";
import CheckboxComponent from "../components/checkbox";
import FabComponent from "../components/fab";
import SwitchComponent from "../components/switch";
import TabComponent from "../components/tab";

import { Tabs } from "@mui/material";
import TextFieldComponent from "../components/textfield";
import TextComponent from "../components/tipography";

const Home = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <BoxComponent
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px",
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1000,
        }}
      >
        <TextComponent variant="h4">Home</TextComponent>
        <AvatarComponent
          src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
          alt="avatar"
        />
      </BoxComponent>

      <BoxComponent
        sx={{
          height: "100vh",
          marginTop: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardComponent
          sx={{
            padding: "10px",
            backgroundColor: "lightgreen",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            width: "80%",
            marginBottom: "20px",
          }}
        >
          <h2>Card</h2>
          <p>Teste de utilização do componente personalizado card.</p>
        </CardComponent>

        <CheckboxComponent
          checked={checked}
          onChange={handleChange}
          color="primary"
          label="Accept Terms"
        />

        <p>
          {checked
            ? "Você marcou o checkbox!"
            : "Teste de componente checkbox."}
        </p>
        <FabComponent
          color="primary"
          sx={{
            width: 100,
            height: 100,
            borderRadius: 5,
            color: "#000",
          }}
          onClick={() => alert("Botão fab clicado!")}
        >
          Teste de fab.
        </FabComponent>
        <SwitchComponent name="switchExample" />
        <Tabs>
          <TabComponent label="Teste Tab 1" />
          <TabComponent label="Teste Tab 2" />
          <TabComponent label="Teste Tab 3" />
        </Tabs>
        <TextFieldComponent label="Teste TextField" />
      </BoxComponent>
    </>
  );
};

export default Home;
