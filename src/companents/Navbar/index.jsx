import React from "react";
import Logo from "../../assets/images/logo.svg";

const index = () => {
  function myFunction(e) {
    var x = document.getElementById("myLinks");
    let test = document.querySelector("body")
    if (e) {
      console.log(e);
      test.style.overflow = "hidden"
    } else {
      console.log(e);
      test.style.overflow = "visible"

    }
  }
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav">
            <a href="#" className="logo">
              <img src={Logo} alt="Logo" />
            </a>
            <nav >
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
          <section class="top-nav">
            <a href="#" className="logo">
              <img src={Logo} alt="Logo" />
            </a>
            <div className="lang">
              <select name="lang" id="lang" className="lang__select">
                <option value="ru" defaultChecked>
                  Рус
                </option>
                <option value="en">Eng</option>
                <option value="uz">O'zb</option>
              </select>
            </div>
            <input id="menu-toggle" type="checkbox"  onChange={(e) => myFunction(e.target.checked)}/>
            <label class="menu-button-container" for="menu-toggle">
              <div class="menu-button"></div>
            </label>
            <ul className=" menu">
                <li className="nav__item-bar">
                  <a href="#" className="nav__item-link">
                    Курсы
                  </a>
                </li>
                <li className="nav__item-bar">
                  <a href="#" className="nav__item-link">
                    О нас
                  </a>
                </li>
                <li className="nav__item-bar">
                  <a href="#" className="nav__item-link">
                    Для детей
                  </a>
                </li>
                <li className="nav__item-bar">
                  <a href="#" className="nav__item-link">
                    Для родителей
                  </a>
                </li>
                <li className="nav__item-bar">
                  <a href="#" className="nav__item-link">
                    Контакты
                  </a>
                </li>
                <li className="nav__item-bar">
                  <a href="#" className="nav__item-link">
                    Блог
                  </a>
                </li>
              </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default index;
