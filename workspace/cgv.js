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

// --- footer 부분 계열사 Go --- //

function goFamilySite() {

    const selectElement = document.getElementById("family-site");

    const selectedValue = selectElement.options[selectElement.selectedIndex].value;
    if (selectedValue && selectedValue !== "family-site-Title") {
        window.open(selectedValue, "_blank");
    }

}