//フォームで入力した値を即時取得する
//ファームで入力した値を取得した時バリデーションチェックを行う

//バリデーションチェック用のフラグ
var validationFlag = new Array(3);
//初期化不要かどうか検証必要
// for(let i=0;i<3;i++){
//     validationFlag[i] = false;
// }

//一回初期のvalueを取得その後はキーアップとオンチェンジの際にvalueの値を取得する
window.onload = function () {
    getValue();
    var $formObject = document.getElementById( "contact-form" );
    for( var $i = 0; $i < $formObject.length; $i++ ) {
        $formObject.elements[$i].onkeyup = function(){
            getValue();
        };
        $formObject.elements[$i].onchange = function(){
            getValue();
        };
    }
};
function getValue() {
    var $formObject = document.getElementById( "contact-form" );

    //input[name=text]
    // document.getElementById( "output-name" ).innerHTML = $formObject.formName.value;
    document.getElementById( "output-name" ).innerHTML = validationName($formObject.formName.value);
    document.getElementById( "output-mail" ).innerHTML = validationMail($formObject.formMail.value);

     //select
    document.getElementById( "output-contact-type" ).innerHTML = $formObject.formContactType.value;

     //textarea
    document.getElementById( "output-contact-text" ).innerHTML = validationContactText($formObject.formContactText.value);

    //input[name=radio] ※自力
    //$formObject.formSex.checked.valueっていうのはできないし、$formObject.formSex.valueにするとSafariでundefinedになるのでいろいろ試行錯誤した    
    // document.getElementById( "sampleOutputSex" ).innerHTML = $formObject.querySelector('input[name="formSex"]:checked').value; 
    // document.getElementById( "sampleOutputJob" ).innerHTML = $formObject.querySelector('input[name="formJob"]:checked').value;

    //input[name=checkbox] ※自力
    // document.getElementById( "sampleOutputHobby" ).innerHTML = ''; //いったん中身を削除
    //     for(var $i = 0; $i<$formObject.formHobby.length;$i++) { //複数checkedされていることもあるので、forでまわす（まわさないと1番目のしか取れない）
    //     if($formObject.formHobby[$i].checked) {
    //         document.getElementById( "sampleOutputHobby" ).innerHTML += $formObject.formHobby[$i].value + ' ';
    //     }
    // }

    //ボタンかすれ制御
    validationSubmitButton();
}

function validationName(nameValue){
    if(nameValue){
        validationFlag[0] = true;
        return nameValue;
    }else{
        validationFlag[0] = false;
        return 'Please enter your name';
    }
}

function validationMail(mailValue){
    var reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if(reg.test(mailValue)){
        validationFlag[1] = true;
        return mailValue;
    }else{
        validationFlag[1] = false;
        return 'Check your email address';
    }
}

function validationContactText(contactTextValue){
    if(contactTextValue){
        validationFlag[2] = true;
        return contactTextValue;
    }else{
        validationFlag[2] = false;
        return 'Please enter contact text';
    }
}

//バリデーションチェックしてかすれ制御
function validationSubmitButton(){
    if(validationFlag[0]==true && validationFlag[1]==true && validationFlag[2]==true){
        document.getElementById("submit").disabled = "";
    }else{
        document.getElementById("submit").disabled = "disabled";
    }
}
