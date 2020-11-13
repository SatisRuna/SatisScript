/*
【このスクリプトについて】
このスクリプトはFediverse (3) Advent Calendar 2020の為に書いた『マストドンをのじゃでいっぱいにしてみたのじゃ～』のスクリプトなのじゃ。
わらわに悪い影響がなく常識的な範囲という条件を守れるのなら、勝手に改造するのも、勝手に配布するのも、githubであれこれするのも自由なのじゃ～。
必要であれば連絡をくれたら画像素材の提供もするのじゃ。
*/

//////////////////////////文字////////////////////////////
//文字をのじゃに
var p = document.getElementsByTagName("p");
for(var i = 0; i < p.length; ++i){
    p[i].innerHTML = "のじゃのじゃのじゃのじゃのじゃ";
    p[i].style.color = "#606984";
    p[i].style.fontWeight = "400"
}
//名前をのじゃに
var n1 = document.getElementsByClassName("display-name__html");
for(var i = 0; i < n1.length; ++i){
    n1[i].innerHTML = "サティス・エルフィール・ルナ";
}
var n2 = document.getElementsByClassName("notification__display-name");
for(var i = 0; i < n2.length; ++i){
    n2[i].innerHTML = "サティス・エルフィール・ルナ";
}
//トゥートした人の名前
var p = document.getElementsByClassName("display-name__html");
for(var i = 0; i < p.length; ++i){
    p[i].style.color = "#606984";
}
var p = document.getElementsByClassName("display-name__account");
for(var i = 0; i < p.length; ++i){
    p[i].style.color = "#606984";
}


/////////////////////////////////////////////////////////

//////////////////////////画像////////////////////////////
//アイコンをサティスに
var ai1 = document.getElementsByClassName("account__avatar");
for(var i = 0; i < ai1.length; ++i){
    ai1[i].style.backgroundImage = "url(https://s3.fedibird.com/accounts/avatars/000/121/877/original/890226dd54a7e342.jpg)"
}
var ai2 = document.getElementsByClassName("account__avatar-overlay-base");
for(var i = 0; i < ai2.length; ++i){
    ai2[i].style.backgroundImage = "url(https://s3.fedibird.com/accounts/avatars/000/121/877/original/890226dd54a7e342.jpg)"
}
var ai3 = document.getElementsByClassName("account__avatar-overlay-overlay");
for(var i = 0; i < ai3.length; ++i){
    ai3[i].style.backgroundImage = "url(https://s3.fedibird.com/accounts/avatars/000/121/877/original/890226dd54a7e342.jpg)"
}
/////////////////////////////////////////////////////////

