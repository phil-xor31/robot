import sys
import RPi.GPIO as GPIO
GPIO.setwarnings(False)
from raspirobotboard import *
rr = RaspiRobot()

rr.stop()
rr.set_led1(0)
rr.set_led2(0)
