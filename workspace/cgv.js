// --- footer 부분 계열사 Go --- //

function goFamilySite() {

    var selectElement = document.getElementById("family-site");

    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    if (selectedValue && selectedValue !== "family-site-Title") {
        window.open(selectedValue, "_blank");
    }

}