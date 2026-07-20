import style from '../../shared/styles/index.module.css';

import Marquee from '../../shared/hooks/Marquee';
// import star from '../../pages/Home/img/Star.svg'
import logo from '../../widgets/Header/img/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import ins from './img/ins.svg'
import yt from './img/yt.svg'
import tt from './img/tt.svg'
import ds from './img/ds.svg'
import { useLang } from '../../shared/i18n/hooks/useLang';

const Footer = () => {
  const { t } = useLang();

  const value = localStorage.getItem('value')

  return <>


    <footer className={style.footer}>

      <div className={style.container}>
        <div className={style.footerInner}>
          <nav className={style.footeNav}>
            <Link to={`/?lang=${value}`} className={style.footerNavLogoLink}>
              <img src={logo} className={style.navLogoLinkImg} alt="Logo" />
            </Link>

            <ul className={style.footerNavList}>
              <li className={style.navListItem}>
                <NavLink to={`/Home?lang=${value}`}
                  end
                  className={({ isActive }) => isActive ? `${style.navListItemLink} ${style.active}` : style.navListItemLink} >
                  {t('navListItemLinkHome')}
                </NavLink>
              </li>
              {/* About */}
              <li className={style.navListItem}>
                <NavLink to={`/About?lang=${value}`}
                  end
                  className={({ isActive }) => isActive ? `${style.navListItemLink} ${style.active}` : style.navListItemLink}>
                  {t('navListItemLinkAbout')}
                </NavLink>
              </li>
              <li className={style.navListItem}>
                <NavLink to={`/Work?lang=${value}`} end
                  className={({ isActive }) => isActive ? `${style.navListItemLink} ${style.active}` : style.navListItemLink}>
                  {t('navListItemLinkWork')}
                </NavLink>
              </li>
              <li className={style.navListItem}>
                <NavLink to={`/Our?lang=${value}`} end
                  className={({ isActive }) => isActive ? `${style.navListItemLink} ${style.active}` : style.navListItemLink}>
                  {t('navListItemLinkOur')}
                </NavLink>
              </li>
              <li className={style.navListItem}>
                <NavLink to={`/Donate?lang=${value}`} end
                  className={({ isActive }) => isActive ? `${style.navListItemLink} ${style.active}` : style.navListItemLink}>
                  {t('navListItemLinkDonate')}
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Для мобильных устройств */}
          <ul className={style.footerCopyListMob}>
            <li className={style.footerCopyListItem}>
              <Link className={style.footerCopyListItemLinkIns}>
                <img src={ins} alt="" className={style.footerCopyListItemImg} />
              </Link>
            </li>
            <li className={style.footerCopyListItem}>
              <Link to='https://www.youtube.com/@ggenius_ua' className={style.footerCopyListItemLinkYT}>
                <img src={yt} alt="" className={style.footerCopyListItemImg} />
              </Link>
            </li>
            <li className={style.footerCopyListItem}>
              <Link to='https://tiktok.com/@mobile_legends.ua' className={style.footerCopyListItemLinkTT}>
                <img src={tt} alt="" className={style.footerCopyListItemImg} />
              </Link>
            </li>
            <li className={style.footerCopyListItem}>
              <Link className={style.footerCopyListItemLinkDS}>
                <img src={ds} alt="" className={style.footerCopyListItemImg} />
              </Link>
            </li>
          </ul>
          <span className={style.line}></span>

          <div className={style.footerCopySubMob}>
            <div className={style.footerCopyMobLinc}>
              <a href="https://ggenius.gg" className={style.footerCopyMobLincSite}>Ggenius</a>
              © 2024 by{" "}
              <a href="https://github.com/Nimarchik" className={style.footerCopyMobLincUser}>Ivanov Oleksii</a>
              is licensed under{" "}
              <a href="https://creativecommons.org/licenses/by/4.0/" className={style.footerCopyMobLincence}>CC BY 4.0</a>
              <div>
                <img className={style.footerCopyMobLincImg} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }} />
                <img className={style.footerCopyMobLincImg} src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }} />
              </div>
            </div>
            <div className={style.footerCopySubMobGr}>
              <NavLink to={`/Privacy?lang=${value}`} className={style.footerCopySubMobPrivacy}>
                {t('footerCopySubMobPrivacy')}
              </NavLink>
              <NavLink to={`/Offer?lang=${value}`} className={style.footerCopySubMobOfer}>
                {t('footerCopySubMobOfer')}
              </NavLink>
            </div>
          </div>

          <div className={style.footerCopy}>
            <div className={style.footerCopySub}>
              <NavLink to={`/Privacy?lang=${value}`} className={style.footerCopySubMobPrivacy}>
                {t('footerCopySubMobPrivacy')}
              </NavLink>
              <NavLink to={`/Offer?lang=${value}`} className={style.footerCopySubMobOfer}>
                {t('footerCopySubMobOfer')}
              </NavLink>
              <div className={style.footerCopyMobLinc}>
                <a href="https://ggenius.gg" className={style.footerCopyMobLincSite}>Ggenius</a>
                © 2024 by{" "}
                <a href="https://github.com/Nimarchik" className={style.footerCopyMobLincUser}>Ivanov Oleksii</a>
                is licensed under{" "}
                <a href="https://creativecommons.org/licenses/by/4.0/" className={style.footerCopyMobLincence}>CC BY 4.0</a>
                <img className={style.footerCopyMobLincImg} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }} />
                <img className={style.footerCopyMobLincImg} src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }} />
              </div>
            </div>
            <ul className={style.footerCopyList}>
              <li className={style.footerCopyListItem}>
                <Link className={style.footerCopyListItemLinkIns}>
                  <img src={ins} alt="" className={style.footerCopyListItemImg} />
                </Link>
              </li>
              <li className={style.footerCopyListItem}>
                <Link to='https://www.youtube.com/@ggenius_ua' className={style.footerCopyListItemLinkYT}>
                  <img src={yt} alt="" className={style.footerCopyListItemImg} />
                </Link>
              </li>
              <li className={style.footerCopyListItem}>
                <Link to='https://tiktok.com/@mobile_legends.ua' className={style.footerCopyListItemLinkTT}>
                  <img src={tt} alt="" className={style.footerCopyListItemImg} />
                </Link>
              </li>
              <li className={style.footerCopyListItem}>
                <Link className={style.footerCopyListItemLinkDS}>
                  <img src={ds} alt="" className={style.footerCopyListItemImg} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer;