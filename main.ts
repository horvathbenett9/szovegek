input.onButtonPressed(Button.A, function () {
    sovegbetunként(soveg2)
})
function sovegbetunként (text: string) {
    for (let index = 0; index <= text.length; index++) {
        basic.showString(text.charAt(index))
        basic.clearScreen()
        basic.pause(50)
    }
}
input.onButtonPressed(Button.B, function () {
    betukodja = 65
    while (betukodja < 91) {
        basic.showString(String.fromCharCode(betukodja))
        betukodja += 1
    }
})
let betukodja = 0
let soveg2 = ""
let szoveg1 = "Dr"
soveg2 = "Barnabasxxxxxxxx"
let soveg3 = "Istvan"
basic.forever(function () {
	
})
