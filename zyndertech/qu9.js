person = {
    "data1": { "name": "aa", "age": 45, "place": "kottayam" },
    "data2": { "name": "bb", "age": 50, "place": "tvm" },
    "data3": { "name": "cc", "age": 35, "place": "knr" }
};

for (let key in person) {
    if (person[key].age > 50) {
        console.log(person[key].name);
    }
}