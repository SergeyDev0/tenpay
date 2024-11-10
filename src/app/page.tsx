'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Header from '@/components/header/header';
import SolidButton from '@/components/solidLink/solidLink';
import OutlineButton from '@/components/outlineLink/outlineLink';
import SwiperNavButtons from './../components/swiperNavButtons/SwiperNavButtons';
import Footer from '@/components/footer/footer';
import { REVIEWS } from "./page.data.js";
import styles from "./page.module.scss";
import 'swiper/css';

export default function Home() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = React.useState(false);

  function playVideo() {
    if(videoRef.current) {
      videoRef.current.play();
      setVideoState(true);
    }
  }
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={`${styles.firstScreen} ${styles.section}`}>
          <div className={styles.col}>
            <h1 className={styles.mainTitle}>Интернет-эквайринг на сайте <br /> и в мессенджерах для малого <br /> бизнеса</h1>
            <p className={styles.subtitle}>Подключим вас за один день, настроим интеграцию <br /> с CRM-системой и обеспечим фискализацию</p>
            <div className={styles.rowButtons}>
              <SolidButton text="Подключить TenPay" />
              <OutlineButton text="Обратная связь" />
            </div>
            <ul className={styles.mainSocialList}>
              <li className={styles.mainSocialItem}>
                <a href="#" className={styles.mainSocialLink}>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.48886 13.6914V22H13.8632V13.6914H17.1251L17.8039 9.87109H13.8632V8.51953C13.8632 6.5 14.6287 5.72656 16.6047 5.72656C17.2194 5.72656 17.7134 5.74219 18 5.77344V2.30859C17.4607 2.15625 16.1409 2 15.3792 2C11.348 2 9.48886 3.97266 9.48886 8.22656V9.87109H7V13.6914H9.48886Z" fill="black"/>
                  </svg>
                </a>
              </li>
              <li className={styles.mainSocialItem}>
                <a href="#" className={styles.mainSocialLink}>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5021 7.62864C9.8063 7.62864 7.63185 9.80358 7.63185 12.5C7.63185 15.1964 9.8063 17.3714 12.5021 17.3714C15.1979 17.3714 17.3724 15.1964 17.3724 12.5C17.3724 9.80358 15.1979 7.62864 12.5021 7.62864ZM12.5021 15.667C10.76 15.667 9.33581 14.2467 9.33581 12.5C9.33581 10.7533 10.7558 9.33298 12.5021 9.33298C14.2485 9.33298 15.6684 10.7533 15.6684 12.5C15.6684 14.2467 14.2442 15.667 12.5021 15.667ZM18.7076 7.42938C18.7076 8.06108 18.1989 8.5656 17.5716 8.5656C16.94 8.5656 16.4356 8.05684 16.4356 7.42938C16.4356 6.80191 16.9443 6.29315 17.5716 6.29315C18.1989 6.29315 18.7076 6.80191 18.7076 7.42938ZM21.9332 8.58256C21.8612 7.06053 21.5136 5.71232 20.3988 4.60153C19.2883 3.49074 17.9404 3.14309 16.4187 3.06677C14.8504 2.97774 10.1496 2.97774 8.58132 3.06677C7.06386 3.13885 5.71595 3.4865 4.60117 4.59729C3.48639 5.70808 3.14306 7.05629 3.06676 8.57832C2.97775 10.147 2.97775 14.8488 3.06676 16.4174C3.13882 17.9395 3.48639 19.2877 4.60117 20.3985C5.71595 21.5093 7.05962 21.8569 8.58132 21.9332C10.1496 22.0223 14.8504 22.0223 16.4187 21.9332C17.9404 21.8612 19.2883 21.5135 20.3988 20.3985C21.5094 19.2877 21.8569 17.9395 21.9332 16.4174C22.0223 14.8488 22.0223 10.1512 21.9332 8.58256ZM19.9071 18.1006C19.5765 18.9316 18.9365 19.5717 18.1015 19.9067C16.851 20.4027 13.8839 20.2882 12.5021 20.2882C11.1203 20.2882 8.14897 20.3985 6.90279 19.9067C6.072 19.576 5.43196 18.9358 5.0971 18.1006C4.60117 16.8499 4.71562 13.8821 4.71562 12.5C4.71562 11.1179 4.60541 8.14588 5.0971 6.89942C5.42772 6.06845 6.06776 5.42826 6.90279 5.09333C8.15321 4.59729 11.1203 4.71176 12.5021 4.71176C13.8839 4.71176 16.8553 4.60153 18.1015 5.09333C18.9322 5.42402 19.5723 6.06421 19.9071 6.89942C20.4031 8.15012 20.2886 11.1179 20.2886 12.5C20.2886 13.8821 20.4031 16.8541 19.9071 18.1006Z" fill="black"/>
                  </svg>
                </a>
              </li>
              <li className={styles.mainSocialItem}>
                <a href="#" className={styles.mainSocialLink}>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9453 7.98942C19.957 8.16254 19.957 8.3395 19.957 8.51262C19.957 13.8485 15.832 20 8.29297 20C5.96875 20 3.8125 19.3383 2 18.188C2.32812 18.2265 2.64844 18.238 2.98828 18.238C4.90625 18.238 6.66797 17.5994 8.07812 16.5145C6.27734 16.4761 4.76562 15.3143 4.24609 13.7139C4.5 13.7523 4.75391 13.7754 5.01953 13.7754C5.38672 13.7754 5.75391 13.7254 6.09766 13.6369C4.21875 13.2638 2.8125 11.6365 2.8125 9.67444V9.62443C3.35938 9.9245 3.99219 10.113 4.66406 10.1361C3.55859 9.41284 2.83594 8.17408 2.83594 6.77374C2.83594 6.02356 3.03906 5.33494 3.39453 4.73479C5.41406 7.18538 8.44531 8.78577 11.8477 8.95888C11.7852 8.65881 11.7461 8.3472 11.7461 8.03559C11.7461 5.81197 13.5742 4 15.8438 4C17.0234 4 18.0898 4.48858 18.8398 5.27338C19.7656 5.10026 20.6562 4.76172 21.4414 4.30007C21.1367 5.23876 20.4883 6.02356 19.6406 6.52368C20.4648 6.4352 21.2656 6.21207 22 5.90046C21.4414 6.70065 20.7422 7.41236 19.9453 7.98942Z" fill="black"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.firstScreenImg}></div>
        </section>
        <section  className={`${styles.about} ${styles.section}`}>
          <h2 className={styles.title}>ПОЧЕМУ МЫ?</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutItem}>
              <span>1</span>
              <div className={styles.col}>
                <h3 className={styles.cardTitle}>АДЕКВАТНАЯ КОМИССИЯ</h3>
                <p className={styles.cardDescription}>При обороте до 300 000 ₽ комиссия за эквайринг 2,4%. Если нет оборота — не платите.</p>
              </div>
            </div>
            <div className={styles.aboutItem}>
              <span>2</span>
              <div className={styles.col}>
                <h3 className={styles.cardTitle}>УДОБНАЯ ИНТЕГРАЦИЯ</h3>
                <p className={styles.cardDescription}>Готовые интеграции для 78 CRM систем, конструкторов и чат-бот сервисов.</p>
              </div>
            </div>
            <div className={`${styles.aboutItem} ${styles.big}`}></div>
            <div className={styles.aboutItem}>
              <span>3</span>
              <div className={styles.col}>
                <h3 className={styles.cardTitle}>ПЛАТЕЖИ БЕЗ САЙТА</h3>
                <p className={styles.cardDescription}>Принимайте оплату от клиентов через мессенджеры автоматически вручную.</p>
              </div>
            </div>
            <div className={styles.aboutItem}>
              <span>4</span>
              <div className={styles.col}>
                <h3 className={styles.cardTitle}>БЫСТРАЯ ПОДДЕРЖКА</h3>
                <p className={styles.cardDescription}>Помогаем 24/7 по выходным и праздникам. Среднее время ответа до 24 минут.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.banner} ${styles.section}`}>
          <div className={styles.videoWrapper}>
            {
              !videoState && (
                <div className={styles.videoPreview}>
                  <button onClick={playVideo}>
                    <img className={styles.videoButton} src="icon_play.png" />
                  </button>
                </div>
              )
            }
            <video className={styles.video} ref={videoRef} controls>
              <source src="SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.videoInfoWrapper}>
            <h2 className={styles.title}>ПОСМОТРИТЕ, КАК ПРОХОДИТ <br /> ПОДКЛЮЧЕНИЕ И РАБОТА С TENPAY</h2>
            <p className={styles.description}>Вы сможете принимать платежи сразу <br /> после рассмотрения заявки</p>
            <SolidButton text="Подключить TenPay" />
          </div>
        </section>
        <section className={styles.moreAbout}>
          <div className={styles.moreAboutWrapper}>
            <h2 className={styles.title}>МЫ СОЗДАЛИ СЕРВИС, КОТОРЫЙ <br /> ЗАКРЫВАЕТ ВСЕ ВОПРОСЫ РАЗОМ</h2>
            <div className={styles.headerRow}>
              <p className={styles.description}>От простых платежей до подключения <br /> кредитования и рассрочек</p>
              <a href="#" className={styles.moreAboutLink}>Узнать больше о TenPay 
                <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.3339 14.0167L31.0211 6.99997L22.2916 0.0167871L20.8315 1.19618L27.0563 6.17572L0.0186704 6.22784L0.023692 7.89172L27.0612 7.8396L20.8667 12.843L22.3339 14.0167Z" fill="white" fillOpacity="0.9"/>
                </svg>
              </a>
            </div>
            <div className={styles.moreAboutGrid}>
              <div className={styles.moreAboutItem}>
                <img className={styles.moreAboutIcon} src="subscribe.png" />
                <div className={styles.moreAboutRow}>
                  <h3 className={styles.cardTitle}>РЕКУРРЕНТНЫЕ ПЛАТЕЖИ</h3>
                  <p className={styles.cardDescription}>Получайте регулярные платежи по подписке</p>
                </div>
              </div>
              <div className={styles.moreAboutItem}>
                <img className={styles.moreAboutIcon} src="cart.png" />
                <div className={styles.moreAboutRow}>
                  <h3 className={styles.cardTitle}>ДЛЯ E-COMMERCE</h3>
                  <p className={styles.cardDescription}>Специальные предложения для розничной торговли</p>
                </div>
              </div>
              <div className={styles.moreAboutItem}>
                <img className={styles.moreAboutIcon} src="return-box.png" />
                <div className={styles.moreAboutRow}>
                  <h3 className={styles.cardTitle}>ВОЗВРАТЫ</h3>
                  <p className={styles.cardDescription}>Оформляйте полные и частичные возвраты в пару кликов</p>
                </div>
              </div>
              <div className={`${styles.moreAboutItem} ${styles.big}`}></div>
              <div className={styles.moreAboutItem}>
                <img className={styles.moreAboutIcon} src="money.png" />
                <div className={styles.moreAboutRow}>
                  <h3 className={styles.cardTitle}>РАССРОЧКА И КРЕДИТЫ</h3>
                  <p className={styles.cardDescription}>7 банков-партнёров рассмотрят заявки</p>
                </div>
              </div>
              <div className={styles.moreAboutItem}>
                <img className={styles.moreAboutIcon} src="commission.png" />
                <div className={styles.moreAboutRow}>
                  <h3 className={styles.cardTitle}>МЕНЬШЕ КОМИССИЯ</h3>
                  <p className={styles.cardDescription}>Гибкие тарифы: больше оборот — меньше комисия</p>
                </div>
              </div>
              <div className={styles.moreAboutItem}>
                <img className={styles.moreAboutIcon} src="smartphone.png" />
                <div className={styles.moreAboutRow}>
                  <h3 className={styles.cardTitle}>СВОЁ ПРИЛОЖЕНИЕ</h3>
                  <p className={styles.cardDescription}>Удобное приложение для iOS и Android</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.reviews} ${styles.section}`}>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>ПОЧИТАЙТЕ ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
            
          </div>
          <div className={styles.reviewsSwiper}>
            <Swiper
            modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
            >
              {
                REVIEWS.map((item) => (
                  <SwiperSlide key={item.index}>
                    <div className={styles.reviewsHeader}>
                      <img src={item.avatar} alt={item.name} />
                      <div className={styles.col}>
                        {
                          item.social === "inst" && (
                            <img src="inst.png" alt="instagram" />
                          )
                        }
                        <h2 className={styles.reviewsName}>{item.name}</h2>
                      </div>
                    </div>
                    <div className={styles.reviewsBody}>
                      <p className={styles.reviewsText}>{item.text}</p>
                      <button className={styles.reviewsButton}>
                        Смотреть весь отзыв
                        <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.3339 14.0167L31.0211 6.99997L22.2916 0.0167871L20.8315 1.19618L27.0563 6.17572L0.0186704 6.22784L0.023692 7.89172L27.0612 7.8396L20.8667 12.843L22.3339 14.0167Z" fill="#636363" fillOpacity="0.9"/>
                        </svg>
                      </button>
                    </div>
                  </SwiperSlide>
                ))
              }
              <SwiperNavButtons />
            </Swiper>
          </div>
        </section>
        <section className={styles.location}>
          <div className={styles.locationWrapper}>
            <div className={styles.locationCard}>
              <h3 className={styles.cardTitle}>Ten<b>Pay</b></h3>
              <ul className={styles.locationList}>
                <li className={styles.locationItem}>
                  <img src="icon_adress.svg" alt="address" />
                  <p className={styles.cardDescription}>ул. Пынина, 18</p>
                </li>
                <li className={styles.locationItem}>
                  <img src="icon_call.svg" alt="call" />
                  <p className={styles.cardDescription}>8 800 107-00-55</p>
                </li>
                <li className={styles.locationItem}>
                  <img src="icon_mail.svg" alt="mail" />
                  <p className={styles.cardDescription}>hello@tenpay.io</p>
                </li>
                <li className={styles.locationItem}>
                  <img src="icon_time.svg" alt="time" />
                  <p className={styles.cardDescription}>Ежедневно: 10:00-21:00</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={`${styles.form} ${styles.section}`}>
          <div className={styles.formInfo}>
            <img src="avatar.png" alt="Пользователь" />
            <div className={styles.formInfoCol}>
              <h2 className={styles.title}>ОСТАЛИСЬ ВОПРОСЫ?</h2>
              <p className={styles.description}>Заполните форму, наши эксперты свяжутся с Вами <br /> в течение дня и ответят на все вопросы</p>
            </div>
          </div>
          <form>
            <input type="text" placeholder="Ваше имя" name="name" />
            <input type="text" placeholder="+7 (000) 000 00 00" name="phone" />
            <SolidButton text="Заказать звонок" />
            <span>
              <input className={styles.checkbox} type="checkbox" id="policyCheckbox" />
              <label htmlFor="policyCheckbox" className={styles.policy}>Нажимая на «Заказать звонок», я соглашаюсь на обработку персональных данных</label>
            </span>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
