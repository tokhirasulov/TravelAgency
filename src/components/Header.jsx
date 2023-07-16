import style from '../../style/Header.module.css'
import { Dropdown, Space } from 'antd';

const Header = () => {
    const items = [
        {
          label: <li className='bold'>Home</li>,
          key: '0',
        },
        {
          label: <li>Trips</li>,
          key: '1',
        },
        {
          label: <li>About</li>,
          key: '3',
        },
        {
          label: <li>Support</li>,
          key: '4',
        },
        {
          label: <li>Travel</li>,
          key: '5',
        },
      ];
    return (
        <div className={style.hero}>
            <header >
                <nav className={style.headerNav}>
                    <img src="../../public/logo.png" alt="LogoType of Expedia"  className={style.logo}/>
                    <ul>
                        <li className='bold'>Home</li>
                        <li>Trips</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Travel</li>
                    </ul>
                    <div className={style.dropdownBtn}>
                    <Dropdown className={style.dropdown}
                        menu={{
                        items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                        <Space className='bold'>
                            Home
                        </Space>
                        </a>
                    </Dropdown>
                    <button className={`defaultBtn ${style.signUp}`}>Sign Up</button>
                    </div>
                </nav>
            </header>
            <main>
                <section className={style.heroSection}>
                    <h1 className={style.heroTitle}>It Matters Who You Travel With</h1>
                    <p>We want you to feel confident in the travel experience you will have with us.</p>
                </section>
            </main>
        </div>
    )
}

export default Header