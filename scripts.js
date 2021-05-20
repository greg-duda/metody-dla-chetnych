const rentalCarCompany = [
    {
       name: 'audi',
       allCarsNumber: 70,
       carsToRent: 30,
       price: 140,
    },
    {
       name: 'fiat',
       allCarsNumber: 120,
       carsToRent: 120,
       price: 90,
    },
    {
       name: 'bwm',
       allCarsNumber: 50,
       carsToRent: 50,
       price: 430,
    },
    {
       name: 'ferrari',
       allCarsNumber: 3,
       carsToRent: 1,
       price: 1200,
    },
    {
       name: 'mustang',
       allCarsNumber: 13,
       carsToRent: 3,
       price: 650,
    },
    {
       name: 'mercedes',
       allCarsNumber: 22,
       carsToRent: 12,
       price: 340,
    },
 ]
 /* a) posortuj marki aut alfabetycznie, */
const carSorted = [...rentalCarCompany].sort(function(first, second) {
    if (first.name > second.name) {
        return 1
    } else {
        return -1
    }
})
console.log(carSorted)
/* b) przefiltruj marki aut z ceną za dzień poniżej 400, */

const overFourHundred = rentalCarCompany.filter(function(item) {
    if (item.price < 400) {
        return `${item.name}: ${item.price}`
}
})
console.log(overFourHundred)
/* c) posortuj marki aut cenowo od najmniejszej do największej, */
const lowToHigh = [...rentalCarCompany].sort(function(a, b) {
    return a.price - b.price
})
console.log(lowToHigh)
/* d) przefiltruj tą tablicę i pokaż tylko te marki w których wszystkie auta z posiadanych są dostępne, */
const allAvailable = rentalCarCompany.filter(function(item) {
    const value1 = item.allCarsNumber
    const value2 = item.carsToRent
    if (value1 === value2) {
        return item
    }
})
console.log(allAvailable)
/* e) posortuj auta względem dostępnej ilości aut(od tych gdzie jest najwięcej aut do tych gdzie jest ich najmniej) */
const highToLowAvailability = [...rentalCarCompany].sort(function(first, second) {
   return second.carsToRent - first.carsToRent
})
console.log(highToLowAvailability)
/* f) sprawdź z której wypożyczalni będziemy mogli wynająć na 7 dni auto mając do dyspozycji 3500zł, */
const weeklyRent = rentalCarCompany.filter(function(item) {
    if(item.price * 7 < 3500) {
        return item
    }
})
console.log(weeklyRent)

/* g) ** Wskaż jakie auta są wypożyczane najczęściej i być może należy zaopatrzyć wypożyczalnie w więcej takich aut?
(Chodzi o stosunek w danej marce aut dostępnych w wypożyczalni ogólnie i aktualnie, gdzie procentowo zostało
ich teraz najmniej) Wskaż 3 najczęściej wypożyczane marki aut. */

const carProportion = rentalCarCompany.filter(function(item) {
    const percentage = item.carsToRent / item.allCarsNumber * 100
    if(percentage < 50) {
        return item
    }
})
console.log(carProportion)
