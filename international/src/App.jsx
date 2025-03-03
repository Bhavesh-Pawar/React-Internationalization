import { useTranslation } from "react-i18next";

function App() {

  const {t , i18n} = useTranslation();

  const setLang = (lang) =>{
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <select name="lang" onChange={(e) => setLang(e.target.value)} id="lang">
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="hi">Hindi</option>
      </select>

      <center>
        <h1>
            {t('helloWorld')}  - {}
        </h1>
        {
          t('intlDateTime',
            {
              val: new Date(),
              formatParams: {
                val: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
              },
            })
        }
         <div>
          {t('bhavesh','My name is Bhavesh')}
         </div>
      </center>
    </>
  )
}

export default App
