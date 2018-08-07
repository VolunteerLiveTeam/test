pipeline {
  agent {
    label 'vivet'
  }
  stages {
    stage('Docker Build') {
      steps {
        sh 'docker build -t vlt/helloworld:v${BUILD_NUMBER} .'
      }
    }
    stage('Rancher Deploy') {
      steps {
        rancher(environmentId: '1a197', endpoint: 'https://wm2-ab-ca.writhem.net/v2-beta', credentialId: '13681119-58e1-48a9-b2c6-2e7a541bb0c0', service: 'test/test', image: 'vlt/test:${BUILD_NUMBER}', ports: '3000:3000', environments: 'TEST=test', timeout: 50, confirm: true)
      }
    }
  }
}