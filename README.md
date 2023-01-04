# Lambda_retrieves_SSM_parameters

Look into `cdk-poc-ssm-lambda-stack.ts`, there is a CDK Stack that deploys:

- a Lambda Function with environment variables
- 2 parameters in AWS Systems Manager Parameter Store
- and an IAM role for Lambda to call SSM

The Lambda function - in `lambda/main.py` - takes the names of the parameters from its environment variables to retrieve the parameters in Systems Manager (SSM). After everything is deployed (see below how to deploy to AWS), you can test the Lambda function in the AWS management console. 

You can change the parameters in SSM and invoke Lambda again to see that Lambda takes always the current and new value of the parameters in SSM.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## How to deploy to AWS

- install AWS CLI, the CDK CLI, and all necessary dependencies, set your AWS Access keys (and a default AWS region)
- `cdk deploy --all` to deploy the entire stack
- go to Lambda console and test the function
- change the params in Systems Manager Parameter Store and invoke Lambda again to see that Lambda takes always the latest values of the parameters in Systems Manager.


## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
