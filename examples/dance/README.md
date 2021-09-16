# Connect WebView Dance Example

## Setup
Install dependencies.
```
npm install
```

Install common library `/examples/_lib`.
```
cd ../_lib/
npm install
```

If you want to be able to start the dance remotely, add a `.env` file to the root folder of this project, containing the following information:
```
MQTT_HOST_NAME=<mqtt-broker-hostname>
MQTT_HOST_PORT=<mqtt-broker-host-port-websockets>
MQTT_ENDPOINT=<mqtt-broker-host-endpoint>
MQTT_USERNAME=<mqtt-broker-username>
MQTT_PASSWORD=<mqtt-broker-password>
```

## Usage
To build the example:
```
npm run build
```

To automatically build and serve the example with live updates locally:
```
npm run serve
```

Then go to `https://localhost:8080/` in your web-browser or send it to your Connect WebView.
