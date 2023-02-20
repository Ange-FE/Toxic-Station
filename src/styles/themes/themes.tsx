import { ReactNode } from "react"
import { toAmount } from "@terra.kitchen/utils"

/* animation */
import AnimationLight from "./Light/Broadcasting.png"
import AnimationDark from "./Dark/Broadcasting.png"
import AnimationBlossom from "./ToxicRose/Broadcasting.png"
import AnimationMoon from "./Moon/Broadcasting.png"
import AnimationWhale from "./Whale/Broadcasting.png"
import AnimationMadness from "./Madness/Broadcasting.png"
import AnimationValentines from "./Valentinesday/Broadcasting.png"
import AnimationLettuce from "./Lettuce/Broadcasting.png"

/* favicon */
import FaviconLight from "./Light/favicon.svg"
import FaviconDark from "./Dark/favicon.svg"
import FaviconBlossom from "./ToxicRose/favicon.svg"
import FaviconMoon from "./Moon/favicon.svg"
import FaviconWhale from "./Whale/favicon.svg"
import FaviconMadness from "./Madness/favicon.svg"
import FaviconValentines from "./Valentinesday/favicon.svg"
import FaviconLettuce from "./Lettuce/favicon.svg"

/* preview */
import { ReactComponent as PreviewLight } from "./Light/preview.svg"
import { ReactComponent as PreviewDark } from "./Dark/preview.svg"
import { ReactComponent as PreviewBlossom } from "./ToxicRose/preview.svg"
import { ReactComponent as PreviewMoon } from "./Moon/preview.svg"
import { ReactComponent as PreviewWhale } from "./Whale/preview.svg"
import { ReactComponent as PreviewMadness } from "./Madness/preview.svg"
import { ReactComponent as PreviewToxic } from "./Toxic/preview.svg"
import { ReactComponent as PreviewValentinesday } from "./Valentinesday/preview.svg"
import { ReactComponent as PreviewLettuce } from "./Lettuce/preview.svg"

export interface Theme {
  name: string
  unlock: Amount
  animation: string
  favicon: string
  preview: ReactNode
  donutColors?: string[]
}

//let easterDay: number = 0;
let easterMonth: number = 0;



/*
function Easter(Y: number) {
  var C = Math.floor(Y / 100);
  var N = Y - 19 * Math.floor(Y / 19);
  var K = Math.floor((C - 17) / 25);
  var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
  I = I - 30 * Math.floor((I / 30));
  I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
  var J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
  J = J - 7 * Math.floor(J / 7);
  var L = I - J;
  var M = 3 + Math.floor((L + 40) / 44);
  var D = L + 28 - 31 * Math.floor(M / 4);
  easterDay = D;
  easterMonth = M;
  return padout(M) + '.' + padout(D);

}

function padout(number: number) { return (number < 10) ? '0' + number : number; }
*/



const getThemes = () => {

  let currentTheme = [
    {
      name: "toxic",
      unlock: toAmount("0"),
      animation: AnimationMadness,
      favicon: FaviconMadness,
      preview: <PreviewToxic />,
    },

    {
      name: "light",
      unlock: toAmount("0"),
      animation: AnimationLight,
      favicon: FaviconLight,
      preview: <PreviewLight />,
    },
    {
      name: "dark",
      unlock: toAmount("0"),
      animation: AnimationDark,
      favicon: FaviconDark,
      preview: <PreviewDark />,
    },
    {
      name: "toxicRose",
      unlock: toAmount("0"),
      animation: AnimationBlossom,
      favicon: FaviconBlossom,
      preview: <PreviewBlossom />,
    },
    {
      name: "moon",
      unlock: toAmount("0"),
      animation: AnimationMoon,
      favicon: FaviconMoon,
      preview: <PreviewMoon />,
    },
    {
      name: "whale",
      unlock: toAmount("0"),
      animation: AnimationWhale,
      favicon: FaviconWhale,
      preview: <PreviewWhale />,
    },
    {
      name: "madness",
      unlock: toAmount("0"),
      animation: AnimationMadness,
      favicon: FaviconMadness,
      preview: <PreviewMadness />,
    },
    {
      name: "lettuce",
      unlock: toAmount("0"),
      animation: AnimationLettuce,
      favicon: FaviconLettuce,
      preview: <PreviewLettuce/>,
    },
  ]


  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const day: number = +dd;
  const month: number = +mm;
  //const curentYear = today.getFullYear();

  //console.log("Easter 2023"+(Easter(curentYear)))
  // console.log("easterDay:"+easterDay);
  //console.log("easterMonth:"+easterMonth);

  const easterPlusOne = 0;
  const weekBeforeEaster = 0;
  if (month === 2 && day >= 7 && day < 15) {
    currentTheme.unshift({
      name: "valentines",
      unlock: toAmount("0"),
      animation: AnimationValentines,
      favicon: FaviconValentines,
      preview: <PreviewValentinesday />,

    })
  } else if (month === easterMonth && day >= weekBeforeEaster && day < easterPlusOne) {
    // easter theme 
  } else if (month === 10 && day >= 24 && day <= 31) {
    // halloween theme 
  }
  else if (month === 12 && day >= 18 && day <= 25) {
    // christmas theme
  }
  return currentTheme
}

export const themes: Theme[] = getThemes()


export default themes


/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 116">
  <path fill="#1C1C1C" d="M0 0h220v116H0z"/> 
  <path fill="#FFFFFF" d="M0 0h220v18H0z"/> Top heading 
  <path fill="#43DA25" d="M0 0h50v116H0z"/> Left Navigation Panel 
  <path fill="#3C3C3C" d="M102 33h65a4 4 0 0 1 4 4v59a4 4 0 0 1-4 4h-65a4 4 0 0 1-4-4V37a4 4 0 0 1 4-4Z"/>
  <path fill="#05660d" d="M112 82h46a5 5 0 1 1 0 10h-46a5 5 0 1 1 0-10Z"/>
</svg>

*/