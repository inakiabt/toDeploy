const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();

exports.handler = (event, context, callback) => {
    const params = {
        Key : {
            'userId': {
                'S' : event.userId   
            }
        },
        TableName: 'help-desk'
    };
    
    dynamodb.getItem(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else {
            callback(null, data);
        }
    })
};