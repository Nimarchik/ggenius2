import { Trans } from 'react-i18next';
import style from '../../shared/styles/index.module.css';
import { useLang } from '../../shared/i18n/hooks/useLang';


const About = () => {
  const { t } = useLang()
  return <>
    <section className={style.about}>
      <div className={style.container}>
        <div className={style.aboutInner}>
          <div className={style.aboutInnerHeader}>
            <h2 className={style.aboutInnerTitle}>
              {t('aboutInnerTitle')}
            </h2>
            <div className={style.aboutInnerHeaderSub}>
              {t('aboutInnerHeaderSub')}
            </div>
          </div>

          <div className={style.aboutInnerCont}>
            <div className={style.aboutInnerContStart}>
              <h3 className={style.aboutInnerContTitle}>
                {t('aboutInnerContTitleStart')}
              </h3>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubStart'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubStartAi'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubStartAcc'} components={{ b: <b />, br: <br /> }} />
              </p>
            </div>

            <div className={style.aboutInnerContPlat}>
              <h3 className={style.aboutInnerContTitle}>
                {t('aboutInnerContTitlePlat')}
              </h3>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubPlat'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubPlatAi'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubPlatAcc'} components={{ b: <b />, br: <br /> }} />
              </p>
            </div>

            <div className={style.aboutInnerContPlat}>
              <h3 className={style.aboutInnerContTitle}>
                {t('aboutInnerContTitleinside')}
              </h3>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubinside'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubinsideAi'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubinsideAcc'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubinsideAlm'} components={{ b: <b />, br: <br /> }} />
              </p>
            </div>

            <div className={style.aboutInnerContPlat}>
              <h3 className={style.aboutInnerContTitle}>
                {t('aboutInnerContTitleSecurity')}
              </h3>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubSecurity'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubSecurityAi'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubSecurityAcc'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubSecurityAlm'} components={{ b: <b />, br: <br /> }} />
              </p>
            </div>

            <div className={style.aboutInnerContPlat}>
              <h3 className={style.aboutInnerContTitle}>
                {t('aboutInnerContTitleLoc')}
              </h3>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubLoc'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubLocAi'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubLocAcc'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubLocAlm'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubLocAl'} components={{ b: <b />, br: <br /> }} />
              </p>
            </div>

            <div className={style.aboutInnerContPlat}>
              <h3 className={style.aboutInnerContTitle}>
                {t('aboutInnerContTitleGame')}
              </h3>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubGame'} components={{ b: <b />, br: <br /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubGameAi'} components={{ b: <b />, a: <a href='https://t.me/ggeniusgg_bot' className={style.offerInnerStatSubjListItemSubLink} /> }} />
              </p>
              <p className={style.aboutInnerContSub}>
                <Trans i18nKey={'aboutInnerContSubGameAcc'} components={{
                  b: <b />,
                  a: <a href='https://ggenius.gg/' className={style.offerInnerStatSubjListItemSubLink} />,
                }} />
              </p>

            </div>


          </div>
        </div>
      </div>
    </section>
  </>
}

export default About;