import style from '../../style/Content.module.css'
import canada from '../../public/canada.png'
import turkey from '../../public/turkey.png'
import indonesia from '../../public/indonesia.png'
import japan from '../../public/japan.png'
import iceland from '../../public/iceland.png'
import pMarket from '../../public/pMarket.png'
import appStore from '../../public/appStore.png'


const Content = () => {
    return (
        <div className={style.content}>
            <h1>Top Most Popular Destinations</h1>
            <div className={style.container}>
                <div className={`${style.imgContainer1}  ${style.travelImg}`}>
                    <img src={canada} alt="Picture of the Canada" />
                    <div className={style.imgDesc}>
                        <h3>Moraine Lake</h3>
                        <p>Alberta, Canada</p>
                    </div>
                </div>
                <div className={`${style.imgContainer2} ${style.travelImg}`}>
                    <img src={turkey} alt="Picture of the Turkey" />
                    <div className={style.imgDesc}>
                        <h3>Cappadocia</h3>
                        <p>Anatolia, <br />Turkey</p>
                    </div>
                </div>
                <div className={`${style.imgContainer3} ${style.travelImg}`}>
                    <img src={indonesia} alt="Picture of the Indonesia" />
                    <div className={style.imgDesc}>
                        <h3>Ubud</h3>
                        <p>Bali, <br />Indonesia</p>
                    </div>
                </div>
                <div className={`${style.imgContainer4} ${style.travelImg}`}>
                    <img src={japan} alt="Picture of the Japan" />
                    <div className={style.imgDesc}>
                        <h3>Hokokuji Bamboo Forest</h3>
                        <p>Kamakura, Japan</p>
                    </div>
                </div>
                <div className={`${style.imgContainer5} ${style.travelImg}`}>
                    <img src={iceland} alt="Picture of the Iceland" />
                    <div className={style.imgDesc}>
                        <h3>Kirkjufell</h3>
                        <p>Grundarfjordur's, Iceland</p>
                    </div>
                </div>
            </div>
            <div className={style.dowloadRef}>
                <h1>Dowload <br/>Expedia App!</h1>
                <div className={style.digStore}>
                    <a href='https://play.google.com/store/apps/details?id=com.expedia.bookings' target='_blank'>
                        <img src={pMarket} alt="Icon of Play Market" className={style.playM}/></a>
                    <a href='https://apps.apple.com/uz/app/expedia-travel-hotel-flight/id427916203' target='_blank'>
                        <img src={appStore} alt="Icon of App Store" className={style.appS}/></a>
                </div>
            </div>
        </div>
    )
}

export default Content