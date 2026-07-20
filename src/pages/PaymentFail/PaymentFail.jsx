import React from "react";
import style from '../../shared/styles/index.module.css';
import { Link } from "react-router-dom";
import { useLang } from "../../shared/i18n/hooks/useLang";

const PaymentFail = () => {
  const { t } = useLang()
  return (
    <section className={style.paymentSuccess}>
      <div className={style.container}>
        <div className={style.paymentSuccessInner}>
          <h2 className={style.paymentFailTitle}>
            {t('paymentFailTitle')}
          </h2>
          <p className={style.paymentFailText}>
            {t('paymentFailText')}
          </p>
          <Link to="/" className={style.paymentSuccessBtn}>
            {t('paymentSuccessBtn')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentFail;
