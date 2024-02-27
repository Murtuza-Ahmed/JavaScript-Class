"use strict";
const button = document.querySelector("button");
function log(data) {
    console.log("click" + data);
}
// log("hello")
button.addEventListener("click", log.bind(null, "hello"));
/**
 * CLASSES
 */
class Student {
    constructor(n, r, e) {
        this.skills = [];
        this.name = n;
        this.rollNo = r;
        this.email = e;
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
    getSkill() {
        return this.skills;
    }
}
const studentDetail = new Student("sheroz", 26, "murtuza@gmail.com");
studentDetail.addSkill("javascript");
console.log(studentDetail.getSkill());
console.log(studentDetail);
//# sourceMappingURL=app.js.map