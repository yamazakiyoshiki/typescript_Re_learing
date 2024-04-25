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
class Ucl {
    static createCheem(id, name) {
        const cheem = { id, name };
        return cheem;
    }
    constructor(id, name, leage) {
        this.id = id;
        this.name = name;
        this.leage = leage;
    }
    addChem(index, chem) {
        if (this.name && this.leage) {
            return;
        }
        else {
            this.name.push(chem);
            this.leage.push(chem);
            return this.id === index ? this.id : null;
        }
    }
}
const ars = new Ucl(2, ['アーセナル'], ['アーセナル']);
ars.addChem(2, 'シティ');
const city = Ucl.createCheem(1, 'manCity');
//# sourceMappingURL=classes.js.map