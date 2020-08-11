document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
      var result = document.getElementById('result');
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // console.log(xhr.response);
            result.textContent = xhr.response.access_token;
            localStorage.setItem('token', xhr.response.access_token); //ローカルストレージに保存
          } else {
            result.textContent = 'サーバーエラーが発生しました。';
          }
        } else {
          result.textContent = '通信中...';
        }
      };
    //   var token = 'Bearer xxxxxxx' //ローカルストレージからの読み出したトークン
      xhr.open('POST', 'http://localhost:8888/api_laravel/public/api/register');
      xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
    //   xhr.setRequestHeader('Authorization', token); // 追加
      xhr.responseType = "json";
      //name, email, pasword をJSON形式にする
      var send_data = {
        'name': document.getElementById('formName').value,
        'email': document.getElementById('formMail').value,
        'password': document.getElementById('formPasswordInput').value
      };
    //   console.log(JSON.stringify(send_data)); //デバッグ用
      xhr.send(JSON.stringify(send_data));
    }, false);
  }, false);
