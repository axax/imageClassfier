# Image classifier that runs on AWS Lambda

## Run it locally

````
npm install
npm start
````

## Run it on AWS Lambda

### Prepare AWS
#### Install AWS CLI
````
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
````

#### Configure AWS 
**Create new Access Key ID**
https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html

````
aws configure
````

### Create a zip (including node_modules)
````
zip -r ../imageClassifier.zip * 
````


### Push it to aws lambda
````
aws lambda update-function-code --function-name imageClassifier \
--zip-file fileb://~/path/to/your/imageClassifier.zip
````
