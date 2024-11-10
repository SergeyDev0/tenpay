import styles from "../../app/page.module.scss"
import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.reviewsNav}>
      <button onClick={() => swiper.slidePrev()}>
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.5 41C9.16471 41 0 31.8353 0 20.5C0 9.16471 9.16471 0 20.5 0C31.8353 0 41 9.16471 41 20.5C41 31.8353 31.8353 41 20.5 41ZM20.5 2.41176C10.4912 2.41176 2.41176 10.4912 2.41176 20.5C2.41176 30.5088 10.4912 38.5882 20.5 38.5882C30.5088 38.5882 38.5882 30.5088 38.5882 20.5C38.5882 10.4912 30.5088 2.41176 20.5 2.41176Z" fill="#9C9B9B"/>
          <path d="M20.3604 31L9 19.5L20.3604 8L22 9.65979L12.2793 19.5L22 29.3402L20.3604 31Z" fill="#9C9B9B"/>
          <path d="M10 19H30V21H10V19Z" fill="#9C9B9B"/>
        </svg>
      </button>
      <button onClick={() => swiper.slideNext()}>
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.5362 0.978944C31.8714 0.986778 41.0298 10.1578 41.022 21.4931C41.0141 32.8284 31.8431 41.9868 20.5078 41.9789C9.17253 41.9711 0.0141567 32.8001 0.0219914 21.4648C0.0298261 10.1295 9.20087 0.971109 20.5362 0.978944ZM20.5095 39.5672C30.5183 39.5741 38.6033 31.5003 38.6102 21.4914C38.6171 11.4826 30.5433 3.39763 20.5345 3.39071C10.5257 3.38379 2.44067 11.4576 2.43376 21.4664C2.42684 31.4753 10.5007 39.5603 20.5095 39.5672Z" fill="#0E0E0E" fillOpacity="0.9"/>
          <path d="M20.6673 10.979L32.0197 22.4869L20.6514 33.979L19.0129 32.3181L28.7404 22.4846L19.0265 12.6377L20.6673 10.979Z" fill="#0E0E0E" fillOpacity="0.9"/>
          <path d="M31.0195 22.9862L11.0195 22.9724L11.0209 20.9724L31.0209 20.9862L31.0195 22.9862Z" fill="#0E0E0E" fillOpacity="0.9"/>
        </svg>
      </button>
    </div>
  )
};

export default SwiperNavButtons;
