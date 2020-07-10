# Node/React Secretless Twitter Demo

This demo will show you how to use Secretless in a Node/React application that
is running in docker containers.

## Requirements
This demo requires you to install
[Docker](https://docs.docker.com/docker-for-mac/install/) and
[Docker-Compose](https://docs.docker.com/compose/install/).

### Node/React Secretless Quick-start

1. Generate an OAuth 2
[`TWITTER_BEARER_TOKEN`](https://developer.twitter.com/en/docs/basics/authentication/oauth-2-0/bearer-tokens) and set it in the same environment you are running the application.

```
export TWITTER_BEARER_TOKEN=<your-token>
```

2. Run the application on your local machine

```
  ./start.sh
```
3. Visit `localhost:3000` on your local web browser
