const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 歌单 */
    audio: [{
            name: "室内系的TrackMaker",
            artist: " 诗",
            url: "http://music.163.com/song/media/outer/url?id=537787665.mp3"
        },
        {
            name: "白月光与朱砂痣 ",
            artist: " 大籽 ",
            url: "http://chuangshicdn.data.mvbox.cn/music/yc/22/05/29/22052923462083725727.mp3"
        },
        {
            name: "We Never",
            artist: "Hi Noise ",
            url: "http://music.163.com/song/media/outer/url?id=2135936211.mp3",
            lrc:"http://www.2t58.com/plug/down.php?ac=music&lk=lrc&id=bXd4d3N4a3No"
        },
        {
            name: "All My People",
            artist: " Alexandra Stan ",
            url: "http://music.163.com/song/media/outer/url?id=28551589.mp3"
        },
        {
            name: "Fool For You",
            artist: " KASTRA ",
            url: "http://music.163.com/song/media/outer/url?id=1817576399.mp3"
        },
        {
            name: "离别开出花（弹唱版）",
            artist: "就是南方凯 ",
            url: "https://freetyst.nf.migu.cn/public%2Fproduct9th%2Fproduct46%2F2023%2F12%2F2917%2F2023%E5%B9%B412%E6%9C%8829%E6%97%A511%E7%82%B907%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%A5%BD%E4%B9%90%E6%97%A0%E8%8D%921%E9%A6%96715186%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F69010400095173658.mp3?Key=c56aaa53a19e65c9&Tim=1711787624835&channelid=01&msisdn=609c5e0391e04544abfb61f6ff18251c"
        },
        {
            name: "不眠之夜 ",
            artist: "张杰,HOYO-MiX ",
            url: "http://music.163.com/song/media/outer/url?id=2122308127.mp3"
        },
        {
            name: "Мокрые губы (Relanium, Prezzplay, Deen West Radio Remix)",
            artist: " Lx24,Relanium,Dj Prezzplay,Deen West ",
            url: "http://music.163.com/song/media/outer/url?id=1873402191.mp3"
        },
        {
            name: "Repeat ",
            artist: "Chester Young,Rave Republic,Kris Kiss",
            url: "http://music.163.com/song/media/outer/url?id=2018458208.mp3"
        },
        {
            name: "One Last Kiss × Slow Down (Mashup) ",
            artist: "Jason的森风 ",
            url: "http://music.163.com/song/media/outer/url?id=1896444915.mp3"
        },
        {
            name: "Call of Silence（Clear Sky Remix）",
            artist: " Clear Sky ",
            url: "http://music.163.com/song/media/outer/url?id=1980337835.mp3"
        },
        {
            name: "Catch My Breath ",
            artist: " Kelly Clarkson ",
            url: "http://music.163.com/song/media/outer/url?id=26286214.mp3"
        },
        {
            name: "Dancin (Krono Extended Remix) ",
            artist: " Aaron Smith",
            url: "http://music.163.com/song/media/outer/url?id=403811453.mp3"
        },
        {
            name: "Demons ",
            artist: " Imagine Dragons ",
            url: "http://music.163.com/song/media/outer/url?id=19945727.mp3"
        },
        {
            name: "Dusk Till Dawn ",
            artist: "X.K.F ",
            url: "http://music.163.com/song/media/outer/url?id=1836108061.mp3"
        },
        {
            name: "Edge Of My Life ",
            artist: "- Manafest ",
            url: "http://music.163.com/song/media/outer/url?id=28878559.mp3"
        },
        {
            name: "Ein Kleines Lied (Around the World) ",
            artist: " Candee!",
            url: "http://music.163.com/song/media/outer/url?id=17075871.mp3"
        },
        {
            name: "Friend of Mine ",
            artist: " Avicii,Vargas & Lagola ",
            url: "http://music.163.com/song/media/outer/url?id=1941826296.mp3"
        },
        {
            name: "If We Ever Broke Up ",
            artist: "- Mae Stephens ",
            url: "http://music.163.com/song/media/outer/url?id=2084535440.mp3"
        },
        {
            name: "Inside the Lines ",
            artist: " Mike Perry,Casso ",
            url: "http://music.163.com/song/media/outer/url?id=436514455.mp3"
        },
        {
            name: "Lone Ranger ",
            artist: "TEMPOCONTROL ",
            url: "http://music.163.com/song/media/outer/url?id=408280693.mp3"
        },
        {
            name: "Lonely Together ",
            artist: " Avicii,Rita Ora ",
            url: "http://music.163.com/song/media/outer/url?id=512648029.mp3"
        },
        {
            name: "Lose Control ",
            artist: " Hedley ",
            url: "http://music.163.com/song/media/outer/url?id=1950524874.mp3"
        },
        {
            name: "Love Story ",
            artist: "Taylor Swift ",
            url: "http://music.163.com/song/media/outer/url?id=1969538016.mp3"
        },
        {
            name: "Neon Rainbow ",
            artist: " Rameses B,Anna Yvette ",
            url: "http://music.163.com/song/media/outer/url?id=416011673.mp3"
        },
        {
            name: "Nevada ",
            artist: " Vicetone,Cozi Zuehlsdorff ",
            url: "http://music.163.com/song/media/outer/url?id=428591777.mp3"
        },
        {
            name: "Outside (Radio Edit) ",
            artist: " CALVIN HARRIS ft ELLIE GOULDING ",
            url: "http://music.163.com/song/media/outer/url?id=32211729.mp3"
        },
        {
            name: "Payphone ",
            artist: " Maroon 5,Wiz Khalifa ",
            url: "http://music.163.com/song/media/outer/url?id=473120817.mp3"
        },
        {
            name: "Solo Dance ",
            artist: " Martin Jensen ",
            url: "http://music.163.com/song/media/outer/url?id=1919437035.mp3"
        },
        {
            name: "SOS ",
            artist: " Avicii,Aloe Blacc ",
            url: "http://music.163.com/song/media/outer/url?id=1357848241.mp3"
        },
        {
            name: "Take me hands ",
            artist: " DAISHI DANCE,Cécile Corbel ",
            url: "http://music.163.com/song/media/outer/url?id=2071452224.mp3"
        },
        {
            name: "The Best Of Me ",
            artist: " Dion Timmer,The Arcturians ",
            url: "http://music.163.com/song/media/outer/url?id=1329938686.mp3"
        },
        {
            name: "The Days ",
            artist: " Avicii ",
            url: "http://music.163.com/song/media/outer/url?id=2063398298.mp3"
        },
        {
            name: "The Nights ",
            artist: " Avicii ",
            url: "http://music.163.com/song/media/outer/url?id=1826923389.mp3"
        },
        {
            name: "Try ",
            artist: " PINK ",
            url: "http://music.163.com/song/media/outer/url?id=29542114.mp3"
        },
        {
            name: "Umbrella (Matte Remix) ",
            artist: " Matte,Ember Island ",
            url: "http://music.163.com/song/media/outer/url?id=518904426.mp3"
        },
        {
            name: "Welcome to New York (Instrumetal Version) ",
            artist: " A.M.7. ",
            url: "http://music.163.com/song/media/outer/url?id=568816535.mp3"
        },
        {
            name: "Wake Me Up ",
            artist: " Avicii,Aloe Blacc ",
            url: "http://music.163.com/song/media/outer/url?id=1479688868.mp3"
        },
        {
            name: "Walk Thru Fire ",
            artist: " Vicetone,Meron Ryan ",
            url: "http://music.163.com/song/media/outer/url?id=1332041346.mp3"
        },
        {
            name: "带我去找夜生活 ",
            artist: " 告五人 ",
            url: "https://freetyst.nf.migu.cn/public%2Fproduct9th%2Fproduct45%2F2022%2F02%2F1715%2F2022%E5%B9%B402%E6%9C%8816%E6%97%A513%E7%82%B946%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%9B%B8%E4%BF%A1%E9%9F%B3%E4%B9%905014%E9%A6%96336965%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F64049302802154634.mp3?Key=96e117480ab9d064&Tim=1712998200126&channelid=01&msisdn=5049a04093cf49d5add01fdbb60f8e0e"
        },
        {
            name: "毒药 ",
            artist: " 周星星 ",
            url: "http://music.163.com/song/media/outer/url?id=2066654616.mp3"
        },
        {
            name: "红色高跟鞋  ",
            artist: " 蔡健雅 ",
            url: "https://freetyst.nf.migu.cn/public%2Fproduct9th%2Fproduct46%2F2023%2F05%2F1119%2F2008%E5%B9%B411%E6%9C%8807%E6%97%A5%E4%BA%9A%E7%A5%9E%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F60057702036190124.mp3?Key=d5c8ff67e515157f&Tim=1712998258278&channelid=01&msisdn=8df2c7ecf6a2493b8a92d734dfa70272"
        },
        {
            name: "凄美地 ",
            artist: " 郭顶 ",
            url: "http://music.163.com/song/media/outer/url?id=436346833.mp3"
        },
        {
            name: "巡光 ",
            artist: " 就是南方凯 ",
            url: "http://music.163.com/song/media/outer/url?id=1985027951.mp3"
        },
        {
            name: "在你的身边 ",
            artist: " 盛哲 ",
            url: "http://music.163.com/song/media/outer/url?id=475479888.mp3"
        },
        {
            name: "By Your Side ",
            artist: " RAYE,Jonas Blue ",
            url: "http://music.163.com/song/media/outer/url?id=456370693.mp3"
        },
        {
            name: "待添加",
            artist: "作者名 ",
            url: "歌曲网址"
        },
        {
            name: "see you again ",
            artist: "无敌了孩子 ",
            url: "http://music.163.com/song/media/outer/url?id=2068421149.mp3"
        },
    ]
});

