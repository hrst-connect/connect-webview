# Remote Start via MQTT
This is an example Python script for remotely starting a dance.

## Setup
Clone the [pytemi](https://github.com/hapi-robo/pytemi) package:
```shell
git clone https://github.com/hapi-robo/pytemi.git
```

Follow the [setup instructions](https://github.com/hapi-robo/pytemi#setup) of that package.

Add a `.env` file to this folder with the following information:
```
MQTT_HOST=<mqtt-broker-hostname>
MQTT_HOST=<mqtt-broker-host-port>
MQTT_USERNAME=<mqtt-broker-username>
MQTT_PASSWORD=<mqtt-broker-password>
```

## Usage
In the `start-dance.py` script, add your own `robot` object. For example:
```python
jefferson = temi.Robot(mqtt_client, "00120263531")
```

where, `00120263531` is the robot's serial number and `jefferson` is a human-readable name for this robot.

Then publish a custom topic. For example:
```python
jefferson.custom("/command/dance", { "master": True })
```

where `/command/dance` is the MQTT topic name and `{ "master": True }` is the payload. In this case, we are asking this robot to start the dance and play music. If `master` was set to `False` it would not play music.

To run the script:
```shell
python start-dance.py
```
