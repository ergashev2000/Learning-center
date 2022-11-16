import React from "react";
import Logo from "../../assets/images/logo.svg";

const index = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav">
            <a href="#" className="logo">
              <img src={Logo} alt="Logo" />
            </a>
            <nav>
              <ul className="nav__items">
                <li className="nav__item">
                  <a href="#" className="nav__item-link">
                    Курсы
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__item-link">
                    О нас
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__item-link">
                    Для детей
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__item-link">
                    Для родителей
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__item-link">
                    Контакты
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__item-link">
                    Блог
                  </a>
                </li>
              </ul>
            </nav>
            <div className="lang">
              <select name="lang" id="lang" className="lang__select">
                <option value="ru" defaultChecked>
                  Рус
                </option>
                <option value="en">Eng</option>
                <option value="uz">O'zb</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
