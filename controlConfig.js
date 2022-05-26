var fields = [{
    element: "address1",
    field: "Line1",
    mode: pca.fieldMode.SEARCH | pca.fieldMode.POPULATE
}, {
    element: "address2",
    field: "Line2",
    mode: pca.fieldMode.POPULATE
}, {
    element: "town_city",
    field: "City",
    mode: pca.fieldMode.POPULATE
}, {
    element: "state",
    field: "Province",
    mode: pca.fieldMode.POPULATE
}, {
    element: "zip_postal_code",
    field: "PostalCode",
    mode: pca.fieldMode.POPULATE
}, {
    element: "country",
    field: "CountryName",
    mode: pca.fieldMode.POPULATE | pca.fieldMode.COUNTRY
}];

//detect language and set innerHTML english or spanish
var usrlang = navigator.language ||
    navigator.userLanguage;

var options = {
    key: "RN75-YG53-JC77-PA23",
    culture: usrlang,
    setCountryByIP: true
};

//From docs 
var control = new pca.Address(fields, options);