//////////////////////////CSS1////////////////////////////
//マストドンの背景のメインカラーを白色にして、のじゃで埋めつくす。
var main_background = document.getElementsByTagName("body");
for(var i = 0; i < main_background.length; ++i){
    main_background[i].style.background = "#eee";
    main_background[i].style.backgroundImage = "url(https://s3.fedibird.com/media_attachments/files/105/197/181/582/922/970/original/e73a822ca44a20cc.png)"
}
//一番左のカラムのメニューアイコンの色を変更。
var menu_icon = document.getElementsByClassName("drawer__tab");
for(var i = 0; i < menu_icon.length; ++i){
    menu_icon[i].style.color = "#FFFFFF";
}
//一番左のカラムのメニューの背景を変更。
var menu_bg = document.getElementsByClassName("drawer__header");
for(var i = 0; i < menu_bg.length; ++i){
    menu_bg[i].style.background = "#0CA4E4";
}
//検索を編集
var zousan = document.getElementsByClassName("search");
for(var i = 0; i < zousan.length; ++i){
    zousan[i].innerHTML = "<label>" + "<input class='search__input' type='text' placeholder='何を検索するかの？' value=''>" + "</label>" + "<div role='button' tabindex='0' class='search__icon'>" + "<i role='img' class='fa fa-search active'>" + "</i>" + "<i role='img' class='fa fa-times-circle' aria-label='検索'>" + "</i>" + "</div>"
}
//一番左のカラムの検索のアイコンの色を変更。
var search_icon = document.getElementsByClassName('active');
for(var i = 0; i < search_icon.length; ++i){
    search_icon[i].style.color = "#0CA4E4";
    search_icon[i].style.opacity = "1";
}
//一番左のカラムの検索の背景を変更。
var search_bg = document.getElementsByClassName("search__input");
for(var i = 0; i < search_bg.length; ++i){
    search_bg[i].style.background = "#FFFFFF";
}
//一番左のカラムのプロフィール編集の背景を変更。
var navigation_bar = document.getElementsByClassName("navigation-bar");
for(var i = 0; i < navigation_bar.length; ++i){
    navigation_bar[i].style.background = "#FFFFFF";
}
//一番左のカラムのプロフィール編集の@を背景を変更。
var navigation_bar_id = document.getElementsByClassName("navigation-bar__profile-account");
for(var i = 0; i < navigation_bar_id.length; ++i){
    navigation_bar_id[i].style.color = "#0CA4E4";
}
//一番左のカラムのトゥートの背景を変更。
var toot_bg = document.getElementsByClassName("compose-form");
for(var i = 0; i < toot_bg.length; ++i){
    toot_bg[i].style.background = "#FFFFFF";
}
//一番左のカラムのトゥートの背景を変更。
var toot_bg_bg = document.getElementsByClassName("compose-form__buttons-wrapper");
for(var i = 0; i < toot_bg_bg.length; ++i){
    toot_bg_bg[i].style.background = "#0CA4E4";
}
//一番左のカラムのトゥートの下部アイコンを変更。
var toot_bg_bg_icon = document.getElementsByClassName("fa-fw");
for(var i = 0; i < toot_bg_bg_icon.length; ++i){
    toot_bg_bg_icon[i].style.color = "#FFFFFF";
}
var toot_bg_bg_icon = document.getElementsByClassName("text-icon-button");
for(var i = 0; i < toot_bg_bg_icon.length; ++i){
    toot_bg_bg_icon[i].style.color = "#FFFFFF";
}
var toot_bg_bg_icon = document.getElementsByClassName("character-counter");
for(var i = 0; i < toot_bg_bg_icon.length; ++i){
    toot_bg_bg_icon[i].style.color = "#FFFFFF";
}
//一番左のカラムの下部空間の透明に。
var space1 = document.getElementsByClassName("drawer__inner");
for(var i = 0; i < space1.length; ++i){
    space1[i].style.background = "none";
}
var space2 = document.getElementsByClassName("drawer__inner__mastodon");
for(var i = 0; i < space2.length; ++i){
    space2[i].style.background = "none";
}
//ゾウさんをサティスに。
var zousan = document.getElementsByClassName("drawer__inner__mastodon");
for(var i = 0; i < zousan.length; ++i){
    zousan[i].innerHTML = "<img " + "src=" + "https://s3.fedibird.com/media_attachments/files/105/197/904/153/743/250/original/8bc1fe13a27cba18.png" + ">"
}
//トゥートボタンをのじゃ！に
var t_btn = document.getElementsByClassName("compose-form__publish-button-wrapper");
for(var i = 0; i < t_btn.length; ++i){
    t_btn[i].innerHTML = "<button class=" + "button button--block" + " style=" + "padding: 0px 16px; height: 36px; line-height: 36px;" + ">Nojya!" + "</button>"
}
//一番左のカラムのトゥートボタンの背景を変更。
var t_btn_bg = document.getElementsByClassName("button");
for(var i = 0; i < t_btn_bg.length; ++i){
    t_btn_bg[i].style.background = "#0CA4E4";
}
/////////////////////////////////////////////////////////

