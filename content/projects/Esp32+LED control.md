\---



title: ESP32 WiFi LED Brightness Control

date: 2026-08-04

description: Using ESP32 WiFi web server and PWM to control LED brightness through a browser interface.

tags:



\* ESP32

\* Arduino

\* WiFi

\* PWM

\* Embedded System



\---



\# ESP32 WiFi LED Brightness Control



\## Purpose



This project explores whether an ESP32 microcontroller can create a local WiFi web server and control LED brightness through a browser interface.



The goal was to verify the communication between:



\* ESP32 hardware

\* WiFi network

\* Web interface

\* PWM output control



By moving a brightness slider on a webpage, the user can remotely adjust the LED brightness.



\---



\# System Overview



The ESP32 works as both:



\* A WiFi client connected to the local network

\* A web server providing the control interface



The communication flow:



```

Browser

&#x20;  ↓

WiFi Network

&#x20;  ↓

ESP32 Web Server

&#x20;  ↓

PWM Output

&#x20;  ↓

LED Brightness

```



\---



\# Hardware



\## Components



\* ESP32-WROOM-32 development board

\* Built-in LED

\* USB cable for programming



\---



\# Software



\## Development Environment



\* Arduino IDE

\* ESP32 Arduino Core



\## Libraries



```cpp

\#include <WiFi.h>

\#include <WebServer.h>

```



\---



\# Implementation



\## WiFi Web Server



The ESP32 creates a local webpage after connecting to the WiFi network.



The assigned IP address can be accessed from another device connected to the same network.



Example:



```

http://192.168.x.x/

```



\---



\## PWM Brightness Control



LED brightness is controlled using PWM.



The brightness value range:



```

0 - 255

```



represents:



```

0% - 100% brightness

```



The webpage slider sends the selected value to the ESP32:



```

Browser

&#x20;  |

&#x20;  | HTTP Request

&#x20;  ↓

/set?value=brightness

&#x20;  |

&#x20;  ↓

ESP32 PWM Output

```



\---



\# Code



The complete Arduino code is stored separately because the full source is relatively long.



Main functions:



\* WiFi connection

\* HTTP server creation

\* HTML interface generation

\* PWM output control



\---



\# Testing Procedure



1\. Select the ESP32 development board and correct COM port in Arduino IDE.

2\. Configure WiFi SSID and password.

3\. Upload the program to ESP32.

4\. Open Serial Monitor with baud rate:



```

115200

```



5\. Check the assigned IP address.

6\. Connect another device to the same WiFi network.

7\. Open the ESP32 webpage.

8\. Move the brightness slider and observe LED changes.



\---



\# Test Result



Serial monitor output:



```

WiFi connected

IP address: 192.168.x.x

Web server started

```



The browser successfully displayed the ESP32 control interface.



Changing the slider value resulted in real-time LED brightness adjustment.



\---



\# Conclusion



This project successfully verified that ESP32 can:



\* Connect to a WiFi network

\* Host a local web server

\* Receive HTTP commands

\* Generate PWM output

\* Control hardware remotely through a browser



This experiment established the foundation for future IoT and interactive product projects.



