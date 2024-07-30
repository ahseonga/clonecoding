// --- 메인 섹션 4 특별관 사진 --- //
document.addEventListener('DOMContentLoaded', function() {
    const TextElements = document.querySelectorAll('.picture-strongtext');

    TextElements.forEach(function(element) {

        element.addEventListener('mouseover', function(event) {

            const newImgSrc = element.getAttribute('data-img');
            const mainImage = document.getElementById('sectionImge-1');

            mainImage.setAttribute('src', newImgSrc);
        });
    });
});



// 예매하기 화살표 눌렀을 시 홈페이지 최상단으로 고정 시켜주기 //
document.querySelector('.fixed-arrow').addEventListener('click', function(arrow) {
    //preventDefault는 브라우저가 적용하는 기본 동작을 방지
    arrow.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// --- footer 부분 계열사 Go --- //

function goFamilySite() {

    const selectElement = document.getElementById("family-site");

    const selectedValue = selectElement.options[selectElement.selectedIndex].value;
    if (selectedValue && selectedValue !== "family-site-Title") {
        window.open(selectedValue, "_blank");
    }

}