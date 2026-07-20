import React from "react";
import style from '../../shared/styles/index.module.css';
import { Link } from "react-router-dom";
import { useLang } from "../../shared/i18n/hooks/useLang";

const PaymentSuccess = () => {
  const { t } = useLang()
  const value = localStorage.getItem('value')


  return (
    <section className={style.paymentSuccess}>
      <div className={style.container}>
        <div className={style.paymentSuccessInner}>
          <h2 className={style.paymentSuccessTitle}>
            {t('paymentSuccessTitle')}
          </h2>
          <p className={style.paymentSuccessText}>
            {t('paymentSuccessText')}
          </p>
          <Link to={`/Home/?lang=${value}`} className={style.paymentSuccessBtn}>
            {t('paymentSuccessBtn')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
