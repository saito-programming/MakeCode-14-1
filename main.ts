serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    basic.pause(500)
})
