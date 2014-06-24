from raspirobotboard import *
rr = RaspiRobot()

import atexit
atexit.register(GPIO.cleanup)

rr.set_led1(1)
rr.set_led2(0)

#add 1 in left(1) for 1 sec.
rr.left(2)