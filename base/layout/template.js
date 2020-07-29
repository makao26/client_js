function header(){
  var html = "";
  html += '<header class="navbar">';
  html += '<div class="navbar-brand">';
  html += '<span class="navbar-item">';
  html += '<span class="fa fa-language"></span>一言SNS';
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

function footer(){
  var html = "";
  html += '<footer>';
  html += '<p><small>copyright ﾂｩ All Rights Reserved.</small></p>';
  html += '</footer>';
  document.write(html);
}

