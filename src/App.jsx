import React, { PureComponent } from 'react';
import './header.scss';
import './footer.scss';
import './main.scss';
import tobi from './img/tobi.jpg';
import hatakeKakashi from './img/hatakeKakashi.jpg';
import uzumakiNaruto from './img/uzumakiNaruto.jpg';
import uchihaItachi from './img/uchihaItachi.jpg';
import assassinback from './img/assassinsOfClassRoom.jpg';
import korSensei from './img/korosensei.jpg';
import karmaAkabane from './img/karmaAkabane.jpg';
import gakuhouAsano from './img/gakuhouAsano.jpg';
import bleach from './img/bleach.jpg';
import ichigoKurosaki from './img/ichigoKurosaki.jpg';
import kenpachiZaraki from './img/kenpachiZaraki.jpg';
import renjiAbarai from './img/renjiAbarai.jpg';
import myHeroAcademia from './img/myHeroAcademia.png';
import izukuMidoriya from './img/izukuMidoriya.jpg';
import allMight from './img/allMight.jpg';
import endeavor from './img/endeavor.jpg';
import fullmetalAlchemist from './img/fullmetalAlchemist.jpg';
import edwardElric from './img/edwardElric.jpg';
import royMustang from './img/royMustang.png';
import vanHohenheim from './img/vanHohenheim.png';
import codeGeass from './img/codeGeass.jpg';
import lelouchLamperouge from './img/lelouchLamperouge.jpg';
import cC from './img/cc.png';
import kallenStadtfeld from './img/kallenStadtfeld.jpg';
import moriartythePatriot from './img/moriartythePatriot.jpg';
import sherlockHolmes from './img/sherlockHolmes.png';
import williamJamesMoriarty from './img/williamJamesMoriarty.png';
import sebastianMoran from './img/sebastianMoran.png';
import vinlandSaga from './img/vinlandSaga.jpg';
import askeladd from './img/askeladd.jpg';
import canute from './img/Canute.webp';
import thorfinn from './img/thorfinn.jpg';
import hunterxHunter from './img/hunterxHunter.jpg';
import meruem from './img/meruem.jpg';
import killuaZoldyck from './img/killuaZoldyck.jpg';
import hisokaMorow from './img/hisokaMorow.jpg';
import drSTONE from './img/drSTONE.jpg';
import genAsagiri from './img/genAsagiri.webp';
import senkuIshigami from './img/senkuIshigami.jpg';
import ukyouSaionji from './img/ukyouSaionji.jpg';
import onepiece from './img/onePiece.jpg';
import sabo from './img/sabo.jpg';
import lawTrafalgar from './img/lawTrafalgar.jpg';
import luffyDMonkey from './img/luffyDMonkey.jpg';
import aoashi from './img/aoashi.jpg';
import ashitoAoi from './img/ashitoAoi.jpg';
import haruhisaKuribayashi from './img/haruhisaKuribayashi.jpg';
import yuumaMotoki from './img/yuumaMotoki.jpg';
import tokyoRevengers from './img/tokyoRevengers.jpg';
import draken from './img/draken.jpg';
import chifuyu from './img/chifuyu.jpg';
import takemichi from './img/takemichi.jpg';
import blueLock from './img/blueLock.jpg';
import rinItoshi from './img/rinItoshi.jpg';
import nagi from './img/nagi.jpg';
import yoichiIsagi from './img/yoichiIsagi.jpg';
import jujutsuKaisen from './img/jujutsuKaisen.jpg';
import gojou from './img/gojou.jpg';
import sukuna from './img/sukuna.jpg';
import makiZenin from './img/makiZenin.jpg';
import blackClover from './img/blackClover.jpg';
import yamiSukehiro from './img/yamiSukehiro.jpg';
import asta from './img/asta.jpg';
import julius from './img/julius.jpg';
import onePunchMan from './img/onePunchMan.jpg';
import saitama from './img/saitama.jpg';
import garou from './img/garou.jpg';
import king from './img/king.jpg';
import recordofRagnarok from './img/recordofRagnarok.jpg';
import buddha from './img/buddha.jpg';
import adam from './img/adam.jpg';
import jacktheRipper from './img/jacktheRipper.jpg';
import spyXFamily from './img/sPYxFAMILY.jpg';
import loidForger from './img/loidForger.jpg';
import anyaForger from './img/anyaForger.jpg';
import bond from './img/bond.webp';
import chainsawMan from './img/chainsawMan.jpg';
import power from './img/power.jpg';
import denji from './img/denji.jpg';
import asaMitaka from './img/asaMitaka.jpg';



