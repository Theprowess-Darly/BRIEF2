// Informations personnelles
$( "#fullname" ).on( "keyup", function( event ) {
    $("#templateName").text(event.target.value) ;
} );
$( "#age" ).on( "change", function( event ) {
    $("#templateAge").text("Age "+event.target.value +" ans") ;
} );
$( "#sex" ).on( "change", function( event ) {
    $("#templateSex").text(event.target.value) ;
} );
$( "#address" ).on( "keyup", function( event ) {
    $("#templateAddress").text(event.target.value) ;
} );
$( "#telephone" ).on( "change", function( event ) {
    $("#templatePhone").text(event.target.value) ;
} );
$( "#picture" ).on( "change", function( event ) {
    $("#templatePicture").text(event.target.value) ;
} );
$( "#email" ).on( "keyup", function( event ) {
    $("#templateEmail").text(event.target.value) ;
} );
$( "#titre" ).on( "keyup", function( event ) {
    $("#templateTitre").text(event.target.value) ;
} );
$( "#situation" ).on( "keyup", function( event ) {
    $("#templateStatus").text(event.target.value) ;
} );
$( "#description" ).on( "keyup", function( event ) {
    $("#templateDescription").text(event.target.value) ;
} );




// Experiance professionelle
$( "#companyName" ).on( "keyup", function( event ) {
    $("#templateName").text(event.target.value) ;
} );