/* 底栏歌词 */
setInterval(function () {
    $("#lrc").html("<span class='lrc-show'><i class='iconfont icon-music'></i> " + $(".aplayer-lrc-current").text() + " <i class='iconfont icon-music'></i></span>");
}, 500);

/* 音乐通知及控制 */
ap.on('play', function () {
    music = $(".aplayer-title").text() + $(".aplayer-author").text();
    iziToast.info({
        timeout: 8000,
        iconUrl: './img/icon/music.png',
        displayMode: 'replace',
        message: music
    });
    $("#play").html("<i class='iconfont icon-pause'>");
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
    if ($(document).width() >= 990) {
        $('.power').css("cssText", "display:none");
        $('#lrc').css("cssText", "display:block !important");
    }
});

ap.on('pause', function () {
    $("#play").html("<i class='iconfont icon-play'>");
    if ($(document).width() >= 990) {
        $('#lrc').css("cssText", "display:none !important");
        $('.power').css("cssText", "display:block");
    }
});

//音量调节
function changevolume() {
    var x = $("#volume").val();
    ap.volume(x, true);
    if (x == 0) {
        $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>");
    } else if (x > 0 && x <= 0.3) {
        $("#volume-ico").html("<i class='iconfont icon-volume'></i>");
    } else if (x > 0.3 && x <= 0.6) {
        $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>");
    } else {
        $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
    }
}

$("#music").hover(function () {
    $('.music-text').css("display", "none");
    $('.music-volume').css("display", "flex");
}, function () {
    $('.music-text').css("display", "block");
    $('.music-volume').css("display", "none");
})

/* 一言与音乐切换 */
$('#open-music').on('click', function () {
    $('#hitokoto').css("display", "none");
    $('#music').css("display", "flex");
});

$("#hitokoto").hover(function () {
    $('#open-music').css("display", "flex");
}, function () {
    $('#open-music').css("display", "none");
})

$('#music-close').on('click', function () {
    $('#music').css("display", "none");
    $('#hitokoto').css("display", "flex");
});

/* 上下曲 */
$('#play').on('click', function () {
    ap.toggle();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#last').on('click', function () {
    ap.skipBack();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#next').on('click', function () {
    ap.skipForward();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

/* 打开音乐列表 */
$('#music-open').on('click', function () {
    if ($(document).width() >= 990) {
        $('#box').css("display", "block");
        $('#row').css("display", "none");
        $('#more').css("cssText", "display:none !important");
    }
});