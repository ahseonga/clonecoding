// --- 메인 섹션 4 --- //




// --- footer 부분 계열사 Go --- //

function goFamilySite() {

    const selectElement = document.getElementById("family-site");

    const selectedValue = selectElement.options[selectElement.selectedIndex].value;
    if (selectedValue && selectedValue !== "family-site-Title") {
        window.open(selectedValue, "_blank");
    }

}