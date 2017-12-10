import * as Actions from './actionType';


const latestMessages = [
    {
        id: 's123123',
        name: 'kaka',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        latestMessage: "hello world",
    }, {
        id: 'j12312313',
        name: 'yu',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        latestMessage: "second life",
    }
];



const fetchLatestMessage = () => {
    //TODO: async

    return {
        type: Actions.FETCH_LATEST_MESSAGE,
        latestMessages: latestMessages,
    };
};



export {
    latestMessages, 
};