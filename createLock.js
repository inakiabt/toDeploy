const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();

exports.handler = (event, context, callback) => {
    const params = {
        Item : {
            'userId' : {
                S: event.userId
            },
            'timestamp': {
                S: JSON.stringify(Date.now())
            }
        },
        ReturnConsumedCapacity: 'TOTAL',
        TableName: 'help-desk'
    };
    
    dynamodb.putItem(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else callback(null, data);
    });
};
