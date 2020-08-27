import React, { useState } from "react";
import styled from "styled-components";
import SteamPluginDisplay, { SteamPluginFields } from "./SteamPluginDisplay";

const GeneratorFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 400px auto;
`;

const GeneratorForm = styled.form`
  flex: 1;
`

function PluginGenerator(props) {
  const [isSteamGame, setSteamGame] = useState(true);

  return (
    <GeneratorFrame>
      <GeneratorForm>
        <label>Steam Game?</label><input type="checkbox" onChange={(e) => setSteamGame(e.target.value)}/>
      </GeneratorForm>
      <SteamPluginDisplay config={{}} />
    </GeneratorFrame>
  );
}

export default PluginGenerator;
