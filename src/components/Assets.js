// IMAGES
import Mimic from "../assets/img/Mimic.PNG";
import Slime from "../assets/img/Slime.PNG";
import Mushaboom from "../assets/img/Mushaboom.PNG";
import Unborn from "../assets/img/Unborn.PNG";
import Skeleton from "../assets/img/Skeleton.PNG";
import Doll from "../assets/img/Doll.PNG";
import Tonberry from "../assets/img/Tonberry.PNG";
import Shambler from "../assets/img/Shambler.PNG";
import Screamer from "../assets/img/Screamer.PNG";
import Oni from "../assets/img/Oni.PNG";
import Hollow from "../assets/img/Hollow.PNG";
import Emil from "../assets/img/Emil.PNG";
import CorruptStatic from "../assets/img/CorruptStatic.jpg"
import BitCorrupt from "../assets/img/BitCorrupt.gif";
import Corrupt from "../assets/img/Corrupt.gif";
import Sneed from "../assets/img/CorruptSneed.gif";
import Pepe from "../assets/img/Pepe.PNG";

//AVATARS
import shinji_ikari from "../assets/img/shinji_ikari.png"
import gendo_ikari from "../assets/img/gendo_ikari.png"
import asuka_langley from "../assets/img/asuka_langley.png"

//BACKGROUND IMAGE
// CREDIT: https://franky_paleone.artstation.com/projects/lVwBEz
import DoomWall from "../assets/img/DoomWallBG.png"

//ICONS
import Skull from "../assets/img/skull.png";
import RedSkull from "../assets/img/skullRed.png";
import Lambent from "../assets/img/Lambent.PNG";
import Radiant from "../assets/img/Radiant.PNG";

//SFX
import DeathFX from "../assets/sfx/death.mp3";
import AttackFX from "../assets/sfx/attack.mp3";

//BGM
import Music from "../assets/mus/BG.mp3";
import Error from "../assets/mus/SCD.mp3";

const Images = {
    Slime,
    Mimic,
    Mushaboom,
    Unborn,
    Skeleton,
    Tonberry,
    Doll,
    Shambler,
    Screamer,
    Oni,
    Hollow,
    Emil,
    CorruptStatic,
    BitCorrupt,
    Corrupt,
    Sneed,
    Pepe
}

const Avatars = {
    shinji_ikari,
    gendo_ikari,
    asuka_langley
}

const Background = {
    DoomWall
}

const Icons = {
    Skull,
    RedSkull,
    Lambent,
    Radiant,

}

const SFX = {
    DeathFX: new Audio(DeathFX),
    AttackFX: new Audio(AttackFX)

}

const BGM = {
    BGM: new Audio(Music),
    Err: new Audio(Error)
}

const Assets = {
    Images,
    Avatars,
    Background,
    Icons,
    SFX,
    BGM
};

export default Assets;