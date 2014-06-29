from raspirobotboard import *
rr = RaspiRobot()

import atexit
atexit.register(GPIO.cleanup)

#rr.test()
rr.set_led1(1)
rr.set_led2(1)

# Ex: add 1 in forward(1) for 1 sec.
rr.forward(0.25)
