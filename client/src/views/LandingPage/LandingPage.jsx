import React, { useEffect } from "react";
import style from "./LandingPage.module.css";
import background from "../../images/background.jpg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../redux/Actions";

export default function LandingPage() {
  const myRef = React.useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, location]);

  return (
    <>
      <div className={style.welcomeContainer}>
        <h1>SPORT PLANET</h1>
        <p className={style.slogan}>FIND ALL YOUR DEPORTIVE PRODUCTS HERE</p>
        <Link to="/home">
          <button className={style.buttonToHome}>LETS GO</button>
        </Link>

        <a onClick={executeScroll} className={style.arrowIcon}>
          <i class="fa-solid fa-circle-arrow-down fa-bounce fa-2xl"></i>
        </a>
      </div>

      <div className={style.teamSection} ref={myRef}>
        <h1>MEET THE TEAM</h1>
        <div className={style.teamContainer}>
          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>IMAGEN</div>
            <h2>CAMILO AGUDELO</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a>
                <i class="fa-brands fa-github"></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>IMAGEN</div>
            <h2>FRANCISCO BACA</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a>
                <i class="fa-brands fa-github"></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>IMAGEN</div>
            <h2>JUAN GUTIERREZ</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a>
                <i class="fa-brands fa-github"></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>IMAGEN</div>
            <h2>JOSE JARAMILLO</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a>
                <i class="fa-brands fa-github"></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>IMAGEN</div>
            <h2>SANTIAGO MASSUH</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a>
                <i class="fa-brands fa-github"></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>IMAGEN</div>
            <h2>ALEN MUÑOZ</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a>
                <i class="fa-brands fa-github"></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>IMAGEN</div>
            <h2>SEBASTIAN RODRIGUEZ</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a>
                <i class="fa-brands fa-github"></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>IMAGEN</div>
            <h2>SANTIAGO SANCHEZ DE B.</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a>
                <i class="fa-brands fa-github"></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
