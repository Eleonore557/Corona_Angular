import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        "id" : 1,
        "name" : "Name 1",
        "date" : new Date('01/20/2020'),
        "contaminer" : 16.2,
        "comments" : "Commentaire 1",
        "gpxData": '../../assets/gpx/1.gpx'
    },

    {
        "id" : 2,
        "name" : "Name 2",
        "date" : new Date('01/21/2020'),
        "contaminer" : 5.2,
        "comments" : "Commentaire 2",
        "gpxData": '../../assets/gpx/1.gpx'
    },

    {
        "id" : 3,
        "name" : "Name 3",
        "date" : new Date('01/25/2020'),
        "contaminer" : 3.2,
        "comments" : "Commentaire 3",
        "gpxData": '../../assets/gpx/1.gpx'
    },

    {
        "id" : 4,
        "name" : "Name 4",
        "date" : new Date('01/29/2020'),
        "contaminer" : 1.2,
        "comments" : "Commentaire 4",
        "gpxData": '../../assets/gpx/1.gpx'
    }
]