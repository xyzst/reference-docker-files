#!/usr/bin/env bash
docker build -t dtrambaud/multi-client:latest -t dtrambaud/multi-client:${SHA} -f ./web-applications/reactjs-expressjs/reactjs/Dockerfile ./web-applications/reactjs-expressjs/reactjs/
docker build -t dtrambaud/multi-daemon:latest -t dtrambaud/multi-daemon:${SHA} -f ./web-applications/reactjs-expressjs/daemon/Dockerfile ./web-applications/reactjs-expressjs/daemon/
docker built -t dtrambaud/multi-server:latest -t dtrambaud/multi-server:${SHA}-f ./web-applications/reactjs-expressjs/expressjs/Dockerfile ./web-applications/reactjs-expressjs/expressjs/
docker push dtrambaud/multi-client:${SHA}
docker push dtrambaud/multi-client:latest
docker push dtrambaud/multi-daemon:${SHA}
docker push dtrambaud/multi-daemon:latest
docker push dtrambaud/multi-server:${SHA}
docker push dtrambaud/multi-server:latest
kubectl apply -f ./web-applications/reactjs-expressjs/k8s/
kubectl set image deployments/server-deployment server=dtrambaud/multi-server:${SHA}
kubectl set image deployments/client-deployment client=dtrambaud/multi-client:${SHA}
kubectl set image deployments/daemon-deployment daemon=dtrambaud/multi-daemon:${SHA}