let option = 1;

/*
Tarif Options
0: Hello World
1: Anime / Home
2: Manga
*/

function choose1() {
  if (option === 0) {
    return <Helloworld />;
  } else if (option === 1) {
    return <Main />;
  } else if (option === 2) {
    return <Manga />;
  }
}

class App extends  PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StateFirstdiv: choose1()
    };
    this.setanime = this.setanime.bind(this);
    this.setmanga = this.setmanga.bind(this);
  }

  componentDidMount() {
    this.checkonload();
    this.changetitle();
  }
  changetitle() {
    if (option === 1) {
      document.title = `Top 3 Character | Anime`;
    }
    else if (option === 2) {
      document.title = `Top 3 Character | Manga`;
    }
  }

  checkonload() {
    const styleanime = document.getElementById('anime');
    const stylemanga = document.getElementById('manga');
    if (option === 1) {
      stylemanga.style = '';
      styleanime.style.textDecoration = 'underline';
      styleanime.style.textDecorationColor = '#0A3A9E';
    } else if (option === 2) {
      styleanime.style = '';
      stylemanga.style.textDecoration = 'underline';
      stylemanga.style.textDecorationColor = '#0A3A9E';
    }
  }

  setanime() {
    if (option === 1) {
      console.log('you are already in anime page!!!');
    } else {
      option = 1;
      this.checkonload();
      this.changetitle();
      this.setState({ StateFirstdiv: choose1() });
    }
  }

  setmanga() {
    if (option === 2) {
      console.log('You are already in manga page!!!');
    } else {
      option = 2;
      this.checkonload();
      this.changetitle();
      this.setState({ StateFirstdiv: choose1() });
    }
  }


  render() {
    // eslint-disable-next-line no-unused-vars
    let {props , state} = this.props;
    return (
      <div>
        <Header1 setanime={this.setanime} setmanga={this.setmanga} />
        {this.state.StateFirstdiv}
        <Footer1 />
      </div>
    );
  }
}

/* Const Hello World */
const Helloworld = () => {
  return <>Hello World</>;
};

const cartBack = {
  backgroundSize: 'cover',
  /* backgroundPosition: 'center center', */
  /* height: '100%',
  width: '100%', */
  backgroundRepeat: 'no-repeat',
  /* backgroundAttachment: 'fixed', */
  overflowX: 'hidden'
}
function Cardd(animenum, AnimeName, picbackkardd, firstpic, firstname, secondpic, secondname, thirdpic, thirdname, firstlink, secondlink, thirdlink) {
  return (
    <div className='cart' style={{ backgroundImage: `url(${picbackkardd})`, backgroundAttachment: 'fixed', ...cartBack }}>
      <div className='cart-title'>{animenum}: {AnimeName}</div>
      <div className='cart-base'>

        <div className="cart-base-char" style={{ backgroundImage: `url(${firstpic})`, ...cartBack }}><a href={firstlink} target='_blank' rel="noreferrer">First: {firstname} </a></div>

        <div className="cart-base-char" style={{ backgroundImage: `url(${secondpic})`, ...cartBack }} ><a href={secondlink} target='_blank' rel="noreferrer">second: {secondname} </a></div>

        <div className="cart-base-char" style={{ backgroundImage: `url(${thirdpic})`, ...cartBack }}><a href={thirdlink} target='_blank' rel="noreferrer">Third: {thirdname} </a></div>
      </div>
    </div>
  )
}

