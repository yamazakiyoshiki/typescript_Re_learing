"use strict";
class Department {
    static createEmployee(name) {
        return { name: name };
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log("IT部門 - ID" + this.id);
    }
}
class AccountingDepartment extends Department {
    describe() {
        console.log("会計部門 - ID" + this.id);
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません。');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を設定してください。');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const employee1 = Department.createEmployee('Yoshiki');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = '通気会計レポート';
accounting.addReport('Something');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Mani');
accounting.describe();
//# sourceMappingURL=app.js.map

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('hello' + this.name);
    }
}

Person.prototype.hello = function() {
    console.log('hello' + this.name);
}

const bob = new Person('Bob', 25);

bob.hello();
console.log(bob);

function F(a, b) {
    this.a = a;
    this.b = b;
    return {};
}

F.prototype.c = function() {}

function newOpe(C, ...args) {
    const _this = Object.create(C.prototype);
    const result = C.apply(_this, args);
    // console.log(result, _this);
    if(typeof result == "object" && result !== null) {
        return result;
    }

    return _this;
}

const instance = newOpe(F, 1, 2);
console.log(instance);