# MQTT Example
This example is built using [Vue.js](https://v3.vuejs.org/).

## Setup
Install dependencies.
```
npm install
```

Add `.env.local` file to the root folder containing the following information:
```
VUE_APP_HOST_NAME=<mqtt-broker-hostname>
VUE_APP_HOST_PORT=<mqtt-broker-host-port-websockets>
VUE_APP_ENDPOINT=<mqtt-broker-host-endpoint>
VUE_APP_USERNAME=<mqtt-broker-username>
VUE_APP_PASSWORD=<mqtt-broker-password>
```

### Topics
This example subscribes to the topics listed in `src/composables/mqtt.js`.

## Usage
To serve the example locally for development:
```
npm run serve
```

To build the example and prepare it for production:
```
npm run build
```
