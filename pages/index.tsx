import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const adobeArr = [
  {
    name: "Photoshop",
    src: "icon-ps.png",
    href: "",
  },
  {
    name: "Illustrator",
    src: "icon-ai.png",
    href: "",
  },
  {
    name: "XD",
    src: "icon-xd.png",
    href: "",
  },
]

const programArr = [
  {
    name: "HTML",
    src: "icons8-html-5-480.png",
    href: "",
  },
  {
    name: "CSS",
    src: "icons8-css3-480.png",
    href: "",
  },
  {
    name: "JavaScript",
    src: "icons8-javascript-480.png",
    href: "",
  },
  {
    name: "PHP",
    src: "icons8-php-500.png",
    href: "",
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile - ysk3da</title>
        <meta name="description" content="profie - ysk3da" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`text-xl`}>
          Profile - ysk3da
        </h1>

        <p className='my-[10rem] text-[32px]'>
          Under constructing
        </p>

        <section>
          <h2>Programing</h2>
          <ul className={`flex`}>
          {programArr.map((item, index)=>{
              return(
                <li className={`px-1`} key={index}>
                  <a href={item.href}>
                    <div className={`flex justify-center items-center`}>
                      <img src={`./images/icons/programing/${item.src}`} width={48} alt={item.name} />
                    </div>
                    <div className='text-center'>{item.name}</div>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
        <section>
          <h2>Adobe Tools</h2>
          <ul className={`flex`}>
            {adobeArr.map((item, index)=>{
              return(
                <li className={`px-1`} key={index}>
                  <a href={item.href}>
                    <div className={`flex justify-center items-center`}>
                      <img src={`./images/icons/adobe/${item.src}`} width={48} alt={item.name} />
                    </div>
                    <div className='text-center'>{item.name}</div>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
