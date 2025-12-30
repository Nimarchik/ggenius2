import { useRouteError } from 'react-router';
import style from '../../assets/style/index.module.css'

import back from './img/back.png'
import backMob from './img/backMob.png'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useLangChange from '../../Hooks/LangChange';
import { NavLink } from 'react-router-dom';



const Error = () => {
  const error = useRouteError()
  const value = localStorage.getItem('value')
  console.error(error);

  return <>
    <Header />
    <section className={style.errorPage}>

      <div className={style.errorPageInner}>
        <img className={style.errorPageInnerBack} src={back} alt="" />
        <img className={style.errorPageInnerBackMob} src={backMob} alt="" />

        <div className={style.errorPageInnerCont}>
          <h5 className={style.errorPageInnerContTitle}>
            <span>{error.status} </span>
            
            {useLangChange(error.statusText)}
          </h5>
          <p className={style.errorPageInnerContSub}>
            {useLangChange('errorPageInnerContSub')}
          </p>
          <NavLink className={style.errorPageInnerContLink} to={`/${value}`}
            end>
            {useLangChange('errorPageInnerContLink')}
            </NavLink>
        </div>
      </div>

    </section>
    <Footer />
  </>
}

export default Error;