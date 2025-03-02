// Ajouter une formation
$(document).ready(function() {
    let counterF = 1;

    $('#addtraining').click(function() {
        
        let newTrainingInputGroup = $('.formationsInput-group').first().clone();
        
        // Update IDs and names
        newTrainingInputGroup.find('#diplome0').attr('id', 'diplome' + counterF).attr('name', 'diplome' + counterF);
        newTrainingInputGroup.find('#etablissement0').attr('id', 'etablissement' + counterF).attr('name', 'etablissement' + counterF);
        newTrainingInputGroup.find('#anneeDebut0').attr('id', 'anneeDebut' + counterF).attr('name', 'anneeDebut' + counterF);
        newTrainingInputGroup.find('#anneeFin0').attr('id', 'anneeFin' + counterF).attr('name', 'anneeFin' + counterF);
    
        // Add a delete button
        let deleteTrainingButton = $('<button class="delete-training text-white bg-red-500 border m-2 hover:underline ml-2">Supprimer</button>');
        newTrainingInputGroup.append(deleteTrainingButton);

        $('#formations-container').append(newTrainingInputGroup);
        counterF++;
    });
     // Event listener for delete buttons (using event delegation)
    $('#formations-container').on('click', '.delete-training', function() {
        $(this).closest('.formationsInput-group').remove();
    });

    // Function to collect and display values
  


    // Ajouter experience
    let counterE = 1;
    $('#addExperience').click(function() {
                
        let newExperienceInputGroup = $('.experienceInput-group').first().clone();
       
        // Update IDs and names
        newExperienceInputGroup.find('#companyName0').attr('id', 'companyName' + counterE).attr('name', 'companyName' + counterE);
        newExperienceInputGroup.find('#poste0').attr('id', 'poste' + counterE).attr('name', 'poste' + counterE);
        newExperienceInputGroup.find('#debut0').attr('id', 'debut' + counterE).attr('name', 'debut' + counterE);
        newExperienceInputGroup.find('#fin0').attr('id', 'fin' + counterE).attr('name', 'fin' + counterE);
        newExperienceInputGroup.find('#descriptionPoste0').attr('id', 'descriptionPoste' + counterE).attr('name', 'descriptionPoste' + counterE);
        
        // Add a delete button
        let deleteExperienceButton = $('<button class="delete-experience text-white bg-red-500 border m-2 hover:underline ml-2">Supprimer</button>');
        newExperienceInputGroup.append(deleteExperienceButton);
       

        $('#experience-container').append(newExperienceInputGroup);

         // Append the new experience input group to the new container
        // $('#new-experience-space').append(newExperienceInputGroup);

        // Attach event listeners to the new elements dynamically
        // bindExperienceEvents(counterE);

        counterE++;
    }); 
        // Event listener for delete buttons (using event delegation)
    $('#experience-container').on('click', '.delete-experience', function() {
        $(this).closest('.experienceInput-group').remove();
    });
//     // Function to bind event listeners to dynamically added elements
// function bindExperienceEvents(counterE) {
//     // Bind keyup and change events for dynamically added elements
//     $('#companyName' + counterE).on('keyup', function(event) {
//         $("#templateCompName").text(event.target.value);
//     });

//     $('#poste' + counterE).on('keyup', function(event) {
//         $("#templatePoste").text(event.target.value);
//     });

//     $('#debut' + counterE).on('change', function(event) {
//         $("#templateStartDate").text("De " + event.target.value);
//     });

//     $('#fin' + counterE).on('change', function(event) {
//         $("#templateEndDate").text("A " + event.target.value);
//     });

//     $('#descriptionPoste' + counterE).on('keyup', function(event) {
//         $("#templateDescriptionPoste").text(event.target.value);
//     });
}

// Ajouter competences
    let counterC = 1;

    $('#addSkills').click(function() {
        
        let newSkillsInputGroup = $('.competencesInput-group').first().clone();
        
        // Update IDs and names
        newSkillsInputGroup.find('#skills0').attr('id', 'skills' + counterC).attr('name', 'skills' + counterC);
        newSkillsInputGroup.find('#niveauCompetence0').attr('id', 'niveauCompetence' + counterC).attr('name', 'niveauCompetence' + counterC);
              
        // Add a delete button
        let deleteSkillsButton = $('<div class="py-2"><button class="delete-skills text-white bg-red-500 border m-2 hover:underline ml-2">Supprimer</button></div>');
        newSkillsInputGroup.append(deleteSkillsButton);

        $('#competences-container').append(newSkillsInputGroup);
        counterC++;
    });
     // Event listener for delete buttons (using event delegation)
    $('#competences-container').on('click', '.delete-skills', function() {
        $(this).closest('.competencesInput-group').remove();
    });

// Ajouter reference
    let counterR = 1;

    $('#addReference').click(function() {
        
        let newRefsInputGroup = $('.referenceInput-group').first().clone();
        
        // Update IDs and names
        newRefsInputGroup.find('#refName0').attr('id', 'refName' + counterR).attr('name', 'refName' + counterR);
        newRefsInputGroup.find('#refPoste0').attr('id', 'refPoste' + counterR).attr('name', 'refPoste' + counterR);
        newRefsInputGroup.find('#refPhone0').attr('id', 'refPhone' + counterR).attr('name', 'refPhone' + counterR); 
        newRefsInputGroup.find('#refEmail0').attr('id', 'refEmail' + counterR).attr('name', 'refEmail' + counterR);

        // Add a delete button
        let deleteRefsButton = $('<button class="delete-ref text-white bg-red-500 border m-2 hover:underline ml-2">Supprimer</button>');
        newRefsInputGroup.append(deleteRefsButton);

        $('#reference-container').append(newRefsInputGroup);
        counterR++;
    });
    // Event listener for delete buttons (using event delegation)
    $('#reference-container').on('click', '.delete-ref', function() {
        $(this).closest('.referenceInput-group').remove();
    });

// Ajouter Langue
    let counterL = 1;

    $('#addLang').click(function() {
        
        let newLangInputGroup = $('.langueInput-group').first().clone();
        
        // Update IDs and names
        newLangInputGroup.find('#langue0').attr('id', 'langue' + counterL).attr('name', 'langue' + counterL);
        newLangInputGroup.find('#niveauLangue0').attr('id', 'niveauLangue' + counterL).attr('name', 'niveauLangue' + counterL);
            
        // Add a delete button
        let deleteLangButton = $('<div class="py-2"><button class="delete-lang text-white bg-red-500 border py-1 m-2 hover:underline ml-2">Supprimer</button></div>');
        newLangInputGroup.append(deleteLangButton);

        $('#langue-container').append(newLangInputGroup);
        counterL++;
    });
    // Event listener for delete buttons (using event delegation)
    $('#langue-container').on('click', '.delete-lang', function() {
        $(this).closest('.langueInput-group').remove();
    });
});
