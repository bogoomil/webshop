# Getting Started

### Build docker environment

docker build -t my-angular-env .

docker run -it -v $(pwd)/:/workingdir -p 4200:4200 --name my-angular-env -d my-angular-env

docker exec -it my-angular-env sh

### Inside the container

ng new <PROJECT_NAME>

cd <PROJECT_NAME>

ng serve --host 0.0.0.0