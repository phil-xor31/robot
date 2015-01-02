"""
	rrLeft.py 
	Move Left. Accepts one parameter on command line for 
	time duration to move. With no parameters, robot will maintain motion
	we send the rr.right command to move left because of the orientation
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
		rr.right(duration)
	except ValueError:
		#print "Not a number"
		rr.right()
else:
	rr.right()

rr.set_led1(1)
rr.set_led2(0)

