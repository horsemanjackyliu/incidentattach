sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'incidentattachui5/test/integration/FirstJourney',
		'incidentattachui5/test/integration/pages/IncidentsList',
		'incidentattachui5/test/integration/pages/IncidentsObjectPage',
		'incidentattachui5/test/integration/pages/Incidents_attachmentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage, Incidents_attachmentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('incidentattachui5') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage,
					onTheIncidents_attachmentsObjectPage: Incidents_attachmentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);