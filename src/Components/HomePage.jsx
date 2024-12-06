import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import MyNavbar from "./MyNavbar";

import MyFooter from "./MyFooter";

const HomePage = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/weather?city=${city}`);
  };

  return (
    <div>
      <MyNavbar />
      <h1>Il Meteo più preciso di sempre</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Cerca la tua città"
        />
        <button type="submit">Controlla</button>
      </form>
      <article className="news-article">
        <h2>Breking news</h2>
        <h3>Tempesta Devastante in Florida</h3>
        <img
          src="data:image/jpeg;base64,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"
          alt="Tornado su una città"
          className="news-image"
        />
        <p>
          Una potente tempesta ha colpito la Florida, causando gravi danni in
          diverse città. I venti forti e le piogge torrenziali hanno provocato
          allagamenti, interruzioni di corrente e danni strutturali estesi. Le
          autorità locali stanno lavorando senza sosta per ripristinare i
          servizi essenziali e aiutare le famiglie colpite.
        </p>
        <p>
          La tempesta, che ha generato tornado in alcune aree, è stata una delle
          più intense degli ultimi anni. Le immagini catturate mostrano la furia
          della natura, con tornado che si abbattono su città e campagne,
          distruggendo tutto ciò che trovano sul loro cammino.
        </p>
        <p>
          Gli esperti meteorologici avvertono che potrebbero verificarsi
          ulteriori tempeste nelle prossime settimane, e invitano la popolazione
          a rimanere vigile e preparata. La sicurezza delle persone è la
          priorità assoluta, e vengono fornite costantemente informazioni
          aggiornate per affrontare al meglio queste situazioni di emergenza.
        </p>
      </article>

      <MyFooter />
    </div>
  );
};

export default HomePage;
