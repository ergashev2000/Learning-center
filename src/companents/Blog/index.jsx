import React from "react";
import img1 from "../../assets/images/kurs.png";

const index = () => {

  return (
    <>
      <section className="container">
        <div className="blog">
          <h2 className="blog-title">Блог</h2>
          <div className="blog__cards">
            <div className="blog__card">
              <img src={img1} />
              <div className="blog__card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet fermentum amet est accumsan, gravida enim.
                </p>
                <button type="button" className="blog__more">
                  еще...
                </button>
              </div>
            </div>
            <div className="blog__card">
              <img src={img1} />
              <div className="blog__card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet fermentum amet est accumsan, gravida enim.
                </p>
                <button type="button" className="blog__more">
                  еще...
                </button>
              </div>
            </div>
            <div className="blog__card">
              <img src={img1} />
              <div className="blog__card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet fermentum amet est accumsan, gravida enim.
                </p>
                <button type="button" className="blog__more">
                  еще...
                </button>
              </div>
            </div>
            <div className="blog__card">
              <img src={img1} />
              <div className="blog__card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet fermentum amet est accumsan, gravida enim.
                </p>
                <button type="button" className="blog__more">
                  еще...
                </button>
              </div>
            </div>
          </div>
          <div className="blog__cards-dot">
            <span className="dot-active"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
