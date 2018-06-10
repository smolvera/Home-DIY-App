var makeDate = function() {
    var date = new Date();
    var formateDate = "";

    formateDate += (date.getMonth() + 1) + "_";
    formateDate += date.getDate() + "_";
    formateDate += date.getFullYear();
    return formateDate;
};

module.exports = makeDate;