/*jslint vars: true , nomen: true, devel: true, plusplus:true*/
/*global $, jQuery*/
/**
 * @module EC
 * @submodule Dictionary
 */

var EC = EC || {};
EC.Dictionary = EC.Dictionary || {};
EC.Dictionary = {

	en : {
		home : "Home",
		settings : "Settings",
		help : "Help",
		rate_us : "Rate Us",
		add_project : "Add project",
		loading_project: "Loading project",
		search_project : "Search a project using the box above",
		projects : "Projects",
		filter_project : "Filter projects...",
		no_projects_found : "No projects found!",
		project_list : "Project List",
		type_project_name_here : "Type a project name here...",
		tap_the : "Tap the ",
		button : "button ",
		add:"Add ", 
		to:" to ",
		to_add : "to add ",
		to_add_one : "to add one.",
		upload_to : "Upload to ",
		upload_data : "Upload Data",
		upload_images : "Upload Images",
		upload_audios : "Upload Audios",
		upload_videos : "Upload Videos",
		remote_server_url : "Remote Server URL",
		pagination : "Pagination: entries listed per page",
		app_version : "App Version: ",
		forms : "Forms",
		backup_data : "Backup Project Data",
		restore_data : "Restore Data from Backup",
		email_backup : "Email Backup",
		download_remote_data : "Download remote data",
		unsync_entries : "Unsync All Entries Data",
		delete_entries : "Delete All Entries",
		delete_synced : "Delete Synced Entries",
		delete_media : "Delete Media Files",
		delete_project : "Delete Project",
		show_more : "Show more",
		no_entries_found : "No entries found!",
		enter_email : "Enter email address",
		email_backup_to : "Email Backup for",
		select_form_download : "Select form to download data from",
		delete_entry : "Delete Entry",
		unsync_entry : "Unsync Entry",
		prev : "Previous",
		next : "Next",
		record : "Record",
		stop : "Stop",
		play : "Play",
		recording : "Recording",
		no_audio_available : "No audio available yet",
		scan : "Scan",
		type_confirm : "Type again to confirm",
		pk_not_editable : "This value is the primary key for this entry, it cannot be edited. ",
		add_branch_form : "Add branch form",
		list_branch_entries : "List branch entries",
		set_location : "Set Location",
		take_photo : "Take Photo",
		tap_to_store : "Tap button to store values",
		store : "Store",
		store_edit : "Store Edit",
		data_saved_success : "Data saved successfully",
		branch_data_saved_success : "Branch data saved successfully",
		add_another : "Add another ",
		list : "List ",
		entries : " entries ",
		add_video : "Add video",
		play_video : "Play video",
		back_to : "Back to ",
		error : "Error",
		project_already_loaded : "Project already loaded on device!",
		exit : "Exit",
		exit_confirm : "Are you sure? \nData will NOT be saved",
		value_exist : "Value already exists!",
		invalid_integer : "The number entered is not an integer value!",
		invalid_decimal : "The value entered is not a decimal value! Only numbers and the dot '.' are allowed",
		pk_reserved_char : "This field is a primary key: it cannot cointain the reserved char: ",
		invalid_regex : "This field does not match the regex: ",
		values_unmatched:"This fields do not match each other",
		out_of_range: "Value entered is out of range",
		reserved_keyword: "Value entered is an Epicollect reserved keyword",
		field_required:"This field is required",
		invalid_xml:"Project XML is no valid, maybe no forms yet?",
		connection_timeout: "Server connection time out",
		connection_lost:"Connection lost, please retry",
		project_not_found_on_server: "Project not found on server ",
		project_not_found:"Project not found!",
		unknow_error: "Unknown Error!",
		leaving_current_form:"Leaving current form",
		save_before_leave: "Save data before leaving?",
		edit_saved: "Edit saved!",
		missing_pk:"Primary key value for this form is missing.You probably jumped a required field, please go back and try again",
		gps_disabled: "Please enable GPS",
		locating: "Locating",
		wait:"Wait...",
		location_acquired: "Location acquired",
		location_fail:", not able to locate!",
		location_service_fail:"Something went wrong...are Location Services enabled for Epicollect5?",
		failed_because: "Failed because: ",
		download_success: "All data downloaded",
		parent_key_for_1:"Parent keys for ",
		parent_key_for_2: " are missing on device database, please download ",
		parent_key_for_3: " entries first",
		no_internet: "No Internet Connection!!",
		invalid_email: "Not a valid email address!!",
		generic_error: "An error occurred, please retry",
		entry_unsynced: "Entry unsynced",
		entry_deleted: "Entry deleted",
		all_data_synced:"All data unsynced",
		all_entries_deleted: "All entries deleted",
		all_media_deleted:"All media deleted",
		all_synced_deleted:"All synced entries deleted",
		branch_entry_deleted:"Branch entry deleted",
		delete_branch_entry: "Delete Branch Entry",
		delete_entry_confirm: "Are you sure you want to delete this entry?",
		unsync_entry_confirm: "Are you sure you want to unsync this entry?",
		delete_entry_with_children_confirm: "Are you sure you want to delete this entry?  \n This entry and all its children will be deleted!",
		unsync_all_data:"Unsync all data",
		unsync_all_data_confirm:"Are you sure you want to unsync all the data?",
		delete_project_confirm:"Are you sure you want to delete this project?",
		delete_all_entries: "Delete all entries",
		delete_all_entries_confirm: "Are you sure you want to delete all entries?",
		delete_all_media:"Delete all media files",
		delete_all_media_confirm:"Are you sure you want to delete all media files?",
		delete_all_synced:"Delete all synced entries",
		delete_all_synced_confirm:"Are you sure you want to delete all synced entries?",
		backup_data_confirm:"Are you sure you want to backup all project entries?",
		restore_data_confirm:"Are you sure you want to restore from a backup? Existing data will be overriden!",
		warning:"Warning",
		edited_jump:"You modified a value linked to a jump so it is not possible to save the edit yet \nTap NEXT to proceed or revert your changes before saving",
		success:"Success",
		project_backup_success:"Project backed up!",
		project_deleted: "Project deleted",
		project_no_spaces_allowed: "Project name cannot have empty spaces",
		project_empty_not_allowed: "Project name cannot be empty",
		project_restored:"Project restored!",
		upload_error:" An error occurred while uploading, please retry. ",
		no_backup_saved:"No backup file found!!",
		all_images_uploaded:"All image files uploaded! ",
		all_audios_uploaded:"All audio files uploaded! ",
		all_video_uploaded:"All video files uploaded! ",
		uploading: "Uploading...",
		data_upload_success: " Data uploaded! ",
		check_your_internet:", check you internet connection.",
		settings_saved_success:"Settings saved",
		questions: " Questions",
		hierarchy_forms:" Hierarchy form(s)",
		branch_forms:" Branch(es)",
		sending_message:"Sending message...",
		backup_for:"Backup for ",
		backup_for_project:"Backup for project ",
		is_attached:" is attached",
		select_one_option: "Select one option",
		photo_available: "Photo available",
		no_photo: "No photo saved",
		audio_available: "Audio available",
		no_audio: "No audio saved",
		video_available:"Video available",
		no_video:"No video saved",
		no:"No",
		save:"Save",
		dismiss: "Dismiss",
		confirm: "Confirm"
	},

	it : {
		home : "Home",
		settings : "Impostazioni",
		help : "Aiuto",
		rate_us : "Votaci",
		add_project : "Aggiungi progetto",
		loading_project: "Caricando progetto",
		search_project : "Cerca progetto usando l'input di testo sopra",
		projects : "Progetti",
		filter_project : "Filtra progetti",
		no_projects_found : "Nessun progetto trovato!",
		project_list : "Lista progetti",
		type_project_name_here : "Digita il nome del progetto...",
		tap_the : "Premi il ",
		button : "",
		add:"Add ", 
		to:" a ",
		to_add : "per aggiungere ",
		to_add_one : "per aggiungerne uno ",
		upload_to : "Carica dati a ",
		upload_data : "Carica dati",
		upload_images : "Carica foto",
		upload_audios : "Carica tracce audio",
		upload_videos : "Carica video",
		remote_server_url : "URL del server remoto",
		pagination : "Paginazione: quanti elementi per pagina",
		app_version : "Versione della app: ",
		forms : "Schede",
		backup_data : "Backup dati",
		restore_data : "Ripristina da Backup",
		email_backup : "Posta Backup",
		download_remote_data : "Scarica dati remoti",
		unsync_entries : "De-sincronizza dati",
		delete_entries : "Cancella dati",
		delete_synced : "Cancella elementi sincronizzati",
		delete_media : "Cancella files multimedia",
		delete_project : "Cancella progetto",
		show_more : "Mostra altri elementi",
		no_entries_found : "Nessun elemento trovato!",
		enter_email : "Inserisci indirizzo email",
		email_backup_to : "Manda backup tramite email per ",
		select_form_download : "Seleziona la scheda da cui scaricare dati",
		delete_entry : "Cancella elemento",
		unsync_entry : "De-sincronizza elemento",
		prev : "Prec",
		next : "Succ",
		record : "Record",
		stop : "Stop",
		play : "Play",
		recording : "Registrazione",
		no_audio_available : "Nessuna registrazione trovata",
		scan : "Scan",
		type_confirm : "Digita di nuovo pre confermare",
		pk_not_editable : "Questo dato e' una chiave primaria, non si puo' modificare",
		add_branch_form : "Aggiungi scheda diramazione",
		list_branch_entries : "Lista schede diramate",
		set_location : "Imposta posizione",
		take_photo : "Scatta foto",
		data_saved_success : "Dati salvati con successo",
		branch_data_saved_success : "Dati ramificazione salvati con successo",
		add_another : "Aggiungi un altro ",
		list : "Lista ",
		entries : " elementi ",
		add_video : "Aggiungi video",
		play_video : "Play video",
		back_to : "Torna a ",
		error : "Error",
		project_already_loaded : "Questo progetto esiste gia'",
		exit : "Exit",
		exit_confirm : "Sei sicuro? \nDati NON verranno salvati",
		value_exist : "Questo valore esiste gia'",
		invalid_integer : "Valore inserito non e' un numero intero",
		invalid_decimal : "Valore inserito non e' un  numero decimale, solo numeri e punto (.) sono permessi",
		pk_reserved_char : "Questo campo e' una chiave primaria, non puo' contenere il carattere riservato: ",
		invalid_regex : "Valore non soddisfa la epressione regolare: ",
		values_unmatched:"I valori non corrispondono",
		out_of_range: "Valore inserito e' fuori dai limiti",
		reserved_keyword: "Valore inserito e' un valore riservato a Epicollect",
		field_required:"Un valore e' richiesto",
		invalid_xml:"Progetto XML non valiso, forse non ha schede ancora?",
		connection_timeout: "Connessione al server scaduta",
		connection_lost:"Connessione persa, riprova",
		project_not_found_on_server: "Progetto non trovato nel server ",
		project_not_found:"Progetto non trovato!",
		unknow_error: "Errore sconosciuto!",
		leaving_current_form:"Uscire da scheda corrente",
		save_before_leave: "Salvare dati prima di uscire?",
		edit_saved: "Modifiche salvate",
		missing_pk:"Manca chive primaria.Probabilmente un campo obbligatorio e' stato saltato, torna indietro e riprova",
		gps_disabled: "Per favore, attivare GPS",
		locating: "Localizzazione",
		wait:"Aspetta...",
		location_acquired: "Posizione acquisita",
		location_fail:", incapace di trovare posizione",
		location_service_fail:"Qualcosa e' andato storto...sono i Servizi Locazione abilitati per Epicollect5 app?",
		failed_because: "Fallito perche': ",
		download_success: "Tutti i dati scaricati",
		parent_key_for_1:"Chiavi padre per ",
		parent_key_for_2: " mancano nel database del dispositivo, scarica ",
		parent_key_for_3: " elementi prima",
		no_internet: "Nessuna connessione internet!!",
		invalid_email: "Indirizzo Email non valido!!",
		generic_error: "Errore, riprova",
		entry_unsynced: "Elemento de-sincronizzato",
		entry_deleted: "Elemento cancellato",
		all_data_synced:"Tutti i dati sincronizzati",
		all_entries_deleted: "Tutti gli elementi cancellati",
		all_media_deleted:"Tutti i media cancellati",
		all_synced_deleted:"Tutti gli elementi sincronizzati cancellati",
		branch_entry_deleted:"Elemento ramificato cancellato",
		delete_branch_entry: "Cancella elemento ramificato",
		delete_entry_confirm: "Sei sicuro che vuoi cancellare questo elemento?",
		unsync_entry_confirm: "Sei sicuro che vuoi de-sincronizzare questo elemento?",
		delete_entry_with_children_confirm: "Sei sicuro che vuoi cancellare questo elemento?  \n Questo elemento e tutti i 'figli' verranno cancellati",
		unsync_all_data:"Unsync all data",
		unsync_all_data_confirm:"Sei sicuro che vuoi de-sincronizzare tutti i dati?",
		delete_project_confirm:"Sei sicuro che vuoi cancellare questo progetto?",
		delete_all_entries: "Cancella tutti gli elementi",
		delete_all_entries_confirm: "Sei sicuro che vuoi cancellare tutti gli elementi",
		delete_all_media:"Cancellare tutti i file media",
		delete_all_media_confirm:"Sei sicuro che vuoi cancellare tutti i file media?",
		delete_all_synced:"Cancella tutti elementi sincronizzati",
		delete_all_synced_confirm:"Sei sicuro che vuoi cancellare tutti gli elementi sincronizzati?",
		backup_data_confirm:"Sicuro che vuoi fare un backup",
		restore_data_confirm:"Sicuro che vuoi ripristinare da backup? Dati esistenti verranno persi!",
		warning:"Attenzione",
		edited_jump:"Hai modificato un valore collegato a un salto quindi non e' possibile salvare le modifiche \nPremi 'Successivo' per procedere o annulla le modifiche per salvare",
		success:"Successo",
		project_backup_success:"Backup del progetto eseguito!",
		project_deleted: "Progetto cancellato",
		project_no_spaces_allowed: "Il nome del progetto non puo' aver spazi",
		project_empty_not_allowed: "Il nome del progetto non puo' essere vuoto",
		project_restored_:"Progetto ripristinato!",
		upload_error:" Errore durante caricamento dati, riprovare. ",
		no_backup_saved:"Nessun file di backup trovato!!",
		all_images_uploaded:"Tutte i file immagini caricati! ",
		all_audios_uploaded:"Tutti i file audio caricati! ",
		all_video_uploaded:"Tutti i file video caricati! ",
		uploading: "Caricando...",
		data_upload_success: " Dati caricati! ",
		check_your_internet:", controlla la tua connessione internet.",
		settings_saved_success:"Impostazioni salvate",
		questions: " Domande",
		hierarchy_forms:" Schede gerarchia",
		branch_forms:" Schede ramificate",
		sending_message:"Mandando email...",
		backup_for:"Backup per ",
		backup_for_project:"Il backup per il progetto ",
		is_attached:" e' attaccato",
		select_one_option:"Scegli opzione",
		photo_available: "Foto presente",
		no_photo: "Nessuna foto salvata",
		audio_available: "Traccia audio presente",
		no_audio: "Nessuna traccia audio presente",
		video_available:"Video presente",
		no_video:"Nessun video presente",
		no:"No",
		save:"Salva",
		dismiss: "Annulla",
		confirm: "Conferma"
	}

};
