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

        // Add a delete button
        let deleteButton = $('<button class="delete-entry text-white bg-red-500 border m-2 hover:underline ml-2">Supprimer</button>');
        newInputGroup.append(deleteButton);

        $('#formations-container').append(newInputGroup);
        counter++;
    });
     // Event listener for delete buttons (using event delegation)
    $('#formations-container').on('click', '.delete-entry', function() {
        $(this).closest('.formationsInput-group').remove();
    });
});
// cerating the delete button
let deleteButton = $('<button class="delete-entry text-red-500 hover:underline ml-2">Supprimer</button>');

// Ajouter competences
