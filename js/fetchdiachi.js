
// 1. what is API
// 2. How do I call API
// 3. Explain code
const host = "https://provinces.open-api.vn/api/";
var callAPI = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data, "province");
        });
}
callAPI('https://provinces.open-api.vn/api/?depth=1');
var callApiDistrict = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data.districts, "district");
        });
}
var callApiWard = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data.wards, "ward");
        });
}
var renderData = (array, select) => {
    let row = ' <option disable value="">chọn</option>';
    array.forEach(element => {
        row += `<option value="${element.name}" data-code="${element.code}">${element.name}</option>`;
    });
    document.querySelector("#" + select).innerHTML = row;
}


$("#province").change(() => {
    const provinceCode = $("#province option:selected").data("code");
    callApiDistrict(host + "p/" + provinceCode + "?depth=2");
    printResult();
});

$("#district").change(() => {
    const districtCode = $("#district option:selected").data("code");
    callApiWard(host + "d/" + districtCode + "?depth=2");
    printResult();
});

$("#ward").change(() => {
    printResult();
})

var printResult = () => {
    if ($("#district").val() != "" && $("#province").val() != "" &&
        $("#ward").val() != "") {
        let result = $("#province option:selected").text() +
            " | " + $("#district option:selected").text() + " | " +
            $("#ward option:selected").text();
        $("#result").text(result)
    }

}
