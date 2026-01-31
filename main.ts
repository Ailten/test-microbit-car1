function walkUntilWall () {
    if (maqueen.Ultrasonic() < 5) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, motorSpeed)
    }
}
function writeDistance () {
    basic.showNumber(maqueen.Ultrasonic())
}
function rotate90 () {
    for (let index = 0; index < 270; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    }
}
function followRoad () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) != 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) != 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, motorSpeed)
    }
}
let motorSpeed = 0
motorSpeed = 60
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
basic.forever(function () {
    writeDistance()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
