"""
	rrBack.py 
	Move backward. Accepts one parameter on command line for 
	time duration to move. With no parameters, robot will maintain motion
"""
import sys
import RPi.GPIO as GPIO
GPIO.setwarnings(False)
from raspirobotboard import *
rr = RaspiRobot()

num_args = len(sys.argv)
if num_args > 1:
	try:
		duration = float(sys.argv[1])
		print duration
		rr.reverse(duration)
	except ValueError:
		print "Not a number"
		rr.reverse()
else:
	rr.reverse()

rr.set_led1(1)
rr.set_led2(1)

