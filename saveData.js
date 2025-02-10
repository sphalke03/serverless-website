const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    const params = {
        TableName: "ServerlessTable",
        Item: {
            id: event.id,
            name: event.name
        }
    };
    await dynamoDB.put(params).promise();
    return { statusCode: 200, body: JSON.stringify({ message: "Data Saved!" }) };
};
