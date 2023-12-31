import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articals="articles"[
    {
    "soutce": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Jon Fingas",
    "title": "The best multi-device wireless charging pads for 2023",
    "description": "You probably own a ton of gear that supports wireless charging now, but if you want to make your setup as cordless as possible, a single-device pad just won't cut it. There are tons of multiple-item wireless chargers available now, but picking one can be a he…",
    "url": "https://www.engadget.com/best-multi-device-wireless-charging-pads-120557582.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/bBG1V20PTM4vrf7Fvecl0Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-04/fc254730-c7f1-11ec-bafd-8da078ac3742",
    "publishedAt": "2023-11-01T12:05:57Z",
    "content": "You probably own a ton of gear that supports wireless charging now, but if you want to make your setup as cordless as possible, a single-device pad just won't cut it. There are tons of multiple-item … [+6475 chars]"
    },
    {
    "soutce": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Mariella Moon",
    "title": "Google and Match Group settle antitrust case before it goes to trial",
    "description": "The antitrust lawsuit Epic Games and Match Group have filed against Google was supposed to go to trial on November 6, but now it looks like the video game developer might go at it alone. Google and Match, the parent company of Tinder, OkCupid and Hinge, have …",
    "url": "https://www.engadget.com/google-and-match-group-settle-antitrust-case-before-it-goes-to-trial-041158809.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/2.umw5DEZTxqv1czt7En9A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-10/871dbd80-7864-11ee-9f3f-9642d3093703",
    "publishedAt": "2023-11-01T04:11:58Z",
    "content": "The antitrust lawsuit Epic Games and Match Group have filed against Google was supposed to go to trial on November 6, but now it looks like the video game developer might go at it alone. Google and M… [+2505 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Android Central"
    },
    "author": "michael.hicks@futurenet.com (Michael L Hicks)",
    "title": "Apple and Samsung lost market share to a phone brand you've never heard of",
    "description": "Samsung, Apple, Xiaomi, and OPPO still claim the top four spots, but Transsion has leaped past Huawei and vivo for the fifth spot in global phone sales.",
    "url": "https://www.androidcentral.com/phones/canalys-q3-2023-global-smartphone-sales",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/jSa5GjRPha2w9eazo8nnQS-1200-80.jpg",
    "publishedAt": "2023-11-01T01:00:09Z",
    "content": "<ul><li>Worldwide smartphone sales in Q3 2023 hit about 300 million, a 1% dip compared to last year, according to Canalys. </li><li>Apple, Samsung, and OPPO all lost worldwide market share compared t… [+3041 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Android Central"
    },
    "author": "techkritiko@gmail.com (Jay Bonggolto)",
    "title": "Pixel's Car crash detection finally expands to five more countries",
    "description": "Google has had a car crash detection on its Pixel phones for quite a while, and it's finally adding support for more markets.",
    "url": "https://www.androidcentral.com/phones/pixel-car-crash-detection-expands-to-more-countries",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/G2vaeYP5DXV6jGEb9wGzdf-1200-80.jpg",
    "publishedAt": "2023-11-01T10:35:00Z",
    "content": "<ul><li>Pixel's Car crash detection is now available in five additional countries, including India, Austria, Belgium, Portugal, and Switzerland.</li><li>However, the regional expansion applies only t… [+2285 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "CNET"
    },
    "author": "Max McHone",
    "title": "USB-C AirPods Pro 2 Return to Just $190 at Amazon Ahead of Black Friday - CNET",
    "description": "That saves you 24% compared to the Apple Store price, and is just $1 more than the all-time lowest price we've seen.",
    "url": "https://www.cnet.com/deals/usb-c-airpods-pro-2-return-to-just-190-at-amazon-ahead-of-black-friday/",
    "urlToImage": "https://www.cnet.com/a/img/resize/1ddf481268674ff0c5f1334ceeb783b140c79bbb/hub/2023/09/18/bf25d3e2-64fc-4059-89bf-f887e72cd044/airpods-pro-2-usb-c.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-11-01T13:04:25Z",
    "content": "The second-gen AirPods Pro are some of our absolute favorite wireless earbuds on the market. And back in September, Apple made some slight improvements, including improved dust resistance, lossless a… [+1241 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "CNET"
    },
    "author": "Max McHone",
    "title": "Best Buy's 1-Day Sale Offers Up to $200 Off the Still-Excellent Galaxy Tab S8 - CNET",
    "description": "Save yourself some cash by grabbing the older, but still great, Galaxy Tab S8.",
    "url": "https://www.cnet.com/deals/best-buys-1-day-sale-offers-up-to-200-off-the-still-excellent-galaxy-tab-s8/",
    "urlToImage": "https://www.cnet.com/a/img/resize/0823e26c8c9247a31628798c24f719166019c99d/hub/2023/02/21/b2be8d4b-816a-404f-a29e-c2d9c8a38762/galaxy-tab-s8.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-11-01T12:56:01Z",
    "content": "If you want to buy a tablet but don't want to spend over the odds getting into the Apple ecosystem, Samsung makes some excellent Android tablets worth considering. While the newest Galaxy Tab S9 is a… [+1245 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "Bloomberg: 2024 Apple Watch to Gain Blood Pressure Monitoring and Sleep Apnea Detection",
    "description": "Apple plans to add blood pressure monitoring and sleep apnea detection to Apple Watch in 2024, according to Bloomberg's Mark Gurman.\n\n\n\n\n\nIn a report covering the arc of Apple's heath-related ambitions, Gurman outlines the first iteration of the company's \"pa…",
    "url": "https://www.macrumors.com/2023/11/01/2024-apple-watch-blood-pressure-sleep-apnea/",
    "urlToImage": "https://images.macrumors.com/t/pVBvl-VPaeZH8xg2tqA-k2Lsl-w=/1960x/article-new/2023/08/apple-watch-series-9-display.jpeg",
    "publishedAt": "2023-11-01T12:15:27Z",
    "content": "Apple plans to add blood pressure monitoring and sleep apnea detection to Apple Watch in 2024, according to Bloomberg's Mark Gurman.\r\nIn a report covering the arc of Apple's heath-related ambitions, … [+2640 chars]"
    },
    {
    "soutce": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Beatrice Nolan",
    "title": "OpenAI CEO Sam Altman once said the only time he ever 'froze' was when he met his childhood idol Steve Jobs",
    "description": "In a resurfaced interview clip, published on CNN's website, Sam Altman described his nervousness at meeting the Apple cofounder in 2008.",
    "url": "https://www.businessinsider.com/sam-altman-froze-met-steve-jobs-openai-2023-11",
    "urlToImage": "https://i.insider.com/654243ef3cc84b4dfaf95014?width=1200&format=jpeg",
    "publishedAt": "2023-11-01T13:30:46Z",
    "content": "Sam Altman was startled after coming face-to-face with his hero.Kevin Dietsch/Getty Images\r\n<ul><li>OpenAI CEO Sam Altman said he let his nerves get the better of him when he met Steve Jobs. </li><li… [+1586 chars]"
    },
    {
    "soutce": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Matthew Fox",
    "title": "Here's the 'most important metric' as Wall Street gears up for Apple's upcoming earnings report",
    "description": "Apple should still command a premium valuation as investors \"continue to perceive the company to be more resilient to the macro,\" JPMorgan said.",
    "url": "https://markets.businessinsider.com/news/stocks/apple-stock-price-q4-earnings-preview-wall-street-aapl-china-2023-10",
    "urlToImage": "https://i.insider.com/65414a9436d588dc55c71d03?width=1200&format=jpeg",
    "publishedAt": "2023-11-01T11:00:01Z",
    "content": "Customers trying out Apple's iPhone 15 at an Apple store in Shanghai, China.CFOTO/Future Publishing via Getty Images\r\n<ul>\n<li>Apple is scheduled to report its fiscal fourth-quarter earnings on Thurs… [+4065 chars]"
    },
    {
    "soutce": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Huileng Tan,George Glover",
    "title": "The US economy is surging - but problems elsewhere could still torpedo profits for big companies like Apple and Tesla",
    "description": "China's slowing economy and the war between Israel and Hamas are spooking top American executives despite the US's stellar GDP numbers.",
    "url": "https://www.businessinsider.com/us-economy-surging-problems-elsewhere-risks-american-companies-apple-tesla-2023-10",
    "urlToImage": "https://i.insider.com/653fadee356802a56be743d7?width=1200&format=jpeg",
    "publishedAt": "2023-11-01T10:09:28Z",
    "content": "Tesla CEO Elon Musk at the EV maker's Shanghai gigafactory in 2019.Aly Song/Reuters\r\n<ul>\n<li>The US economy is surging, with growth coming in at a hotter-than-expected 4.9% for the third quarter.</l… [+4983 chars]"
    },
    {
    "soutce": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Matthew Loh",
    "title": "Telegram rarely bans channels. Israel-Gaza forced it to step in.",
    "description": "Telegram, which is known for its message encryption and lax moderation, restricted two official Hamas channels on Android devices earlier this month.",
    "url": "https://www.businessinsider.com/telegram-channel-ban-israel-gaza-dagestan-russia-airport-durov-2023-10",
    "urlToImage": "https://i.insider.com/65409f8c96f7540cd069f15b?width=1200&format=jpeg",
    "publishedAt": "2023-11-01T09:05:43Z",
    "content": "Pro Palestinian protesters burn an effigy of Israeli Prime Minister Benjamin Netanyahu on October 20, 2023 in Istanbul, Turkey.Burak Kara/Getty Images\r\n<ul>\n<li>Telegram banned a channel on the groun… [+6747 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Gabriel Erard",
    "title": "Apple estuvo a punto de hacer el Apple Watch compatible con Android: por qué no sucedió",
    "description": "¿Un Apple Watch compatible con Android? ¿De qué clase de brujería estamos hablando? Lo creas o no, el reloj inteligente de la manzana estuvo a un paso de integrarse con un ecosistema hoy conformado por más de 3.000 millones de dispositivos con el software de …",
    "url": "http://hipertextual.com/2023/11/apple-watch-compatible-android",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/10/apple-watch-series-9.jpg",
    "publishedAt": "2023-11-01T13:13:14Z",
    "content": "¿Un Apple Watch compatible con Android?¿De qué clase de brujería estamos hablando? Lo creas o no, el reloj inteligente de la manzana estuvo a un paso de integrarse con un ecosistema hoy conformado po… [+4200 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "José María López",
    "title": "Pasa a limpio tus notas y apuntes copiando el texto de una imagen desde iOS y Android",
    "description": "Obtener texto a partir de una imagen. Es decir, haces una fotografía de una hoja de papel, mecanografiada o manuscrita, y de esa imagen extraes el texto para poder editarlo en un dispositivo que tenga un editor de textos. Sacar texto de una imagen es hoy muy …",
    "url": "http://hipertextual.com/2023/11/sacar-texto-imagen",
    "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/07/Texto-Imagen-Google-Lens-Live-Text.jpg?fit=1920%2C1280&quality=50&strip=all&ssl=1",
    "publishedAt": "2023-11-01T01:01:00Z",
    "content": "Obtener texto a partir de una imagen. Es decir, haces una fotografía de una hoja de papel, mecanografiada o manuscrita, y de esa imagen extraes el texto para poder editarlo en un dispositivo que teng… [+4914 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Simon Cohen",
    "title": "Soundcore’s first open-ear earbuds come with an optional neckband",
    "description": "Anker's Soundcore brand has entered the open-ear earbuds race with two new models, including the AeroFit Pro, which has hi-res, spatial audio, and a neckband.",
    "url": "https://www.digitaltrends.com/home-theater/anker-soundcore-aerofit-aerofit-pro-open-ear-earbuds/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/10/soundcore-AeroFit-Pro-Electric-Purple-1.jpeg?resize=1200%2C630&p=1",
    "publishedAt": "2023-11-01T12:00:52Z",
    "content": "Soundcore’s AeroFit Pro in Electric Purple with the optional neckbandSoundcore\r\nThe open-ear earbuds landscape has been growing like crazy over the last 12 months, so it’s great to see that Anker’s S… [+3127 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Jesse Hollington",
    "title": "Have an Android phone? You can get unlimited 5G service for free",
    "description": "One of the best things about eSIM is how easy is to get a new plan up and running on your smartphone. Now, Visible is making it even easier.",
    "url": "https://www.digitaltrends.com/mobile/visible-free-5g-service-trial-android-phones-news/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/10/google-pixel-8-screen-castle.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-11-01T12:00:52Z",
    "content": "Andy Boxall / Digital Trends\r\nOne of the great things about eSIM technology is how easy it is to get a new line up and running on a compatible smartphone. Gone are the days when you needed to find a … [+4173 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Derek Malcolm",
    "title": "Nebula’s new Capsule 3 and Mars 3 Air projectors go with Google TV",
    "description": "Anker's projector brand, Nebula, has just announced two new portable Google TV projectors, the Capsule 3 and Mars 3 Air, both with Netflix built in.",
    "url": "https://www.digitaltrends.com/home-theater/nebula-announces-capsule-3-mars-3-air-portable-projectors/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/10/nebula-mars-3-air-lifestyle02.jpeg?resize=1200%2C630&p=1",
    "publishedAt": "2023-11-01T13:00:25Z",
    "content": "The Nebula Mars 3 AirNebula\r\nAnker’s popular sub-brand Nebula has been gaining a reputation for making some excellent projectors, and today the company added to its lineup with two new portable offer… [+3421 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Gigazine.net"
    },
    "author": "@GIGAZINE",
    "title": "Appleがインドの野党政治家に「政府のハッカーがiPhoneをハッキングしている」と警告",
    "description": "Appleが、政府と対立する立場にあるインドの政治家らが所有するiPhoneに、国家主導の攻撃が試みられていると警告する通知を送ったことがわかりました。これを受けて、野党連合はインド政府をスパイ容疑で非難しましたが、インド与党は嫌疑を否定しました。続きを読む...",
    "url": "https://gigazine.net/news/20231101-india-state-sponsored-iphone-hack-warning/",
    "urlToImage": "https://i.gzn.jp/img/2023/11/01/india-state-sponsored-iphone-hack-warning/00.jpg",
    "publishedAt": "2023-11-01T10:00:00Z",
    "content": "iPhoneAndroidPegasus - GIGAZINE\r\nApplePegasusNSO Group - GIGAZINE\r\niPhonePegasus3 - GIGAZINE\r\nPegasusiPhoneGoogleProject Zero - GIGAZINE\r\nApplePegasusWhatsAppCEO - GIGAZINE"
    },
    {
    "soutce": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "MacBook Pro M3: Apple streicht einen Thunderbolt-3-Port",
    "description": "Apple beschneidet sein Einsteiger-MacBook Pro mit weniger Ports. Auch sonst stellt sich die Frage, ob es sich lohnt – gab es doch eine fette Preiserhöhung.",
    "url": "https://www.heise.de/news/MacBook-Pro-M3-Apple-streicht-einen-Thunderbolt-3-Port-9350029.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/2/6/8/8/3/macbookprom3_tb-e917a8f9eb2b290e.png",
    "publishedAt": "2023-11-01T08:49:00Z",
    "content": "Käufer des neuen MacBook Pro mit 14 Zoll und M3-Chip sollten sich bewusst sein, dass Apple die Maschine im Vergleich zu den \"großen\" MacBook-Pro-Modellen mit M3 Pro und M3 Max arg beschnitten hat. Da… [+2142 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "Mit Blackmagic Camera und Tentacle Sync: Apple filmt Keynote mit iPhone 15",
    "description": "Apple hat Details verraten, wie die \"Scary fast\"-Präsentation gefilmt wurde. Dabei kommt auch Hardware aus Deutschland zum Einsatz.",
    "url": "https://www.heise.de/news/Mit-Blackmagic-Camera-und-Tentacle-Sync-Apple-filmt-Keynote-mit-iPhone-15-9350128.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/2/6/9/3/5/Screenshot_2023-11-01_at_10.20.17-86b109b8ffa0ffd4.png",
    "publishedAt": "2023-11-01T10:20:00Z",
    "content": "Wer gut aufgepasst hat, weiß es bereits: Apple hat seine \"Scary fast\"-Keynote, die in der Nacht zum Dienstag ausgestrahlt wurde, mit einem iPhone 15 Max gefilmt und (wenig überraschend) mit einem Mac… [+2343 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "heise online"
    },
    "author": "Frank Schräer",
    "title": "Mittwoch: Nokia im Patentstreit mit Amazon und HP, Gigafiber-Angebot bedenklich",
    "description": "Amazon & HP verklagt + Gigafiber will Daten + iOS-Update gegen WLAN-Probleme + Aus für Apples Touch-Leiste + Details zu neuen Apple-Chips + Lücke in Confluence",
    "url": "https://www.heise.de/news/Mittwoch-Nokia-im-Patentstreit-mit-Amazon-und-HP-Gigafiber-Angebot-bedenklich-9349853.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/2/6/7/8/1/mittwoch-50e192afb0e05311.webp",
    "publishedAt": "2023-11-01T05:30:00Z",
    "content": "Amazon Prime Video, Twitch sowie Computer von HP würden laut Nokia patentierte Technik für Video-Streaming nutzen. Vor Gericht verlangt Nokia einen Verkaufsstopp betroffener Geräte und Entschädigung.… [+4947 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "Sieben Jahre Touch Bar: Warum Apples OLED-Leiste kein Erfolg war",
    "description": "Mit der Einführung der ersten M3-Macs stellt Apple auch die Touch Bar ein. Die OLED-Funktionstastenleiste war zuletzt kaum mehr verwendet worden.",
    "url": "https://www.heise.de/news/Sieben-Jahre-mit-der-Touch-Bar-Warum-Apples-OLED-Leiste-kein-Erfolg-war-9350025.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/2/6/8/8/1/Screenshot_2023-11-01_at_11.05.22-2-aa47ac58e9aaf289.png",
    "publishedAt": "2023-11-01T11:27:00Z",
    "content": "Mit der Einführung des neuen MacBook Pro M3 beerdigt Apple auch ein Hardware-Feature endgültig, dass der Konzern vor mittlerweile sieben Jahren eingeführt hatte: die Touch Bar. 2016 auf Intel-Maschin… [+2313 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "heise online"
    },
    "author": "Max Bold",
    "title": "heise+ | Einen Schrittmotor mit dem Rapberry Pi Pico ansteuern",
    "description": "Wer mit dem Bau eines eigenen Roboters liebäugelt, muss sich mit Funktion und Ansteuerung von Schrittmotoren befassen. Wir geben Ihnen einen Einblick.",
    "url": "https://www.heise.de/ratgeber/Einen-Schrittmotor-mit-dem-Rapberry-Pi-Pico-ansteuern-9343645.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/2/3/4/6/6/aufm-8376a22ea4f4e2e1.png",
    "publishedAt": "2023-11-01T06:30:00Z",
    "content": "Inhaltsverzeichnis\r\nMehr Bastelprojekte mit Raspberry Pi\r\nWer in die faszinierende Welt der Robotik einsteigen und einen Selbstversuch mit einem Eigenbau starten will, braucht Fantasie, Know-how und … [+2680 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "heise online"
    },
    "author": "Frank Schräer",
    "title": "Nokia verklagt Amazon und HP wegen Patentverletzung bei Video-Streaming",
    "description": "Amazon Prime Video, Twitch sowie Computer von HP würden Nokias Patente auf Technik für Video-Streaming nutzen. Vor Gericht verlangt Nokia Entschädigung.",
    "url": "https://www.heise.de/news/Nokia-verklagt-Amazon-und-HP-wegen-Patentverletzung-bei-Video-Streaming-9349849.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/2/6/7/7/9/shutterstock_1009681918-6ce496c1afe6867f.jpg",
    "publishedAt": "2023-11-01T03:31:00Z",
    "content": "Der finnische Telekommunikationskonzern Nokia hat Amazon und HP in verschiedenen Ländern wegen Patentverletzung verklagt. Streitpunkt sind Multimedia-Patente wie die Videokompressionsverfahren H.264 … [+2403 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "heise online"
    },
    "author": "Sebastian Trepesch",
    "title": "heise-Angebot: Mac & i Extra Workshops jetzt vorab im heise-Shop",
    "description": "Das Heft steckt voller systemübergreifender Praxis: In Zoom & Co präsentieren, Phishing erkennen, Notion einsetzen, in Aktien investieren und viele Themen mehr.",
    "url": "https://www.heise.de/news/Mac-i-Extra-Workshops-jetzt-vorab-im-heise-Shop-9339797.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/2/1/3/8/5/mac-and-i-extra_7-2023-80c633dc4b4af46b.jpg",
    "publishedAt": "2023-11-01T09:00:00Z",
    "content": "Am 3. November kommt Mac &amp; i Extra Winter 2023/2024 in den gut sortierten Zeitschriftenhandel. Schon heute können Sie das Heft vorab im Heise Shop erwerben (gedruckt für kurze Zeit versandkostenf… [+2271 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "The first Apple Watch was supposed to launch with blood sugar monitoring; the health battle within Apple",
    "description": "A new report based on interviews with insiders says the very first Apple Watch was originally supposed to launch with non-invasive blood sugar monitoring. Indeed, it says, this was intended to be the device’s headline feature.\n\n\n\nThe piece also reveals battle…",
    "url": "https://9to5mac.com/2023/11/01/apple-watch-blood-sugar-monitoring/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/11/Apple-Watch-blood-sugar-monitoring.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-11-01T12:06:32Z",
    "content": "A new report based on interviews with insiders says the very first Apple Watch was originally supposed to launch with non-invasive blood sugar monitoring. Indeed, it says, this was intended to be the… [+4838 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Michael Potuck",
    "title": "Disney Dreamlight Valley, Sonic Dream Team, Knotwords, and more set for Apple Arcade holiday releases",
    "description": "After debuting a handful of new releases including NBA 2K24 Arcade Edition in October, Apple Arcade is getting 8 new launches for the holiday season. Those include Disney Dreamlight Valley, Sonic Dream Team, Knotwords, Football Manager 2024, and more.\n\n\n\n mor…",
    "url": "https://9to5mac.com/2023/11/01/disney-dreamlight-valley-sonic-dream-team-knotwords-and-more-set-for-apple-arcade-holiday-releases/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/11/apple-arcade.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-11-01T13:20:50Z",
    "content": "After debuting a handful of new releases including NBA 2K24 Arcade Edition in October, Apple Arcade is getting 8 new launches for the holiday season. Those include Disney Dreamlight Valley, Sonic Dre… [+1457 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Tap to Pay continues expansion, coming to Ukraine",
    "description": "The gradual global rollout of Apple’s Tap to Pay on iPhone feature continues, with Ukraine the seventh country to benefit.\n\n\n\nThe small business payment service is initially limited to the state-owned PrivatBank, and customers can get up-and-running in just a…",
    "url": "https://9to5mac.com/2023/11/01/tap-to-pay-ukraine/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/11/Tap-to-Pay-Ukraine-promo.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-11-01T11:08:43Z",
    "content": "The gradual global rollout of Apple’s Tap to Pay on iPhone feature continues, with Ukraine the seventh country to benefit.\r\nThe small business payment service is initially limited to the state-owned … [+2510 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Android Police"
    },
    "author": "Parth Shah",
    "title": "How to set up a Gmail account on your iPhone",
    "description": "Learn how to add a Gmail account to your iPhone by reading this guide",
    "url": "https://www.androidpolice.com/how-to-add-a-gmail-account-to-your-iphone/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/10/3d-gmail-logo-hero-image.jpg",
    "publishedAt": "2023-11-01T09:00:17Z",
    "content": "Unlike the top budget Android phones, Google's apps and services aren't preinstalled on an iPhone or iPad. Google offers apps on the App Store, and its services work fine with the default iOS apps. Y… [+4351 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "Hands on with the Apple TV app redesign in tvOS 17.2",
    "description": "The tvOS 17.2 beta included a redesigned Apple TV app emphasizing Channels and app navigation. Here's what changed.Apple TV app redesignThe Apple TV hardware runs the Apple TV app, where the Apple TV+ service lives as a Channel. Until now, the Apple TV app wa…",
    "url": "https://appleinsider.com/articles/23/11/01/hands-on-with-the-apple-tv-app-redesign-in-tvos-172",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57055-116042-IMG_3877-xl.jpg",
    "publishedAt": "2023-11-01T02:52:10Z",
    "content": "Apple TV app redesign\r\nThe tvOS 17.2 beta included a redesigned Apple TV app emphasizing Channels and app navigation. Here's what changed.\r\nThe Apple TV hardware runs the Apple TV app, where the Appl… [+2975 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Apple Watch Series 10 will monitor blood pressure, detect sleep apnea",
    "description": "A new report says that after a decade working on health features like blood pressure monitoring, Apple will be ready to add it to 2024's Apple Watch Series 10.An Apple Watch showing a blood oxygen reading.An Apple Watch blood pressure sensor has been rumored …",
    "url": "https://appleinsider.com/articles/23/11/01/apple-watch-series-10-will-monitor-blood-pressure-detect-sleep-apnea",
    "urlToImage": "https://photos5.appleinsider.com/gallery/43424-84385-apple-watch-blood-oxygen-xl.jpg",
    "publishedAt": "2023-11-01T13:10:40Z",
    "content": "An Apple Watch showing a blood oxygen reading.\r\nA new report says that after a decade working on health features like blood pressure monitoring, Apple will be ready to add it to 2024's Apple Watch Se… [+2177 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "visionOS developer beta 5 is now available and includes the App Store",
    "description": "Apple seeded the fifth visionOS developer beta with a handful of changes including access to the App Store.visionOSThe fifth beta for visionOS can be downloaded by developers to their Mac, which serves as the development platform for Apple Vision Pro apps. In…",
    "url": "https://appleinsider.com/articles/23/11/01/visionos-developer-beta-5-is-now-available-and-includes-the-app-store",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57058-116036-visionOS-home-xl.jpg",
    "publishedAt": "2023-11-01T00:33:41Z",
    "content": "visionOS\r\nApple seeded the fifth visionOS developer beta with a handful of changes including access to the App Store.\r\nThe fifth beta for visionOS can be downloaded by developers to their Mac, which … [+1390 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Wedbush says Apple's earnings won't be dented by falling China demand",
    "description": "Saying that other analysts have a \"negative groupthink mentality\" about Apple's iPhone earnings, Wedbush believes the reality is very different.Apple ParkIn September 2023, Wedbush raised its price target for Apple to $240, based on the iPhone 15's \"impressiv…",
    "url": "https://appleinsider.com/articles/23/11/01/wedbush-says-apples-earnings-wont-be-dented-by-falling-china-demand",
    "urlToImage": "https://photos5.appleinsider.com/gallery/51095-100924-Apple-Park-xl.jpg",
    "publishedAt": "2023-11-01T12:42:27Z",
    "content": "Apple Park\r\nSaying that other analysts have a \"negative groupthink mentality\" about Apple's iPhone earnings, Wedbush believes the reality is very different.\r\nIn September 2023, Wedbush raised its pri… [+2668 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Christine McKee)",
    "title": "Save $200 on AppleCare for Apple's new M3 MacBook Pro 16-inch",
    "description": "Right out of the gate, shoppers can save $200 on three years of AppleCare for the new M3 MacBook Pro 16-inch with this exclusive early Black Friday deal.To snap up the exclusive offer, head over to Apple Authorized Reseller Adorama and apply promo code APINSI…",
    "url": "https://appleinsider.com/articles/23/11/01/save-200-on-applecare-for-apples-new-m3-macbook-pro-16-inch",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57057-116037-m3-macbook-pro-16-inch-applecare-xl.jpg",
    "publishedAt": "2023-11-01T00:58:02Z",
    "content": "Right out of the gate, shoppers can save $200 on three years of AppleCare for the new M3 MacBook Pro 16-inch with this exclusive early Black Friday deal.\r\nTo snap up the exclusive offer, head over to… [+1091 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Peter Cohen)",
    "title": "iPhone Tap to Pay comes to Ukraine",
    "description": "PrivatBank, Ukraine's largest bank, has announced support for Apple's Tap to Pay feature on iPhone, bringing the contactless payment system to Ukraine for the first time.Tap to Pay on iPhoneThe feature is supported using PrivatBank's \"Terminal\" app, available…",
    "url": "https://appleinsider.com/articles/23/11/01/iphone-tap-to-pay-comes-to-ukraine",
    "urlToImage": "https://photos5.appleinsider.com/gallery/49264-96220-46903-91416-000-lead-Tap-to-Pay-xl-xl.jpg",
    "publishedAt": "2023-11-01T13:14:12Z",
    "content": "Tap to Pay on iPhone\r\nPrivatBank, Ukraine's largest bank, has announced support for Apple's Tap to Pay feature on iPhone, bringing the contactless payment system to Ukraine for the first time.\r\nThe f… [+1994 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Christine McKee)",
    "title": "Best Buy cuts M3 MacBook prices by $100, includes AppleCare for Total members",
    "description": "Although just announced, Apple's M3 MacBooks are $100 off for My Best Buy Plus and Total members. Plus, Total members get up to 24 months of AppleCare as long as the membership stays active.Although there are other discounts available on the new M3 MacBook li…",
    "url": "https://appleinsider.com/articles/23/11/01/best-buy-cuts-m3-macbook-prices-by-100-includes-applecare-for-total-members",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57060-116048-m3-macbook-100-off-xl.jpg",
    "publishedAt": "2023-11-01T04:44:04Z",
    "content": "Although just announced, Apple's M3 MacBooks are $100 off for My Best Buy Plus and Total members. Plus, Total members get up to 24 months of AppleCare as long as the membership stays active.\r\nAlthoug… [+1018 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Christine McKee)",
    "title": "Lifetime Babbel subscription plunges to $139.97",
    "description": "The lifetime Babbel language learning subscription is $460 off with this early holiday deal, dropping the cost to $139.97.Enjoy learning a new language without breaking the bank with this Babbel deal that cuts the price of a lifetime subscription to $139.97 f…",
    "url": "https://appleinsider.com/articles/23/11/01/lifetime-babbel-subscription-plunges-to-13997",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57064-116049-babbel-cost-139-xl.jpg",
    "publishedAt": "2023-11-01T13:27:51Z",
    "content": "The lifetime Babbel language learning subscription is $460 off with this early holiday deal, dropping the cost to $139.97.\r\nEnjoy learning a new language without breaking the bank with this Babbel de… [+1036 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Michael Stroup)",
    "title": "Spooky Halloween deals from B&H Photo bring $1,900 in sweet savings to your trick or treat bucket",
    "description": "B&H Photo decided to provide more treats than tricks this Halloween with incredible savings on popular goodies. These deals are better than half-off candy on November 1st, so get them while you can.B&H Photo has scary low prices on gear this Halloween.Our Jac…",
    "url": "https://appleinsider.com/articles/23/11/01/spooky-halloween-deals-from-bh-photo-bring-1900-in-sweet-savings-to-your-trick-or-treat-bucket",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57052-116032-Halloween-Deals-from-B&H-Photo-xl.jpg",
    "publishedAt": "2023-11-01T02:06:19Z",
    "content": "B&amp;H Photo has scary low prices on gear this Halloween.\r\nB&amp;H Photo decided to provide more treats than tricks this Halloween with incredible savings on popular goodies. These deals are better … [+3184 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "そうこ",
    "title": "【まとめ】昨日Appleが発表したもの。注目はM3チップ！",
    "description": "Appleが発表した新型MacBook Proとデスクトップの新型iMac。どちらも、Apple初の3nmテクノロジ採用のチップM3（M3・M3 Pro・M3 Max）が搭載されています。",
    "url": "https://www.gizmodo.jp/2023/11/apple-new-macbook-pro-imac-m3-scary-fast-event-black.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/10/31/231031m3macs-2.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2023-11-01T02:00:00Z",
    "content": "1031Apple130\r\nMacBook ProiMacApple3nmM3M3M3 ProM3 Max\r\n1416M33\r\n100Liquid Retina XDR1000nits1600nits\r\nMacBook Pro1416\r\nM3314M3M3 ProM3 Max16M3 ProM3 Max2\r\n14M322\r\nPhoto: Kyle Barr/Gizmodo US\r\n14M3248… [+338 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "小暮ひさのり",
    "title": "MacBook Pro 14インチ「4万円値下げ」に潜む闇と光",
    "description": "Image:Apple「なぜ」4万も下がったのか？その答えを探したかったんです。先日配信されたAppleの新製品発表イベント。予想どおり、M3チップや搭載機新型のMacBookPro、iMacなどが発表されました（詳しくは以下記事よりどうそ）。これだけ見ればバッチリです。今日10月31日にAppleが発表したモノまとめどっちのMacがお好きですか？本日開催されたAppleのイベント。30分というシ",
    "url": "https://www.gizmodo.jp/2023/11/why-new-macbook-pro-14-becomes-40000yen-cheaper.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/11/01/dark-and-light_.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2023-11-01T10:00:00Z",
    "content": "4 \r\nAppleM3MacBook ProiMac\r\nMacBook Pro\r\nImage: Apple\r\n1,9991,599\r\n14MacBook Pro24880014MacBook Pro2888004\r\n414MacBook Pro Apple\r\n13MacBook Pro\r\nProM3\r\nImage: Apple/ \r\n14MacBook ProM2 Pro14MacBook Pr… [+713 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "小暮ひさのり",
    "title": "今回の主役はiMacだと思う。2年ぶりの躍進に心が揺れる…",
    "description": "Image:Appleえっ、M3のiMacスゴイくない？10月31日、ハロウィンの日に開催されたAppleの新製品発表イベント。まとめは以下をどうぞ。【AppleEventまとめ】M3とともに｢スペースブラックのMacBookPro｣がやってきました2023年10月31日（火）午前9時からAppleがオンラインイベントを開催、｢新しいMac｣が発表されました。この記事では同イベント｢Scaryfa",
    "url": "https://www.gizmodo.jp/2023/11/about-new-m3-imac.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/10/31/231031imk00.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2023-11-01T03:00:00Z",
    "content": "M3iMac\r\n1031Apple\r\nMacBook ProiMac\r\nCPU\r\nImage: Apple\r\n24iMacAppleiMac\r\n202142Apple SiliconM2M2 ProiMacM1\r\n1SoC\r\nImage: Apple\r\nAppleM3M130\r\n174800M1198800M3240003013.7\r\n 2CPU M11110\r\niMac\r\n2400013.7i… [+353 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "はらいさん",
    "title": "109万円、それが「最強版MacBook Pro」のお値段でした",
    "description": "Image:Apple色々な意味で恐ろしい。今回のApple（アップル）イベントではM3シリーズを搭載した新型MacBookProが発表されましたが、最強スペックで構成した場合、一体いくらになるのでしょうか？さっそく検証してみます。新型MacBookProの最強構成モデルは約109万円Image:Apple16インチMacBookProを最強構成モデルに仕上げた場合の価格は税込109万2,800円",
    "url": "https://www.gizmodo.jp/2023/11/how-much-new-highest-spec-m3-macbook-pro.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/10/31/Apple-MacBook-Pro-2up-231030.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2023-11-01T04:00:00Z",
    "content": "AppleM3MacBook Pro\r\nMacBook Pro109\r\nImage: Apple\r\n16MacBook Pro1092,800\r\n16MacBook Pro\r\n16CPU\r\n40GPU\r\nM3 Max\r\n128GB\r\n8TB SSD \r\nFinal Cut ProLogic Pro\r\nMacBook ProM3 ProM3 Max328,800\r\nMagSafe\r\nImage: … [+70 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "そうこ",
    "title": "MacBook Pro、新しくなってどこが変わったの？",
    "description": "Photo:KyleBarr/Gizmodo米国ではハロウィン前夜、お化けが出番を待つ頃に、クパチーノの宇宙船のようなApple本社で発表された新型MacBookProに触ってきました。とてもかっこいいPhoto:KyleBarr/GizmodoMacBookProは、アノダイズ処理されたスペースブラックが新色。指紋がつきにくいそうです。新モデルの1番の目玉は色！とはもちろん言いません。…言いませ",
    "url": "https://www.gizmodo.jp/2023/11/hands-on-with-the-apple-m3-macbook-pro.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/11/01/231101macbookproimac202302-1.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2023-11-01T11:00:00Z",
    "content": "AppleMacBook Pro\r\nPhoto: Kyle Barr / Gizmodo\r\nMacBook Pro1 \r\nApple\r\nM3\r\nPhoto: Kyle Barr / Gizmodo\r\nM31\r\nAppleM3AppleMMacBook Pro1416M2M3\r\nApple\r\nAppleM3M22030M150MMacBook ProM3M2\r\nPhoto: Kyle Barr /… [+432 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "そうこ",
    "title": "写真で見る、新しいMacBook ProとiMac",
    "description": "Photo:KyleBarr/Gizmodo昨日（10/31）にAppleが発表した新型MacBookProとiMac。米Gizmodo編集部がプレス会に参加し、写真たくさん撮ってきてくれました！Apple公式のプロダクト画像とはまた違う、ありのままの姿をどうぞ。新型の肝であるM3チップは見えないけどね。MacBookProの新色、スペースブラックは一目惚れするほど素敵です。MacBookProス",
    "url": "https://www.gizmodo.jp/2023/11/macbook-pro-is-back-in-black-now-powered-with-m3.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/11/01/231101macbookproimac2023.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2023-11-01T04:05:00Z",
    "content": "10/31AppleMacBook ProiMacGizmodo\r\nAppleM3MacBook Pro\r\nMacBook Pro 16\r\nPhoto: Kyle Barr / Gizmodo\r\nPhoto: Kyle Barr / Gizmodo\r\n3\r\nPhoto: Kyle Barr / Gizmodo\r\nMacBook Pro3MystLies of P32iMacStray\r\nMacB… [+305 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "CNET"
    },
    "author": "Lexy Savvides",
    "title": "Comparing Apple Watch Series 9 to Ultra 2 video - CNET",
    "description": "I've worn both the Apple Watch Series 9 and Ultra 2 for a month to help determine which one is right for you.",
    "url": "https://www.cnet.com/videos/comparing-apple-watch-series-9-to-ultra-2/",
    "urlToImage": "https://www.cnet.com/a/img/resize/937fc83e6451191246a3ee2afc57316520f28d68/hub/2023/10/31/d162bc5a-6298-4b4b-9389-a9c9fff66ff3/cnetultra2series9.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-11-01T12:00:04Z",
    "content": ""
    },
    {
    "soutce": {
    "id": null,
    "name": "CNET"
    },
    "author": "Corinne Reichert",
    "title": "Broken iPad? How to Fix Your Device Without Going to an Apple Store - CNET",
    "description": "From third-party insurance to DIY-ing a cracked screen, here are your options.",
    "url": "https://www.cnet.com/tech/computing/broken-ipad-how-to-fix-your-device-without-going-to-an-apple-store/",
    "urlToImage": "https://www.cnet.com/a/img/resize/2bec42558a71a3922e6e590476b919288a015288/hub/2017/06/01/a176bcb9-1442-4d6d-a7d9-f01efdbcc4bc/broken-screen-ipad-6200-002.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-11-01T11:00:08Z",
    "content": "I once knew someone who would drop every new phone they got into the toilet. Not right off the bat, of course. But as time marched on and years went by, the toilet slowly claimed its victims one by o… [+7507 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "CNET"
    },
    "author": "Zachary McAuliffe",
    "title": "What Is iOS 17's Journal App and How Does It Work? - CNET",
    "description": "The highly anticipated iPhone feature will likely arrive with iOS 17.2.",
    "url": "https://www.cnet.com/tech/services-and-software/what-is-ios-17s-journal-app-and-how-does-it-work/",
    "urlToImage": "https://www.cnet.com/a/img/resize/6a805630e124b03553bd2bcb211e68941a114ce9/hub/2023/10/31/73f7ef6e-f2fa-4422-973b-09fed747daa5/gettyimages-1258471593.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-11-01T11:00:11Z",
    "content": "When Apple unveiled iOS 17 at its WWDC event in June, the Journal app drew a lot of attention. However, the tech giant didn't release the app with iOS 17 on Sept. 18 or with the iPhone 15 series. Ins… [+5570 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "CNET"
    },
    "author": "Adrian Marlow",
    "title": "Woot's LG OLED TV Deal Saves You Over $1,100 - CNET",
    "description": "The LG C2 is one of the best OLED TVs you'll find out there, and with this deal, you'll save yourself 44%",
    "url": "https://www.cnet.com/deals/woots-lg-oled-tv-deal-saves-you-over-1100/",
    "urlToImage": "https://www.cnet.com/a/img/resize/975c24760bec0fdc03718505d3845483e1a53665/hub/2023/03/08/ffaea674-5028-4def-82b8-d9af390f3b9f/03-bg-1.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-11-01T12:03:31Z",
    "content": "Even though the LG C3 has already been released, the LG C2 is still one of the best high-end TVs you can get, according to CNET's David Katzmaier. Featuring an OLED panel, the C2 offers brilliant col… [+1255 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "CNET"
    },
    "author": "David Lumb",
    "title": "I Could've Used Qualcomm's ChatGPT-Like Phone AI on My Trip to Hawaii - CNET",
    "description": "Commentary: Qualcomm showed off generative AI on phones during its Snapdragon Summit, and I already thought of ways it could be helpful.",
    "url": "https://www.cnet.com/tech/mobile/i-couldve-used-qualcomms-chatgpt-like-phone-ai-on-my-trip-to-hawaii/",
    "urlToImage": "https://www.cnet.com/a/img/resize/c105dc9d44ed74d10699853a4a480e27e753634f/hub/2023/10/24/7e015fdd-d49d-403d-b6ed-4cb4dcbbb11c/snapdragon-8-gen-3-ai-qrd.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-11-01T12:00:17Z",
    "content": "At Qualcomm's Snapdragon Summit in Hawaii, the company revealed its next set of chips including the Snapdragon 8 Gen 3, which will power next year's top Android phones, likely including the Samsung G… [+11819 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Journal du Geek",
    "title": "Ce giga bonus que délivre BoursoBank pour le 1er novembre est hallucinant",
    "description": "L'ancienne Boursorama Banque lève le voile sur une prime de 150 euros pour ses nouveaux clients. Ils devront remplir le formulaire d'inscription sur la journée du 1er novembre. C'est gratuit, sans condition de revenus et sans engagement.\nCe giga bonus que dél…",
    "url": "https://www.journaldugeek.com/bon-plan/ce-giga-bonus-que-delivre-boursobank-pour-le-1er-novembre-est-hallucinant/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/08/billet-banque-euro.jpg",
    "publishedAt": "2023-11-01T07:26:02Z",
    "content": "L'ancienne Boursorama Banque lève le voile sur une prime de 150 euros pour ses nouveaux clients. Ils devront remplir le formulaire d'inscription sur la journée du 1er novembre. C'est gratuit, sans co… [+4170 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Rédacteur Invité",
    "title": "Avant le Black Friday, l’antivirus Bitdefender atomise ses prix (-60 %)",
    "description": "Utiliser le bon antivirus permet de mieux faire face aux menaces comme les adwares ou les ransomwares - entre autres. Mais les solutions de cybersécurité complètes comme Bitdefender proposent de nombreuses autres fonctionnalités.\nAvant le Black Friday, l’anti…",
    "url": "https://www.journaldugeek.com/2023/11/01/avant-le-black-friday-lantivirus-bitdefender-atomise-ses-prix-60/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/11/bitdefender.jpg",
    "publishedAt": "2023-11-01T07:00:04Z",
    "content": "Utiliser le bon antivirus permet de mieux faire face aux menaces comme les adwares ou les ransomwares - entre autres. Mais les solutions de cybersécurité complètes comme Bitdefender proposent de nomb… [+3877 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Isra Fdez",
    "title": "El sencillo truco en Apple Music para que tu música favorita suene mejor que nunca",
    "description": "¿Sabías que Apple Music tiene por defecto activa una función que devalúa la calidad sonora de las canciones? Esta función de \"protección\" siempre se recomienda desactivar. Hablamos de una técnica que allana volúmenes. Y que, en cuanto la desactivas, puedes se…",
    "url": "https://www.applesfera.com/tutoriales/sencillo-truco-apple-music-tu-musica-favorita-suene-mejor-que-nunca",
    "urlToImage": "https://i.blogs.es/4446fa/music/840_560.jpeg",
    "publishedAt": "2023-11-01T11:01:02Z",
    "content": "¿Sabías que Apple Music tiene por defecto activa una función que devalúa la calidad sonora de las canciones? Esta función de \"protección\" siempre se recomienda desactivar. Hablamos de una técnica que… [+3238 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Alberto García",
    "title": "El Fire TV Stick de Amazon para ver Apple TV+ y Netflix vuelve a bajar de precio antes del Black Friday",
    "description": "En casi todos los eventos anuales de ofertas solemos encontrar descuentos interesantes en los Fire TV Stick de Amazon. Pero esta vez, y como un buen adelanto al próximo Black Friday, podemos encontrar una rebaja en el precio del modelo estandar durante el Día…",
    "url": "https://www.applesfera.com/seleccion/fire-tv-stick-amazon-para-ver-apple-tv-netflix-vuelve-a-bajar-precio-antes-black-friday",
    "urlToImage": "https://i.blogs.es/548361/fire-tv-stick/840_560.jpeg",
    "publishedAt": "2023-11-01T09:30:39Z",
    "content": "En casi todos los eventos anuales de ofertas solemos encontrar descuentos interesantes en los Fire TV Stick de Amazon. Pero esta vez, y como un buen adelanto al próximo Black Friday, podemos encontra… [+2461 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Alberto García",
    "title": "Los iPhone 14 Pro que ya nadie quiere se están liquidando en MediaMarkt casi a mitad de precio",
    "description": "La llegada de una nueva generación de teléfonos de Apple suele conllevar a una bajada en el precio de las anteriores generaciones. Con los recientes iPhone 15\r\n ha ocurrido, y ahora podemos encontrar algunos descuentos muy interesantes, sobre todo, en los rea…",
    "url": "https://www.applesfera.com/seleccion/iphone-14-pro-que-nadie-quiere-se-estan-liquidando-mediamarkt-casi-a-mitad-precio",
    "urlToImage": "https://i.blogs.es/39aea3/iphone-14-pro/840_560.jpeg",
    "publishedAt": "2023-11-01T12:30:44Z",
    "content": "La llegada de una nueva generación de teléfonos de Apple suele conllevar a una bajada en el precio de las anteriores generaciones. Con los recientes iPhone 15\r\n ha ocurrido, y ahora podemos encontrar… [+2851 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "Tiene más de 200 millones de euros en un USB encriptado, una empresa de seguridad se ofrece a desbloquearlo. Él se niega rotundamente",
    "description": "Quizás recuerdes aquella época en la que la gran revolución tecnológica eran las criptomonedas. Yo lo recuerdo muy bien, porque en 2013 fui una de esas personas que se animó a guardarse bitcoins en una cartera para luego olvidarse de ella. Era poco dinero per…",
    "url": "https://www.applesfera.com/curiosidades/tiene-200-millones-euros-usb-encriptado-empresa-seguridad-se-ofrece-a-desbloquearlo-se-niega-rotundamente",
    "urlToImage": "https://i.blogs.es/721cca/captura-de-pantalla-2023-10-31-a-las-15.57.48/840_560.jpeg",
    "publishedAt": "2023-11-01T09:00:40Z",
    "content": "Quizás recuerdes aquella época en la que la gran revolución tecnológica eran las criptomonedas. Yo lo recuerdo muy bien, porque en 2013 fui una de esas personas que se animó a guardarse bitcoins en u… [+4947 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "Razvan Mihaila",
    "title": "How to Use Strava’s Beacon Feature to Share Your Location While Exercising",
    "description": "Strava Beacon means you never have to hike or bike alone again.",
    "url": "https://www.makeuseof.com/how-to-use-strava-beacon-feature/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/12/mountain-biker-1.jpg",
    "publishedAt": "2023-11-01T01:00:23Z",
    "content": "Are you going on a solo hike or bike ride and don’t want your loved ones to worry about you. With Strava’s Beacon feature, you can share your real-time location with your emergency contacts.\r\n Is Bea… [+3758 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "Charlotte Osborn",
    "title": "How to Use the Happier App to Change Your Habits for the Better",
    "description": "Apps can be useful in a manner of different ways. And that even extends to helping you change your habits and lifestyle.",
    "url": "https://www.makeuseof.com/how-to-use-happier-app-change-your-habits/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/10/woman-sitting-on-bench-looking-happy-on-her-phone.jpg",
    "publishedAt": "2023-11-01T01:11:28Z",
    "content": "If you’re in a bit of a rut, are looking for a way to be healthier and more productive, or simply want to boost your happiness, then the Happier app might just be what you need.\r\nHere, we explain wha… [+5227 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Simon Sharwood",
    "title": "Indian politicians say Apple warned them of state-sponsored attacks",
    "description": "Nobody knows which state, but India’s government never quite shrugged off claims it uses spyware\nIndian politicians and media figures have reported that Apple has warned them their accounts may be under attack by state-sponsored actors.…",
    "url": "https://www.theregister.com/2023/11/01/india_apple_state_attack_warnings/",
    "urlToImage": "https://regmedia.co.uk/2022/02/23/shutterstock_warning_bell.jpg",
    "publishedAt": "2023-11-01T05:02:25Z",
    "content": "Indian politicians and media figures have reported that Apple has warned them their accounts may be under attack by state-sponsored actors.\r\nAll of the politicians who received the warnings are membe… [+2957 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Tyler Lee",
    "title": "Google Chrome updated with a controversial Safari-like feature",
    "description": "Google has pushed out a new update for Chrome on iOS where users now have the option of moving the URL bar to the bottom of the screen.\nThe post Google Chrome updated with a controversial Safari-like feature appeared first on Phandroid.",
    "url": "https://phandroid.com/2023/11/01/google-chrome-updated-with-a-controversial-safari-like-feature/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2023/10/pixel-8-chrome-640x356.png",
    "publishedAt": "2023-11-01T07:15:19Z",
    "content": "When Apple introduced iOS 15, one of the changes they made was to move the address bar in Safari to the bottom of the app instead of leaving it at the top. Initially there was a lot of backlash as it… [+1210 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "Romain Vitt",
    "title": "Disney+ augmente ses prix : comment payer moins cher ? (4 astuces)",
    "description": "Dès le 1er novembre 2023, Disney+ augmente les prix de son abonnement. Voici 4 astuces pour payer moins cher.",
    "url": "https://www.presse-citron.net/disney-augmente-ses-prix-comment-payer-moins-cher-4-astuces/",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2023/11/disney-plus-prix.jpg",
    "publishedAt": "2023-11-01T13:00:40Z",
    "content": "Après Netflix et Apple TV+ cest au tour de Disney+ de mettre à jour ses tarifs. La plateforme de streaming augmente aussi ses prix et inaugure au passage deux nouvelles formules.\r\nDisney+ Premium : 1… [+4869 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "XDA Developers"
    },
    "author": "Jonathan Knoder",
    "title": "Best waterproof headphones for swimming in 2023",
    "description": "Now you can even jam under water thanks to the best waterproof headphones for headphones.",
    "url": "https://www.xda-developers.com/best-waterproof-headphones-for-swimming/",
    "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/10/best-waterproof-headphones-for-swimming.jpg",
    "publishedAt": "2023-11-01T11:00:18Z",
    "content": "Headphones have been around forever. You can trace them back all the way to 1891. But headphones that are waterproof, well, that is a much more recent invention. Waterproof headphones arrived in our … [+14955 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Xataka Android"
    },
    "author": "Álvaro García M.",
    "title": "Móviles de cuero en pleno 2023: la \"nueva\" moda me deja sentimientos encontrados",
    "description": "Plástico, acero, titanio, cristal… Los smartphones se componen de diferentes materiales. Más resistentes y de aspecto y tacto más premium cuanta más alta es su gama. Sin embargo, venimos tiempo observando como el curo sintético se establece en todo tipo de ga…",
    "url": "https://www.xatakandroid.com/moviles-android/moviles-cuero-pleno-2023-nueva-moda-me-deja-sentimientos-encontrados",
    "urlToImage": "https://i.blogs.es/23de6c/cuero/840_560.jpeg",
    "publishedAt": "2023-11-01T12:00:44Z",
    "content": "Plástico, acero, titanio, cristal Los smartphones se componen de diferentes materiales. Más resistentes y de aspecto y tacto más premium cuanta más alta es su gama. Sin embargo, venimos tiempo observ… [+5489 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "Presse-citron",
    "title": "Pour son changement de nom, Boursorama Banque annonce 24 heures de bonus en folie",
    "description": "Vous n'avez pas encore ouvert de compte (gratuit) chez Boursorama Banque, nouvellement baptisée BoursoBank ? La plus grande banque en ligne de France sort le grand jeu pour ce 1er novembre 2023 : 150 euros de bonus en cash, dans votre poche.",
    "url": "https://www.presse-citron.net/pour-son-changement-de-nom-boursorama-banque-annonce-24-heures-de-bonus-en-folie/",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2023/08/banque-argent.jpg",
    "publishedAt": "2023-11-01T07:10:59Z",
    "content": "Tout le monde connait “Boursorama Banque”, la banque la moins chère de France depuis 15 ans. Si vous avez suivi son actualité, vous avez certainement vu qu’elle avait décidé de changer de nom, se ren… [+4155 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Espinof.com"
    },
    "author": "Albertini",
    "title": "Estrenos (1 de noviembre): series, películas y documentales en Netflix, HBO Max, Disney plus, Amazon, Filmin, Movistar Plus, Apple TV+ y Skyshowtime",
    "description": "Resaca de la temporada de terror, pero eso no quiere decir que no tengamos alguna que otra propuesta al respecto en nuestras plataformas de streaming. Así que, como cada miércoles vamos a repasar las 96 series, películas y documentales que llegan desde hoy ha…",
    "url": "https://www.espinof.com/estrenos/estrenos-1-noviembre-series-peliculas-documentales-netflix-hbo-max-disney-plus-amazon-filmin-movistar-plus-apple-tv-skyshowtime",
    "urlToImage": "https://i.blogs.es/6e4d6f/frasier-reboot-cast-3-kh-230822-340aed/840_560.jpeg",
    "publishedAt": "2023-11-01T08:00:40Z",
    "content": "Resaca de la temporada de terror, pero eso no quiere decir que no tengamos alguna que otra propuesta al respecto en nuestras plataformas de streaming. Así que, como cada miércoles vamos a repasar las… [+6327 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "iMore"
    },
    "author": "james.bentley@futurenet.com (James Bentley)",
    "title": "The M3 MacBook Pro wallpaper has a cryptic message - can you spot it?",
    "description": "Fans have spotted a fun little detail in the M3 MacBook Pro background. Have you seen it yet?",
    "url": "https://www.imore.com/mac/macbook-pro/the-m3-macbook-pro-wallpaper-has-a-cryptic-message-can-you-spot-it",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/9nprKKv64nCS8mKQw4jv9n-1200-80.png",
    "publishedAt": "2023-11-01T10:47:18Z",
    "content": "If you have just preordered a brand new M3 MacBook Pro, one of the last things you will likely notice is the stock wallpaper. But, if you pay attention, you may be able to spot a fun little detail in… [+1521 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "iMore"
    },
    "author": "daryl.baxter@futurenet.com (Daryl Baxter)",
    "title": "Is it snowing in your area? Your iPhone won't be able to tell you",
    "description": "A Weather Lock Screen widget on iPhone is showing a broken file icon instead of snow for those running iOS 17.1.",
    "url": "https://www.imore.com/iphone/is-it-snowing-in-your-area-your-iphone-wont-be-able-to-tell-you",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/3ZWnpa6abZtF9Uu564eECU-1200-80.jpg",
    "publishedAt": "2023-11-01T11:05:47Z",
    "content": "iPhone users have been reporting a strange bug on the Lock Screen, where a Weather widget shows a broken file icon when it’s snowing in their area.\r\nSince iOS 16, you’ve been able to place a bunch of… [+1629 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "iMore"
    },
    "author": "john-anthony.disotto@futurenet.com (John-Anthony Disotto)",
    "title": "The Space Black M3 MacBook Pro seems more resistant to your greasy hands after first hands-on",
    "description": "The first hands-on with the brand-new Space Black M3 MacBook Pro shows that Apple's new color might actually cope well with fingerprints.",
    "url": "https://www.imore.com/mac/macbook-pro/the-space-black-m3-macbook-pro-seems-more-resistant-to-your-greasy-hands-after-first-hands-on",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/2mopdGdKwJdzVjazW8szbS-1200-80.jpg",
    "publishedAt": "2023-11-01T10:12:24Z",
    "content": "The first thing that crossed my mind when Apple revealed the brand-new M3 MacBook Pro in its Space Black finish during the “Scary Fast” Mac event was just how greasy the beautifully blacked-out lapto… [+1715 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "CNET"
    },
    "author": "June Wan （ZDNET.com） 翻訳校正： 編集部",
    "title": "プロユーザーが最も安価な「M3」搭載「MacBook Pro」を購入すべきたった1つの理由",
    "description": "プロユーザーは、最も安いM3搭載「MacBook Pro」を検討するべきではない。だが例外が1つだけある。",
    "url": "https://japan.cnet.com/article/35210951/",
    "urlToImage": "https://japan.cnet.com/storage/2023/11/01/a2b1198b751cdc7e93fec7d5430f901d/apple-macbook-pro-lifestyle-screen-1440x810_1280x960.jpg",
    "publishedAt": "2023-11-01T00:35:00Z",
    "content": "Apple1030 1416MacBook Pro24iMac3MacM3Scary Fast\r\n<ol><li>Apple</li><li>M3</li><li>14MacBook Pro1599248800</li></ol>3 AppleMacBook Pro1314MacBook Pro8GBRAM 8CPU10GPUThunderboltUSB-C2M3 ProM3 Max3Apple… [+82 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Vida Extra"
    },
    "author": "Juan Sanmartín",
    "title": "Esta obra maestra de la ciencia ficción y el terror está a punto de abandonar Netflix. Últimos días para disfrutar de Un lugar tranquilo",
    "description": "Si alguna vez os toca ser víctimas de una película de terror, debéis tener claro que guardar silencio es una de las mejores maneras de evitar caer en las garras del asesino. No conviene tropezarse inoportunamente ni gritar con el primer susto, pero esa regla …",
    "url": "https://www.vidaextra.com/cine/esta-obra-maestra-ciencia-ficcion-terror-esta-a-punto-abandonar-netflix-ultimos-dias-para-disfrutar-lugar-tranquilo",
    "urlToImage": "https://i.blogs.es/b6e599/unlugartranquilo/840_560.jpeg",
    "publishedAt": "2023-11-01T12:00:44Z",
    "content": "Si alguna vez os toca ser víctimas de una película de terror, debéis tener claro que guardar silencio es una de las mejores maneras de evitar caer en las garras del asesino. No conviene tropezarse in… [+2246 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "Apple Arcade Announces New Games Coming Following Price Increase",
    "description": "Apple today announced that eight new games will be added to Apple Arcade in November and December, including Disney Dreamlight Valley Arcade Edition, Football Manager 2024 Touch, Sonic Dream Team, Puzzle & Dragons Story, and more. In addition, Apple said over…",
    "url": "https://www.macrumors.com/2023/11/01/apple-arcade-new-games-november-december/",
    "urlToImage": "https://images.macrumors.com/t/qeSA2lNWJQSsmfCfgW-ayqjG-uo=/1600x/article-new/2020/06/apple-arcade-orange-feature.jpg",
    "publishedAt": "2023-11-01T13:08:02Z",
    "content": "Apple today announced that eight new games will be added to Apple Arcade in November and December, including Disney Dreamlight Valley Arcade Edition, Football Manager 2024 Touch, Sonic Dream Team, Pu… [+707 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "Apple Launches Tap to Pay on iPhone in Ukraine",
    "description": "Apple has launched Tap to Pay on iPhone in Ukraine, allowing independent sellers, small merchants, and large retailers in the country to use ‌iPhones‌ as a payment terminal.\n\n\n\n\n\nUkraine becomes the seventh region to support Tap to Pay, following similar roll…",
    "url": "https://www.macrumors.com/2023/11/01/apple-tap-to-pay-iphone-ukraine/",
    "urlToImage": "https://images.macrumors.com/t/rcZEezTvO9iyXjRqfQNVopslPF0=/3024x/article-new/2023/11/tap-to-pay-ukraine.jpg",
    "publishedAt": "2023-11-01T10:20:25Z",
    "content": "Apple has launched Tap to Pay on iPhone in Ukraine, allowing independent sellers, small merchants, and large retailers in the country to use iPhones as a payment terminal.\r\nUkraine becomes the sevent… [+1516 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Les Numériques"
    },
    "author": "Adrian Branco",
    "title": "Dossier : Snapdragon X Elite : Qualcomm veut déloger Intel dans nos PC Windows",
    "description": "Pour Qualcomm, la puce Snapdragon X Elite devrait lui permettre de se faire une place dans le marché du PC. Anatomie du processeur sur lequel reposent tous les espoirs de l’entreprise, six ans après avoir entamé l’aventure Windows ARM.",
    "url": "https://www.lesnumeriques.com/cpu-processeur/snapdragon-x-elite-qualcomm-veut-deloger-intel-dans-nos-pc-windows-a214369.html",
    "urlToImage": "https://cdn.lesnumeriques.com/optim/article/21/214369/b7fab343-snapdragon-x-elite-comment-qualcomm-veut-deloger-intel-dans-nos-pc-windows__1200_630__0-204-2001-1254.jpg",
    "publishedAt": "2023-11-01T11:00:00Z",
    "content": "Alex Katouzian, vice-président senior et manager général de la division Mobile, Compute et XR chez Qualcomm, dévoile le Snapdragon X Elite.\r\n© Adrian Branco / Les Numériques\r\nUn an après son annonce,… [+14219 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Xatakamovil.com"
    },
    "author": "Alejandro Alcolea",
    "title": "Foxconn es el pulmón de Apple, pero paga mejor a los empleados que fabrican móviles Huawei",
    "description": "Cuando hablamos de empresas clave para la industria de los móviles, salen relucir nombres como ASML o TSMC. Son dos de las empresas más punteras en lo que a diseño de maquinaria para fabricar chips y la propia fabricación de chips se refiere, pero no podemos …",
    "url": "https://www.xatakamovil.com/mercado/foxconn-pulmon-apple-paga-mejor-a-empleados-que-fabrican-moviles-huawei",
    "urlToImage": "https://i.blogs.es/23073e/1200_800-1-/840_560.jpeg",
    "publishedAt": "2023-11-01T10:00:40Z",
    "content": "Cuando hablamos de empresas clave para la industria de los móviles, salen relucir nombres como ASML o TSMC. Son dos de las empresas más punteras en lo que a diseño de maquinaria para fabricar chips y… [+2714 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "caschy",
    "title": "Belkin BoostCharge Pro 2-in-1: Ladedock kostet 130 Euro",
    "description": "Belkin hat sein neuestes Apple-spezifisches Ladezubehör vorgestellt: das BoostCharge Pro 2-in-1, das sowohl MagSafe als auch einen Apple-Watch-Ladeadapter enthält. Belkins neuer Ansatz für ein iPhone-Ladegerät ist in zwei neutralen Farbtönen erhältlich – Kohl…",
    "url": "https://stadt-bremerhaven.de/belkin-boostcharge-pro-2-in-1-ladedock-kostet-130-euro/",
    "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/10/BoostCharge-Pro-2-in-1.jpg",
    "publishedAt": "2023-11-01T09:30:19Z",
    "content": "Belkin hat sein neuestes Apple-spezifisches Ladezubehör vorgestellt: das BoostCharge Pro 2-in-1, das sowohl MagSafe als auch einen Apple-Watch-Ladeadapter enthält. Belkins neuer Ansatz für ein iPhone… [+1013 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "IndieWire"
    },
    "author": "Brian Welk",
    "title": "Netflix in 2024: Watch 3 Episodes, Get the Fourth Ad-Free",
    "description": "Netflix is reducing its ad-load — for bingers — in its latest move to attract members to its cheapest tier.",
    "url": "https://www.indiewire.com/news/business/netflix-updates-ad-model-1234921874/",
    "urlToImage": "https://www.indiewire.com/wp-content/uploads/2023/10/XT400017_RT.jpg",
    "publishedAt": "2023-11-01T13:00:00Z",
    "content": "Happy Ad-iversary, Netflix! The traditional gift for a first anniversary is paper, which is what Netflix has been stacking up through new revenue streams. The latest modification to one of those, its… [+3552 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Frandroid"
    },
    "author": "Manuel Castejon",
    "title": "Apple TV+ peut-il vous convaincre d’abandonner Netflix, Prime Video et Disney+ ?",
    "description": "De son prix à son catalogue, Apple TV+ essaye de se démarquer de sa concurrence. Mais est-ce que cela arrive réellement à nous faire oublier Netflix, Prime Vidéo ou Disney+ ? On vous donne notre avis !",
    "url": "https://www.frandroid.com/marques/apple/1840093_apple-tv-plus-tout-savoir-prix-abonnement-series-films-service-svod",
    "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/10/apple-tv-plus-keynote-tim-cook-1.jpg",
    "publishedAt": "2023-11-01T08:00:48Z",
    "content": "De son prix à son catalogue, Apple TV+ essaye de se démarquer de sa concurrence. Mais est-ce que cela arrive réellement à nous faire oublier Netflix, Prime Vidéo ou Disney+ ? On vous donne notre avis… [+6664 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Frandroid"
    },
    "author": "Axel Savoye",
    "title": "L’Apple MacBook Air M2 en 15 pouces est son prix le plus bas sur Amazon",
    "description": "Il y a quelques mois, Apple commercialisait une version de 15 pouces de son dernier MacBook Air M2, un produit attendu par les aficionados de la marque à la pomme qui apporte quelques améliorations mais aussi ses défauts, à commencer par un prix exorbitant. I…",
    "url": "https://www.frandroid.com/bons-plans/1843139_lapple-macbook-air-m2-en-15-pouces-est-son-prix-le-plus-bas-sur-amazon",
    "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/06/apple-macbook-air-m2-15-pouces-test-9-scaled.jpg",
    "publishedAt": "2023-11-01T06:28:37Z",
    "content": "Il y a quelques mois, Apple commercialisait une version de 15 pouces de son dernier MacBook Air M2, un produit attendu par les aficionados de la marque à la pomme qui apporte quelques améliorations m… [+3965 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Frandroid"
    },
    "author": "Guillaume Sonnet",
    "title": "Fortuneo : quels sont les frais bancaires de cette banque en ligne",
    "description": "Vous souhaitez ouvrir un compte chez Fortuneo, mais vous cherchez à mieux connaître les tarifs et les frais éventuels ? Voici tout ce que vous devez savoir.",
    "url": "https://www.frandroid.com/services/banque-en-ligne/1839159_fortuneo-quels-sont-les-frais-bancaires-de-cette-banque-en-ligne",
    "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/10/fortuneo-frais-bancaires.jpg",
    "publishedAt": "2023-11-01T09:02:43Z",
    "content": "Vous souhaitez ouvrir un compte chez Fortuneo, mais vous cherchez à mieux connaître les tarifs et les frais éventuels? Voici tout ce que vous devez savoir.\r\nAvec Boursobank et Hello Bank, Fortuneo es… [+3992 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Lifehacker.ru"
    },
    "author": "Дарья Костючкова",
    "title": "Подкаст «Слушай, это просто»: что такое шоумэнсинг, чем он грозит отношениям и как их уберечь",
    "description": "Разбираем понятие «шоумэнсинг» на примере пары голливудских звёзд и рассказываем, какие правила помогут избежать конфликтов на этой почве.",
    "url": "https://lifehacker.ru/slushaj-eto-prosto-38/",
    "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/2022/04/Podkast_Slushaj_eto_prosto_vse_formatyLX_sajt_LX_1649760766-1024x512.jpg",
    "publishedAt": "2023-11-01T12:30:26Z",
    "content": ". , : , . . ( ).\r\n , , , . , , . , , , , , .\r\n «, » , : Apple Podcasts, Google Podcasts, YouTube, «», «», «», CastboxSoundStream."
    },
    {
    "soutce": {
    "id": null,
    "name": "Srad.jp"
    },
    "author": "nagazou",
    "title": "Google重役曰く、Google検索を実行できないChromeに価値はほとんどない",
    "description": "headless 曰く、 米政府と各州が Google を訴えたアンチトラスト訴訟で、Chrome の価値が Google 検索を実行させることにあるという Google 重役の見解が注目されている\n(証拠品: PDF、\nAndroid Police の記事、\nThe Verge の記事)。\n\nこの見解は Google の Android プラットフォームおよびパートナーシップ担当 VP の Jim Kolotouros 氏が 2020 年、社内での電子メールを通じた会話で示していたものだ。Kolotouros …",
    "url": "https://it.srad.jp/story/23/10/31/2212257/",
    "urlToImage": "https://srad.jp/static/topics/chrome_64.png",
    "publishedAt": "2023-11-01T09:05:00Z",
    "content": "Google Chrome Google Google \r\n(: PDFAndroid Police The Verge )\r\nGoogle Android VP Jim Kolotouros 2020 Kolotouros Chrome Google Google Kolotouros Chrome \r\nKolotouros Google Xiaomi Samsung OEM Firefox … [+4 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "01net.com"
    },
    "author": "Mickael Bazoge",
    "title": "Tension artérielle, apnée du sommeil : les futures fonctions santé possibles des Apple Watch de 2024",
    "description": "Le cru 2023 de l'Apple Watch n'a pas été très porteur, avec des nouveautés très modestes pour la Series 9 et l'Ultra 2e génération. Le constructeur pourrait relancer la machine dès l'année prochaine avec l'ajout d'un nouveau capteur de santé.",
    "url": "https://www.01net.com/actualites/tension-arterielle-apnee-du-sommeil-nouvelles-fonctions-sante-pour-les-apple-watch-de-2024.html",
    "urlToImage": "https://www.01net.com/app/uploads/2023/11/Apple-Watch.jpg",
    "publishedAt": "2023-11-01T13:15:25Z",
    "content": "Le cru 2023 de l’Apple Watch n’a pas été très porteur, avec des nouveautés très modestes pour la Series 9 et l’Ultra 2e génération. Le constructeur pourrait relancer la machine dès l’année prochaine … [+4101 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "01net.com"
    },
    "author": "Hadrien Augusto",
    "title": "Test de la Withings ScanWatch 2 : les avantages et inconvénients de la montre française",
    "description": "Withings renouvelle sa montre connectée haut de gamme baptisée ScanWatch et lui ajoute un capteur de température corporel. Suivant la même logique qu’il y a trois ans, elle garde la technologie en arrière-plan pour nous laisser profiter d’un design et d’une c…",
    "url": "https://www.01net.com/tests/avis-withings-scanwatch-2-avantages-inconvenients-montre-connectee-francaise.html",
    "urlToImage": "https://www.01net.com/app/uploads/2023/10/test-scanwatch-2-withings-montre-connectee-006.jpg",
    "publishedAt": "2023-11-01T06:23:33Z",
    "content": "Withings renouvelle sa montre connectée haut de gamme baptisée ScanWatch et lui ajoute un capteur de température corporel. Suivant la même logique quil y a trois ans, elle garde la technologie en arr… [+12756 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "01net.com"
    },
    "author": "Mickael Bazoge",
    "title": "L’Apple Watch interdite de vente aux États-Unis après Noël ?",
    "description": "Le lendemain de Noël pourrait avoir des allures de gueule de bois pour Apple. Une agence américaine a en effet jugé que quasiment tous les modèles d'Apple Watch en vente actuellement enfreignaient des brevets appartenant à l'entreprise Masimo. Résultat : les …",
    "url": "https://www.01net.com/actualites/lapple-watch-interdite-de-vente-aux-etats-unis-apres-noel.html",
    "urlToImage": "https://www.01net.com/app/uploads/2020/09/Apple-Watch-Series-6-capt.jpg",
    "publishedAt": "2023-11-01T07:30:53Z",
    "content": "Le lendemain de Noël pourrait avoir des allures de gueule de bois pour Apple. Une agence américaine a en effet jugé que quasiment tous les modèles d’Apple Watch en vente actuellement enfreignaient de… [+3528 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "01net.com"
    },
    "author": "Mickael Bazoge",
    "title": "La matinale 01net : Galaxy A15, retour sur les puces M3, ménage Gmail",
    "description": "Bonjour à tous, voici la matinale de 01net ! Jour férié ou pas, retrouvez toute l’actu à connaitre pour démarrer la journée du bon pied.",
    "url": "https://www.01net.com/actualites/la-matinale-01net-galaxy-a15-retour-sur-les-puces-m3-menage-gmail.html",
    "urlToImage": "https://www.01net.com/app/uploads/2023/10/01net-Morning-8.jpg",
    "publishedAt": "2023-11-01T06:01:13Z",
    "content": "Bonjour à tous, voici la matinale de 01net ! Jour férié ou pas, retrouvez toute lactu à connaitre pour démarrer la journée du bon pied.À retenir dans l’actu\r\nOn parle beaucoup des smartphones haut de… [+1284 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "01net.com"
    },
    "author": "Bons Plans 01net",
    "title": "Ce 1er novembre, la banque BoursoBank dégaine une prime FOLLE sur 24 heures",
    "description": "Ex-Boursorama Banque, BoursoBank continue de séduire généreusement les nouveaux clients. Pendant 24 heures, sur la seule journée du 1er novembre 2023, elle permet à ces derniers de toucher un bonus de 150 euros en cash. Sans condition du tout.",
    "url": "https://www.01net.com/bons-plans/ce-1er-novembre-la-banque-boursobank-degaine-une-prime-folle-sur-24-heures.html",
    "urlToImage": "https://www.01net.com/app/uploads/2022/09/banque-enligne.jpg",
    "publishedAt": "2023-11-01T07:15:48Z",
    "content": "Ex-Boursorama Banque, BoursoBank continue de séduire généreusement les nouveaux clients. Pendant 24 heures, sur la seule journée du 1er novembre 2023, elle permet à ces derniers de toucher un bonus d… [+5609 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Itsnicethat.com"
    },
    "author": "Sponsored Content",
    "title": "Meet the winners of Young Guns 21",
    "description": "Covering every corner of the creative industry, the winners represent some of today’s most exciting and promising talent.",
    "url": "https://www.itsnicethat.com/articles/young-guns-21-winners-creative-industry-sponsored-content-011123",
    "urlToImage": "https://admin.itsnicethat.com/images/2j9U-E9FfQz-GPpLZLzRsjMY4DA=/247479/width-1440/marie-chenier-young-guns-21-the-one-club-sponsored-content-itsnicethat-02.jpg",
    "publishedAt": "2023-11-01T11:00:00Z",
    "content": "Another of this years winners is Chinese illustrator Jiaqi Wang, whose colourful digital artworks are a feast for the eyes. Often composed in a maximalist style, she says finding order in the chaos i… [+1189 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Eurogamer.net"
    },
    "author": "Ed Nightingale",
    "title": "Shenmue creator has considered Yakuza 0-style prequel to continue series",
    "description": "Shenmue creator Yu Suzuki has discussed the possibility of a fourth game in the series, and the idea of developing it as a more approachable prequel, similar to Yakuza 0.\n\nShenmue 3 was released in 2019, 18 years after the second game, but was aimed predomina…",
    "url": "https://www.eurogamer.net/shenmue-creator-has-considered-yakuza-0-style-prequel-to-continue-series",
    "urlToImage": "https://assetsio.reedpopcdn.com/shenmue-i-and-ii-trophy-and-achievement-list-1534865636066.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    "publishedAt": "2023-11-01T12:51:29Z",
    "content": "Shenmue creator Yu Suzuki has discussed the possibility of a fourth game in the series, and the idea of developing it as a more approachable prequel, similar to Yakuza 0.\r\nShenmue 3 was released in 2… [+2281 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Acouplecooks.com"
    },
    "author": "Sonja Overhiser",
    "title": "Our Best Banana Bread Recipe",
    "description": "This easy banana bread recipe is simply the best! This moist, sweet, golden quick bread is a kitchen essential. Banana…\nA Couple Cooks - Recipes worth repeating.",
    "url": "https://www.acouplecooks.com/banana-bread-recipe/",
    "urlToImage": "https://www.acouplecooks.com/wp-content/uploads/2023/10/Banana-Bread-010.jpg",
    "publishedAt": "2023-11-01T13:30:00Z",
    "content": "This post may include affiliate links; for details, see our disclosure policy.\r\nThis easy banana bread recipe is simply the best! This moist, sweet, golden quick bread is a kitchen essential.\r\nBanana… [+8810 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Geekissimo.com"
    },
    "author": "Antonio Mele",
    "title": "Nuovi rumors sui Samsung Galaxy S24 di inizio novembre",
    "description": "Nuovi rumors da valutare sul Samsung Galaxy S24 in vista del prossimo anno",
    "url": "https://geekissimo.com/2023/11/01/nuovi-rumors-sui-samsung-galaxy-s24-di-inizio-novembre/",
    "urlToImage": "https://geekissimo.com/wp-content/uploads/2023/11/Samsung-Galaxy-S24-e1698399223850.jpg",
    "publishedAt": "2023-11-01T10:18:22Z",
    "content": "Ci sono altre novità che dobbiamo prendere in esame in questo periodo sui Samsung Galaxy S24. Di recente, un dirigente di Samsung ha espresso la fiducia dell’azienda nelle prestazioni del chipset Exy… [+2482 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Smartworld.it"
    },
    "author": "Vincenzo Ronca",
    "title": "Apple aggiorna il suo AirTag: sempre più affidabile",
    "description": "Negli ultimi anni abbiamo visto una consistente impennata dell'interesse del mercato nei tracker Bluetooth. Tra quelli che ci vengono subito...\r\nL'articolo Apple aggiorna il suo AirTag: sempre più affidabile sembra essere il primo su Smartworld.",
    "url": "https://www.smartworld.it/news/apple-aggiorna-airtag-novembre.html",
    "urlToImage": "https://www.smartworld.it/wp-content/uploads/android/2021/06/Apple-AirTag-def-02.jpg",
    "publishedAt": "2023-11-01T00:35:00Z",
    "content": "Negli ultimi anni abbiamo visto una consistente impennata dell'interesse del mercato nei tracker Bluetooth. Tra quelli che ci vengono subito in mente troviamo quelli prodotti da Apple e Samsung, risp… [+767 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Armando Tinoco",
    "title": "Former ‘RHONY’ Star Ramona Singer Dropped From BravoCon After Racial Slur",
    "description": "Ramona Singer has been dropped from BravoCon and won’t be attending the event in Las Vegas this weekend. Fans hoping to meet the former Real Housewives of New York City star at the three-day convention will not be able to do so after Singer used a racial slur…",
    "url": "https://deadline.com/2023/10/ramona-singer-dropped-bravocon-rhony-1235589212/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2023/10/ramona-singer-rhony-bravocon.jpg?w=1024",
    "publishedAt": "2023-11-01T03:31:19Z",
    "content": "Ramona Singer has been dropped from BravoCon and won’t be attending the event in Las Vegas this weekend. Fans hoping to meet the former Real Housewives of New York City star at the three-day conventi… [+1185 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Digiday"
    },
    "author": "Tim Peterson",
    "title": "Future of TV Briefing: Netflix plots next phase in its programmatic ad push",
    "description": "This week’s Future of TV Briefing looks at Netflix’s plans to provide more programmatic buying options for advertisers.",
    "url": "http://digiday.com/future-of-tv/future-of-tv-briefing-netflix-plots-next-phase-in-its-programmatic-ad-push/",
    "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2023/03/netflix-dynamite-digiday.jpg",
    "publishedAt": "2023-11-01T04:01:00Z",
    "content": "This Future of TV Briefing covers the latest in streaming and TV for Digiday+ members and is distributed over email every Wednesday at 10 a.m. ET. More from the series →This weeks Future of TV Briefi… [+8035 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "La Vanguardia"
    },
    "author": "Fran Besora",
    "title": "Las diferentes formas de evitar que el Mac se duerma",
    "description": "Vamos a explicarte las diferentes formas que existen para evitar que el Mac se duerma. Los Mac de Apple cuentan con un modo para ahorrar batería llamado \"suspensión\" que se activa cuando el Mac está con la tapa abierta, pero lleva tiempo sin usarse. Sin embar…",
    "url": "https://www.lavanguardia.com/andro4all/apple/las-diferentes-formas-de-evitar-que-el-mac-se-duerma",
    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/10/widgets.interactivos-macos-sonoma.jpg?width=1200",
    "publishedAt": "2023-11-01T08:01:34Z",
    "content": "Cómo evitar que el Mac se duerma\r\nVamos a explicarte las diferentes formas que existen para evitar que el Mac se duerma. Los Mac de Apple cuentan con un modo para ahorrar batería llamado \"suspensión\"… [+2482 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Impress.co.jp"
    },
    "author": null,
    "title": "NTTの新たな言語モデル「tsuzumi」は何がすごい？　島田社長らが語った展望とは",
    "description": "NTT（持株）は1日、大規模言語モデル（LLM）「tsuzumi」について、2024年3月に商用サービスとして提供を開始することを発表した。法人への提供を想定する。",
    "url": "https://k-tai.watch.impress.co.jp/docs/news/1543972.html",
    "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1543/972/200.jpg",
    "publishedAt": "2023-11-01T12:59:52Z",
    "content": "OpenAIChatGPTLLMtsuzumi \r\n tsuzumi4 \r\n tsuzumiAIRakudaGPT-3.5LLM \r\n 670NTTOpenAIGPT-317501/3001/25 \r\n tsuzumi \r\n NTTNTTtsuzumi \r\n NTTtsuzumi \r\n 14tsuzumi2tsuzumiAI \r\nNTTNTTNTTNTT\r\nLLM\r\n202720271000\r\n… [+62 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Impress.co.jp"
    },
    "author": null,
    "title": "[石野純也の「スマホとお金」]楽天のポイントプログラムが12月改定！　楽天モバイルユーザーはどれくらいおトクになる？",
    "description": "楽天グループは、12月1日、SPU（スーパーポイントアッププログラム）の特典内容を変更します。 一言でまとめれば、楽天モバイルユーザーの優遇を強める内容 。ポイント付与の倍率を上げることで、より楽天モバイルから楽天市場への誘導を強める格好になります。また、固定回線の代替として利用されている「Rakuten Turbo」のポイント倍率も上がります。その他での調整もあり、最大倍率は11月までの15.5倍から16.5倍にアップします。",
    "url": "https://k-tai.watch.impress.co.jp/docs/column/value/1543579.html",
    "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1543/579/1.jpg",
    "publishedAt": "2023-11-01T01:00:30Z",
    "content": "121SPU Rakuten Turbo1115.516.5 \r\n 504 \r\n5\r\n SPUUN-LIMIT VII321236RakutenSPU \r\n 70006000Rakuten TurboSPU150000.5%5000SPURakuten Turbo4.5% \r\n 121 4 12 \r\n /Rakuten Turbo1260.52114.5128SPU16.5 \r\n 5500100… [+618 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Clubic"
    },
    "author": "Mérouan Goumiri",
    "title": "Apple iMac M3 : le port Lightning fait de la résistance sur la souris et le clavier",
    "description": "Si vous espériez que les nouveaux iMac M3 allaient, eux aussi, adopter l'USB-C, il faudra visiblement patienter encore un peu.",
    "url": "https://www.clubic.com/actualite-507343-apple-m3-imac-le-port-lightning-fait-de-la-resistance-sur-la-souris-et-le-clavier.html",
    "urlToImage": "https://pic.clubic.com/v1/images/2157679/raw",
    "publishedAt": "2023-11-01T07:27:00Z",
    "content": "Dans la nuit du lundi 30 au mardi 31 octobre, lors de sa keynote, Apple a confirmé que les nouveaux périphériques de l'iMac seront dotés de port Ligntning. Cela concerne aussi bien la Magic Mouse, le… [+578 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Clubic"
    },
    "author": "Camille Coirault",
    "title": "Rien ne va plus chez Volkswagen : les ventes de véhicules électriques chutent en Europe et Porsche se jette dans les bras de Google",
    "description": "Le géant Volkswagen n'est pas au mieux de sa forme, particulièrement en ce qui concerne ses ventes de véhicules électriques sur le territoire européen. Sa filiale Porsche, de son côté, se tourne vers Google pour l'infodivertissement de ses futurs modèles.",
    "url": "https://www.clubic.com/actualite-507346-rien-ne-va-plus-chez-volkswagen-les-ventes-de-vehicules-electriques-chutent-en-europe-et-porsche-se-jette-dans-les-bras-de-google.html",
    "urlToImage": "https://pic.clubic.com/v1/images/1855650/raw",
    "publishedAt": "2023-11-01T10:27:00Z",
    "content": "Le géant Volkswagen n'est pas au mieux de sa forme, particulièrement en ce qui concerne ses ventes de véhicules électriques sur le territoire européen. Sa filiale Porsche, de son côté, se tourne vers… [+3397 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Appbank.net"
    },
    "author": "岩佐",
    "title": "「MacBook Pro」M3搭載モデルの致命的な弱点",
    "description": "Appleは10月31日、新しい「MacBook Pro」のラインナップを発表しました。このシリーズで最も安価なのはM3チップ搭載の14インチ「MacBook Pro」ですが、このモデルには「欠落した機能」があるとテック […]",
    "url": "https://www.appbank.net/2023/11/01/technology/2610936.php",
    "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/10/2023-1031-Apple-thumb-1.jpeg",
    "publishedAt": "2023-11-01T02:58:58Z",
    "content": "Apple1031MacBook ProM314MacBook Pro9to5Mac\r\n*Category:\r\n Technology *Source9to5Mac ,Tom’s Guide\r\nM3MacBook Pro\r\nAppleMacBook ProM3CPUGPU20M3M1\r\n1Apple16K60Hz\r\nM1M1 ProM1 MaxMacBook Pro2320226M2MacBoo… [+670 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "The Indian Express"
    },
    "author": "Rahel Philipose, Sonal Gupta",
    "title": "Daily Briefing: SC begins hearing on electoral bonds; what a normal monsoon hides; and more",
    "description": "In today’s edition: Opposition leaders allege snooping after Apple alert; Bombay HC takes note of Mumbai pollution; amid ED summons to Kejriwal, an AAP challenge; and more",
    "url": "https://indianexpress.com/article/live-news/top-news-briefing-today-9008486/",
    "urlToImage": "https://images.indianexpress.com/2023/10/Express-intro.png",
    "publishedAt": "2023-11-01T03:27:01Z",
    "content": "Several Opposition leaders and some journalists received a rather ominous Apple alert recently warning them  of state-sponsored attackers trying to remotely compromise their iPhones. \r\nAs expected, t… [+3607 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "The Indian Express"
    },
    "author": "Express News Service",
    "title": "Snooping row: TMC MP Mahua Moitra writes to Lok Sabha Speaker Om Birla asking him to seek accountability from authorities",
    "description": "Moitra said international organisations like Access Now and Citizen Lab in September 2023, had confirmed the validity of Apple’s threat notifications.",
    "url": "https://indianexpress.com/article/india/snooping-row-tmc-mahua-moitra-writes-to-lok-sabha-speaker-om-birla-9008998/",
    "urlToImage": "https://images.indianexpress.com/2023/11/PTI10_26_2023_000006B.jpg",
    "publishedAt": "2023-11-01T09:27:23Z",
    "content": "The MP, who is set to appear before the Ethics Committee of Parliament Thursday in the cash-for-query scandal, had announced Tuesday she would be writing to Birla to seek his protection and intervent… [+2507 chars]"
    },
    {
    "soutce": {
    "id": null,
    "name": "Googlewatchblog.de"
    },
    "author": "Jens",
    "title": "Android: Google bezahlt die Smartphone-Hersteller für schnelle Sicherheitsupdates + Suchmaschinen-Provision",
    "description": "Google-CEO Sundar Pichai hat verraten, dass man die Smartphone-Hersteller tatsächlich für schnelle Sicherheitsupdates bezahlt - in Form erhöhter Provisionen.Android: Google bezahlt die Smartphone-Hersteller für schnelle Sicherheitsupdates + Suchmaschinen-Prov…",
    "url": "https://www.googlewatchblog.de/?p=213622",
    "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/android-logo.jpg",
    "publishedAt": "2023-11-01T06:00:12Z",
    "content": "Google hat die Anforderungen an die Smartphone-Hersteller rund um Android immer weiter nach oben geschraubt und dabei unter anderem schnellere und längere Sicherheitsupdates vorgesehen. Jetzt hat Goo… [+1900 chars]"
    }
    ]
  render() {
    return (
      <div className='container my-3'>
      <h2>News Flick -Top headings</h2>
      <div className="row">
        <div className="col-md-4">
            <Newsitem title="mytitle"discription="mydesc" imgurl="https://www.nalandaopenuniversity.com/wp-content/uploads/2023/07/ICC-WORLD-CUP-2023-SCHEDULE-2-1024x683.jpg"/>
        </div>
        <div className="col-md-4">
            <Newsitem title="mytitle"description="mydesc"/>
        </div>
        <div className="col-md-4">
            <Newsitem title="mytitle"description="mydesc"/>
        </div>
      </div>
      </div>
    )
  }
}

export default News
