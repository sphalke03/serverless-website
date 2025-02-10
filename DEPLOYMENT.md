touch DEPLOYMENT.md

- Deploy Frontend to S3

aws s3 mb s3://your-bucket-name
aws s3 sync frontend/ s3://your-bucket-name --acl public-read

- Deploy Lambda Functions

zip -r getData.zip getData.js
aws lambda create-function --function-name getData \
    --runtime nodejs18.x --handler getData.handler \
    --role arn:aws:iam::your-account-id:role/your-lambda-role \
    --zip-file fileb://getData.zip


- Set Up API Gateway

aws apigateway create-rest-api --name "ServerlessAPI"

- Update Frontend to Use API

