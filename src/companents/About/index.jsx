import React from "react";
import videoimg from '../../assets/images/videoimg.png'

const index = () => {
  return (
    <>
      <section className="container">
        <div className="about">
          <div className="about__first">
            <div className="about__text-first">
              <h2>Для детей</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                mauris faucibus risus tristique. Donec faucibus phasellus
                accumsan scelerisque feugiat odio vulputate etiam. Mi elit
                placerat cursus ultricies nibh et accumsan pellentesque.
                Fringilla pellentesque felis tellus scelerisque turpis aliquam.
                Elementum odio sodales vulputate odio sit amet, etiam risus eu.
                Tincidunt feugiat aliquet tristique odio. Natoque purus tellus
                nullam lacus facilisis nulla.
              </p>
            </div>
            <div className="about__img-first"></div>
          </div>

          <div className="about__first about__second">
            <div className="about__text-first">
              <h2>Для родителей</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                mauris faucibus risus tristique. Donec faucibus phasellus
                accumsan scelerisque feugiat odio vulputate etiam. Mi elit
                placerat cursus ultricies nibh et accumsan pellentesque.
                Fringilla pellentesque felis tellus scelerisque turpis aliquam.
                Elementum odio sodales vulputate odio sit amet, etiam risus eu.
                Tincidunt feugiat aliquet tristique odio. Natoque purus tellus
                nullam lacus facilisis nulla.
              </p>
            </div>
            <div className="about__img-second"></div>
          </div>

          <h2 className="about__title">О нас</h2>
          <div className="about__first ">
            <div className="about__text-first">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                mauris faucibus risus tristique. Donec faucibus phasellus
                accumsan scelerisque feugiat odio vulputate etiam. Mi elit
                placerat cursus ultricies nibh et accumsan pellentesque.
                Fringilla pellentesque felis tellus scelerisque turpis aliquam.
                Elementum odio sodales vulputate odio sit amet, etiam risus eu.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                mauris faucibus risus tristique. Donec faucibus phasellus
                accumsan scelerisque feugiat odio vulputate etiam. Mi elit
                placerat cursus ultricies nibh et accumsan pellentesque.
                Fringilla pellentesque felis tellus scelerisque turpis aliquam.
                Elementum odio sodales vulputate odio sit amet, etiam risus eu.
              </p>
            </div>
            <div className="about__video">
              <video controls  poster={videoimg}>
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
