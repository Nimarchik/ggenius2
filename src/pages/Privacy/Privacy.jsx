import { Link, NavLink } from 'react-router-dom'
import style from '../../shared/styles/index.module.css';

import { useState } from 'react'
import { useLang } from '../../shared/i18n/hooks/useLang';

const Privacy = () => {
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
    <section className={style.privacy}>
      <div className={style.container}>
        <div className={style.privacyInner}>
          <p className={style.privacyInnerSubs}>
            {t('privacyInnerSubs')}
          </p>
          <h2 className={style.privacyInnerTitle}>
            {t('footerCopySubMobPrivacy')}
          </h2>

          <div className={style.privacyInnerContent}>

            <ul className={style.privacyInnerContentList}>
              {
                ['Data', 'Red', 'Flow', 'Parties', 'Security', 'User', 'Contact'].map((item, index) => (
                  <li onClick={() => scrollToItem(item, index)} className={nav == index + 1 ? style.profileInnerHeaderListItem : style.profileInnerHeaderListItemOff} >
                    <p className={style.privacyInnerContentListItemLink}>
                      {t(`privacyInnerContentListItem${item}`)}
                    </p>
                  </li>
                ))
              }
            </ul>

            <div className={style.privacyInnerContentInfo}>
              <h3 id='Data' className={style.privacyInnerContentInfoTitle}>
                1. {t('privacyInnerContentListItemData')}
              </h3>
              <p className={style.privacyInnerContentInfoSub}>
                {t('privacyInnerContentInfoSub')}
              </p>

              {/* Category */}
              <div className={style.privacyInnerContentInfoCategory}>
                <h3 className={style.privacyInnerContentInfoCategoryTitle}>
                  {t('privacyInnerContentInfoCategoryTitle')}
                </h3>
                <ul className={style.privacyInnerContentInfoCategoryList}>
                  <li className={style.privacyInnerContentInfoCategoryListItem}>
                    <h4 className={style.privacyInnerContentInfoCategoryListItemTitle}>
                      {t('privacyInnerContentInfoCategoryListItemTitle')}
                    </h4>
                    <p className={style.privacyInnerContentInfoCategoryListItemSub}>
                      {t('privacyInnerContentInfoCategoryListItemSub')}
                    </p>
                  </li>
                  <li className={style.privacyInnerContentInfoCategoryListItem}>
                    <h4 className={style.privacyInnerContentInfoCategoryListItemTitle}>
                      {t('privacyInnerContentInfoCategoryListItemTitle2')}
                    </h4>
                    <p className={style.privacyInnerContentInfoCategoryListItemSub}>
                      {t('privacyInnerContentInfoCategoryListItemSub2')}
                    </p>
                  </li>
                  <li className={style.privacyInnerContentInfoCategoryListItem}>
                    <h4 className={style.privacyInnerContentInfoCategoryListItemTitle}>
                      {t('privacyInnerContentInfoCategoryListItemTitle3')}
                    </h4>
                    <p className={style.privacyInnerContentInfoCategoryListItemSub}>
                      {t('privacyInnerContentInfoCategoryListItemSub3')}
                    </p>
                  </li>
                  <li className={style.privacyInnerContentInfoCategoryListItem}>
                    <h4 className={style.privacyInnerContentInfoCategoryListItemTitle}>
                      {t('privacyInnerContentInfoCategoryListItemTitle4')}
                    </h4>
                    <p className={style.privacyInnerContentInfoCategoryListItemSub}>
                      {t('privacyInnerContentInfoCategoryListItemSub4')}
                    </p>
                  </li>
                </ul>
                <span className={style.privacyInnerContentInfoCategoryNote}>
                  <h5 className={style.privacyInnerContentInfoCategoryNoteTitle}>
                    {t('privacyInnerContentInfoCategoryNoteTitle')}
                  </h5>

                  <p className={style.privacyInnerContentInfoCategoryNoteSub}>
                    {t('privacyInnerContentInfoCategoryNoteSub')}
                  </p>
                </span>
              </div>

              {/* Red */}
              <div id='Red' className={style.privacyInnerContentInfoRed}>
                <h3 className={style.privacyInnerContentInfoTitle}>
                  {t('privacyInnerContentInfoRedTitle')}
                </h3>

                <div className={style.privacyInnerContentInfoRedSec}>
                  <h4 className={style.privacyInnerContentInfoRedSecTitle}>
                    {t('privacyInnerContentInfoRedSecTitle')}
                  </h4>
                  <ul className={style.privacyInnerContentInfoRedList}>
                    <li className={style.privacyInnerContentInfoRedListItem}>
                      <h5 className={style.privacyInnerContentInfoCategoryTitle}>
                        {t('privacyInnerContentInfoRedSecTitlePass')}
                      </h5>
                      <p className={style.privacyInnerContentInfoRedListItemSub}>
                        {t('privacyInnerContentInfoRedListItemSub')}
                      </p>
                    </li>
                    <li className={style.privacyInnerContentInfoRedListItem}>
                      <h5 className={style.privacyInnerContentInfoCategoryTitle}>
                        {t('privacyInnerContentInfoRedSecTitlePay')}
                      </h5>
                      <p className={style.privacyInnerContentInfoRedListItemSub}>
                        {t('privacyInnerContentInfoRedListItemSubPay')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Flow */}
              <div id='Flow' className={style.privacyInnerContentInfoFlow}>
                <h3 className={style.privacyInnerContentInfoTitle}>
                  {t('privacyInnerContentInfoFlowTitle')}
                </h3>
                <p className={style.privacyInnerContentInfoFlowSub}>
                  {t('privacyInnerContentInfoFlowSub')}
                </p>

                <ul className={style.privacyInnerContentInfoFlowList}>
                  <li className={style.privacyInnerContentInfoFlowListItem}>
                    <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                      {t('privacyInnerContentInfoFlowListItemTitle')}
                    </h4>
                  </li>
                  <li className={style.privacyInnerContentInfoFlowListItem}>
                    <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                      {t('privacyInnerContentInfoFlowListItemTitle2')}
                    </h4>
                  </li>
                  <li className={style.privacyInnerContentInfoFlowListItem}>
                    <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                      {t('privacyInnerContentInfoFlowListItemTitle3')}
                    </h4>
                  </li>
                  <li className={style.privacyInnerContentInfoFlowListItem}>
                    <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                      {t('privacyInnerContentInfoFlowListItemTitle4')}
                    </h4>
                  </li>
                  <li className={style.privacyInnerContentInfoFlowListItem}>
                    <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                      {t('privacyInnerContentInfoFlowListItemTitle5')}
                    </h4>
                  </li>
                  <li className={style.privacyInnerContentInfoFlowListItem}>
                    <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                      {t('privacyInnerContentInfoFlowListItemTitle6')}
                    </h4>
                  </li>
                  <li className={style.privacyInnerContentInfoFlowListItem}>
                    <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                      {t('privacyInnerContentInfoFlowListItemTitle7')}
                    </h4>
                  </li>
                  <li className={style.privacyInnerContentInfoFlowListItem}>
                    <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                      {t('privacyInnerContentInfoFlowListItemTitle8')}
                    </h4>
                  </li>
                </ul>

                <span className={style.privacyInnerContentInfoCategoryNote}>
                  <h5 className={style.privacyInnerContentInfoCategoryNoteTitle}>
                    {t('privacyInnerContentInfoFlowNoteTitle')}
                  </h5>

                  <p className={style.privacyInnerContentInfoCategoryNoteSub}>
                    {t('privacyInnerContentInfoFlowNoteSub')}
                  </p>
                </span>
              </div>

              {/* Parties */}
              <div id='Parties' className={style.privacyInnerContentInfoPart}>
                <h3 className={style.privacyInnerContentInfoTitle}>
                  {t('privacyInnerContentInfoPartTitle')}
                </h3>

                <div className={style.privacyInnerContentInfoPartTop}>
                  <h4 className={style.privacyInnerContentInfoPartTopTitle}>
                    {t('privacyInnerContentInfoPartTopTitle')}
                  </h4>

                  <ul className={style.privacyInnerContentInfoFlowList}>
                    <li className={style.privacyInnerContentInfoFlowListItem}>
                      <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                        {t('privacyInnerContentInfoPartListItemTitle')}
                      </h4>
                    </li>
                    <li className={style.privacyInnerContentInfoFlowListItem}>
                      <h4 className={style.privacyInnerContentInfoFlowListItemTitle}>
                        {t('privacyInnerContentInfoPartListItemTitle2')}
                      </h4>
                    </li>
                  </ul>
                </div>

                <div className={style.privacyInnerContentInfoPartBody}>
                  <h4 className={style.privacyInnerContentInfoPartBodyTitle}>
                    {t('privacyInnerContentInfoPartBodyListItemTitle')}
                  </h4>
                  {/* One */}
                  <div className={style.bodyTable}>
                    <div>
                      <div className={style.bodyTableOne}>
                        {t('bodyTableOneTitle')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableOneTd')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableOneTb')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableOneTg')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableOneTz')}
                      </div>
                    </div>

                    {/* Two */}
                    <div>
                      <div className={style.bodyTableTwo}>
                        {t('bodyTableTwoTitle')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableTwoTd')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableTwoTb')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableTwoTg')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableTwoTz')}
                      </div>
                    </div>

                    {/* Three */}
                    <div>
                      <div className={style.bodyTableThree}>
                        {t('bodyTableThreeTitle')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableThreeTd')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableThreeTb')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableThreeTg')}
                      </div>
                      <div className={style.bodyTableOneTd}>
                        {t('bodyTableThreeTz')}
                      </div>
                    </div>
                  </div>

                  <p className={style.TableBodySub}>
                    {t('TableBodySub')}
                  </p>
                </div>
              </div>

              {/* Security */}

              <div id='Security' className={style.privacyInnerContentInfoSec}>
                <h3 className={style.privacyInnerContentInfoTitle}>
                  {t('privacyInnerContentInfoSecTitle')}
                </h3>

                <ul className={style.privacyInnerContentInfoSecList}>
                  <li className={style.privacyInnerContentInfoSecListItem}>
                    <h4 className={style.privacyInnerContentInfoSecListItemTitle}>
                      {t('privacyInnerContentInfoSecListItemTitle')}
                    </h4>
                    <p className={style.privacyInnerContentInfoSecListItemSub}>
                      {t('privacyInnerContentInfoSecListItemSub')}
                    </p>
                  </li>
                  <li className={style.privacyInnerContentInfoSecListItem}>
                    <h4 className={style.privacyInnerContentInfoSecListItemTitle}>
                      {t('privacyInnerContentInfoSecListItemTitle2')}
                    </h4>
                    <p className={style.privacyInnerContentInfoSecListItemSub}>
                      {t('privacyInnerContentInfoSecListItemSub2')}
                    </p>
                  </li>
                  <li className={style.privacyInnerContentInfoSecListItem}>
                    <h4 className={style.privacyInnerContentInfoSecListItemTitle}>
                      {t('privacyInnerContentInfoSecListItemTitle3')}
                    </h4>
                    <p className={style.privacyInnerContentInfoSecListItemSub}>
                      {t('privacyInnerContentInfoSecListItemSub3')}
                    </p>
                  </li>
                </ul>
              </div>

              {/* User */}
              <div id='User' className={style.privacyInnerContentInfoUser}>
                <h3 className={style.privacyInnerContentInfoTitle}>
                  {t('privacyInnerContentInfoUserTitle')}
                </h3>
                <p className={style.privacyInnerContentInfoFlowSub}>
                  {t('privacyInnerContentInfoUserSub')}
                </p>

                <ul className={style.privacyInnerContentInfoSecList}>
                  <li className={style.privacyInnerContentInfoSecListItem}>
                    <h4 className={style.privacyInnerContentInfoSecListItemTitle}>
                      {t('privacyInnerContentInfoUaserListItemTitle')}
                    </h4>
                    <p className={style.privacyInnerContentInfoSecListItemSub}>
                      {t('privacyInnerContentInfoUaserListItemSub')}
                    </p>
                  </li>
                  <li className={style.privacyInnerContentInfoSecListItem}>
                    <h4 className={style.privacyInnerContentInfoSecListItemTitle}>
                      {t('privacyInnerContentInfoUaserListItemTitle2')}
                    </h4>
                    <p className={style.privacyInnerContentInfoSecListItemSub}>
                      {t('privacyInnerContentInfoUaserListItemSub2')}
                    </p>
                  </li>
                  <li className={style.privacyInnerContentInfoSecListItem}>
                    <h4 className={style.privacyInnerContentInfoSecListItemTitle}>
                      {t('privacyInnerContentInfoUaserListItemTitle3')}
                    </h4>
                    <p className={style.privacyInnerContentInfoSecListItemSub}>
                      {t('privacyInnerContentInfoUaserListItemSub3')}
                      <Link className={style.privacyInnerContentInfoSecListItemSubLink} to={`https://t.me/ggenius_support`}>
                        {t('privacyInnerContentInfoUaserListItemSub3Link')}
                      </Link>
                    </p>
                  </li>
                  <li className={style.privacyInnerContentInfoSecListItem}>
                    <h4 className={style.privacyInnerContentInfoSecListItemTitle}>
                      {t('privacyInnerContentInfoUaserListItemTitle4')}
                    </h4>
                    <p className={style.privacyInnerContentInfoSecListItemSub}>
                      {t('privacyInnerContentInfoUaserListItemSub4')}
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
      </div>
    </section >
  </>
}

export default Privacy;