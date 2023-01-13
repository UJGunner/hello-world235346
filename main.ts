input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1e+26; index++) {
        music.playMelody("E G F E G F G A ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
})
basic.showIcon(IconNames.Yes)
