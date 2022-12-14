import Head from 'next/head'
// switch locale temporary
import useTranslate  from "../libs/useTranslate";
// HTML parse
import parse from 'html-react-parser';

// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

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
    src: "icon-html5.png",
    href: "",
  },
  {
    name: "CSS",
    src: "icon-css3.png",
    href: "",
  },
  {
    name: "TypeScript",
    src: "icon-ts.png",
    href: "",
  },
  {
    name: "JavaScript",
    src: "icon-js.png",
    href: "",
  },
  {
    name: "Node.js",
    src: "icon-nodejs.png",
    href: "",
  },
  {
    name: "PHP",
    src: "icon-php.png",
    href: "",
  },
]

export default function Home() {

  const t = useTranslate('ja')

  return (
    <div className={``}>
      <Head>
        <title>Profile - ysk3da</title>
        <meta name="description" content="profie - ysk3da" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`max-w-3xl mx-auto`}>
        <h1 className={`text-xl`}>
          Profile - ysk3da
        </h1>
        <p className='font-zendots animate-tracking-in-expand'>
          UNDERBARFACTORY
        </p>
        <section>
          <p>
            {parse(t.TOPLEAD.replace(/\n/g, '<br/>'))}
          </p>
        </section>
        <section className='mb-4'>
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
    </div>
  )
}
