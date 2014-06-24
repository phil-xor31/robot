from raspirobotboard import *
rr = RaspiRobot()

import atexit
atexit.register(GPIO.cleanup)

print "hello"
rr.test()
rr.set_led1(0)
#rr.set_led2(1)

#add 1 in forward(1) for 1 sec.
#rr.forward()
