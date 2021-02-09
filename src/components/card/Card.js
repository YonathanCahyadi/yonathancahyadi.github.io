import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import "./card-style.css";

import Arrow from "../../assets/arrow.svg";

function Card(props) {
  return (
    <div className={props.className}>
      <div className="card-container">
          <div className="card-date">
                {props.date ?? "date unspecified"}
          </div>
        <div className="card-name common">
          <h3>{props.name}</h3>
        </div>
        <div className="card-tech common">
          <ul className="card-tech-items">
            {props.techs.map((t, i) => (
              <li key={`${t.name}-${i}`} className="card-tech-item">
                  {t.img ? <img className="card-tech-icon" src={t.img} /> : <div /> }
                <h5>{t.name}</h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-description common">{props.description}</div>
        <div className="card-github common">
          <a href={props.github} alt={props.github}>{props.github}</a>
        </div>
        {
            props.website ? 
            <div className="card-website common">
                <a href={props.website} alt={props.website}>{props.website}</a>
            </div> : <div />
        }
      </div>
    </div>
  );
}

function Cards(props) {
  const [currentCardCount, setCurrentCardCount] = useState(0);
  const [cards, setCards] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    props.datas.map((data) => {
      setCards((oldCard) => [
        ...oldCard,
        <Card
          date={data.date}
          name={data.name}
          techs={data.techs}
          description={data.description}
          github={data.github}
          website={data.website}
        />
      ]);
    });
  }, props.datas);

  const clickLeftArrow = () => {
    if (currentCardCount > 0) {
      setShow(false);
      setCurrentCardCount((prevCount) => prevCount - 1);
      setShow(true);
    }
  };

  const clickRightArrow = () => {
    if (currentCardCount < props.datas.length - 1) {
      setShow(false);
      setCurrentCardCount((prevCount) => prevCount + 1);
      setShow(true);
    }
  };

  return (
    <div className={props.className}>
      <div className="outer-cards-container">
        <img
          className="arrow-left arrow-common"
          src={Arrow}
          onClick={() => clickLeftArrow()}
        />
        <div className="cards-container">
          <Fade left opposite when={show}>
            {cards[currentCardCount]}
          </Fade>

          <div className="card-count">
            {`${currentCardCount + 1} / ${props.datas.length}`}
          </div>
        </div>
        <img
          className="arrow-right arrow-common"
          src={Arrow}
          onClick={() => clickRightArrow()}
        />
      </div>
    </div>
  );
}

export { Card, Cards };
