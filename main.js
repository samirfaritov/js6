function user(n, a, p) {
    let na = prompt('what is your name ?')

    if (na.trim() === n) {
        let numberAcoount = prompt("write your acount password")

        if (Number(numberAcoount.trim()) === a) {
            let price = prompt('chanpul giram')

            if (price <= p) {
                alert(
                    `hammasi chotki
                        chanpul gifti nomard: ${price}$;
                        chanpul mond kissasba: ${p - price}$
                    `
                )
            } else {
                alert("o'''''' qodirxon pula korka biyo")
            }
        } else {
            alert("user is not defined !!!")
        }
    } else {
        alert("user is not defined !!!")
    }
}

// user("Javohir", 1500, 50000)
user("Samir", 1001, 150000)

