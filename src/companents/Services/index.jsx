import React from "react";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon3.svg";
import icon3 from "../../assets/icons/icon4.svg";
import icon4 from "../../assets/icons/icon2.svg";
import ServiceImg from "../../assets/images/serviceimg.png";

const index = () => {
  return (
    <>
      <div className="services">
        <section className="container">
          <div className="main__services">
            <div className="services__text">
              <h2>Наши преимущество</h2>
              <ul className="services__icons">
                <li className="services__icon">
                  <div>
                    <img src={icon1} />
                  </div>
                  <p>24/7 call center</p>
                </li>
                <li className="services__icon">
                  <div>
                    <img src={icon2} />
                  </div>
                  <p>Опытные преподователи</p>
                </li>
                <li className="services__icon">
                  <div>
                    <img src={icon3} />
                  </div>
                  <p>Современные оборудование</p>
                </li>
                <li className="services__icon">
                  <div>
                    <img src={icon4} />
                  </div>
                  <p>Индивидуальное обучение</p>
                </li>
              </ul>
            </div>
            <div className="services__img">
              <img src={ServiceImg} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
