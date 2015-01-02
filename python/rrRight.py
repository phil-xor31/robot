"""
	rrRight.py 
	Move right. Accepts one parameter on command line for 
	time duration to move. With no parameters, robot will maintain motion
	we send the rr.left command to move right because of the orientation
	of the board.
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
		#print duration
		rr.left(duration)
	except ValueError:
		#print "Not a number"
		rr.left()
else:
	rr.left()

rr.set_led1(0)
rr.set_led2(1)

