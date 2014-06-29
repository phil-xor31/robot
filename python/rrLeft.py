from raspirobotboard import *
rr = RaspiRobot()

import atexit
atexit.register(GPIO.cleanup)

rr.set_led1(1)
rr.set_led2(0)

#add 1 in left(1) for 1 sec.
#S Monk got rrLeft & rrRight() mixed up so I am for now changing this,
#when I click L btn, the robot actually goes R (so I am quick fix chging this
# here.
rr.right(0.22)
