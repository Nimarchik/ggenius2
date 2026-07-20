import { useEffect, useState } from "react";
import style from '../../shared/styles/index.module.css';
import { NavLink, useParams } from "react-router-dom";
import { useAuth } from "../../domains/auth/useAuth";
import { Trans } from "react-i18next";
import { useLang } from "../../shared/i18n/hooks/useLang";

const Donate = () => {
  const { t } = useLang()
  const lang = localStorage.getItem('value');
  const auth = useAuth()
  const { user } = auth || {};
  const [shop, setShop] = useState(null);
  const { id } = useParams();
  const [gameId, setGameId] = useState("");
  const [server, setServer] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingChec, setLoadingChec] = useState(false);

  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);

  const [nick, setNick] = useState(null)

  const [tgId, setTgId] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/mlbb/get_posts.php?table=shop_packages')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(p => String(p.item_id) === id);
        setShop(selected);
      })
      .catch(err => console.error(err));
  }, [id]);



  useEffect(() => {
    if (user?.telegram_id) {
      setTgId(user.telegram_id);
    }
  }, [user]);

  async function handleCheck() {
    setNick(null);
    setError(null);

    if (!gameId.trim()) {
      setError('Enter Game ID');
      return;
    }

    setLoadingChec(true);
    try {
      const resp = await fetch('http://localhost:8000/pay/get-nickname.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: gameId.trim(), additional_target: server })
      });

      const json = await resp.json();

      // безопасное извлечение ника из возможных форматов
      let extracted = null;
      if (json && json.result === true) {
        if (typeof json.data === 'string') extracted = json.data;
        else if (json.data && typeof json.data === 'object') {
          extracted = json.data.nick ?? json.data.nickname ?? json.data.name ?? null;
        }
      }

      if (extracted) {
        setNick(String(extracted));
        setError(null);
      } else {
        const msg = (json && (json.message || (json.raw && json.raw.message))) || 'Not found';
        setError(String(msg));
        setNick(null);
      }
    } catch (e) {
      setError(e && e.message ? e.message : 'Network error');
      setNick(null);
    } finally {
      setLoadingChec(false);
    }
  }


  if (!shop) return (
    <section className={style.donate}>
      <div className={style.container}>
        <div className={style.downloads}>
          <div className={style.loading}></div>
        </div>
      </div>
    </section>
  );


  const handlePay = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!gameId.trim()) {
      newErrors.gameId = t('errGameId');
    }
    if (!server.trim()) {
      newErrors.server = t('errServer');
    }
    if (!checked) {
      newErrors.offer = t('errCheck');
    }

    // если есть ошибки — не отправляем форму
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/pay/create_orders.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          product_id: shop.vip_service_code,
          game_id: gameId,
          server: server,
          tg_user_id: tgId || '',
          provider: "mono"
        })
      });



      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        alert("Ошибка: " + text);
        return;
      }

      if (data.pageUrl) {
        window.location.href = data.pageUrl;
      } else {
        alert("Ошибка: " + (data.error || "нет ссылки на оплату"));
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка при создании заказа");
    } finally {
      setLoading(false);
    }
  };






  return (
    <section className={style.donate}>
      <div className={style.container}>
        <div className={style.donateInner}>


          <div className={style.donateInnerinfoForm}>
            <div className={style.productsInnerListItemDon}>
              <h2 className={style.productsInnerListItemtitle}>
                {shop.emoji}{shop.name}
                <span className={style.productsInnerListItemtitleSpan}>
                  {shop.bonus_label || ''}
                </span>
              </h2>
              <p className={style.productsInnerListItemSub}>{shop.price_uah} UAH</p>
            </div>

            <form className={style.donateInnerForm} onSubmit={handlePay}>
              <input type="hidden" name="vip_service_code" value={shop.vip_service_code} />
              <input type="hidden" name="tg_user_id" value={tgId || ''} />
              <label className={style.donateInnerFormLabel}>
                <h3 className={gameId ? style.donateInnerFormLabelTitleIdActive : style.donateInnerFormLabelTitleId}>
                  Game ID
                </h3>
                <input
                  className={style.donateInnerInpId}
                  name="game_id"
                  value={gameId}
                  onChange={e => setGameId(e.target.value)}

                />
                <div className={errors.gameId ? style.inpErrorActive : style.inpError}>{errors.gameId}</div>
              </label>
              <label className={style.donateInnerFormLabelServ}>
                <h3 className={server ? style.donateInnerFormLabelTitleServActive : style.donateInnerFormLabelTitleServ}>
                  Game Server
                </h3>
                <input
                  className={style.donateInnerInpServ}
                  name="server"
                  value={server}
                  onChange={e => setServer(e.target.value)}
                  placeholder=" "

                />
                <div className={errors.server ? style.inpErrorActive : style.inpError}>{errors.server}</div>
              </label>

              <button className={style.donateInnerBtn} type="submit" >
                {loading ? "Загрузка..." : "Оплатити"}
              </button>
              <div className={style.donateInnerCheckNick}>
                <button onClick={handleCheck} className={style.donateInnerBtn}  >
                  {loadingChec ? "Перевіряємо..." : "Перевірити Game ID"}
                </button>
                <p className={nick == null ? style.donateInnerCheckNickSubDis : style.donateInnerCheckNickSub}>
                  {loadingChec && <div className={style.checking}>
                    {t('checking')}
                  </div>}
                  {nick && <div>
                    <div className={style.donateInnerCheckNickSubUser}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      {nick}
                    </div>
                    {t('donateInnerCheckNickSub')}
                  </div>}
                  {error && <div style={{ color: 'red' }}>{error}</div>}
                </p>
              </div>
              <label htmlFor='offer' className={style.donateInnerFormLabelChec}>
                <div className={style.donateInnerFormLabelChecA}>
                  <input
                    className={style.donateInnerFormInpChec}
                    type="checkbox"
                    checked={checked}
                    id="offer"

                    onChange={(e) => setChecked(e.target.checked)}
                  />

                  <span className={style.donateInnerFormSpan}
                    role="checkbox"
                    aria-checked={checked}
                    tabIndex={0}

                    onClick={() => setChecked(checked)}
                  >
                    <svg className={checked ? style.donateInnerFormSpanSvgActive : style.donateInnerFormSpanSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="transparent" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>

                  </span>

                  <p className={style.donateInnerFormInpSub}>
                    Підтверджуючи замовлення, я приймаю <span>умови </span>
                    <NavLink to={`/Privacy?lang=${lang}`} className={style.donateInnerFormInpSubLink}>користувальницької угоди</NavLink> <span>та </span>
                    <NavLink to={`/Offer?lang=${lang}`} className={style.donateInnerFormInpSubLink}>публічної оферти</NavLink>.
                  </p>
                </div>
                <div className={errors.offer ? style.inpErrorActive : style.inpError}>{errors.offer}</div>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
