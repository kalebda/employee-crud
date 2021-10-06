// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    docker{
      image 'node:14-alpine3.11'
    }
  } 
  environment {
    DOCKERHUB_CREDENTIALS = credentials('kalvi1n98-dockerhub')
  }

  stages {
    stage('build') {
      steps {
        echo 'building an app...'
      }
    }
    stage('test') {
      steps {
        echo 'testing an app...'
        sh '/usr/bin/npm test'
      }
    }
    stage('deploy') {
      steps {
        echo 'deploying an app...'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push kalvi1n98/my-app:1.0'
      }
    }
   
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}