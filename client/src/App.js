import logo from './logo.svg';
import './App.css';
import PrecisionRoll from './Components/PrecisionRoll';
import { React, useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  // Définir le css de démarrage
  const [popupCSS, setPopupCSS] = useState('popup center d-block');
  const [shown, setShown] = useState(false)

  const showPopup = () => {
    if(!shown)
      setPopupCSS('popup center d-block')
    else
      setPopupCSS('popup center d-none')

      setShown(!shown)
  }
  // pour recuperer les donnes de l api 
  const getData = () => {
    axios.
      get(
        "http://localhost:5000/"
      ).then((res) => {
        setData(res)
        console.log(data)
      })
      .catch((err) => console.log(err))
      //si on recupere les donnes on mets loading egal a false
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    getData();
  }, [])

  if (!loading)
    return (
      <div className="App">
        <button type="button" className="btn" onClick={showPopup}>Afficher/Cacher le popup</button>
        <div className={popupCSS}>
          <h4 class="text-center">Mise en page</h4>
          <div className="row">
            <div className="col-top">
              <img class="image" src={data.data.shop_picture}></img>
            </div>
            <div className="col-top score-top">
              <span>Score<br></br>total</span>
              <PrecisionRoll R={data.data.total_shop_score / 100}></PrecisionRoll>
            </div>
            <div className="col-top ">
            <div class="text-start">
              {data.data.shop_name}<br></br>
              {data.data.shop_adress}<br></br>
              {data.data.company_name}<br></br>
              {data.data.shop_manager_surname + " " + data.data.shop_manager_name}
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="score">Score N°1<br></br>
                <span>{data.data.data[0].mean_shop}</span>
              </div>
              <div ><PrecisionRoll className="red" R={data.data.data[0].R}></PrecisionRoll></div>
            </div>
            <div className="col">
              <div className="score">Score N°2<br></br>
                <span>{data.data.data[1].mean_shop}</span>
              </div>
              <div ><PrecisionRoll className="red" R={data.data.data[1].R}></PrecisionRoll></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="score">Score N°3<br></br>
                <span>{data.data.data[2].mean_shop}</span>
              </div>
              <div ><PrecisionRoll className="red" R={data.data.data[2].R}></PrecisionRoll></div>
            </div>
            <div className="col">
              <div className="score">Score N°4<br></br>
                <span>{data.data.data[3].mean_shop}</span>
              </div>
              <div ><PrecisionRoll className="red" R={data.data.data[3].R}></PrecisionRoll></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
