// Ajouter une formation
$(document).ready(function() {
    let counter = 1;

    $('#addtraining').click(function() {
        
        let newInputGroup = $('.formationsInput-group').first().clone();
        
        // Update IDs and names
        newInputGroup.find('#diplome0').attr('id', 'diplome' + counter).attr('name', 'diplome' + counter);
        newInputGroup.find('#etablissement0').attr('id', 'etablissement' + counter).attr('name', 'etablissement' + counter);
        newInputGroup.find('#anneeDebut0').attr('id', 'anneeDebut' + counter).attr('name', 'anneeDebut' + counter);
        newInputGroup.find('#anneeFin0').attr('id', 'anneeFin' + counter).attr('name', 'anneeFin' + counter);

        $('#formations-container').append(newInputGroup);
        counter++;
    });
});