from raspirobotboard import *
rr = RaspiRobot()

import atexit
atexit.register(GPIO.cleanup)

rr.set_led1(0)
rr.set_led2(0)
rr.stop()