@Library("Shared") _
pipeline{
    agent {label 'Java'}
    
    stages{
        stage('Hello'){
            steps{
                script{
                    hello()
                }
            }
        }
        stage('Code'){
            steps{
                echo "Cloning the code"
                git url: 'https://github.com/IrshadAliAhmad/Demo-To-Do-List-App.git', branch: 'main'
            }
        }
        stage('Build'){
            steps{
                echo "Building the code"
                script{
                    docker_build("todo-img", "iirshad", "latest")
                }
            }
        }
        stage('Push'){
            steps{
                echo "push docker img on DockerHub"
                script{
                    docker_push("todo-img", "latest", "iirshad")
                }
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the code"
                script{
                   // docker_run()
                    docker_compose()
                }
            }
        }
    }
}
