import style from '../assets/style/index.module.css'
// import logo from '../page/Header/img/logo.png'
// import star from '../page/img/Star.svg'

const Marquee = ({ images, styles }) => {
  return <>
    <div className={styles}>
      <div className={style.strokeTrack}>
        <div className={style.strokeGroup}>
          {images.map((img, i) => (
            <div key={i}>
              <img key={i} src={img} className={style.strokeImgStar} alt="" />
              <img key={i + images.length} src={img - 1} className={style.strokeImgLogo} alt="" />
            </div>
          ))}
        </div>
        <div className={style.strokeGroupRev}>
          {images.map((img, i) => (
            <div key={i}>
              <img key={i} src={img} className={style.strokeImgStar} alt="" />
              <img key={i + images.length} src={img - 1} className={style.strokeImgLogo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
};

export default Marquee
