// Ajouter une formation
$(document).ready(function() {
    let counter = 1;

    $('#addtraining').click(function() {
        
        let newTrainingInputGroup = $('.formationsInput-group').first().clone();
        
        // Update IDs and names
        newTrainingInputGroup.find('#diplome0').attr('id', 'diplome' + counter).attr('name', 'diplome' + counter);
        newTrainingInputGroup.find('#etablissement0').attr('id', 'etablissement' + counter).attr('name', 'etablissement' + counter);
        newTrainingInputGroup.find('#anneeDebut0').attr('id', 'anneeDebut' + counter).attr('name', 'anneeDebut' + counter);
        newTrainingInputGroup.find('#anneeFin0').attr('id', 'anneeFin' + counter).attr('name', 'anneeFin' + counter);

        // Add a delete button
        let deleteTrainingButton = $('<button class="delete-entry text-white bg-red-500 border m-2 hover:underline ml-2">Supprimer</button>');
        newTrainingInputGroup.append(deleteTrainingButton);

        $('#formations-container').append(newTrainingInputGroup);
        counter++;
    });
     // Event listener for delete buttons (using event delegation)
    $('#formations-container').on('click', '.delete-entry', function() {
        $(this).closest('.formationsInput-group').remove();
    });
});
// cerating the delete button
let deleteTrainingButton = $('<button class="delete-entry text-red-500 hover:underline ml-2">Supprimer</button>');

// Ajouter competences
$(document).ready(function() {
    let counter = 1;

    $('#addSkills').click(function() {
        
        let newSkillsInputGroup = $('.competencesInput-group').first().clone();
        
        // Update IDs and names
        newSkillsInputGroup.find('#skills0').attr('id', 'skills' + counter).attr('name', 'skills' + counter);
        newSkillsInputGroup.find('#niveauCompetence0').attr('id', 'niveauCompetence' + counter).attr('name', 'niveauCompetence' + counter);
        // newInputGroup.find('#anneeDebut0').attr('id', 'anneeDebut' + counter).attr('name', 'anneeDebut' + counter);
        // newInputGroup.find('#anneeFin0').attr('id', 'anneeFin' + counter).attr('name', 'anneeFin' + counter);

        // Add a delete button
        let deleteSkillsButton = $('<button class="delete-entry text-white bg-red-500 border m-2 hover:underline ml-2">Supprimer</button>');
        newSkillsInputGroup.append(deleteSkillsButton);

        $('#competences-container').append(newSkillsInputGroup);
        counter++;
    });
     // Event listener for delete buttons (using event delegation)
    $('#competences-container').on('click', '.delete-entry', function() {
        $(this).closest('.competencesInput-group').remove();
    });
});
// cerating the delete button
let deleteSkillsButton = $('<button class="delete-entry text-red-500 hover:underline ml-2">Supprimer</button>');
