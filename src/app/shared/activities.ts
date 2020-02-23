import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        "id" : 1,
        "name" : "Onizuka",
        "date" : new Date('01/20/2020'),
        "contaminer" : 16.2,
        "comments" : "Sauvez-moi !!!!",
        "gpxData": '../../assets/gpx/1.gpx'
    },

    {
        "id" : 2,
        "name" : "Homer",
        "date" : new Date('01/21/2020'),
        "contaminer" : 5.2,
        "comments" : "Toh !",
        "gpxData": '../../assets/gpx/1.gpx'
    },

    {
        "id" : 3,
        "name" : "Le Corona",
        "date" : new Date('01/25/2020'),
        "contaminer" : 3.2,
        "comments" : "Pourquoi moi ?",
        "gpxData": '../../assets/gpx/1.gpx'
    },

    {
        "id" : 4,
        "name" : "Appartoo",
        "date" : new Date('01/29/2020'),
        "contaminer" : 1.2,
        "comments" : "Plus de colocs :(",
        "gpxData": '../../assets/gpx/1.gpx'
    }
]