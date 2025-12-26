football = {
    Brazil: 5,
    Portugal: 0,
    England: 1,
    Germany: 4,
    Argentina: 3,
    Urugay: 2,
    Espain: 1,
    Italy: 4,
    France: 2
}

// display country name whose values > 1

for (let [k, v] of Object.entries(football)) {
    if (v > 1) {
        console.log(k, v);
    }

}