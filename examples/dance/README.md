# Connect WebView Dance Example
A simple WebView that runs a dance sequence using JavaScript. The dance can be started using the user-interface or remotely via MQTT.

## Setup
Install dependencies:
```
npm install
```

Install common library `/examples/_lib`:
```
cd ../_lib/
npm install
```

### Remote Start (Optional)
This example uses MQTT to start the dance remotely. Add a `.env` file to the project's root directory with the following information:
```
MQTT_HOST_NAME=<mqtt-broker-hostname>
MQTT_HOST_PORT=<mqtt-broker-host-port-websockets>
MQTT_ENDPOINT=<mqtt-broker-host-endpoint>
MQTT_USERNAME=<mqtt-broker-username>
MQTT_PASSWORD=<mqtt-broker-password>
```

For an example start file, look in the `scripts/` folder.

## Usage
To build the example:
```
npm run build
```

To automatically build and serve the example with live updates, locally:
```
npm run serve
```

Then go to [http://localhost:8080/](http://localhost:8080/) in your web-browser or send it to your Connect WebView.

Tap the button 2 times to start the dance. Button colours should change from `Blue` > `Red` > `Green`.

### Button Colors
The button color changes depending on its state:
- `blue`: The dance script is waiting to be initialized. It needs to be initialized before it can play music.
- `red`: The dance script is initialized.
- `green`: The dance script is playing.

### Edit Dance
The dance sequence can be found in `scr/modules/dance.js`.
