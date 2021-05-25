function writeCards(names, event) {
    const thanks = []
    for (let p = 0; p < names.length; p++){
        thanks.push(`Thank you, ${names [p]}, for the wonderful ${event} gift!`)
    }
    return thanks 
}

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
}

