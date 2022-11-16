import React from "react";

const index = () => {
  return (
    <>
      <section className="form__application-bg">
        <div className="container">
          <div className="form__application-title">
            <h2>Оставить заявку</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              nunc id felis, eros.
            </p>
          </div>
          <div className="questions form__application">
            <label>
              <input
                type="text"
                className="name__input"
                placeholder="Имя"
                required
              />
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
    </>
  );
};

export default index;
