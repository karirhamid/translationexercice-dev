import React, { useState } from 'react';
import Container from "./components/Container";
import Content from "./components/Content";
import Header from "./components/Header";
import Input from "./components/Input";
import Seperator from "./components/Seperator";
import TopBar from "./components/TopBar";
import Grid from "./components/Grid";
import Button from "./components/Button";
import TranslateResult from "./components/TranslateResult";

const langs = ['العربية', 'Française', 'English', 'Española', 'Deutsche'];

function App() {

  const [showButtonName, setShowButtonName] = useState("Translation result here ...");
  const [showInputVal, setInputVal] = useState("Please enter a text...");

  const GetLangName = (language) => {
    setShowButtonName(language);
    console.log(language)
  };

  const GetValueFromInput = (e) => {
    setInputVal(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <Container>

        <TopBar />

        <Header />
        
        <Content>
          <Input type="text" id="text" placeholder="Text" onChange={(e) => GetValueFromInput(e)} />
          <Seperator />
          <Grid>
            {langs.map((lang, index) => {
              return (
                <Button key={index} language={lang} onClick={(e) => GetLangName(lang)} />
              )
            })}
          </Grid>
          <Seperator />
          <TranslateResult resultText={showButtonName} />
          <TranslateResult resultText={showInputVal} />
        </Content>

      </Container>
    </div>
  );
}

export default App;
