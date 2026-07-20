import { useState } from 'react';
import style from '../../shared/styles/index.module.css';
import { useAuth } from '../../domains/auth/useAuth';
import { useLang } from '../../shared/i18n/hooks/useLang';


// ------------ UTILS -----------
import { parseRoles } from './utils/parseRoles';
import { useProfile } from './hooks/useProfile';
import { WHITE_LIST } from './constants/whiteList';
import { filterOrders } from './utils/filterOrders';
// import ProfileLogout from './components/ProfileLogout';
// import ProfileView from './components/ProfileView';
import { calcMaxPercent } from './utils/calcMaxPercent';
import { calcPercent } from './utils/calcPercent';


import userBack from './img/userBackground.webp'
import backMob from './img/backMob.webp'
import iconId from './img/icon-id.svg'
import iconRole from './img/icon-role.svg'
import iconLocation from './img/icon-location.svg'
import iconInfo from './img/icon-info.svg'


const Profile = () => {
  const auth = useAuth();
  const { user } = auth || {};
  const [nav, setNav] = useState(1)
  const { balance } = useProfile();
  // const [history, setHistory] = useState([])
  const [product, setProduct] = useState([])

  const [search, setSearch] = useState('')
  const { t } = useLang()


  // const [btn, setBtn] = useState(3)

  // const procent = (value) => {
  //   const percent = (value / 10000) * 100
  //   return percent.toFixed(2)
  // }

  // const procentMax = (value) => {
  //   const percent = (value / 20000) * 100
  //   return percent.toFixed(2)
  // }

  if (!user) return (
    <section className={style.donate}>
      <div className={style.container}>
        <div className={style.downloads}>
          <div className={style.profileLogOut}>
            {t('profileLogOut')}
          </div>
        </div>
      </div>
    </section>
  );

  const roles = parseRoles(user.main_roles);
  const arr = JSON.parse(roles)

  // Дата створення
  // const rawDate = user.created_at
  // const date = new Date(rawDate)




  // useEffect(() => {
  //   fetch('https://ggenius-api.onrender.com/pay/history.php')
  //     .then(g => g.json())
  //     .then(data => setHistory(data.orders))
  //     .catch(err => console.error(err))
  // }, [])

  // useEffect(() => {
  //   fetch('https://ggenius-api.onrender.com/pay/productDetail.php')
  //     .then(g => g.json())
  //     .then(data => setProduct(data.Variation))
  //     .catch(err => console.error(err))
  // }, [])
  // console.log(product);


  const selected = WHITE_LIST.includes(
    String(user.telegram_id)
  );

  return <>
    <section className={style.profile}>
      <div className={style.container}>
        <div className={style.profileInner}>
          <div className={style.profileInnerUserInfo} data-aos="fade-down">
            <div className={style.profileInnerUserInfoObv}>
              <img className={style.profileInnerUserInfoBack} src={userBack} alt="" />
              <img className={style.profileInnerUserInfoBackMob} src={backMob} alt="" />

              <div className={style.profileInnerUserInfoAvatarEff}>
                <img src={user.avatar_permanent_url !== null ? user.avatar_permanent_url : ''} alt={user.avatar_permanent_url !== null ? 'avatar' : ''} className={style.profileInnerUserInfoImg} />
                <span className={style.profileInnerUserInfoAvatarEff1}></span>
              </div>
              <div className={style.profileInnerUserInfoTxt}>
                <h1 className={style.profileInnerUserInfoTitle}>
                  {user.nickname}
                </h1>
                <p className={style.profileInnerUserInfoRank}>
                  <img src={iconId} alt="" /> {t('profileInnerUserInfoRankId')} {user.player_id}({user.server_id})
                </p>
                <p className={style.profileInnerUserInfoRank}>
                  <img src={iconRole} alt="" /> {t('profileInnerUserInfoRankRole')} {arr !== null ? arr.map((item, ind) => (
                    <span key={ind}>
                      {item}{ind < arr.length - 1 ? ', ' : ''}
                    </span>
                  )) : 'Завантажте скрин  у бота'}
                </p>
                <p className={style.profileInnerUserInfoRank}>
                  <img src={iconLocation} alt="icon location" /> {t('profileInnerUserInfoRankLocation')} {user.location !== null ? user.location : 'Завантажте скрин  у бота'}
                </p>
                <div className={selected ? style.profileInnerUserInfoMoo : style.profileInnerUserInfoMooDis}>
                  <h4 className={style.profileInnerUserInfoMooTitle}>
                    VIPayment:
                  </h4>
                  <p className={style.profileInnerUserInfoMooVal}>
                    {balance.balance} {balance.currency} Rp
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div className={style.profileInnerHeader} >
            {/* -------------------- НАВИГАЦИЯ -------------------- */}
            <div className={style.profileInnerHeaderNav}>
              <ul className={style.profileInnerHeaderList} data-aos="fade-right">
                <li className={nav == 1 ? style.profileInnerHeaderListItem : style.profileInnerHeaderListItemOff}
                  onClick={() => setNav(1)}>
                  {t('profileInnerHeaderListItemTotal')}
                </li>
                <li className={nav == 2 ? style.profileInnerHeaderListItem : style.profileInnerHeaderListItemOff}
                  onClick={() => setNav(2)}>
                  {t('profileInnerHeaderListItemDetail')}
                </li>
                <li className={nav == 3 ? style.profileInnerHeaderListItem : style.profileInnerHeaderListItemOff}
                  onClick={() => setNav(3)}>
                  {t('profileInnerHeaderListItemSettings')}
                </li>
                {selected ? (
                  <li className={nav === 4 ? style.profileInnerHeaderListItem : style.profileInnerHeaderListItemOff}
                    onClick={() => setNav(4)}>
                    {t('profileInnerHeaderListItemAdmin')}
                  </li>
                ) : ''}

              </ul>
            </div>

            <div className={style.profileInnerHeaderGroups} data-aos="fade-down">
              {/* -------------------- ЗАГАЛЬНА ІНФОРМАЦІЯ -------------------- */}
              <div className={nav === 1 ? style.profileInnerHeaderInfo : style.profileInnerHeaderInfoDis}>
                <div className={style.profileInnerHeaderInfo1Nav}>
                  <h3 className={style.profileInnerHeaderInfo1NavTitle}>
                    {t('profileInnerHeaderInfoNavTitle')}
                  </h3>

                  {/* <ul className={style.profileInnerHeaderInfo1NavList}>
                    <li className={style.profileInnerHeaderInfo1NavListItem}>
                      <button className={btn === 1 ? style.profileInnerHeaderInfo1NavListItemBtnActive : style.profileInnerHeaderInfo1NavListItemBtn}
                        onClick={() => setBtn(1)}>
                        {t('profileInnerHeaderInfoNavListItemBtn30Days')}
                      </button>
                    </li>
                    <li className={style.profileInnerHeaderInfo1NavListItem}>
                      <button className={btn === 2 ? style.profileInnerHeaderInfo1NavListItemBtnActive : style.profileInnerHeaderInfo1NavListItemBtn}
                        onClick={() => setBtn(2)}>
                        {t('profileInnerHeaderInfoNavListItemBtnSeason')}
                      </button>
                    </li>
                    <li className={style.profileInnerHeaderInfo1NavListItem}>
                      <button className={btn === 3 ? style.profileInnerHeaderInfo1NavListItemBtnActive : style.profileInnerHeaderInfo1NavListItemBtn}
                        onClick={() => setBtn(3)}>
                        {t('profileInnerHeaderInfoNavListItemBtnTotal')}
                      </button>
                    </li>
                  </ul> */}
                </div>

                {/* -------------------- ЗА ВЕСЬ ЧАС -------------------- */}
                <div className={style.profileInnerHeaderInfo1Total}>
                  <div className={style.profileInnerHeaderInfo1TotalStat}>
                    <div className={style.profileInnerHeaderInfo1TotalStatGroup} >

                      {/*-------------------- ЗАГАЛЬНІ ЗНАЧЕННЯ -------------------- */}
                      <div className={style.profileInnerHeaderInfo1TotalStatGroup1} data-aos="flip-left">
                        <div className={style.profileInnerHeaderInfo1TotalStatGroup1TotalMeaning}>
                          <h4 className={style.profileInnerHeaderInfo1TotalStatTitle}>
                            {t('profileInnerHeaderInfo1TotalStatTitle')}
                          </h4>
                          <ul className={style.profileInnerHeaderInfo1TotalStatList}>
                            <li className={style.profileInnerHeaderInfo1TotalStatListItem}>
                              <img src={iconInfo} alt="" className={style.profileInnerHeaderInfo1TotalStatListItemImg} />
                              <div className={style.profileInnerHeaderInfo1TotalStatListItemCont}>
                                <h4 className={style.profileInnerHeaderInfo1TotalStatListItemTitle}>
                                  {t('profileInnerHeaderInfo1TotalStatListItemTitleTotalMatches')}
                                </h4>
                                <p className={style.profileInnerHeaderInfo1TotalStatListItemSub}>
                                  {user.total_matches}
                                </p>
                              </div>
                            </li>
                            <li className={style.profileInnerHeaderInfo1TotalStatListItem}>
                              <img src={iconInfo} alt="" className={style.profileInnerHeaderInfo1TotalStatListItemImg} />
                              <div className={style.profileInnerHeaderInfo1TotalStatListItemCont}>
                                <h4 className={style.profileInnerHeaderInfo1TotalStatListItemTitle}>
                                  {t('profileInnerHeaderInfo1TotalStatListItemTitleMaksMinRank')}
                                </h4>
                                <p className={style.profileInnerHeaderInfo1TotalStatListItemSub}>
                                  {user.current_rank}
                                </p>
                              </div>
                            </li>
                            <li className={style.profileInnerHeaderInfo1TotalStatListItem}>
                              <img src={iconInfo} alt="" className={style.profileInnerHeaderInfo1TotalStatListItemImg} />
                              <div className={style.profileInnerHeaderInfo1TotalStatListItemCont}>
                                <h4 className={style.profileInnerHeaderInfo1TotalStatListItemTitle}>
                                  {t('profileInnerHeaderInfo1TotalStatListItemTitleMaksMaksRank')}
                                </h4>
                                <p className={style.profileInnerHeaderInfo1TotalStatListItemSub}>
                                  {user.highest_rank}

                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>

                        {/* ДЕТАЛІ */}
                        <div className={style.profileInnerHeaderInfo1TotalStatGroup1Detail}>
                          <h4 className={style.profileInnerHeaderInfo1TotalStatGroup1DetailTitle}>
                            {t('profileInnerHeaderInfo1TotalStatGroup1DetailTitle')}
                          </h4>
                          <ul className={style.profileInnerHeaderInfo1TotalStatListDet}>
                            <li className={style.profileInnerHeaderInfo1TotalStatListItemDet}>
                              <div className={style.profileInnerHeaderInfo1TotalStatListItemHed}>
                                <img src={iconInfo} alt="" className={style.profileInnerHeaderInfo1TotalStatListItemImgDet} />
                                <h4 className={style.profileInnerHeaderInfo1TotalStatListItemTitle}>
                                  {t('profileInnerHeaderInfo1TotalStatListItemTitleKDA')}
                                </h4>
                              </div>
                              <p className={style.profileInnerHeaderInfo1TotalStatListItemSubDet}>
                                {user.kda_ratio}
                              </p>
                            </li>
                            <li className={style.profileInnerHeaderInfo1TotalStatListItemDet}>
                              <div className={style.profileInnerHeaderInfo1TotalStatListItemHed}>
                                <img src={iconInfo} alt="" className={style.profileInnerHeaderInfo1TotalStatListItemImgDet} />
                                <h4 className={style.profileInnerHeaderInfo1TotalStatListItemTitle}>
                                  {t('profileInnerHeaderInfo1TotalStatListItemTitleDead')}
                                </h4>
                              </div>
                              <p className={style.profileInnerHeaderInfo1TotalStatListItemSubDet}>
                                {user.avg_deaths_per_match}
                              </p>
                            </li>
                            <li className={style.profileInnerHeaderInfo1TotalStatListItemDet}>
                              <div className={style.profileInnerHeaderInfo1TotalStatListItemHed}>
                                <img src={iconInfo} alt="" className={style.profileInnerHeaderInfo1TotalStatListItemImgDet} />
                                <h4 className={style.profileInnerHeaderInfo1TotalStatListItemTitle}>
                                  {t('profileInnerHeaderInfo1TotalStatListItemTitleHelp')}
                                </h4>
                              </div>
                              <p className={style.profileInnerHeaderInfo1TotalStatListItemSubDet}>
                                {user.most_assists_in_one_game}
                              </p>
                            </li>
                          </ul>
                        </div>

                        {/* Економіка та шкода ( урон)  */}
                        <div className={style.profileInnerEconomy}>
                          <h5 className={style.profileInnerEconomyTitle}>
                            {t('profileInnerEconomyTitle')}
                          </h5>

                          <ul className={style.profileInnerEconomyList}>
                            {/* GOLD */}
                            <li className={style.profileInnerEconomyListItem}>
                              <div className={style.profileInnerEconomyListItemHeads}>
                                <div className={style.profileInnerEconomyListItemHeadsCont}>
                                  <img src={iconInfo} alt="icon" className={style.profileInnerEconomyListItemHeadsImg} />
                                  <h5 className={style.profileInnerEconomyListItemHeadsTitle}>
                                    {t('profileInnerEconomyListItemHeadsTitleGold')}
                                  </h5>
                                </div>
                                <p className={style.profileInnerEconomyListItemSubGoldMob}>
                                  {user.avg_gold_per_min}
                                </p>
                              </div>
                              <div className={style.profileInnerEconomyListItemBack}>
                                <div className={style.profileInnerEconomyListItemBackStroke} style={{ '--value': calcPercent(user.avg_gold_per_min) }}>
                                  <span className={style.profileInnerEconomyListItemBackStrokeInfo}>
                                  </span>
                                </div>
                              </div>
                              <p className={style.profileInnerEconomyListItemSubGold}>
                                {user.avg_gold_per_min}
                              </p>
                            </li>

                            {/* DAMEG */}
                            <li className={style.profileInnerEconomyListItem}>
                              <div className={style.profileInnerEconomyListItemHeads}>
                                <div className={style.profileInnerEconomyListItemHeadsCont}>

                                  <img src={iconInfo} alt="icon" className={style.profileInnerEconomyListItemHeadsImg} />
                                  <h5 className={style.profileInnerEconomyListItemHeadsTitle}>
                                    {t('profileInnerEconomyListItemHeadsTitleDmg')}
                                  </h5>
                                </div>
                                <p className={style.profileInnerEconomyListItemSubDMGMob}>
                                  {user.avg_hero_dmg_per_min}
                                </p>
                              </div>
                              <div className={style.profileInnerEconomyListItemBack}>
                                <div className={style.profileInnerEconomyListItemBackStroke} style={{ '--value': calcPercent(user.avg_hero_dmg_per_min) }}>
                                  <span className={style.profileInnerEconomyListItemBackStrokeInfo}>
                                  </span>
                                </div>
                              </div>
                              <p className={style.profileInnerEconomyListItemSubDMG}>
                                {user.avg_hero_dmg_per_min}
                              </p>
                            </li>
                            {/* turret DMG */}
                            <li className={style.profileInnerEconomyListItem}>
                              <div className={style.profileInnerEconomyListItemHeads}>
                                <div className={style.profileInnerEconomyListItemHeadsCont}>

                                  <img src={iconInfo} alt="icon" className={style.profileInnerEconomyListItemHeadsImg} />
                                  <h5 className={style.profileInnerEconomyListItemHeadsTitle}>
                                    {t('profileInnerEconomyListItemHeadsTitleCurDmg')}
                                  </h5>
                                </div>
                                <p className={style.profileInnerEconomyListItemSubTurDMGMob}>
                                  {user.avg_turret_dmg_per_match}
                                </p>
                              </div>
                              <div className={style.profileInnerEconomyListItemBack} >
                                <div className={style.profileInnerEconomyListItemBackStroke} style={{ '--value': calcPercent(user.avg_turret_dmg_per_match) }}>

                                </div>
                              </div>
                              <p className={style.profileInnerEconomyListItemSubTurDMG}>
                                {user.avg_turret_dmg_per_match}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* ---------------- СЕРЕДНЯ ЗА МАТЧ СТАТИСТИКА --------------- */}
                      <div className={style.profileInnerTotalMatches} data-aos="fade-left">
                        {/* -------------------- СРЕДНЕЕ -------------------- */}
                        <div className={style.profileInnerTotalMatchesАverage}>
                          <h5 className={style.profileInnerTotalMatchesАverageTitle}>
                            {t('profileInnerTotalMatchesАverageTitle')}
                          </h5>

                          <ul className={style.profileInnerTotalMatchesАverageList}>
                            <li className={style.profileInnerTotalMatchesАverageListItem}>
                              <div className={style.profileInnerTotalMatchesАverageListItemHed}>
                                <span className={style.profileInnerTotalMatchesАverageListItemHed}>
                                  <img src={iconInfo} className={style.profileInnerTotalMatchesАverageListItemHedImg} alt="" />
                                  <h5 className={style.profileInnerTotalMatchesАverageListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesАverageListItemHeadTitleGold')}
                                  </h5>
                                </span>
                                <p className={style.profileInnerTotalMatchesАverageListItemHedSub}>
                                  {user.highest_gold_per_min}
                                </p>
                              </div>

                              <div className={style.profileInnerTotalMatchesАverageListItemBack} style={{ '--valueMax': calcMaxPercent(user.highest_gold_per_min) }}>
                                <span></span>
                              </div>
                            </li>
                            <li className={style.profileInnerTotalMatchesАverageListItem}>
                              <div className={style.profileInnerTotalMatchesАverageListItemHed}>
                                <span className={style.profileInnerTotalMatchesАverageListItemHed}>
                                  <img src={iconInfo} className={style.profileInnerTotalMatchesАverageListItemHedImg} alt="icon" />
                                  <h5 className={style.profileInnerTotalMatchesАverageListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesАverageListItemHeadTitleDMG')}
                                  </h5>
                                </span>
                                <p className={style.profileInnerTotalMatchesАverageListItemHedSub}>
                                  {user.highest_dmg_per_min}
                                </p>
                              </div>
                              <div className={style.profileInnerTotalMatchesАverageListItemBack} style={{ '--valueMax': calcMaxPercent(user.highest_dmg_per_min) }}>
                                <span></span>
                              </div>
                            </li>
                            <li className={style.profileInnerTotalMatchesАverageListItem}>
                              <div className={style.profileInnerTotalMatchesАverageListItemHed}>
                                <span className={style.profileInnerTotalMatchesАverageListItemHed}>

                                  <img src={iconInfo} className={style.profileInnerTotalMatchesАverageListItemHedImg} alt="icon" />
                                  <h5 className={style.profileInnerTotalMatchesАverageListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesАverageListItemHeadTitleTurDMG')}
                                  </h5>
                                </span>
                                <p className={style.profileInnerTotalMatchesАverageListItemHedSub}>
                                  {user.highest_dmg_taken_per_min}
                                </p>
                              </div>
                              <div className={style.profileInnerTotalMatchesАverageListItemBack} style={{ '--valueMax': calcMaxPercent(user.highest_dmg_taken_per_min) }}>
                                <span></span>
                              </div>
                            </li>
                          </ul>

                          {/* ДОСТИЖЕНИЯ */}
                          <div className={style.profileInnerTotalMatchesAchievement}>
                            <h5 className={style.profileInnerTotalMatchesAchievementTitle}>
                              {t('profileInnerTotalMatchesAchievementTitle')}
                            </h5>

                            <ul className={style.profileInnerTotalMatchesAchievementList}>
                              <li className={style.profileInnerTotalMatchesAchievementListItem}>
                                <div className={style.profileInnerTotalMatchesAchievementListItemHead}>
                                  <img src={iconInfo} alt="icon" className={style.profileInnerTotalMatchesAchievementListItemHeadImg} />
                                  <h6 className={style.profileInnerTotalMatchesAchievementListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesAchievementListItemHeadTitleFirst')}
                                  </h6>
                                </div>
                                <p className={style.profileInnerTotalMatchesAchievementListItemSub}>
                                  x {user.first_blood_count}
                                </p>
                              </li>
                              <li className={style.profileInnerTotalMatchesAchievementListItem}>
                                <div className={style.profileInnerTotalMatchesAchievementListItemHead}>
                                  <img src={iconInfo} alt="icon" className={style.profileInnerTotalMatchesAchievementListItemHeadImg} />
                                  <h6 className={style.profileInnerTotalMatchesAchievementListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesAchievementListItemHeadTitleDubl')}
                                  </h6>
                                </div>
                                <p className={style.profileInnerTotalMatchesAchievementListItemSub}>
                                  x {user.double_kill_count}
                                </p>
                              </li>
                              <li className={style.profileInnerTotalMatchesAchievementListItem}>
                                <div className={style.profileInnerTotalMatchesAchievementListItemHead}>
                                  <img src={iconInfo} alt="icon" className={style.profileInnerTotalMatchesAchievementListItemHeadImg} />
                                  <h6 className={style.profileInnerTotalMatchesAchievementListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesAchievementListItemHeadTitleTriple')}
                                  </h6>
                                </div>
                                <p className={style.profileInnerTotalMatchesAchievementListItemSub}>
                                  x {user.triple_kill_count}
                                </p>
                              </li>
                              <li className={style.profileInnerTotalMatchesAchievementListItem}>
                                <div className={style.profileInnerTotalMatchesAchievementListItemHead}>
                                  <img src={iconInfo} alt="icon" className={style.profileInnerTotalMatchesAchievementListItemHeadImg} />
                                  <h6 className={style.profileInnerTotalMatchesAchievementListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesAchievementListItemHeadTitleLegend')}
                                  </h6>
                                </div>
                                <p className={style.profileInnerTotalMatchesAchievementListItemSub}>
                                  x {user.legendary_count}
                                </p>
                              </li>
                              <li className={style.profileInnerTotalMatchesAchievementListItem}>
                                <div className={style.profileInnerTotalMatchesAchievementListItemHead}>
                                  <img src={iconInfo} alt="icon" className={style.profileInnerTotalMatchesAchievementListItemHeadImg} />
                                  <h6 className={style.profileInnerTotalMatchesAchievementListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesAchievementListItemHeadTitleManiac')}
                                  </h6>
                                </div>
                                <p className={style.profileInnerTotalMatchesAchievementListItemSub}>
                                  x {user.maniac_count}
                                </p>
                              </li>
                              <li className={style.profileInnerTotalMatchesAchievementListItem}>
                                <div className={style.profileInnerTotalMatchesAchievementListItemHead}>
                                  <img src={iconInfo} alt="icon" className={style.profileInnerTotalMatchesAchievementListItemHeadImg} />
                                  <h6 className={style.profileInnerTotalMatchesAchievementListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesAchievementListItemHeadTitleMVP')}
                                  </h6>
                                </div>
                                <p className={style.profileInnerTotalMatchesAchievementListItemSub}>
                                  x {user.mvp_count}
                                </p>
                              </li>
                              <li className={style.profileInnerTotalMatchesAchievementListItem}>
                                <div className={style.profileInnerTotalMatchesAchievementListItemHead}>
                                  <img src={iconInfo} alt="icon" className={style.profileInnerTotalMatchesAchievementListItemHeadImg} />
                                  <h6 className={style.profileInnerTotalMatchesAchievementListItemHeadTitle}>
                                    {t('profileInnerTotalMatchesAchievementListItemHeadTitleMVPLoss')}
                                  </h6>
                                </div>
                                <p className={style.profileInnerTotalMatchesAchievementListItemSub}>
                                  x {user.mvp_loss_count}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*-------------------- ДЕТАЛІ ГРИ -------------------- */}
              <div className={nav == 2 ? style.profileInnerHeaderInfo : style.profileInnerHeaderInfoDis}>
                <div className={style.profileInnerHeaderInfo2Nav}>
                  В Розробці!
                </div>
              </div>

              {/* -------------------- НАЛАШТУВАННЯ -------------------- */}
              <div className={nav == 3 ? style.profileInnerHeaderInfo : style.profileInnerHeaderInfoDis}>
                <div className={style.profileInnerHeaderInfo3Nav}>
                  В Розробці!
                </div>
              </div>
              {/* -------------------- ADMIN PANEL -------------------- */}
              {selected && (
                <div className={nav == 4 ? style.profileInnerHeaderInfo : style.profileInnerHeaderInfoDis}>
                  <div className={style.profileInnerHeaderInfo4Nav}>
                    <div>
                      <input type="text" className={style.profileInnerHeaderInfo4NavInp} value={search} onChange={e => setSearch(e.target.value)} placeholder='Пошук по Ордену' />
                      <ul className={style.profileInnerHeader4List}>
                        {
                          filterOrders.map(item => (
                            <li className={style.profileInnerHeader4ListItem} key={item.order_id}>
                              <h5 className={style.profileInnerHeader4ListItemTitle}>
                                order ID: {item.order_id}
                              </h5>
                              <p className={style.profileInnerHeader4ListItemDate}>
                                {item.date_created}
                              </p>
                              <p className={style.profileInnerHeader4ListItemDate}>
                                Status: {item.status}
                              </p>
                              <p className={style.profileInnerHeader4ListItemDate}>
                                Total: {item.total} {item.currency}
                              </p>

                              <div className={style.profileInnerHeader4ListItemCont}>
                                <h4 className={style.profileInnerHeader4ListItemContTitle}>
                                  Producr info:
                                </h4>
                                {
                                  item.items.map(i => (<>

                                    <h5 className={style.profileInnerHeader4ListItemTitle}>
                                      Name: {i.product}
                                    </h5>
                                    <p className={style.profileInnerHeader4ListItemSub}>
                                      Quantity: {i.quantity}
                                    </p>
                                  </>

                                  ))
                                }
                              </div>
                            </li>
                          ))
                        }
                      </ul>
                    </div>

                    <div className={style.profileInnerHeaderInfoProd}>
                      <h3 className={style.profileInnerHeaderInfoProdTitle}>
                        {product.Product_Name}
                      </h3>
                      <div>
                        <input type="text" className={style.profileInnerHeaderInfo4NavInp} />
                        <ul className={style.profileInnerHeaderInfoProdList}>
                          {
                            product.map(item => (
                              <li className={style.profileInnerHeaderInfoProdListItem} key={item.variation_id}>
                                <h4 className={style.profileInnerHeaderInfoProdListItemTitle}>
                                  {item.variation_name}
                                </h4>
                                <p className={style.profileInnerHeaderInfoProdListItemSub}>
                                  ID: {item.variation_id}
                                </p>
                                <p className={style.profileInnerHeaderInfoProdListItemSub}>
                                  Price: {item.variation_price}
                                </p>
                                <p className={style.profileInnerHeaderInfoProdListItemSub}>
                                  Stock Status: {item.stock_status}
                                </p>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Profile;