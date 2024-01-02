import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const lngs = [
  { code: "en", native: "English" },
  { code: "fa", native: "فارسی" },
];

function App() {
  const { t, i18n } = useTranslation();
  const [age,setAge]=useState();

  const ageHandler=(e)=>{
    setAge(e.target.value);
  }
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="App">
      <header className="App-header" KC>
        <h1>{t("main.hello")}</h1>
        <p>{t("main.Welcome_to_my_website!")}</p>
        <input type="text" placeholder={t("Your age")} onChange={ageHandler}/>
        <p>{t("error.message contents age", { age: age })}</p>
        <p>{t("main.current date", { date: new Date() })}</p>
        {lngs.map((lng, i) => {
          const { code, native } = lng;
          return <button onClick={() => handleTrans(code)}>{native}</button>;
        })}
      </header>
    </div>
  );
}

export default App;
