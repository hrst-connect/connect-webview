#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Start dance script

"""
import pytemi as temi
import time
import os

from dotenv import load_dotenv

load_dotenv()


# MQTT server parameters
MQTT_HOST = os.getenv("MQTT_HOST")
MQTT_PORT = int(os.getenv("MQTT_PORT"))
MQTT_USERNAME = os.getenv("MQTT_USERNAME")
MQTT_PASSWORD = os.getenv("MQTT_PASSWORD")

# Connect to the MQTT broker
mqtt_client = temi.connect(MQTT_HOST, MQTT_PORT, MQTT_USERNAME, MQTT_PASSWORD)

# Create robot object
mockup = temi.Robot(mqtt_client, "mockup", silent=False)
jefferson = temi.Robot(mqtt_client, "00120263531")
aruba = temi.Robot(mqtt_client, "00119462496")

# Publish custom "start dance" topic
mockup.custom("/command/dance", { "master": True })
jefferson.custom("/command/dance", { "master": True })
aruba.custom("/command/dance", { "master": False })

while True:
  time.sleep(1)