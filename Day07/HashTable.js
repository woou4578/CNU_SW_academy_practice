// Array 이용
const table1 = [];
table1["key"] = 100;
table1["key2"] = "Hello";
console.log(table1["key"]);
table1["key"] = 349;
console.log(table1["key"]);
delete table1["key"];
console.log(table1["key"]);
console.log("-----");
// Object 이용
const table2 = {};
table2["key"] = 100;
table2["key2"] = "Hello";
console.log(table2["key"]);
table2["key"] = 349;
console.log(table2["key"]);
delete table2["key"];
console.log(table2["key"]);
console.log("-----");
// Map 이용
const table3 = new Map();
table3.set("key", 100);
table3.set("key2", "Hello");
console.log(table3["key"]);
console.log(table3.get("key"));
const object = { a: 1};
table3.set(object, "A1");
console.log(table3.get(object));
table3.delete(object);
console.log(table3.get(object));
console.log(table3.keys());
console.log(table3.values());
table3.clear();
console.log(table3.values());
console.log("-----");
// Set 이용
const table4 = new Set();
table4.add("key");
table4.add("key2");
console.log(table4.has("key"));
console.log(table4.has("key3"));
table4.delete("key2")
console.log(table4.has("key2"));
table4.add("key3");
console.log(table4.size);
table4.clear();
console.log(table4.size);
console.log("-----");
