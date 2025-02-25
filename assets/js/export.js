
$('#export_btn').on("click", function () {
    console.log("Process export");
    var doc = new jsPDF();
    var pdf = document.getElementById("importZone");
    //doc.fromHTML(pdf);
    doc.fromHTML(pdf, 0, 0, {
        'width': 100, // max width of content on PDF
    },
    function(){doc.save('saveInCallback.pdf');});
});