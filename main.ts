basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showString("EGUNON")
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    }
})
