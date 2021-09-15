const VUE_APP_HOST_NAME = "34.83.131.39"
const VUE_APP_HOST_PORT = "8083"
const VUE_APP_ENDPOINT = "/mqtt"
const VUE_APP_USERNAME = "connect"
const VUE_APP_PASSWORD = "hrstqa123"

const mqtt = require('mqtt/dist/mqtt');

const connectMqtt = (() => {
  let client = null
  const deviceType = 'temi'

  const createInstance = (deviceId, messageHandler) => {
    const connectUrl = `ws://${VUE_APP_HOST_NAME}:${VUE_APP_HOST_PORT}${VUE_APP_ENDPOINT}`
    const clientId = `mqtt-${deviceId}-${Math.random().toString(16).substr(2, 8)}`
    
    var options = {
      username: VUE_APP_USERNAME,
      password: VUE_APP_PASSWORD,
      keepalive: 30,
      clientId: clientId,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: 'WillMsg',
        payload: 'Connection closed abnormally..!',
        qos: 0,
        retain: false
      },
      rejectUnauthorized: false
    }
    
    console.log(`Connecting MQTT client to ${connectUrl}`)
    let client = mqtt.connect(connectUrl, options)

    client.on('error', (err) => {
      console.error(err)
      client.end()
      client = null
    })
  
    client.on('connect', () => {
      console.log(`MQTT client connected: ${clientId}`)
      
      // Subscriptions
      client.subscribe(`${deviceType}/${deviceId}/command/#`, { qos: 1 })
    })
  
    client.on('reconnect', () => {
      console.log(`Attempting to reconnect`)
    })
  
    client.on('close', () => {
      console.log(clientId + ' disconnected')
      client = null
    })
  
    client.on('offline', () => {
      console.log('MQTT client now offline')
    })
  
    client.on('message', (topic, payload, packet) => {
      // console.log(`[RECV]${topic} | ` + payload.toString())
      const topicTree = topic.split("/");
      const message = {
        command: topicTree[3],
        action: topicTree[4],
        payload: JSON.parse(payload),
      }

      messageHandler(message)
    })
  }

  const init = (deviceId, messageHandler) => {
    if (!client) {
      console.log('Creating instance')
      createInstance(deviceId, messageHandler)
    } else {
      console.log('Re-using instance')
    }
  }

  return { init }
})()

export default connectMqtt
