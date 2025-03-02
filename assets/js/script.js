// Informations personnelles
$( "#fullname" ).on( "keyup", function( event ) {
    $("#templateName").text(event.target.value) ;
} );
$( "#age" ).on( "change", function( event ) {
    $("#templateAge").text("Age "+event.target.value +" ans") ;
} );
$( "#sex" ).on( "change", function( event ) {
    $("#templateSex").text("Sexe"+ event.target.value) ;
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
$( "#experience" ).on( "click", function(  ) {
    $("#templateExp").show() ;
} );

$( "#companyName0" ).on( "keyup", function( event ) {
    $("#templateCompName").text(event.target.value) ;
} );
$( "#poste0" ).on( "keyup", function( event ) {
    $("#templatePoste").text(event.target.value) ;
} );
$( "#debut0" ).on( "change", function( event ) {
    $("#templateStartDate").text("De " +event.target.value) ;
} );
$( "#fin0" ).on( "change", function( event ) {
    $("#templateEndDate").text("A "+event.target.value) ;
} );
$( "#descriptionPoste0" ).on( "keyup", function( event ) {
    $("#templateDescriptionPoste").text(event.target.value) ;
} );


// Competences
$( "#competence" ).on( "click", function(  ) {
    $("#templateSkills").show() ;
} );
$( "#skills0" ).on( "keyup", function( event ) {
    $("#templateSkill").text(event.target.value) ;
} ) ;
$( "#niveauCompetence0" ).on( "change", function( event ) {
    $("#templateSkillLevel").text(event.target.value) ;
} ) ;

// Formation
$( "#formation" ).on( "click", function(  ) {
    $("#templateTraining").show() ;
} );
$( "#diplome0" ).on( "keyup", function( event ) {
    $("#templateDiplome").text(event.target.value) ;
} );
$( "#etablissement0" ).on( "keyup", function( event ) {
    $("#templateSchool").text(event.target.value) ;
} );

$( "#anneeDebut0" ).on( "change", function( event ) {
    $("#templateStart").text("De " +event.target.value) ;
} );
$( "#anneeFin0" ).on( "change", function( event ) {
    $("#templateEnd").text("A "+event.target.value) ;
} );

// Langues
$( "#langue" ).on( "click", function(  ) {
    $("#templateLanguages").show() ;
} );
$( "#langue0" ).on( "keyup", function( event ) {
    $("#templateLangue").text(event.target.value) ;
} ) ;
$( "#niveauLangue0" ).on( "change", function( event ) {
    $("#templateLangueLevel").text(event.target.value) ;
} ) ;

// Centres d'interet
$( "#interet" ).on( "click", function(  ) {
    $("#templateInterests").show() ;
} );
$( "#interet0" ).on( "keyup", function( event ) {
    $("#templateInterest").text(event.target.value) ;
} ) ;

// References
$( "#reference" ).on( "click", function(  ) {
    $("#templateReferences").show() ;
} );
$( "#refName0" ).on( "keyup", function( event ) {
    $("#templateRefName").text(event.target.value) ;
} );
$( "#refPoste0" ).on( "keyup", function( event ) {
    $("#templateRefPoste").text(event.target.value) ;
} );
$( "#refPhone0" ).on( "change", function( event ) {
    $("#templateRefPhone").text(event.target.value) ;
} );
$( "#refEmail0" ).on( "keyup", function( event ) {
    $("#templateRefEmail").text(event.target.value) ;
} );


