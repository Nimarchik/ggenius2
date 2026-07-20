import { Trans } from 'react-i18next';
import style from '../../shared/styles/index.module.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../../shared/i18n/hooks/useLang';


const Offer = () => {
  const [nav, setNav] = useState(1)
  const { t } = useLang()

  const scrollToItem = (id, index) => {
    setNav(index + 1)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return <>
    <section className={style.offer}>
      <div className={style.container}>
        <div className={style.offerInner}>
          <div className={style.offerInnerHeader}>
            <span className={style.offerInnerHeaderSpans}>
              <p className={style.offerInnerHeaderSub}>
                {t('offerInnerHeaderSubOffer')}
              </p>
            </span>
            <h2 className={style.offerInnerHeaderTitle}>
              {t('offerInnerHeaderTitle')}
            </h2>
          </div>

          <div className={style.offerInnerStat}>

            <ul className={style.offerInnerContentList}>
              {
                [
                  'Glos',
                  'Subj',
                  'Delivery',
                  'Liab',
                  'Susp',
                  'Pricing',
                  'Ref',
                  'Privacy',
                  'Age',
                  'Anti',
                  'Force',
                  'Disp',
                  'Amen',
                  'Term',
                  'Contact',
                ].map((item, index) => (
                  <li onClick={() => scrollToItem(item, index)} className={nav == index + 1 ? style.profileInnerHeaderListItem : style.profileInnerHeaderListItemOff} >
                    <p className={style.privacyInnerContentListItemLink}>
                      {t(`offerInnerContentListItem${item}`)}
                    </p>
                  </li>
                ))
              }
            </ul>

            <div className={style.offerInnerStatInf}>

              <div className={style.offerInnerStatInf}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerHeaderStatTitle')}
                </h3>
                <p className={style.offerInnerStatSub}>
                  {t('offerInnerHeaderStatSub')}
                </p>

                <div className={style.offerInnerStatDisc}>
                  <h4 className={style.offerInnerStatDiscTitle}>
                    {t('offerInnerHeaderStatDiscTitle')}
                  </h4>
                  <p className={style.offerInnerStatDiscSub}>
                    <Trans i18nKey="offerInnerHeaderStatDiscSub" components={{ b: <b /> }} />
                  </p>
                </div>
              </div>

              {/* Glos */}
              <div id='Glos' className={style.offerInnerStatInfGlos}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatInfGlos')}
                </h3>

                <div className={style.bodyTable}>
                  <div>
                    <div className={style.bodyTableOne}>
                      {t('offerBodyTableOneTitle')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableOneTd')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableOneTb')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableOneTg')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableOneTz')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableOneBuy')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableOneApi')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableOneChar')}
                    </div>
                  </div>

                  {/* Two */}
                  <div>
                    <div className={style.bodyTableTwo}>
                      {t('offerBodyTableTwoTitle')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableTwoTd')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableTwoTb')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableTwoTg')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableTwoTz')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableTwoBuy')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableTwoApi')}
                    </div>
                    <div className={style.offerBodyTableOneTd}>
                      {t('offerBodyTableTwoChar')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Subj */}
              <div id='Subj' className={style.offerInnerStatInfSubj}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatInfSubj')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatSubjListItemTitle" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      {t('offerInnerStatSubjListItemSub2.1')}
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatSubjListItemTitle2.2" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      {t('offerInnerStatSubjListItemSub2.2')}
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatSubjListItemTitle2.3" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatSubjListItemSub2.3" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatSubjListItemTitle2.4" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatSubjListItemSub2.4" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Delivery */}

              <div id='Delivery' className={style.offerInnerStatDelivery}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatDelivery')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemTitle31" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemSub31" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatSubjListItemTitle32" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemSub32" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemTitle33" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemSub33" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemTitle34" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemSub34" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemTitle35" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemSub35" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemTitle36" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatDeliveryListItemSub36" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Liab */}
              <div id='Liab' className={style.offerInnerStatLiab}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatLiab')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatLiabListItemTitle41" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatLiabListItemSub41" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatLiabListItemTitle42" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatLiabListItemSub42" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatLiabListItemTitle43" components={{ b: <b /> }} />
                    </h4>
                    {/* <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatLiabListItemSub43" components={{ b: <b /> }} />
                    </p> */}
                    <span>
                      <h4 className={style.offerInnerStatLiabTitle}>
                        <Trans i18nKey="offerInnerStatLiabListItemTitle43t" components={{ b: <b /> }} />
                      </h4>
                      <ul className={style.offerInnerStatSubjListItemList}>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatLiabListItemSub431')}
                        </li>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatLiabListItemSub432')}
                        </li>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatLiabListItemSub433')}
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatLiabListItemTitle44" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatLiabListItemSub44" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Susp */}
              <div id='Susp' className={style.offerInnerStatSusp}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatSusp')}
                </h3>
                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatSuspListItemTitle51" components={{ b: <b /> }} />
                    </h4>
                    {/* <p className={style.offerInnerStatSubjListItemSub}>
                    <Trans i18nKey="offerInnerStatSuspListItemSub41" components={{ b: <b /> }} />
                  </p> */}

                    <span>
                      <h4 className={style.offerInnerStatLiabTitle}>
                        <Trans i18nKey="offerInnerStatSuspListItemTitle53t" components={{ b: <b /> }} />
                      </h4>
                      <ul className={style.offerInnerStatSubjListItemList}>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatSuspListItemSub531')}
                        </li>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatSuspListItemSub532')}
                        </li>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatSuspListItemSub533')}
                        </li>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatSuspListItemSub534')}
                        </li>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatSuspListItemSub535')}
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatSuspListItemTitle52" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatSuspListItemSub52" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatSuspListItemTitle53" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatSuspListItemSub53" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Pricing */}
              <div id='Pricing' className={style.offerInnerStatPricing}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatPricing')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatPricingListItemTitle61" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatPricingListItemSub61" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatPricingListItemTitle62" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatPricingListItemSub62" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatPricingListItemTitle63" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatPricingListItemSub63" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatPricingListItemTitle64" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatPricingListItemSub64" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Ref */}
              <div id='Ref' className={style.offerInnerStatRef}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatRef')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatRefListItemTitle71" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatRefListItemSub71" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatRefListItemTitle72" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatRefListItemSub72" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatRefListItemTitle73" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatRefListItemSub73" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatRefListItemTitle74" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatRefListItemSub74" components={{
                        a: (
                          <NavLink
                            className={style.offerInnerStatSubjListItemSubLink}
                            to="https://t.me/ggenius_support"
                            target="_blank"
                            rel="noopener noreferrer" />
                        ),
                        i: <em />
                      }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatRefListItemTitle75" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatRefListItemSub75" components={{
                        a: (
                          <NavLink
                            className={style.offerInnerStatSubjListItemSubLink}
                            to="https://t.me/ggenius_support"
                            target="_blank"
                            rel="noopener noreferrer" />
                        ),
                        i: <em />
                      }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Privacy */}

              <div id='Privacy' className={style.offerInnerStatPrivacy}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatPrivacy')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatPrivacyListItemTitle81" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatPrivacyListItemSub81" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatPrivacyListItemTitle82" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatPrivacyListItemSub82" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatPrivacyListItemTitle83" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatPrivacyListItemSub83" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatPrivacyListItemTitle84" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatPrivacyListItemSub84" components={{
                        a: (
                          <NavLink
                            className={style.offerInnerStatSubjListItemSubLink}
                            to="https://ggenius.gg/privacy"
                            target="_blank"
                            rel="noopener noreferrer" />
                        ),
                        i: <em />,
                        br: <br />
                      }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Age */}
              <div id='Age' className={style.offerInnerStatAge}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatAge')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatAgeListItemTitle91" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatAgeListItemSub91" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatAgeListItemTitle92" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatAgeListItemSub92" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatAgeListItemTitle93" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatAgeListItemSub93" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Anti */}
              <div id='Anti' className={style.offerInnerStatAnti}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatAnti')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatAntiListItemTitle101" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatAntiListItemSub101" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatAntiListItemTitle102" components={{ b: <b /> }} />
                    </h4>
                    {/* <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatAntiListItemSub102" components={{ b: <b /> }} />
                    </p> */}

                    <span>
                      <h4 className={style.offerInnerStatLiabTitle}>
                        <Trans i18nKey="offerInnerStatLiabListItemTitle103t" components={{ b: <b /> }} />
                      </h4>
                      <ul className={style.offerInnerStatSubjListItemList}>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatLiabListItemSub1031')}
                        </li>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatLiabListItemSub1032')}
                        </li>
                        <li className={style.offerInnerStatSubjListItemListItem}>
                          {t('offerInnerStatLiabListItemSub1033')}
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatAntiListItemTitle103" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatAntiListItemSub103" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatAntiListItemTitle104" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatAntiListItemSub104" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Force */}
              <div id='Force' className={style.offerInnerStatForce}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatForce')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle111" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub111" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle112" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub112" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Disp */}

              <div id='Disp' className={style.offerInnerStatDisp}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatDisp')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle121" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub121" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle122" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub122" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle123" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub123" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Amen */}
              <div id='Amen' className={style.offerInnerStatAmen}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatAmen')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle131" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub131" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle132" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub132" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle133" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub133" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle134" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub134" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Term */}

              <div id='Term' className={style.offerInnerStatTerm}>
                <h3 className={style.offerInnerStatTitle}>
                  {t('offerInnerStatTerm')}
                </h3>

                <ul className={style.offerInnerStatSubjList}>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle141" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub141" components={{ b: <b /> }} />
                    </p>
                  </li>
                  <li className={style.offerInnerStatSubjListItem}>
                    <h4 className={style.offerInnerStatDiscTitle}>
                      <Trans i18nKey="offerInnerStatForceListItemTitle142" components={{ b: <b /> }} />
                    </h4>
                    <p className={style.offerInnerStatSubjListItemSub}>
                      <Trans i18nKey="offerInnerStatForceListItemSub142" components={{ b: <b /> }} />
                    </p>
                  </li>
                </ul>
              </div>

              {/* Contact */}

              <div id='Contact' className={style.privacyInnerContentInfoCont}>
                <h3 className={style.privacyInnerContentInfoTitle}>
                  {t('privacyInnerContentInfoContTitle')}
                </h3>

                <div className={style.bodyTable}>
                  <div>
                    <div className={style.bodyTableOne}>
                      {t('bodyTableOneTitleCont')}
                    </div>
                    <div className={style.bodyTableOneTd}>
                      {t('bodyTableOneTdCont')}
                    </div>
                    <div className={style.bodyTableOneTd}>
                      {t('bodyTableOneTbCont')}
                    </div>
                    <div className={style.bodyTableOneTd}>
                      {t('bodyTableOneTgCont')}
                    </div>
                    <div className={style.bodyTableOneTd}>
                      {t('bodyTableOneTzCont')}
                    </div>
                    <div className={style.bodyTableOneTd}>
                      {t('bodyTableOneTxCont')}
                    </div>
                  </div>

                  {/* Two */}
                  <div>
                    <div className={style.bodyTableTwo}>
                      {t('bodyTableTwoTitleCont')}
                    </div>
                    <div className={style.bodyTableOneTd}>
                      {t('bodyTableTwoTdCont')}
                    </div>
                    <div className={style.bodyTableOneTd}>
                      {t('bodyTableTwoTbCont')}
                    </div>
                    <div className={style.bodyTableOneTd}>
                      {t('bodyTableTwoTgCont')}
                    </div>
                    <div className={style.bodyTableOneTd}>
                      <a className={style.privacyInnerContentInfoSecListItemSubLink} href="mailto:mlbb.boss.ua@gmail.com">
                        {t('bodyTableTwoTzCont')}
                      </a>
                    </div>
                    <div className={style.bodyTableOneTd}>
                      <a className={style.privacyInnerContentInfoSecListItemSubLink} href="https://t.me/ggenius_support">
                        {t('bodyTableTwoTxCont')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className={style.offerInnerFooter}>
          <em className={style.offerInnerFooterSub}>
            {t('offerInnerFooterSubGg')}
          </em>
          <em className={style.offerInnerFooterSub}>
            {t('offerInnerFooterSubDate')}
          </em>
          <em className={style.offerInnerFooterSub}>
            {t('offerInnerFooterSubDocs')}
          </em>
        </div>
      </div>
    </section>
  </>
}

export default Offer;