pipeline {
  agent any
  stages {
    stage('delete origin zip file') {
      steps {
        sh 'rm -rf *.zip'
      }
    }

    stage('make zip file') {
      steps {
        zip 'beanstalk_v${BUILD_NUMBER}.zip'
      }
    }

  }
}