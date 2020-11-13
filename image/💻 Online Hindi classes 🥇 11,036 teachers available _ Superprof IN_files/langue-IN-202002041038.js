'use strict';

window.Superprof = {};

window.Superprof.lang = {
    twitter_via: 'superprof_us',
    error_occured: 'An error has occurred...'
};

window.Superprof.lang.announce = {
    report_success: 'Your report has been sent. Thank you.'
};
window.Superprof.lang.search = {
    all_error: 'Please select a subject and a location',
    subject_error: 'Please select a subject',
    place_error: 'Please select a location',
    reponse_answer_singulier: 'Responds in %s hour',
    reponse_answer_pluriel: 'Responds in %s hours',
    localisation: 'My location',
    localisation_impossible: 'Sorry, we couldn\'t locate you',
    profil_non_valide: 'Waiting for verification',
    general_error: 'Sorry, We have encountered an error. Please try again in a moment.',
    ambassador: 'Superprof Ambassador',
    senior: 'Superprof Ambassador',
    verified: 'Profile validated',
    faceToFace: 'Face to face lessons',
    webcam: 'Lessons by webcam',
    cours_offert: '1<sup>st</sup> lesson offered free !', //tag html !
    reserver: 'Reserve a lesson',
    un_avis: '1 review',
    plusieurs_avis: '%s reviews',
};

window.Superprof.lang.register = {
    student: {
        retrieve_password_success: 'An email containing your password has been sent to the address: %s',
        other: 'Other',
        specify: 'Specify',
        choose: 'Pick',
        erreur_adresse: 'Please can you confirm your postal address (e.g. 2 French Pl, London E1 6JB, UK)'
    },
    teacher: {
        level_error: 'You have to select at least one level',
        step0: {
            error_singular: 'Error, an item has not been validated!',
            error_plural: 'Error, %s items have not been validated!'
        },
        step1: {
            error: 'You must select at least one subject',
            liste_vide: 'If you wish to change your subject category, you must deactivate your ad and create a new one'
        },
        step2: {
            select_all: 'Select all',
            unselect_all: 'Deselect all',
            char_error: '%s must contain at least %s words',
            level_error: 'You must select at least one level for the subject "%s"'
        },
        step3: {
            place_error: 'Please select at least one location',
            no_address_error: 'Please enter a primary address',
            webcam_error: 'Please select at least one language for the section "I can give lessons by webcam"'
        },
        step4: {
            error: 'Your %s is a bit short and must be detailed (%s words minimum)'
        },
        step5: {
            error: 'Please enter the base rate for an hour lesson'
        }
    }
};

window.Superprof.lang.internship = {
    step2: {
        error_singular_label: 'Oops, an item is needed to send your request.',
        error_plural_label: 'Oops, multiple items are needed to send your request.',
        char_error: '%s has to have at least %s characters',
        other_singular_error: '%s another field must be filled in',
        other_plural_error: '%s multiple fields must be filled in'
    }
};

window.Superprof.lang.profile = {
    email_check_sent: 'A confirmation e-mail has been sent to the following address: %s',
    phone_check_sent: 'A confirmation SMS has been sent to the following number: %s'
};

window.Superprof.lang.dashboard = {};

window.Superprof.lang.dashboard.manageAnnounce = {
    activated: 'Deactivate the listing',
    disabled: 'Activate the listing'
};


window.Superprof.lang.calendrier = {
    closeText: 'Done',
    prevText: 'Previous',
    nextText: 'Next',
    currentText: 'Today',
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sunday', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Sun','Mo','Tu','We','Th','Fr','Sa'],
    weekHeader: 'Wk'
};

window.Superprof.lat=28.613939;
window.Superprof.lng=77.209021;