/* main page */
function Main() {
  return (
    <>
      <div className='main-div'>
        {Cardd('First', 'Naruto', tobi, uzumakiNaruto, 'Uzumaki Naruto', hatakeKakashi, 'Hatake Kakashi', uchihaItachi, 'Uchiha Itachi', 'https://anilist.co/character/17/Naruto-Uzumaki', 'https://anilist.co/character/85/Kakashi-Hatake', 'https://anilist.co/character/14/Itachi-Uchiha')}
        {/* *********************** */}
        {Cardd('Second' , 'Assassination Classroom' , assassinback , korSensei , 'Koro Sensei' , karmaAkabane , 'Karma Akabane' , gakuhouAsano , 'Gakuhou Asano' , 'https://anilist.co/character/65643/Korosensei' , 'https://anilist.co/character/71933/Karma-Akabane' , 'https://anilist.co/character/85819/Gakuhou-Asano')}
        {/* *********************** */}
        {Cardd('Third' , 'Bleach' , bleach , ichigoKurosaki , 'Ichigo Kurosaki' , kenpachiZaraki , 'Kenpachi Zaraki', renjiAbarai , 'Renji Abarai' , 'https://anilist.co/character/5/Ichigo-Kurosaki' , 'https://anilist.co/character/909/Kenpachi-Zaraki' , 'https://anilist.co/character/906/Renji-Abarai')}
        {/* *********************** */}
        {Cardd('Fourth' , 'My Hero Academia' , myHeroAcademia , izukuMidoriya , 'Izuku Midoriya' , allMight,'All Might' , endeavor , 'Endeavor' , 'https://anilist.co/character/89028/Izuku-Midoriya' , 'https://anilist.co/character/89224/Toshinori-Yagi' , 'https://anilist.co/character/126158/Enji-Todoroki')}
        {/* ************************ */}
        {Cardd('Fifth' , 'Fullmetal Alchemist' , fullmetalAlchemist, edwardElric , 'Edward Elric' , royMustang , 'Roy Mustang' , vanHohenheim , 'Van Hohenheim' , 'https://anilist.co/character/11/Edward-Elric' , 'https://anilist.co/character/68/Roy-Mustang' , 'https://anilist.co/character/9792/Van-Hohenheim')}
        {/* ************************* */}
        {Cardd('Sixth' , 'Code Geass' , codeGeass , lelouchLamperouge , 'Lelouch Lamperouge' , cC , 'CC' , kallenStadtfeld , 'Kallen Stadtfeld' , 'https://anilist.co/character/417/Lelouch-Lamperouge' , 'https://anilist.co/character/1111/CC' , 'https://anilist.co/character/558/Kallen-Stadtfeld')}
        {/* ************************** */}
        {Cardd('Seventh' , 'Moriarty the Patriot' , moriartythePatriot , sherlockHolmes , 'Sherlock Holmes' , williamJamesMoriarty , 'William James Moriarty' , sebastianMoran , 'Sebastian Moran' , 'https://anilist.co/character/151495/Sherlock-Holmes' , 'https://anilist.co/character/151486/William-James-Moriarty' , 'https://anilist.co/character/151490/Sebastian-Moran')}
        {/* ************************** */}
        {Cardd('Eighth' , 'Vinland Saga' , vinlandSaga , askeladd , 'Askeladd' , canute , 'Canute' , thorfinn , 'Thorfinn' , 'https://anilist.co/character/13020/Askeladd' , 'https://anilist.co/character/17438/Canute-Svenson' , 'https://anilist.co/character/10138/Thorfinn-Karlsefni')}
        {/* ************************** */}
        {Cardd('Ninth' , 'Hunter x Hunter' , hunterxHunter , meruem , 'Meruem' , killuaZoldyck , 'Killua Zoldyck' , hisokaMorow , 'Hisoka Morow' , 'https://anilist.co/character/23277/Meruem' , 'https://anilist.co/character/27/Killua-Zoldyck' , 'https://anilist.co/character/31/Hisoka-Morow')}
        {/* ************************** */}
        {Cardd('Tenth', 'Dr STONE' , drSTONE , genAsagiri , 'Gen Asagiri' , senkuIshigami , 'Senkuu Ishigami' , ukyouSaionji , 'Ukyou Saionji' , 'https://anilist.co/character/127445/Gen-Asagiri' , 'https://anilist.co/character/124142/Senkuu-Ishigami' , 'https://anilist.co/character/145064/Ukyou-Saionji')}

        
      </div>
    </>
  );
}
/* Manga Page */
function Manga() {
  return (
    <>
      <div className='main-div'>
        {Cardd('First' , 'One Piece' , onepiece , sabo , 'Sabo' , lawTrafalgar , 'Law Trafalgar' , luffyDMonkey , 'Luffy D Monkey' , 'https://anilist.co/character/32893/Sabo' , 'https://anilist.co/character/13767/Law-Trafalgar' , 'https://anilist.co/character/40/Luffy-D-Monkey')}
        {/* ************************** */}
        {Cardd('Second' , 'Aoashi' , aoashi , ashitoAoi , 'Ashito Aoi' , haruhisaKuribayashi , 'Haruhisa Kuribayashi' , yuumaMotoki , 'Yuuma Motoki' , 'https://anilist.co/character/133818/Ashito--Aoi' , 'https://anilist.co/character/162034/Haruhisa-Kuribayashi' , 'https://anilist.co/character/235170/Yuuma-Motoki')}
        {/* ************************** */}
        {Cardd('Third' , 'Tokyo Revengers' , tokyoRevengers , draken , 'Draken' , chifuyu , 'Chifuyu' , takemichi , 'Takemichi' , 'https://anilist.co/character/145345/Ken-Ryuuguji' , 'https://anilist.co/character/145344/Chifuyu-Matsuno' , 'https://anilist.co/character/145342/Takemichi-Hanagaki')}
        {/* ************************** */}
        {Cardd('Fourth' , 'Blue Lock' , blueLock , rinItoshi , 'Rin Itoshi' , nagi , 'Seishirou Nagi' , yoichiIsagi , 'Yoichi Isagi' , 'https://anilist.co/character/169395/Rin-Itoshi' , 'https://anilist.co/character/162969/Seishirou-Nagi' , 'https://anilist.co/character/140856/Yoichi-Isagi')}
        {/* ************************** */}
        {Cardd('Fifth' , 'Jujutsu Kaisen' , jujutsuKaisen , gojou , 'Satoru Gojou' , sukuna , 'Sukuna' , makiZenin , 'Maki Zenin' , 'https://anilist.co/character/127691/Satoru-Gojou' , 'https://anilist.co/character/133701/Sukuna' , 'https://anilist.co/character/134167/Maki-Zenin')}
        {/* ************************** */}
        {Cardd('Sixth' , 'Black Clover' , blackClover , yamiSukehiro , 'Yami Sukehiro' , asta , 'Asta' , julius , 'Julius Novachrono' , 'https://anilist.co/character/124440/Yami-Sukehiro' , 'https://anilist.co/character/123285/Asta' , 'https://anilist.co/character/124435/Julius-Novachrono')}
        {/* ************************** */}
        {Cardd('Seventh' , 'One Punch Man' , onePunchMan , saitama , 'Saitama' , garou , 'Garou' , king , 'King' , 'https://anilist.co/character/73935/Saitama' , 'https://anilist.co/character/89277/Garou' , 'https://anilist.co/character/88907/King')}
        {/* ************************** */}
        {Cardd('Eighth' , 'Record of Ragnarok' , recordofRagnarok , buddha , 'Buddha' , adam , 'Adam' , jacktheRipper , 'Jack the Ripper' , 'https://anilist.co/character/175945/Buddha' , 'https://anilist.co/character/140637/Adam' , 'https://anilist.co/character/159840/Jack-the-Ripper')}
        {/* ************************** */}
        {Cardd('Ninth' , 'SPY x FAMILY' , spyXFamily , loidForger , 'Loid Forger' , anyaForger , 'Anya Forger' , bond , 'Bond' , 'https://anilist.co/character/138101/Loid-Forger' , 'https://anilist.co/character/138100/Anya-Forger' , 'https://anilist.co/character/169679/Bond')}
        {/* ************************** */}
        {Cardd('Tenth' , 'Chainsaw Man' , chainsawMan , power , 'Power' , denji , 'Denji' , asaMitaka , 'Asa Mitaka' , 'https://anilist.co/character/137079/Power' , 'https://anilist.co/character/130102/Denji' , 'https://anilist.co/character/282389/Asa-Mitaka')}


      </div>
    </>
  );
}

/* const Header of site */
const Header1 = ({ setanime, setmanga }) => {
  return (
    <>
      <div className="header">
        <div id="manga" onClick={setmanga}>
          Manga
        </div>
        <div id="anime" onClick={setanime}>
          Anime
        </div>
      </div>
    </>
  );
};
const Footer1 = () => {
  return (
    <>
      <div className='footer'>
        <div className='copyright'>تمام حقوق کپی رایت محفوظ است</div>
        <div className='copyright'><big>آرسنیک</big></div>
        <div className='insta'>
          <a href='https://instagram.com/erfan._.ar3en1c' target='_blank' rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
            </svg>
          </a>

        </div>
      </div>
    </>
  );
}

export default App;
export { Header1 };
