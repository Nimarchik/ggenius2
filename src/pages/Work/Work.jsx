import style from '../../shared/styles/index.module.css'


// IMAGES
import back from './img/back.webp'
import sora from './img/sora.webp'
import harli from './img/harli.png'
import leyla from './img/leyla.png'
import tourn from './img/tourn.png'
import gord from './img/gord.png'
import { useLang } from '../../shared/i18n/hooks/useLang'


const Work = () => {
  const { t } = useLang()
  return <>
    <section className={style.work}>
      <img src={back} alt="back images" className={style.workImg} />
      <div className={style.container}>
        <div className={style.workInner}>
          <div className={style.workInnerGroup}>
            <h3 className={style.workInnerTitle}>
              {t('workInnerTitle')}
            </h3>
            <p className={style.workInnerInfSub}>
              {t('workInnerInfSub')}
            </p>
            <p className={style.workInnerInfSubs}>
              {t('workInnerInfSubs')}
            </p>
          </div>

          <ul className={style.worksInnerList}>
            {/* Register */}
            <li data-aos="fade-right" className={style.worksInnerListItem}>
              <div className={style.workInnerListItemNav}>
                <span className={style.workInnerListItemNavSpan}>
                  <svg className={style.workInnerListItemNavSvg} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" fill="tarnsparent" />
                    <circle cx="8" cy="8" r="2.5" stroke="#fff" stroke-linecap="round" />
                    <path d="M11.7679 8.5C12.0332 8.04063 12.47 7.70543 12.9824 7.56815C13.4947 7.43086 14.0406 7.50273 14.5 7.76795C14.9594 8.03317 15.2946 8.47 15.4319 8.98236C15.5691 9.49472 15.4973 10.0406 15.2321 10.5C14.9668 10.9594 14.53 11.2946 14.0176 11.4319C13.5053 11.5691 12.9594 11.4973 12.5 11.2321C12.0406 10.9668 11.7054 10.53 11.5681 10.0176C11.4309 9.50528 11.5027 8.95937 11.7679 8.5L11.7679 8.5Z" stroke="#fff" strokeOpacity="0.24" />
                    <path d="M8.00037 12.5L8.00039 12H8.00037V12.5ZM13.4056 17.5068L13.8994 17.4281L13.8994 17.4281L13.4056 17.5068ZM12.5004 18.5V19H12.5005L12.5004 18.5ZM2.59509 17.5068L2.10133 17.4281L2.10133 17.4281L2.59509 17.5068ZM8.00037 12.5L8.00034 13C9.88149 13.0001 11.0208 13.7507 11.7362 14.671C12.4698 15.6148 12.7821 16.7716 12.9119 17.5856L13.4056 17.5068L13.8994 17.4281C13.7573 16.5373 13.4069 15.1908 12.5258 14.0573C11.6265 12.9005 10.1991 12.0001 8.00039 12L8.00037 12.5ZM13.4056 17.5068L12.9119 17.5856C12.9433 17.7825 12.7919 17.9999 12.5002 18L12.5004 18.5L12.5005 19C13.3131 18.9997 14.0419 18.3217 13.8994 17.4281L13.4056 17.5068ZM12.5004 18.5V18H3.50037V18.5V19H12.5004V18.5ZM3.50037 18.5V18C3.20882 18 3.05741 17.7828 3.08885 17.5856L2.59509 17.5068L2.10133 17.4281C1.95882 18.3217 2.68735 19 3.50037 19V18.5ZM2.59509 17.5068L3.08885 17.5856C3.2187 16.7715 3.53089 15.6147 4.26444 14.6709C4.97981 13.7506 6.11914 13 8.00037 13V12.5V12C5.80152 12 4.37418 12.9003 3.47491 14.0572C2.59384 15.1907 2.24343 16.5373 2.10133 17.4281L2.59509 17.5068Z" fill="#fff" />
                    <path d="M17.2966 17.4162L16.8116 17.5377V17.5377L17.2966 17.4162ZM11.8004 13.9808L11.5324 13.5586L11.0173 13.8855L11.4391 14.3264L11.8004 13.9808ZM13.4054 17.507L13.8992 17.4282V17.4282L13.4054 17.507ZM16.3951 18.5V18H12.5V18.5V19H16.3951V18.5ZM17.2966 17.4162L16.8116 17.5377C16.8654 17.7526 16.7076 18 16.3951 18V18.5V19C17.2658 19 18.0152 18.2277 17.7816 17.2948L17.2966 17.4162ZM13.5001 13.5V14C14.5278 14 15.2496 14.5027 15.7784 15.2069C16.3178 15.9253 16.6345 16.8306 16.8116 17.5377L17.2966 17.4162L17.7816 17.2948C17.5905 16.5315 17.2329 15.4787 16.5781 14.6065C15.9126 13.7203 14.9202 13 13.5001 13V13.5ZM11.8004 13.9808L12.0683 14.4029C12.4581 14.1556 12.9262 14 13.5001 14V13.5V13C12.732 13 12.0787 13.2119 11.5324 13.5586L11.8004 13.9808ZM11.8004 13.9808L11.4391 14.3264C12.3863 15.3166 12.7647 16.6646 12.9116 17.5857L13.4054 17.507L13.8992 17.4282C13.7397 16.4285 13.3158 14.8416 12.1617 13.6351L11.8004 13.9808ZM13.4054 17.507L12.9116 17.5857C12.9431 17.7827 12.7918 18 12.5 18V18.5V19C13.3128 19 14.0417 18.322 13.8992 17.4282L13.4054 17.507Z" fill="#fff" fill-opacity="0.24" />
                    <rect x="16.25" y="5.25" width="4.5" height="0.5" rx="0.25" stroke="#fff" stroke-width="0.5" stroke-linecap="round" />
                    <rect x="18.75" y="3.25" width="4.5" height="0.5" rx="0.25" transform="rotate(90 18.75 3.25)" stroke="#fff" stroke-width="0.5" stroke-linecap="round" />
                  </svg>
                  <h3 className={style.workInnerRegTitle}>
                    {t('workInnerRegTitle')}
                  </h3>
                </span>
                <p className={style.workInnerRegInf}>
                  {t('workInnerRegInf')}
                </p>
              </div>

              <span className={style.sora}>
                <img src={sora} alt="sora mlbb hero" className={style.workInnerInfImg} />
                <img src={sora} alt="sora mlbb hero" className={style.workInnerInfImgBlur} />
              </span>
            </li>

            {/* ANALIZ */}
            <li data-aos="fade-left" className={style.worksInnerListItemAnaliz}>
              <div className={style.workInnerListItemNav}>
                <span className={style.workInnerListItemNavSpan}>
                  <svg className={style.workInnerListItemNavSpanSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2" />
                    <path d="M12 12H21" stroke="#fff" stroke-width="2" stroke-linecap="round" />
                    <path d="M12 3V11.9379C12 11.9777 12.0158 12.0158 12.0439 12.0439L18 18" stroke="#fff" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  <h3 className={style.workInnerRegTitle}>
                    {t('workInnerRegTitleAnaliz')}
                  </h3>
                </span>
                <p className={style.workInnerRegInf}>
                  {t('workInnerRegInfAnaliz')}
                </p>
              </div>

              <span className={style.workInnerRegMia}>
                <img src={harli} alt="mia mlbb hero" className={style.workInnerRegImg} />
                <img src={harli} alt="mia mlbb hero" className={style.workInnerRegImgBlur} />
              </span>
            </li>

            {/* SOCIAL */}
            <li data-aos="fade-right" className={style.worksInnerListItemSocial}>
              <div className={style.workInnerListItemNavSocial}>
                <span className={style.workInnerListItemNavSpanSoc}>
                  <svg className={style.workInnerListItemNavSpanSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="3" stroke="#fff" stroke-width="2" stroke-linecap="round" />
                    <path d="M15.2679 8C15.5332 7.54063 15.97 7.20543 16.4824 7.06815C16.9947 6.93086 17.5406 7.00273 18 7.26795C18.4594 7.53317 18.7946 7.97 18.9319 8.48236C19.0691 8.99472 18.9973 9.54063 18.7321 10C18.4668 10.4594 18.03 10.7946 17.5176 10.9319C17.0053 11.0691 16.4594 10.9973 16 10.7321C15.5406 10.4668 15.2054 10.03 15.0681 9.51764C14.9309 9.00528 15.0027 8.45937 15.2679 8L15.2679 8Z" stroke="#fff" stroke-width="2" />
                    <path d="M5.26795 8C5.53317 7.54063 5.97 7.20543 6.48236 7.06815C6.99472 6.93086 7.54063 7.00273 8 7.26795C8.45937 7.53317 8.79457 7.97 8.93185 8.48236C9.06914 8.99472 8.99727 9.54063 8.73205 10C8.46683 10.4594 8.03 10.7946 7.51764 10.9319C7.00528 11.0691 6.45937 10.9973 6 10.7321C5.54063 10.4668 5.20543 10.03 5.06815 9.51764C4.93086 9.00528 5.00273 8.45937 5.26795 8L5.26795 8Z" stroke="#fff" stroke-width="2" />
                    <path d="M16.8816 18L15.9013 18.1974L16.0629 19H16.8816V18ZM20.7202 16.9042L21.6627 16.5699V16.5699L20.7202 16.9042ZM14.7808 14.7105L14.176 13.9142L13.0194 14.7927L14.2527 15.5597L14.7808 14.7105ZM19.8672 17H16.8816V19H19.8672V17ZM19.7777 17.2384C19.7707 17.2186 19.7642 17.181 19.7725 17.1354C19.7804 17.0921 19.7982 17.0593 19.8151 17.0383C19.8474 16.9982 19.874 17 19.8672 17V19C21.0132 19 22.1414 17.9194 21.6627 16.5699L19.7777 17.2384ZM17 15C18.6416 15 19.4027 16.1811 19.7777 17.2384L21.6627 16.5699C21.1976 15.2588 19.9485 13 17 13V15ZM15.3857 15.5069C15.7702 15.2148 16.282 15 17 15V13C15.8381 13 14.9028 13.3622 14.176 13.9142L15.3857 15.5069ZM14.2527 15.5597C15.2918 16.206 15.7271 17.3324 15.9013 18.1974L17.8619 17.8026C17.644 16.7204 17.0374 14.9364 15.309 13.8614L14.2527 15.5597Z" fill="#fff" />
                    <path d="M9.21918 14.7105L9.7473 15.5597L10.9806 14.7927L9.82403 13.9142L9.21918 14.7105ZM3.2798 16.9041L4.22227 17.2384L4.22227 17.2384L3.2798 16.9041ZM7.11835 18V19H7.93703L8.09867 18.1974L7.11835 18ZM7.00001 15C7.71803 15 8.22986 15.2148 8.61433 15.5069L9.82403 13.9142C9.09723 13.3621 8.1619 13 7.00001 13V15ZM4.22227 17.2384C4.59732 16.1811 5.35842 15 7.00001 15V13C4.0515 13 2.80238 15.2587 2.33733 16.5699L4.22227 17.2384ZM4.13278 17C4.126 17 4.15264 16.9982 4.18486 17.0383C4.20176 17.0593 4.21961 17.0921 4.22748 17.1354C4.2358 17.181 4.22931 17.2186 4.22227 17.2384L2.33733 16.5699C1.85864 17.9194 2.98677 19 4.13278 19V17ZM7.11835 17H4.13278V19H7.11835V17ZM8.09867 18.1974C8.27289 17.3324 8.70814 16.206 9.7473 15.5597L8.69106 13.8614C6.96257 14.9363 6.356 16.7203 6.13804 17.8026L8.09867 18.1974Z" fill="#fff" />
                    <path d="M12 14C15.5715 14 16.5919 16.5512 16.8834 18.0089C16.9917 18.5504 16.5523 19 16 19H8C7.44772 19 7.00829 18.5504 7.11659 18.0089C7.4081 16.5512 8.42846 14 12 14Z" stroke="#fff" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  <h3 className={style.workInnerRegTitle}>
                    {t('workInnerRegTitleSocial')}
                  </h3>
                </span>
                <p className={style.workInnerRegInf}>
                  {t('workInnerRegInfSocial')}
                </p>
              </div>

              <span className={style.workInnerRegLeyla}>
                <img src={leyla} alt="mia mlbb hero" className={style.workInnerRegLeylaImg} />
                <img src={leyla} alt="mia mlbb hero" className={style.workInnerRegLeylaImgBlur} />
              </span>
            </li>

            {/* Turnament */}
            <li data-aos="fade-left" className={style.worksInnerListItemTourn}>
              <div className={style.workInnerListItemNavSocial}>
                <span className={style.workInnerListItemNavSpanSoc}>
                  <svg className={style.workInnerListItemNavSpanSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4.5 3.5H19.5V17.3596C19.5 18.8228 17.9802 19.7908 16.6542 19.172L12.8458 17.3947C12.3097 17.1445 11.6903 17.1445 11.1542 17.3947L7.34577 19.172C6.01981 19.7908 4.5 18.8228 4.5 17.3596V3.5Z" stroke="#fff" stroke-opacity="0.24" />
                    <rect x="2" y="3" width="20" height="1" rx="0.5" fill="#fff" />
                  </svg>
                  <h3 className={style.workInnerRegTitle}>
                    {t('workInnerRegTitleTourn')}
                  </h3>
                </span>
                <p className={style.workInnerRegInf}>
                  {t('workInnerRegInfTourn')}
                </p>
              </div>

              <span className={style.workInnerRegTourn}>
                <img src={tourn} alt="mia mlbb hero" className={style.workInnerRegTournImg} />
                <img src={tourn} alt="mia mlbb hero" className={style.workInnerRegTournImgBlur} />
              </span>
            </li>

            {/* Pay */}
            <li data-aos="fade-right" className={style.worksInnerListItemPay}>
              <div className={style.workInnerListItemNav}>
                <span className={style.workInnerListItemNavSpan}>
                  <svg className={style.workInnerListItemNavSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM13 11V12V18V19H11V18V12V11H13ZM11 7V8H13V7V6V5H11V6V7Z" fill="#fff" />
                  </svg>
                  <h3 className={style.workInnerRegTitle}>
                    {t('workInnerRegTitlePay')}
                  </h3>
                </span>
                <p className={style.workInnerRegInf}>
                  {t('workInnerRegInfPay')}
                </p>
                <p className={style.workInnerRegInf}>
                  {t('workInnerRegInfPay2')}
                </p>
              </div>

              <span className={style.sora}>
                <img src={gord} alt="sora mlbb hero" className={style.workInnerGordImg} />
                <img src={gord} alt="sora mlbb hero" className={style.workInnerGordImgBlur} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
}

export default Work;