pipeline {
    environment {
        registry = "nqvietuit/thesis-web"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }

    agent any
    stages {
            stage('Cloning our Git') {
                steps {
                    git branch: 'main', url: 'https://github.com/VietNe/thesis-web.git'
                }
            }

            stage('Building Docker Image') {
                steps {
                    script {
                        dockerImage = docker.build registry + ":v1.$BUILD_NUMBER"
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    script {
                        docker.withRegistry('', registryCredential) {
                            dockerImage.push()
                            dockerImage.push('latest')
                        }
                    }
                }
            }

            stage('Update CD repo') {
                steps {
                    script {
                        withCredentials([string(credentialsId: "github-token", variable: 'GITHUB_TOKEN')]) {
                            sh "git config --global user.email nqviet.dev@gmail.com"
                            sh "git config --global user.name VietNe"
                            sh "rm -rf thesis-cd"
                            sh "git clone https://${GITHUB_TOKEN}@github.com/VietNe/thesis-cd.git"
                            sh "cd ./thesis-cd/web && sed -i 's+nqvietuit/thesis-server.*+nqvietuit/thesis-server:v1.${BUILD_NUMBER}+g' web-deployment.yaml"
                            sh "cd ./thesis-cd && git add . && git commit -m 'Update Web Image Version: v1.${BUILD_NUMBER}' && git push https://${GITHUB_TOKEN}@github.com/VietNe/thesis-cd.git HEAD:main"
                        }
                    }
                }
            }

            stage('Cleaning Up') {
                steps{
                  sh "docker rmi --force $registry:v1.$BUILD_NUMBER"
                  sh "docker rmi --force $registry:latest"
                }
            }
    }
}
