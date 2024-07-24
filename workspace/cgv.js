// --- footer 부분 계열사 Go --- //

function goFamilySite() {

    // selectElement 변수를 선언하고, id가 "family-site"인 <select> 요소를 참조하도록 설정
    var selectElement = document.getElementById("family-site");
    // selectElement의 현재 선택된 옵션(selectedIndex)의 value 속성을 selectedValue 변수에 저장
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    // selectedValue가 존재하고, 그 값이 "family-site-Title"이 아닌 경우에만 다음 코드를 실행
    // 이 조건문은 기본값인 "계열사 바로가기"가 선택되지 않았는지 확인
    if (selectedValue && selectedValue !== "family-site-Title") {
        window.location.href = selectedValue;
    }
    // 브라우저의 현재 URL을 selectedValue로 설정하여 해당 URL로 이동
    // 사용자가 선택한 계열사의 사이트로 이동
}