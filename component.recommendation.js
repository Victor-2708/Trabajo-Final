function incrementPizzaVisit(pizzaId) {
    let visits = JSON.parse(localStorage.getItem('pizzaVisits')) || {};
    
    if (!visits[pizzaId]) {
        visits[pizzaId] = 0;
    }
    
    visits[pizzaId]++;
    localStorage.setItem('pizzaVisits', JSON.stringify(visits));
}

function getPizzaVisits(pizzaId) {
    let visits = JSON.parse(localStorage.getItem('pizzaVisits')) || {};
    return visits[pizzaId] || 0;
}