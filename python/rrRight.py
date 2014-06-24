from raspirobotboard import *
rr = RaspiRobot()

import atexit
atexit.register(GPIO.cleanup)

rr.set_led1(0)
rr.set_led2(1)

#add 1 in right(1) for 1 sec.
rr.right(2)