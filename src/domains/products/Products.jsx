import { useEffect, useState } from "react";
import style from '../../shared/styles/index.module.css';

import { Link } from "react-router-dom";
import Prod from "../../shared/hooks/Prod";
import { Trans } from "react-i18next";
import { useLang } from "../../shared/i18n/hooks/useLang";



// ------------ IMAGES ----------------- //

import userBack from './img/back.webp'
import arrow from './img/icon.svg'

import backMob from '../profile/img/backMob.webp'

const Products = () => {
  const { t } = useLang()
  const [shop, setShop] = useState([])
  const [sortedItems, setSortedItems] = useState(shop);
  const [nav, setNav] = useState(1)
  const [filt, setFilt] = useState('productsInnerSubGroupsSortBtnTop')
  const [fact, setFact] = useState(false)


  useEffect(() => {
    // http://localhost:8000/mlbb/get_posts.php?table=shop_packages redis/index.php
    // https://ggenius-api.onrender.com
    fetch('http://localhost:8000/redis/index.php')
      .then(g => g.json())
      .then(data => {
        setShop(data)
        const sorted = [...data].sort((a, b) => a.price_uah - b.price_uah);
        setSortedItems(sorted);
      })
      .catch(err => console.error(err))
  }, [])

  console.log(sortedItems);



  // const sortByDiamondsAsc = () => {
  //   setSortedItems([...shop].sort((a, b) => a.diamonds - b.diamonds));
  // };
  // const sortByDiamondsDesc = () => {
  //   setSortedItems([...shop].sort((a, b) => b.diamonds - a.diamonds));
  // };
  const sortByPriceAsc = () => {
    setSortedItems([...shop].sort((a, b) => parseFloat(a.price_uah) - parseFloat(b.price_uah)));
  };
  const sortByPriceDesc = () => {
    setSortedItems([...shop].sort((a, b) => parseFloat(b.price_uah) - parseFloat(a.price_uah)));

  };

  const sortByLabels = (filterLabel) => {
    if (!filterLabel || filterLabel === 'all') {
      setSortedItems(sortByPriceAsc); // сброс фильтра
      return;
    }
    const filtered = [...shop].filter(item => item.bonus_label === filterLabel);
    setSortedItems(filtered);
  };







  return (
    <section className={style.products}>
      <div className={style.container}>
        <div className={style.productsInner}>
          <div className={style.productsInnerHader}>
            <img className={style.profileInnerUserInfoBack} src={userBack} alt="" />
            <img className={style.profileInnerUserInfoBackMob} src={backMob} alt="" />
            <h1 className={style.productsInnerHaderTitle}>
              {t('productsInnerHaderTitle')}
            </h1>
          </div>

          <div className={style.productsInnerTop}>
            {/* -------------------- NAVIGATE -------------------- */}
            <div className={style.productsInnerTopNav}>
              <ul className={style.profileInnerHeaderList} data-aos="fade-right">
                <li className={nav === 1 ? style.profileInnerHeaderListItem : style.profileInnerHeaderListItemOff}
                  onClick={() => setNav(1)}>
                  {t('profileInnerHeaderListItemTotal')}
                </li>
                <li className={nav === 2 ? style.profileInnerHeaderListItem : style.profileInnerHeaderListItemOff}
                  onClick={() => setNav(2)}>
                  {t('profileInnerHeaderListItemDetail')}
                </li>

              </ul>
            </div>

            {/* -------------------- PRODUCTS -------------------- */}
            <div className={style.productsInnerTopInfo}>
              <div className={nav === 1 ? style.productsInnerTopActive : style.productsInnerTopDis}>
                <div className={style.productsInnerTopInfoFilter}>
                  <h3 className={style.productsInnerTopInfoFilterTitle}>
                    {t('productsInnerTopInfoFilterTitle')}
                  </h3>

                  <div className={style.productsInnerTopInfoFilterNav}>

                    <div className={style.productsInnerTopInfoFilterGroups}>
                      <div className={style.productsInnerTopInfoFilterNav}>
                        <h3 className={style.productsInnerTopInfoFilterNavTitle}>
                          {t('productsInnerSubGroupsSortTitle')}
                        </h3>
                        <div className={style.productsInnerTopInfoRes} onClick={() => setFact(!fact)}>
                          {t(filt)} <img src={arrow} alt="arrow" className={fact ? style.productsInnerTopInfoListItemImg : style.productsInnerTopInfoListItemImgDis} />
                        </div>
                      </div>

                      <ul className={fact ? style.productsInnerTopInfoList : style.productsInnerTopInfoListDis}>
                        <li className={filt === 'productsInnerSubGroupsSortBtnTop' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem} onClick={() => sortByPriceAsc(setFilt('productsInnerSubGroupsSortBtnTop'), setFact(!fact))}>
                          {t('productsInnerSubGroupsSortBtnTop')}
                        </li>
                        <li className={filt === 'productsInnerSubGroupsSortBtnBottom' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => sortByPriceDesc(setFilt('productsInnerSubGroupsSortBtnBottom'),
                            setFact(!fact))}>
                          {t('productsInnerSubGroupsSortBtnBottom')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListFirst' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListFirst');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('🆕 Перше');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListFirst')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListPromo' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListPromo');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('🔥 Акція');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListPromo')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListProfit' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListProfit');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('💰 Вигідно');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListProfit')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListBonus' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListBonus');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('🎁 Бонус');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListBonus')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListMaks' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListMaks');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('👑 Максимум');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListMaks')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListMega' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListMega');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('🏅 Мега');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListMega')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListVipBon' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListVipBon');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('🏆 VIP Бонус');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListVipBon')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListVip' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListVip');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('🏆 VIP');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListVip')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListPopular' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListPopular');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('⭐ Популярний');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListPopular')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListVeryPop' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListVeryPop');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('🔥 Найпопулярніший');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListVeryPop')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListPrem' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListPrem');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('⭐ Преміум');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListPrem')}
                        </li>
                        <li
                          className={filt === 'productsInnerTopInfoListNew' ? style.productsInnerTopInfoListItemActive : style.productsInnerTopInfoListItem}
                          onClick={() => {
                            setFilt('productsInnerTopInfoListNew');             // обновляем состояние фильтра (для UI)
                            setFact(!fact);               // ваш существующий toggle
                            sortByLabels('🔥 Нове');        // вызываем функцию с конкретным значением фильтра
                          }}
                        >
                          {t('productsInnerTopInfoListNew')}
                        </li>

                      </ul>

                    </div>
                  </div>
                </div>
                <Prod props={sortedItems} />
              </div>
              <div className={nav === 2 ? style.productsInnerTopActive : style.productsInnerTopDis}>
                <div className={style.donateInnerDescript}>
                  <div className={style.donateInnerDescriptInfo}>
                    <div className={style.donateInnerDescriptHeader}>
                      <h3 className={style.donateInnerDescriptTitle}>
                        {t('donateInnerDescriptTitle')}
                      </h3>
                      <p className={style.donateInnerDescriptSub}>
                        <Trans i18nKey="donateInnerDescriptSub" components={{ b: <b />, br: <br /> }} />
                      </p>
                    </div>

                    <div className={style.donateInnerDescriptPurchase}>
                      <h3 className={style.donateInnerDescriptPurchaseTitle}>
                        {t('donateInnerDescriptPurchaseTitle')}
                      </h3>
                      <ul className={style.donateInnerDescriptPurchaseList}>
                        <li className={style.donateInnerDescriptPurchaseListItem}>
                          {t('donateInnerDescriptPurchaseListItem1')}
                        </li>
                        <li className={style.donateInnerDescriptPurchaseListItem}>
                          {t('donateInnerDescriptPurchaseListItem2')}
                        </li>
                        <li className={style.donateInnerDescriptPurchaseListItem}>
                          {t('donateInnerDescriptPurchaseListItem3')}
                        </li>
                        <li className={style.donateInnerDescriptPurchaseListItem}>
                          {t('donateInnerDescriptPurchaseListItem4')}
                        </li>
                      </ul>
                    </div>

                    <div className={style.donateInnerDescriptImportant}>
                      <h3 className={style.donateInnerDescriptImportantTitle}>
                        {t('donateInnerDescriptImportantTitle')}
                      </h3>

                      <ul className={style.donateInnerDescriptImportantList}>
                        <li className={style.donateInnerDescriptImportantListItem}>
                          {t('donateInnerDescriptImportantListItem1')}
                        </li>
                        <li className={style.donateInnerDescriptImportantListItem}>
                          {t('donateInnerDescriptImportantListItem2')}
                        </li>
                        <li className={style.donateInnerDescriptImportantListItem}>
                          {t('donateInnerDescriptImportantListItem3')}
                        </li>
                      </ul>
                    </div>

                    <div className={style.donateInnerDescriptWhy}>
                      <h3 className={style.donateInnerDescriptWhyTitle}>
                        {t('donateInnerDescriptWhyTitle')}
                      </h3>
                      <p className={style.donateInnerDescriptWhySub}>
                        {t('donateInnerDescriptWhySub')}

                      </p>
                    </div>
                  </div>

                  <div className={style.firstTopUp}>
                    <div className={style.firstTopUpInfo}>
                      <h3 className={style.firstTopUpTitle}>
                        {t('productsInnerSubT')}
                      </h3>
                      <p className={style.firstTopUpSub}>
                        {t('productsInnerSub')}
                      </p>
                      <div className={style.firstTopUpInfoListen}>
                        <h3 className={style.firstTopUpInfoListenTitle}>
                          {t('productsInnerSubContTitle')}
                        </h3>
                        <ul className={style.firstTopUpList}>
                          <li className={style.firstTopUpListItem}>
                            {t('productsInnerSubListItem50')}
                          </li>
                          <li className={style.firstTopUpListItem}>
                            {t('productsInnerSubListItem150')}
                          </li>
                          <li className={style.firstTopUpListItem}>
                            {t('productsInnerSubListItem250')}
                          </li>
                          <li className={style.firstTopUpListItem}>
                            {t('productsInnerSubListItem500')}
                          </li>
                        </ul>

                        <div className={style.firstTopUpDesc}>
                          <p className={style.firstTopUpDescSub}>
                            <Trans i18nKey="productsInnerSpan" components={{ b: <b />, br: <br /> }} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Products;
