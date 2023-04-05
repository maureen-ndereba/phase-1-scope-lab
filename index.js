var customerName = "bob"

function upperCaseCustomerName(){
customerName = customerName.toUpperCase()

}

function setBestCustomer(){
    var localVariable = "Sam"
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
    
    }

const leastFavoriteCustomer = "Sam"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Joyce"
}