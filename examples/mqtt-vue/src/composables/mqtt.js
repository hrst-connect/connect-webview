// https://www.emqx.com/en/blog/how-to-use-mqtt-in-vue
import { ref } from 'vue'
import * as mqttjs from 'mqtt'

const mqtt = (() => {
  let client = null
  const deviceType = 'temi'

  const message = ref(null)

  const createInstance = (deviceId) => {
    const connectUrl = `ws://${process.env.VUE_APP_HOST_NAME}:${process.env.VUE_APP_HOST_PORT}${process.env.VUE_APP_ENDPOINT}`
    const clientId = `mqttjs-${deviceId}-${Math.random().toString(16).substr(2, 8)}`
    
    var options = {
      username: process.env.VUE_APP_USERNAME,
      password: process.env.VUE_APP_PASSWORD,
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
    let client = mqttjs.connect(connectUrl, options)

    client.on('error', (err) => {
      console.error(err)
      client.end()
      client = null
    })
  
    client.on('connect', () => {
      console.log(`MQTT client connected: ${clientId}`)
      
      // Subscriptions
      client.subscribe(`${deviceType}/${deviceId}/command/move/tilt_by`, { qos: 1 })
      client.subscribe(`${deviceType}/${deviceId}/command/move/turn_by`, { qos: 1 })
      client.subscribe(`${deviceType}/${deviceId}/command/tts`, { qos: 1 })
      client.subscribe(`${deviceType}/${deviceId}/command/waypoint/goto`, { qos: 1 })
      client.subscribe(`${deviceType}/${deviceId}/command/media/video`, { qos: 1 })
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
      message.value = {
        command: topicTree[3],
        action: topicTree[4],
        payload: JSON.parse(payload),
      }
    })
  }

  const init = (deviceId) => {
    if (!client) {
      console.log('Creating instance')
      createInstance(deviceId)
    } else {
      console.log('Re-using instance')
    }
  }

  return { init, message }
})()

export default mqtt
