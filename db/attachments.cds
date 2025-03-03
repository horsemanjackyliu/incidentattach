using { sap.capire.incidents.Incidents } from './schema';
using { Attachments } from '@cap-js/sdm';
extend Incidents with {
    attachments: Composition of many Attachments;
};


