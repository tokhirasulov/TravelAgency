import style from '../../style/Footer.module.css'
import logo from "../../public/logo.png"
import instagram from "../../public/instagram"
import twitter from "../../public/twitter"
import linkedin from "../../public/linkedin"

const Footer = () => {
    const footFeat = ['About us', 'Jobs', 'List your property', 'Partnership', 'Advertising']
    const footEl = footFeat.map(el => <a href='#'><p>{el}</p></a>)
    return(
        <footer>
            <div className={style.footHeader}>
                <div className={style.rights}>
                    <img src={logo} alt="Logotype" />
                    <p className={style.copyRight}>© 2021 Expedia, Inc., an Expedia Group company. All rights reserved. </p>
                </div>
                <div  className={style.footContain}>
                    <h2>Company</h2>
                    {footEl}
                </div>
                <div  className={style.footContain}>
                    <h2>Explore</h2>
                    {footEl}
                </div>
                <div className={style.footContain}> 
                    <h2>Term and Policies</h2>
                    {footEl}
                </div>
                <div  className={style.footContain}>
                    <h2>Help</h2>
                    {footEl}
                </div>
                <div  className={style.footContain}>
                    <h2>Get in touch</h2>
                    <div className={style.faq}>
                        <div className={style.faqText}>
                        <a href='#'><p>Question or feedback?</p></a>
                        <a href='#'><p>We’d love to hear from you</p></a>
                        </div>
                        <div className={style.icons}>
                            <a href='https://www.instagram.com/expedia/' target='_blank'> <img src={instagram} alt="Instagram" /></a>
                            <a href='https://www.twitter.com' target='_blank'> <img src={twitter} alt="Twitter" /></a>
                            <a href='https://www.linkedin.com/in/expedia' target='_blank'> <img src={linkedin} alt="Linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer