function getName() {
    var input_contact_name = document.getElementById("formName").value;
    // input_contact_name = "入力された内容は「" + input_contact_text + "」です。";
    return input_contact_name;
}

function getMail() {
    var input_contact_mail = document.getElementById("formMail").value;
    return input_contact_mail;
}

function getCategory() {
    var input_contact_category = document.getElementById("formContactType").value;
    return input_contact_category;
}

function getText() {
    var input_contact_text = document.getElementById("formContactText").value;
    return input_contact_text;
}

function dialog(){
    var name = getName();
    var mail = getMail();
    var category = getCategory();
    var text = getText();
    var input ='入力した内容は以下の内容です。\n名前：' + name + '\nメールアドレス：' + mail + '\nお問い合わせ項目：'+ category + '\nお問い合わせ内容：'+ text;
    var rst = window.confirm(input);
    return rst;
}

// function check(){
//     if(dialog()){ // 確認ダイアログを表示
//       return true; // 「OK」時は送信を実行
//     }else{ // 「キャンセル」時の処理
//       window.alert('キャンセルされました'); // 警告ダイアログを表示
//       return false; // 送信を中止
//     }
// }

//イベントリスナー
var form = document.getElementById("contact-form");
form.addEventListener("submit",function(){
    if(dialog()){ // 確認ダイアログを表示
        return true; // 「OK」時は送信を実行
    }else{ // 「キャンセル」時の処理
        window.alert('キャンセルされました'); // 警告ダイアログを表示
        return false; // 送信を中止
    }
});
