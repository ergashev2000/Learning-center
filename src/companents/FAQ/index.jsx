import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: (
        <p className="faq__title-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
      ),
      content: (
        <p className="faq__desc-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
          amet, consectetur adipiscing elit
        </p>
      ),
    },
    {
      title: (
        <p className="faq__title-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
      ),
      content: (
        <p className="faq__desc-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
          amet, consectetur adipiscing elit
        </p>
      ),
    },
    {
      title: (
        <p className="faq__title-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
      ),
      content: (
        <p className="faq__desc-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
          amet, consectetur adipiscing elit
        </p>
      ),
    },
    {
      title: (
        <p className="faq__title-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
      ),
      content: (
        <p className="faq__desc-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
          amet, consectetur adipiscing elit
        </p>
      ),
    },
    {
      title: (
        <p className="faq__title-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
      ),
      content: (
        <p className="faq__desc-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
          amet, consectetur adipiscing elit
        </p>
      ),
    },
    {
      title: (
        <p className="faq__title-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
      ),
      content: (
        <p className="faq__desc-row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
          amet, consectetur adipiscing elit
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "#242426",
  rowTitleColor: "#242426",
  rowContentColor: "#242426",
  arrowColor: "#242426",
  titleTextSize: "17px",
  rowContentTextSize: "17px",
  transitionDuration: ".4s",
  timingFunc: "ease",
};
export default function App() {
  return (
    <section className="container">
      <h2 className="faq__title">FAQ</h2>
      <div className="faq">
        <div className="faq__content">
          <Faq data={data} styles={styles} />
        </div>

        <div className="questions">
          <h2>Остались вопросы?</h2>
          <label>
            <input type="text" className="name__input" placeholder="Имя" required />
          </label>
          <label>
            <input
              type="text"
              className="number__input"
              placeholder="Телефон номер"
              required
            />
          </label>
          <button type="button" className="questions__btn">
            Отправить
          </button>
        </div>
      </div>
    </section>
  );
}
