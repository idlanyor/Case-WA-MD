const moment = require('moment-timezone')
require('moment/locale/id');
/**
 *
 * @param { string } prefix
 */
exports.help = (prefix) => {
    function formatDate() {
        moment.locale('id'); // Mengatur bahasa ke bahasa Indonesia
        const currentDate = moment(); // Membuat objek moment dari tanggal sekarang
        const formattedDate = currentDate.format('dddd, DD MMMM YYYY');
        return formattedDate;
    }
    function getCurrentTime() {
        const now = moment();
        const formattedTime = now.format('HH:mm');
        return formattedTime;
    }
    let tanggal = formatDate()
    let waktu = getCurrentTime()
    var text =
        `Daftar Menu Hinami Bot v2\n\n` +
        `*CHAT GPT* \n` +
        `➣ .gpt(GPT Turbo 3.5)\n` +
        `➣ .chat(GPT Standar)\n` +
        `*ISLAMI* \n` +
        `➣ .asmaulhusna(Random Asmaul Husna)\n` +
        `➣ .jadwalsholat(Jadwal Sholat Indonesia)\n` +
        `➣ .kisahnabi(Kisah 25 Nabi)\n` +
        `\n *YOUTUBE* \n` +
        `➣ .yts(Search YouTube)\n` +
        `➣ .play(Play YouTube Video)\n` +
        `➣ .ytmp3(YouTube to MP3)\n` +
        `➣ .ytmp4(YouTube to MP4)\n` +
        `\n *TIKTOK* \n` +
        `➣ .tt(TikTok No Watermark)\n` +
        `➣ .tta(TikTok Audio Download)\n` +
        `\n *CHECKER* \n` +
        `➣ .cekpln(Cek Tagihan Listrik)\n` +
        `➣ .cekresi(Cek Resi)\n` +
        `\n *EDUKASI* \n` +
        `➣ .brainly(Brainly)\n` +
        `➣ .kbbi(Kamus Besar Bahasa Indonesia)\n` +
        `➣ .rg(RoboGuru)\n` +
        `➣ .wiki(Wikipedia)\n` +
        `\n *ANIME* \n` +
        `➣ .anisearch(Cari Anime berdasarkan Judul)\n` +
        `➣ .animg(Cari Anime berdasarkan Gambar Scene)\n` +
        `➣ .otakudesu(Dapatkan detail dan link download Anime dari Otakudesu)--maintenance\n` +
        `\n *MEME* \n` +
        `➣ .cmm(Change My Mind Meme Generator) --maintenance\n` +
        `\n *UTILITAS* \n` +
        `➣ .checker(Cek Informasi) maintenance\n` +
        `\n *FUN GAME* \n` +
        `➣ .asahotak(Teka Teki Asah Otak)\n` +
        `➣ .caklontong(TTS Cak Lontong)\n` +
        `➣ .jenaka(Teka Teki Jenaka)\n` +
        `➣ .kata(Tebak Kata)\n` +
        `➣ .susunkata(Permainan Menyusun Kata)\n` +
        `➣ .tebakgambar(Tebak Gambar)\n` +
        `\nCatatan:\n` +
        `Perlakukan bot dengan baik, developer akan bertindak tegas apabila user melanggar aturan.`
    return text
    //     `${prefix}owner
    // ${prefix}listsurah
    // ${prefix}alquran
    // ${prefix}alquranaudio
    // ${prefix}asmaulhusna
    // ${prefix}kisahnabi
    // ${prefix}jadwalsholat
    // ${prefix}ytplay
    // ${prefix}ytsearch
    // ${prefix}ytmp3
    // ${prefix}ytmp4
    // ${prefix}telesticker
    // ${prefix}tiktoknowm
    // ${prefix}tiktokmusic
    // ${prefix}spotify
    // ${prefix}spotifysearch
    // ${prefix}jooxplay
    // ${prefix}igdl
    // ${prefix}igdl2
    // ${prefix}twtdl
    // ${prefix}fbdl
    // ${prefix}zippyshare
    // ${prefix}pinterest
    // ${prefix}pinterest2
    // ${prefix}pinterestdl
    // ${prefix}pixiv
    // ${prefix}pixivdl
    // ${prefix}character
    // ${prefix}manga
    // ${prefix}anime
    // ${prefix}wait
    // ${prefix}kusonime
    // ${prefix}kusonimesearch
    // ${prefix}otakudesu
    // ${prefix}otakudesusearch
    // ${prefix}storynime
    // ${prefix}1977
    // ${prefix}aden
    // ${prefix}brannan
    // ${prefix}brooklyn
    // ${prefix}clarendon
    // ${prefix}gingham
    // ${prefix}hudson
    // ${prefix}inkwell
    // ${prefix}earlybird
    // ${prefix}kelvin
    // ${prefix}lark
    // ${prefix}lofi
    // ${prefix}maven
    // ${prefix}mayfair
    // ${prefix}moon
    // ${prefix}nashville
    // ${prefix}perpetua
    // ${prefix}reyes
    // ${prefix}rise
    // ${prefix}slumber
    // ${prefix}stinson
    // ${prefix}toaster
    // ${prefix}valencia
    // ${prefix}walden
    // ${prefix}willow
    // ${prefix}xpro2
    // ${prefix}pencil
    // ${prefix}art
    // ${prefix}awoo
    // ${prefix}bts
    // ${prefix}cecan
    // ${prefix}cogan
    // ${prefix}elaina
    // ${prefix}estetic
    // ${prefix}exo
    // ${prefix}elf
    // ${prefix}kanna
    // ${prefix}loli
    // ${prefix}neko
    // ${prefix}ppcouple
    // ${prefix}waifu
    // ${prefix}shota
    // ${prefix}husbu
    // ${prefix}sagiri
    // ${prefix}shinobu
    // ${prefix}megumin
    // ${prefix}wallnime
    // ${prefix}chiisaihentai
    // ${prefix}trap
    // ${prefix}blowjob
    // ${prefix}yaoi
    // ${prefix}ecchi
    // ${prefix}hentai
    // ${prefix}ahegao
    // ${prefix}hololewd
    // ${prefix}sideoppai
    // ${prefix}animefeets
    // ${prefix}animebooty
    // ${prefix}animethighss
    // ${prefix}hentaiparadise
    // ${prefix}animearmpits
    // ${prefix}hentaifemdom
    // ${prefix}lewdanimegirls
    // ${prefix}biganimetiddies
    // ${prefix}animebellybutton
    // ${prefix}hentai4everyone
    // ${prefix}bj
    // ${prefix}ero
    // ${prefix}cum
    // ${prefix}feet
    // ${prefix}yuri
    // ${prefix}trap
    // ${prefix}lewd
    // ${prefix}feed
    // ${prefix}eron
    // ${prefix}solo
    // ${prefix}gasm
    // ${prefix}poke
    // ${prefix}anal
    // ${prefix}holo
    // ${prefix}tits
    // ${prefix}kuni
    // ${prefix}kiss
    // ${prefix}erok
    // ${prefix}smug
    // ${prefix}baka
    // ${prefix}solog
    // ${prefix}feetg
    // ${prefix}lewdk
    // ${prefix}waifu
    // ${prefix}pussy
    // ${prefix}femdom
    // ${prefix}cuddle
    // ${prefix}hentai
    // ${prefix}eroyuri
    // ${prefix}cum_jpg
    // ${prefix}blowjob
    // ${prefix}erofeet
    // ${prefix}holoero
    // ${prefix}classic
    // ${prefix}erokemo
    // ${prefix}fox_girl
    // ${prefix}futanari
    // ${prefix}lewdkemo
    // ${prefix}wallpaper
    // ${prefix}pussy_jpg
    // ${prefix}kemonomimi
    // ${prefix}nsfw_avatar
    // ${prefix}blackpink
    // ${prefix}neon
    // ${prefix}greenneon
    // ${prefix}advanceglow
    // ${prefix}futureneon
    // ${prefix}sandwriting
    // ${prefix}sandsummer
    // ${prefix}sandengraved
    // ${prefix}metaldark
    // ${prefix}neonlight
    // ${prefix}holographic
    // ${prefix}text1917
    // ${prefix}minion
    // ${prefix}deluxesilver
    // ${prefix}newyearcard
    // ${prefix}bloodfrosted
    // ${prefix}halloween
    // ${prefix}jokerlogo
    // ${prefix}fireworksparkle
    // ${prefix}natureleaves
    // ${prefix}bokeh
    // ${prefix}toxic
    // ${prefix}strawberry
    // ${prefix}box3d
    // ${prefix}roadwarning
    // ${prefix}breakwall
    // ${prefix}icecold
    // ${prefix}luxury
    // ${prefix}cloud
    // ${prefix}summersand
    // ${prefix}horrorblood
    // ${prefix}thunder
    // ${prefix}pornhub
    // ${prefix}glitch
    // ${prefix}avenger
    // ${prefix}space
    // ${prefix}ninjalogo
    // ${prefix}marvelstudio
    // ${prefix}lionlogo
    // ${prefix}wolflogo
    // ${prefix}steel3d
    // ${prefix}wallgravity
    // ${prefix}shadow
    // ${prefix}cup
    // ${prefix}cup1
    // ${prefix}romance
    // ${prefix}smoke
    // ${prefix}burnpaper
    // ${prefix}lovemessage
    // ${prefix}undergrass
    // ${prefix}love
    // ${prefix}coffe
    // ${prefix}woodheart
    // ${prefix}woodenboard
    // ${prefix}summer3d
    // ${prefix}wolfmetal
    // ${prefix}nature3d
    // ${prefix}underwater
    // ${prefix}golderrose
    // ${prefix}summernature
    // ${prefix}letterleaves
    // ${prefix}glowingneon
    // ${prefix}fallleaves
    // ${prefix}flamming
    // ${prefix}harrypotter
    // ${prefix}carvedwood
    // ${prefix}tiktok
    // ${prefix}arcade8bit
    // ${prefix}battlefield4
    // ${prefix}pubg
    // ${prefix}wetglass
    // ${prefix}multicolor3d
    // ${prefix}watercolor
    // ${prefix}luxurygold
    // ${prefix}galaxywallpaper
    // ${prefix}lighttext
    // ${prefix}beautifulflower
    // ${prefix}puppycute
    // ${prefix}royaltext
    // ${prefix}heartshaped
    // ${prefix}birthdaycake
    // ${prefix}galaxystyle
    // ${prefix}hologram3d
    // ${prefix}greenneon
    // ${prefix}glossychrome
    // ${prefix}greenbush
    // ${prefix}metallogo
    // ${prefix}noeltext
    // ${prefix}glittergold
    // ${prefix}textcake
    // ${prefix}starsnight
    // ${prefix}wooden3d
    // ${prefix}textbyname
    // ${prefix}writegalacy
    // ${prefix}galaxybat
    // ${prefix}snow3d
    // ${prefix}birthdayday
    // ${prefix}goldplaybutton
    // ${prefix}silverplaybutton
    // ${prefix}freefire`
}
