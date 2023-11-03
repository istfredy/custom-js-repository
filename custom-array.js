class customArray {

    constructor (custArr) {
        this.custArr = custArr
    }

    // Ajoute un ou plusieurs éléments à la fin d'un tableau et retourne le nouveau tableau.
    push () {
        for(let i = 0; i < arguments.length; i++){
            this.custArr[this.custArr.length] = arguments[i]
        }

        return this.custArr
    }

    // Supprime le dernier élément d'un tableau et renvoie cet élément.
    pop () {
        let lastValue = this.custArr[this.custArr.length - 1]
        this.custArr.length = this.custArr.length - 1
        return lastValue
    }
}

let _customArray = new customArray([404, 505])
_customArray.push("H2O", "28-01-2006")
_customArray.pop()
