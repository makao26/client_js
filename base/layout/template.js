function header(){
  var html = "";
  html += '<header class="navbar">';
  html += '<div class="navbar-brand">';
  html += '<span class="navbar-item">';
  html += '<span class="fa fa-language"></span>ポートフォリオ';
  html += '</span>';
  html += '</div>';
  html += '<div class="navbar-end">';
  html += '<div class="navbar-item">';
  html += '<div class="field has-addons">';
  html += '<div class="control">';
  html += '<input class="input" type="text" name="search" placeholder="キーワード検索">';
  html += '</div>';
  html += '<div class="control">';
  html += '<a class="button is-info"><i class="fa fa-search"></i>検索</a>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '<div class="navbar-item">';
  html += '<a href="#"><i class="fa fa-user"></i>ログイン</a>';
  html += '</div>';
  html += '</div>';
  html += '</header>';
  document.write(html);
}

function account(){
  var html = "";
  html += '<div class="hero is-info is-bold">';
  html += '<div class="hero-body">';
  html += '<div class="container">';
  html += '<h1 class="title">CASAREAL</h1>';
  html += '<h2 class="subtitle">@casareal-ls</h2>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  document.write(html);
}

function link(active_page){
  var html = "";
  html += '<section class="level">';
  html += '<div class="level-left"></div>';
  html += '<div class="level-right">';
  html += '<div class="level-item tabs">';
  html += '<ul>';
  if(active_page === 'profile'){
    html += '<li class="is-active"><a href="http://localhost:8888/client_js/profile/index.html">プロフィール</a></li>';
    html += '<li><a>投稿記事</a></li>';
    html += '<li><a>お問い合わせ</a></li>';
  }else if(active_page === 'article'){
    html += '<li ><a href="http://localhost:8888/client_js/profile/index.html">プロフィール</a></li>';
    html += '<li class="is-active"><a>投稿記事</a></li>';
    html += '<li><a>お問い合わせ</a></li>';
  }else if(active_page === 'contact'){
    html += '<li ><a href="http://localhost:8888/client_js/profile/index.html">プロフィール</a></li>';
    html += '<li><a>投稿記事</a></li>';
    html += '<li class="is-active"><a>お問い合わせ</a></li>';
  }
  html += '</ul>';
  html += '</div>';
  html += '</div>';
  html += '<div class="level-right">';
  html += '<div class="level-item">';
  html += '<a href="https://twitter.com/makao26?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @makao26</a>';
  html += '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  html += '</div>';
  html += '</div>';
  html += '</section>';
  document.write(html);
}

function footer(){
  var html = "";
  html += '<footer class="footer">';
  html += '<div class="container">';
  html += '<div class="content has-text-centered">2020 ©CASAREAL</div>';
  html += '</div>';
  html += '</footer>';
  document.write(html);
}

function side_twitter(){
  var html = "";
  html += '<a class="twitter-timeline" href="https://twitter.com/makao26?ref_src=twsrc%5Etfw">Tweets by makao26</a>';
  html += '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  document.write(html);
}

