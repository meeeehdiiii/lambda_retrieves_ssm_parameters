# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Deploy to AWS


- install AWS CLI, and all necessary tools, set the AWS Access keys (and a default AWS region)
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
