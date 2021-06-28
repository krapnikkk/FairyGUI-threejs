// #Migration see https://github.com/mrdoob/three.js/wiki/Migration-Guide
<<<<<<< HEAD
const currentVersion = "116"
=======
const initalVersion = "116"; // fairygui启动时的three版本
const currentVersion = "126"; // 项目工程使用的three版本
>>>>>>> f8e2f4b35eb78d242888662c69a6f20b8bf6c40e
const rules = {
    "123": [
        {
            type: "string",
            pattern: ".inverse()",
            replacement: ".invert()"
        },
        {
            type: "regex",
<<<<<<< HEAD
            pattern:".getInverse\\(([^]+?)\\);",
=======
            pattern: ".getInverse\\(([^]+?)\\);",
>>>>>>> f8e2f4b35eb78d242888662c69a6f20b8bf6c40e
            replacement: ".copy($1).invert();"
        }
    ]
};

const getMigrationRules = (version, rules) => {
    let rule = [];
<<<<<<< HEAD
    for (let key in rules) {
        if (+key >= +version) {
            rule.push(...rules[key]);
=======
    if (+currentVersion > +initalVersion) {
        for (let key in rules) {
            if (+key >= +version) {
                rule.push(...rules[key]);
            }
>>>>>>> f8e2f4b35eb78d242888662c69a6f20b8bf6c40e
        }
    }
    return rule;
}
<<<<<<< HEAD
=======

>>>>>>> f8e2f4b35eb78d242888662c69a6f20b8bf6c40e
module.exports = getMigrationRules(currentVersion, rules);