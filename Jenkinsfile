pipeline {
  agent {
    label 'vivet'
  }
  stages {
    stage('Docker Build') {
      steps {
        sh 'docker build -t vlt/helloworld:v${BUILD_NUMBER}'
      }
    }
  }
}
