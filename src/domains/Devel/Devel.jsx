import { useLang } from '../../shared/i18n/hooks/useLang';
import style from '../../shared/styles/index.module.css';

import arrow from './img/Arrow.svg'

const Devel = () => {
  const { t } = useLang()

  return (
    <section className={style.devel}>
      <div className={style.container}>
        <div className={style.develInner}>
          <span>
            <h2 className={style.develInnerTitle}>
              {t('develInnerTitle')}
            </h2>
            <p className={style.develInnerSub}>
              {t('develInnerSub')}

            </p>
          </span>

          {/* 2024 */}
          <div data-aos="fade-down" className={style.develInnerStart}>
            <h3 className={style.develInnerStartTitle}>
              {t('develInnerStartTitle')}
            </h3>

            <ul className={style.develInnerStartList}>
              <li className={style.develInnerStartListItem}>
                {t('develInner2024ListItem1')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInner2024ListItem2')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInner2024ListItem3')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInner2024ListItem4')}
              </li>
            </ul>
          </div>

          <img data-aos="fade-down" src={arrow} alt="" className={style.develInnerImg} />

          {/* 2025 */}
          <div data-aos="fade-down" className={style.develInnerStart}>
            <h3 className={style.develInnerStartTitle}>
              {t('develInner2025Title')}
            </h3>

            <ul className={style.develInnerStartList}>
              <li className={style.develInnerStartListItem}>
                {t('develInner2025ListItem1')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInner2025ListItem2')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInner2025ListItem3')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInner2025ListItem4')}
              </li>
            </ul>
          </div>

          <img data-aos="fade-down" src={arrow} alt="" className={style.develInnerImg} />

          {/* 2026 */}
          <div data-aos="fade-down" className={style.develInnerStart}>
            <h3 className={style.develInnerStartTitle}>
              {t('develInner2026Title')}
            </h3>

            <ul className={style.develInnerStartList}>
              <li className={style.develInnerStartListItem}>
                {t('develInner2026ListItem1')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInner2026ListItem2')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInner2026ListItem3')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInner2026ListItem4')}
              </li>
            </ul>
          </div>

          <img data-aos="fade-down" src={arrow} alt="" className={style.develInnerImg} />

          {/* Next */}
          <div data-aos="fade-down" className={style.develInnerStart}>
            <h3 className={style.develInnerStartTitle}>
              {t('develInnerNextTitle')}
            </h3>

            <ul className={style.develInnerStartList}>
              <li className={style.develInnerStartListItem}>
                {t('develInnerNextListItem1')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInnerNextListItem2')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInnerNextListItem3')}
              </li>
              <li className={style.develInnerStartListItem}>
                {t('develInnerNextListItem4')}
              </li>
            </ul>
          </div>

        </div>
        <em data-aos="fade-down" className={style.develInnerFooter}>
          {t('develInnerFooter')}
        </em>
      </div>
    </section>
  )
}

export default Devel; 