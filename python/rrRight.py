from raspirobotboard import *
rr = RaspiRobot()

import atexit
atexit.register(GPIO.cleanup)

rr.set_led1(0)
rr.set_led2(1)

#add 1 in right(1) for 1 sec.
#S Monk got rrLeft & rrRight() mixed up so I am for now changing this,      
#when I click R btn, the robot actually goes L (so I am quick fix chging this
# here.
rr.left(0.22)
