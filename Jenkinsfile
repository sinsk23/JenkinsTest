pipeline {
  agent any
  stages {
    stage('make zip file') {
      steps {
        zip 'beanstalk_v${BUILD_NUMBER}.zip'
      }
    }

    stage('upload to S3') {
      steps {
        unzip 'beanstalk_v${BUILD_NUMBER}.zip'
      }
    }

    stage('deploy') {
      steps {
        sh 'echo "end"'
      }
    }

  }
}