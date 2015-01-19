"""
    rrControl.py 

    A control program for the RaspiRobot. 
    It is meant to run as a service. It accepts commands
    from a named linux pipe as it's main source of input.

    In th future, inputs from other sensors might be added to
    allow for more autonomous operation. Examples include
    sonar sensor, gps, etc.

    Requires raspirobotboard python library to be installed.
    This script can be started when the pi boots by adding this 
    line to /etc/rc.local

    /usr/bin/python /home/pi/robot/python/rrControl.py &


"""
import os, time, sys
import RPi.GPIO as GPIO
GPIO.setwarnings(False)
from raspirobotboard import *
rr = RaspiRobot()

pipeName = '/home/pi/robot/python/CMD_PIPE'
debug = False # set True to see debug output
raspiBoardAlive = True # set True if running from battery power

def init():
    """
    Initialization of the system

    """
    if debug:
        print "rrControl init: enter"
    # check if pipe exists, if not, create it and set permissions
    # so that www-data (ie the web server can write to it)
    if not os.path.exists(pipeName):
        os.mkfifo(pipeName)
        os.chmod('/home/pi/robot/python/CMD_PIPE', 666)

def runCmd(cmd):
    """
    run the command sent to us
    """
    if debug:
        print 'runCmd enter:'
    if cmd == 'FWD':
        if debug:
            print 'forward'
        rr.forward()
        rr.set_led1(1)
        rr.set_led2(1)
    elif cmd == 'LEFT':
        if debug:
            print 'left'
        rr.right(0.22)
        rr.set_led1(1)
        rr.set_led2(0)
    elif cmd.upper() == 'RIGHT':
        if debug:
            print 'right'
        rr.left(0.22)
        rr.set_led1(0)
        rr.set_led2(1)
    elif cmd.upper() == 'BACK':
        if debug:
            print 'reverse'
        rr.reverse()
        rr.set_led1(1)
        rr.set_led2(1)
    elif cmd.upper() == 'STOP':
        if debug:
            print 'rr.stop'
        rr.stop()
        rr.set_led1(0)
        rr.set_led2(0)


def mainLoop():
    """
    mainLoop which runs continuously

    """
    if debug:
        print "rrControl mainLoop: starting"
    pipeIn = open(pipeName, 'r')
    while True:
        cmd = pipeIn.readline()[:-1]
        if len(cmd) > 0:
            if debug:
                print 'cmd: "%s" at %s' % (cmd, time.time( ))
            if raspiBoardAlive:
                runCmd(cmd)


init()
mainLoop()
