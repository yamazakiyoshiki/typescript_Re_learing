
abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return {name: name};
  }

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Department.fiscalYear);
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {

    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log("IT部門 - ID" + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  describe() {
    console.log("会計部門 - ID" + this.id);
  }

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません。');
  }

  set mostRecentReport(value: string) {
    if(!value) {
      throw new Error('正しい値を設定してください。')
    }
    this.addReport(value);
  }

  private constructor(id: string,private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(AccountingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
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

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = '通気会計レポート';
accounting.addReport('Something');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Mani');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = {
//   name: "DUMMY",
//   describe: accounting.describe,
// };

// accountingCopy.describe();




class Ucl {

  static createCheem(id: number, name: string) {
    const cheem = {id, name}
    return cheem;
  }

  constructor(private id: number, private name: string[], private leage: string[]) {}

  // abstract deleteCheem(id: number, cheem: string): void;

  addChem(index: number, chem: string) {
    if(this.name && this.leage) {
      return;
    } else {
      this.name.push(chem);
      this.leage.push(chem);
      return this.id === index? this.id : null;
    }
  }
}

const ars = new Ucl(2, ['アーセナル'], ['アーセナル']);
ars.addChem(2, 'シティ');

const city = Ucl.createCheem(1, 'manCity');