//////////////////////////CSS2////////////////////////////
//一番左のカラムのヘッダーの背景を変更。
var header_bg1 = document.getElementsByClassName("column-header");
for(var i = 0; i < header_bg1.length; ++i){
    header_bg1[i].style.background = "#0CA4E4";
}
var header_bg2 = document.getElementsByClassName("column-header__buttons");
for(var i = 0; i < header_bg2.length; ++i){
    header_bg2[i].style.background = "#0CA4E4";
}
var header_bg3 = document.getElementsByClassName("column-header__button");
for(var i = 0; i < header_bg3.length; ++i){
    header_bg3[i].style.background = "#0CA4E4";
}
//一番左のカラムのヘッダーのアイコンの色を変更。
var slider_icon = document.getElementsByClassName('fa-sliders');
for(var i = 0; i < slider_icon.length; ++i){
    slider_icon[i].style.color = "#FFFFFF";
    slider_icon[i].style.opacity = "1";
}
//トゥート背景
var toot_bg = document.getElementsByClassName("status__wrapper-public");
for(var i = 0; i < toot_bg.length; ++i){
    toot_bg[i].style.background = "#FFFFFF";
}
var toot_bg = document.getElementsByClassName("status__wrapper-unlisted");
for(var i = 0; i < toot_bg.length; ++i){
    toot_bg[i].style.background = "#FFFFFF";
}
var toot_bg = document.getElementsByClassName("status__wrapper status__wrapper-private");
for(var i = 0; i < toot_bg.length; ++i){
    toot_bg[i].style.background = "#FFFFFF";
}
//トゥートアイコン
var toot_icon = document.getElementsByClassName("fa-reply");
for(var i = 0; i < toot_icon.length; ++i){
    toot_icon[i].style.color = "#0CA4E4";
}
var toot_icon = document.getElementsByClassName("fa-retweet");
for(var i = 0; i < toot_icon.length; ++i){
    toot_icon[i].style.color = "#0CA4E4";
}
var toot_icon = document.getElementsByClassName("fa-star");
for(var i = 0; i < toot_icon.length; ++i){
    toot_icon[i].style.color = "#0CA4E4";
}
var toot_icon = document.getElementsByClassName("fa-quote-right");
for(var i = 0; i < toot_icon.length; ++i){
    toot_icon[i].style.color = "#0CA4E4";
}
var toot_icon = document.getElementsByClassName("fa-bookmark");
for(var i = 0; i < toot_icon.length; ++i){
    toot_icon[i].style.color = "#0CA4E4";
}
var toot_icon = document.getElementsByClassName("fa-ellipsis-h");
for(var i = 0; i < toot_icon.length; ++i){
    toot_icon[i].style.color = "#0CA4E4";
}
/////////////////////////////////////////////////////////

//境界線
var tuuti = document.getElementsByClassName("status");
for(var i = 0; i < tuuti.length; ++i){
    tuuti[i].style.border = "1px solid #F1F3F4";
}
//３カラム目
var bg3 = document.getElementsByClassName("scrollable");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.background = "#FFFFFF";
}
var t_btn = document.getElementsByClassName("getting-started__trends");
for(var i = 0; i < t_btn.length; ++i){
    t_btn[i].innerHTML = ""
}
var bg3 = document.getElementsByClassName("getting-started__wrapper");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.background = "#FFFFFF";
}
var bg3 = document.getElementsByClassName("column-subheading");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.background = "#000000";
    bg3[i].style.color = "#FFFFFF";
}
var bg3 = document.getElementsByClassName("column-link");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.background = "#FFFFFF";
    bg3[i].style.color = "#0CA4E4";
}
var bg3 = document.getElementsByClassName("fa-envelope");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.color = "#0CA4E4";
}
var bg3 = document.getElementsByClassName("fa-globe");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.color = "#0CA4E4";
}
var bg3 = document.getElementsByClassName("fa-address-book");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.color = "#0CA4E4";
}
var bg3 = document.getElementsByClassName("fa-info-circle");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.color = "#0CA4E4";
}
var bg3 = document.getElementsByClassName("fa-hashtag");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.color = "#0CA4E4";
}
var bg3 = document.getElementsByClassName("fa-list-ul");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.color = "#0CA4E4";
}
var bg3 = document.getElementsByClassName("fa-user-circle");
for(var i = 0; i < bg3.length; ++i){
    bg3[i].style.color = "#0CA4E4";
}
var zousan = document.getElementsByClassName("getting-started__footer");
for(var i = 0; i < zousan.length; ++i){
    zousan[i].innerHTML = "<p>このページはJavascriptによって書き換えられているのじゃ。<br>「マストドンをのじゃでいっぱいにしてみたのじゃ～」のネタスクリプトなのじゃ。<br>作成者：https://fedibird.com/@Satis</p>"
}
var zousan = document.getElementsByClassName("columns-area__panels__pane");
for(var i = 0; i < zousan.length; ++i){
    zousan[i].innerHTML = ""
}