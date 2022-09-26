pipeline {
  agent any
  stages {
    stage('delete origin zip file') {
      steps {
        sh 'echo \'delete some\''
      }
    }

    stage('make zip file') {
      steps {
        zip 'beanstalk_v${BUILD_NUMBER}.zip'
      }
    }

    stage('upload to S3') {
      steps {
        sh 'echo \'upload\''
      }
    }

  }
}