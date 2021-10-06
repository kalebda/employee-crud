// Jenkinsfile (Declarative Pipeline)
pipeline { 
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
   
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}