const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    const params = { TableName: "ServerlessTable" };
    const data = await dynamoDB.scan(params).promise();
    return { statusCode: 200, body: JSON.stringify(data.Items) };
};
