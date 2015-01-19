""""
Test program to control the robot from the keyboard. 
Keyboard scanning code derived from here:
	https://docs.python.org/2/faq/library.html?highlight=keypress#how-do-i-get-a-single-keypress-at-a-time

"""

import termios, fcntl, sys, os
fd = sys.stdin.fileno()

oldterm = termios.tcgetattr(fd)
newattr = termios.tcgetattr(fd)
newattr[3] = newattr[3] & ~termios.ICANON & ~termios.ECHO
termios.tcsetattr(fd, termios.TCSANOW, newattr)

oldflags = fcntl.fcntl(fd, fcntl.F_GETFL)
fcntl.fcntl(fd, fcntl.F_SETFL, oldflags | os.O_NONBLOCK)

# open pipe to controller
pipeName = '/home/pi/robot/python/CMD_PIPE'
pipeout = os.open(pipeName, os.O_WRONLY)

def sendCmd(cmd):
	if cmd.upper() == 'W':
		os.write(pipeout, "FWD\n")
	elif cmd.upper() == 'A':
		os.write(pipeout, "LEFT\n")
	elif cmd.upper() == 'D':
		os.write(pipeout, "RIGHT\n")
	elif cmd.upper() == 'X':
		os.write(pipeout, "BACK\n")
	elif cmd.upper() == 'S':
		os.write(pipeout, "STOP\n")

# loop endless for keypresses
try:
    while 1:
        try:
            c = sys.stdin.read(1)
            print "Got character", repr(c)
            sendCmd(c)
        except IOError: pass
finally:
    termios.tcsetattr(fd, termios.TCSAFLUSH, oldterm)
    fcntl.fcntl(fd, fcntl.F_SETFL, oldflags)
    os.close(pipeout)


