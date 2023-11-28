class customArray {

    constructor (custArr) {
        this.custArr = custArr
    }
// 1. Ajout et Supresion d'éléments
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

    // Supprime le premier élément d'un tableau et renvoie cet élément.
    shift () {
        let firstValue = this.custArr[0]
        let shiftArray = []
        for (let i = 1; i < this.custArr.length; i++) {
            shiftArray[i-1] = this.custArr[i]
        }

        this.custArr = shiftArray
        return firstValue
    }


    // Ajoute un ou plusieurs éléments au début d'un tableau et retourne le nouveau tableau.

    unshift () {
        let unshiftArray = []
        for (let i = 0; i < arguments.length; i++) {
            unshiftArray[i] = arguments[i]
        }

        this.custArr = [...unshiftArray, ...this.custArr]
        return this.custArr
    }

// 2. Recherche d'éléments dans un tableau
    // Trouver l'indice de la première occurrence d'un élément du tableau

    indexOf (searchElement) {
        for (let i = 0; i < this.custArr.length; i++) {
            if (this.custArr[i] == searchElement) {
                return i
            }
        }

        return -1
    }

    // Trouver l'indice de la dernière occurrence d'un élément du tableau
    
    LastindexOf (searchElement) {
        for (let i = this.custArr.length - 1; i >= 0; i--) {
            if (this.custArr[i] == searchElement) {
                return i
            }
        }

        return -1
    }

    // Verifier si un élément est présent dans le tableau

    includes (searchElement) {
        for (let i=0; i < this.custArr.length; i++) {
            if (this.custArr[i] == searchElement) {
                return true
            }
        }

        return false
    }

// 3. Parcourrir dans le tableau
    // Executer une fonctioon sur chaque element d'un tableau

    forEach (getCallback) {
        for (let i = 0; i < this.custArr.length; i++) {
            getCallback(this.custArr[i])
        }
    }

    // Retourner un nouveau tableau contenant les éléments du tableau sur lequel on a appliqué une fonction 

    map (getCallback) {
        let newMapArray = []
        for (let i = 0; i < this.custArr.length; i++) {
            newMapArray[i] = getCallback(this.custArr[i])
        }

        return newMapArray
    }

// 4. Manipulation d'un tableau
    // Extraire une partie d'un tableau

}


let _customArray = new customArray(["@th3fr3dy", "@github", "@instagram", "@telegram"])



/* Test....

... push test ...
_customArray.push("@instagram", "@telegram")

... pop test ...
_customArray.pop()

... shift test ...
_customArray.shift()

... unshift test ...
_customArray.unshift("@whatsApp", "@Twiter", "@Facebook")

... includes test ...
console.log(_customArray.includes("@github"))

... indexOf test ...
console.log(_customArray.indexOf("@github"))

... forEach test ...
_customArray.forEach((element) => {
    console.log(element)
})

... map test ...
console.log( _customArray.map((element) => element + "ok"))

... check changes ...
console.log(_customArray);


*/
