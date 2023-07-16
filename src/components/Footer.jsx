import style from '../../style/Footer.module.css'


const Footer = () => {
    const footFeat = ['About us', 'Jobs', 'List your property', 'Partnership', 'Advertising']
    const footEl = footFeat.map(el => <a href='#'><p>{el}</p></a>)
    return(
        <footer>
            <div className={style.footHeader}>
                <div className={style.rights}>
                    <img src="../../public/logo.png" alt="" />
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
                            <a href='https://www.instagram.com/expedia/' target='_blank'> <img src="../../public/Group-1.png" alt="Instagram" /></a>
                            <a href='https://www.twitter.com' target='_blank'> <img src="../../public/Group-2.png" alt="Twitter" /></a>
                            <a href='https://www.linkedin.com/in/expedia' target='_blank'> <img src="../../public/Group.png" alt="Linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer