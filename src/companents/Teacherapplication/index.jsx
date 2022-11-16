import React from "react";
import applicationImg from "../../assets/images/application-teacher.png";

const index = () => {
  return (
    <>
      <section className="teacher-application__bg">
        <div className="container">
          <div className="teacher-application">
            <div className="questions teacher-application__input">
              <h2>Стать учителем</h2>
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
            <div className="application-teacher-img">
              <img src={applicationImg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
