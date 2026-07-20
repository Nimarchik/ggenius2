import { Link, NavLink } from 'react-router-dom';
import style from '../styles/index.module.css';
import { useLang } from '../i18n/hooks/useLang';

import { useState } from 'react';
import { Trans } from 'react-i18next';

import diamands from '../../domains/products/img/10diam.webp' // ../page/Products/img/10diam.webp
import diamands11 from '../../domains/products/img/11diam.webp'
import diamands60 from '../../domains/products/img/60diam.webp'
import diamands200 from '../../domains/products/img/200diam.webp'
import diamands500 from '../../domains/products/img/500diam.webp'
import diamands2000 from '../../domains/products/img/2000diam.webp'
import diamands3000 from '../../domains/products/img/3000diam.webp'
import diamands5000 from '../../domains/products/img/5000diam.webp'

const Prod = ({ props }) => {
  const { t } = useLang()

  const lang = localStorage.getItem('value')
  // console.log('props: ', props.diamonds);


  // const filtered = props.filter(item => parseFloat(item.net_margin_pct) > 0);

  // console.log('props: ', filtered);


  function getImageForDiamonds(count) {
    const n = Number(String(count ?? 0).replace(',', '.').trim());
    if (Number.isNaN(n)) return diamands; // fallback

    // Проверяем сверху вниз — большие пороги первыми
    if (n >= 5532) return diamands5000;
    if (n >= 3453) return diamands3000;
    if (n >= 1050) return diamands2000;
    if (n >= 565) return diamands500;
    if (n >= 425) return diamands200;   // 431–564
    if (n >= 11) return diamands11;    // 11–430
    // n <= 10
    return diamands;
  }

  if (props == '') return (
    <section className={style.products}>
      <div className={style.conatiner}>
        <div className={style.downloads}>
          <div className={style.loading}></div>
        </div>
      </div>
    </section>
  );

  const filterCode = props.filter(item => item.vip_service_code !== null)

  return <>

    <ul className={style.productsInnerList} >

      {filterCode.map((item, index) => {
        const imgSrc = getImageForDiamonds(item.diamonds);
        // data-aos="fade-up" data-aos-duration="2000"
        return (
          <li className={props.is_active ? style.productsInnerListItem : style.productsInnerListItemDis} key={item.item_id} >

            <NavLink to={`/Products/${item.item_id}?lang=${lang}`} className={style.productsInnerListItemLink}>
              <div className={item.bonus_label !== null ? style.productsInnerListItemPromo : style.productsInnerListItemPromoDis}>
                {item.bonus_label}
              </div>
              <img src={imgSrc} alt="" className={style.productsInnerListItemLinkImg} />
              <div className={style.productsInnerListItemLinkHeader}>
                <h4 className={style.productsInnerListItemLinkHeaderTitle}>
                  <Trans i18nKey={`productsInnerListItemLinkHeaderTitle${item.item_id}`} />
                </h4>
                <div className={style.productsInnerListItemLinkPrice}>
                  <p className={style.productsInnerListItemLinkPriceGp}>
                    {item.gp_price_uah > 0 ? `${item.gp_price_uah}UAH` : ''}
                  </p>
                  <p className={style.productsInnerListItemLinkPriceSub}>
                    {item.price_uah}UAH
                  </p>
                </div>
                <button className={style.productsInnerListItemLinkBtn}>
                  {t('productsInnerListItemLinkBtn')}
                </button>
              </div>
            </NavLink>
          </li>
        )
      })}
    </ul>
  </>
}

export default Prod;