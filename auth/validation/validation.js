//フォームで入力した値を即時取得する
//ファームで入力した値を取得した時バリデーションチェックを行う

//バリデーションチェック用のフラグ
var validationFlag = new Array(5);

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

    //バリデーションチェック
    document.getElementById( "output-name" ).innerHTML = validationName($formObject.formName.value);
    document.getElementById( "output-mail" ).innerHTML = validationMail($formObject.formMail.value);
    document.getElementById( "output-password-input" ).innerHTML = validationPassword($formObject.formPasswordInput.value,1);
    document.getElementById( "output-password-confirm" ).innerHTML = validationPassword($formObject.formPasswordConfirm.value,2);
    document.getElementById( "output-password-same-chack" ).innerHTML = checkSamePassword($formObject.formPasswordInput.value,$formObject.formPasswordConfirm.value);
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

function validationPassword(passwordValue,type){
    var reg = /^([a-zA-Z0-9]{8,32})$/;
    if(reg.test(passwordValue)){
        if(type == 1){
            validationFlag[2] = true;
        }else if(type == 2){
            validationFlag[3] = true;
        }
        return passwordValue;
    }else{
        if(type == 1){
            validationFlag[2] = false;
        }else if(type == 2){
            validationFlag[3] = false;
        }
        return '8 to 32 single-byte alphanumeric characters';
    }
}

function checkSamePassword(inputPasswordValue,confirmPasswordValue){
    if(inputPasswordValue == confirmPasswordValue){
        validationFlag[4] = true;
        return 'OK!';
    }else{
        validationFlag[4] = false;
        return 'Different strings';
    }
}

//バリデーションチェックしてかすれ制御
function validationSubmitButton(){
    if(validationFlag[0]==true && validationFlag[1]==true && validationFlag[2]==true && validationFlag[3]==true && validationFlag[4]==true){
        document.getElementById("submit").disabled = "";
    }else{
        document.getElementById("submit").disabled = "disabled";
    }
}
