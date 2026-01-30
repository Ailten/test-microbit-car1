function evalObstacle () {
    delayToObstacleSensor = input.runningTime() - timeWhenLastObstacleSensor
    if (delayToObstacleSensor > 1000) {
        timeWhenLastObstacleSensor = input.runningTime()
        distanceObstacle = maqueen.Ultrasonic()
    }
}
function rotate90 () {
    for (let index = 0; index < 270; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    }
}
let timeWhenLastObstacleSensor = 0
let delayToObstacleSensor = 0
let distanceObstacle = 0
distanceObstacle = 0
let motorSpeed = 60
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
delayToObstacleSensor = 0
timeWhenLastObstacleSensor = 0
basic.forever(function () {
    evalObstacle()
    if (distanceObstacle < 30) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else {
        for (let index = 0; index < 4; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, motorSpeed)
        }
    }
    strip.showRainbow(1, 360)
})
