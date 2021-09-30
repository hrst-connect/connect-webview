/**
 * Simple MQTT client for communicating with `pytemi` package:
 * https://github.com/hapi-robo/pytemi
 */
const mqtt = require('mqtt/dist/mqtt');
import * as robot from './robot.js'

const DEVICE_TYPE = 'temi'

const connectMqtt = (() => {
  let client = null

  const createInstance = (messageHandler) => {
    const deviceId = robot.getId()
    const connectUrl = `ws://${process.env.MQTT_HOST_NAME}:${process.env.MQTT_HOST_PORT}${process.env.MQTT_ENDPOINT}`
    const clientId = `mqtt-${deviceId}-${Math.random().toString(16).substr(2, 8)}`
    
    var options = {
      username: process.env.MQTT_USERNAME,
      password: process.env.MQTT_PASSWORD,
      keepalive: 30,
      clientId: clientId,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      rejectUnauthorized: false
    }
    
    console.log(`Connecting MQTT client to ${connectUrl}`)
    let client = mqtt.connect(connectUrl, options)

    client.on('connect', () => {
      console.log(`MQTT client connected: ${clientId}`)
      client.subscribe(`${DEVICE_TYPE}/${deviceId}/command/#`, { qos: 1 })
    })

    client.on('close', () => {
      console.log(clientId + ' disconnected')
      client = null
    })

    client.on('message', (topic, payload, packet) => {
      // console.debug(`[RECV]${topic} | ` + payload.toString())
      const topicTree = topic.split("/");
      const message = {
        command: topicTree[3],
        action: topicTree[4],
        payload: JSON.parse(payload),
      }

      messageHandler(message)
    })
  }

  const init = (messageHandler) => {
    if (!client) {
      console.log('Creating instance')
      createInstance(messageHandler)
    } else {
      console.log('Re-using instance')
    }
  }

  return { init }
})()

export default connectMqtt
