pipeline {
  agent any
  stages {
    stage('delete origin zip file') {
      steps {
        script {
          try{
            sh 'rm -rf *.zip'
          } catch(error){
            print(error)
            env.cloneResult = false
            currentBuild.result = 'FAILURE'
          }
        }

      }
    }

    stage('make zip file') {
      steps {
        script {
          try{
            sh zip -r 'beanstalk_v${BUILD_NUMBER}.zip'
          } catch(error){
            print(error)
            env.cloneResult = false
            currentBuild.result = 'FAILURE'
          }
        }

      }
    }

    stage('upload to S3') {
      steps {
        script {
          try{
            sh aws s3 cp' beanstalk_v${BUILD_NUMBER}.zip \
            s3://s3pipelinebucket/s3tutorial/beanstalk_v${BUILD_NUMBER}.zip \
            --region ap-northeast-2'
          } catch(error){
            print(error)
            env.cloneResult = false
            currentBuild.result = 'FAILURE'
          }
        }

      }
    }

    stage('deploy') {
      steps {
        script {
          try{
            sh 'aws elasticbeanstalk create-application-version --region ap-northeast-2 \
            --application-name JenkinsToEB \
            --version-label beanstalk_v${BUILD_NUMBER} \
            --source-bundle S3Bucket="s3pipelinebucket",S3Key="JenkinsToEB/beanstalk_v${BUILD_NUMBER}.zip"'
            sh 'aws elasticbeanstalk update-environment --region ap-northeast-1 \
            --environment-name Jenkinstoeb-env \
            --version-label beanstalk_v${BUILD_NUMBER}'
          } catch(error){
            print(error)
            env.cloneResult = false
            currentBuild.result = 'FAILURE'
          }
        }

      }
    }

  }
}