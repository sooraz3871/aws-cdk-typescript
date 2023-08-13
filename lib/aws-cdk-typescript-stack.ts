import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkTypescriptStack extends cdk.Stack {

  private intrinsicSuffix: string;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.initializeIntrinsicSuffix()

    // The code that defines your stack goes here

    new Bucket(this,"MyBucket",{
      bucketName:`intrinsic-example-bucket-${this.intrinsicSuffix}`
    })
  }


  private initializeIntrinsicSuffix(){
    const shortStackId= cdk.Fn.select(2,cdk.Fn.split('/',this.stackId))
    this.intrinsicSuffix = cdk.Fn.select(4,cdk.Fn.split('/',this.stackId))
  }
}
