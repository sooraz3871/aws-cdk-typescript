import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // Creting S3 bucket Three ways 
    // Type L1
    new CfnBucket(this,'MyL1Bucket',{
    lifecycleConfiguration:{
      rules:[{
        expirationInDays:4,
        status: 'Enabled'
      }]}
    })

    // Type L2
    const myL2Bucket=new Bucket(this,'MyL2Bucket',{
      // bucketName:'MyL2BucketName'
      lifecycleRules: [{
        expiration: cdk.Duration.days(4)
      }]
    })

    new cdk.CfnOutput(this,'MyL2BucketName',{
      value: myL2Bucket.bucketName
    })

    new l3Bucket(this,'MyL3Bucket',5)
  }
}

class l3Bucket extends Construct{
  constructor(scope:Construct, id:string,expiration:number){
    super(scope,id)

    new Bucket(this,id,{
      lifecycleRules:[{
        expiration:cdk.Duration.days(expiration)
      }]
    })
  }
}