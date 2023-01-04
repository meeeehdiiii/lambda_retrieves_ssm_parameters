from tokenize import Name
import boto3
import os
ssm_client = boto3.client('ssm')

def lambda_handler(event, context):
    param1 = ssm_client.get_parameter(Name=os.getenv("Para1"))
    # param2 = ssm_client.get_parameter(Name=os.getenv("Para2"))

    p = {"para1": param1['Parameter']['Value']}
    return f"Hello {p}"