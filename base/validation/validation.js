//フォームで入力した値を即時取得する
//ファームで入力した値を取得した時バリデーションチェックを行う

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
    document.getElementById( "output-name" ).innerHTML = $formObject.formName.value;
    document.getElementById( "output-mail" ).innerHTML = $formObject.formMail.value;

     //select
    document.getElementById( "output-contact-type" ).innerHTML = $formObject.formContactType.value;

     //textarea
    document.getElementById( "output-contact-text" ).innerHTML = $formObject.formContactText.value;

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
}
