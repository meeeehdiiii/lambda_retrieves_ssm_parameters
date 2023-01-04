import * as cdk from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Function, Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import * as path from "path";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkPocSsmLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkPocSsmLambdaQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const myparam1 = new StringParameter(this, "StringParameter1", {
      stringValue: "Parameter 1 value"
    });

    const myparam2 = new StringParameter(this, "StringParameter2", {
      stringValue: "2nd parameter value"
    });

    const lambdaFunction = new Function(this, "lambda", {
      code: Code.fromAsset(path.join(__dirname, "..", "lambda")),
      runtime: Runtime.PYTHON_3_8,
      handler: "main.lambda_handler",
      environment: {
        Para1: myparam1.parameterName,
        Para2: myparam2.parameterName,
      },
    });

    lambdaFunction.addToRolePolicy(
      new PolicyStatement({
          resources: ["*"],
          actions: ["ssm:*"],
    })
    );


  }
}
