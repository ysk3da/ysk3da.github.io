'use client';
import { Zen_Dots, BIZ_UDGothic } from '@next/font/google' // add Google fonts

const zenDots = Zen_Dots({
  weight: "400",
  style: "normal",
  preload: true,
  fallback: ["Zen Dots"],
  adjustFontFallback: true,
  subsets: ["latin"]
});

const bizUdGothic = BIZ_UDGothic(
  {
    weight: ["400", "700"],
    style: "normal",
    preload: true,
    fallback: ['BIZ UDGothic', 'sans-serif'],
    adjustFontFallback: true,
    subsets: ["japanese"]
  }
);

export default function Head() {
  return (
    <>
      <title>Profile - ysk3da</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <style jsx global>
        {`
          :root {
            --font-zendots: ${zenDots.style.fontFamily};
            --font-bizudg: ${bizUdGothic.style.fontFamily};
          }

          html {
            font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
          }
        `}
      </style>
    </>
  )
}
