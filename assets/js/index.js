"use strict";

class Author1 {
  static counter = 0;
  constructor(name, surname, birthYear, citizenship, occupation) {
    (this.name = name),
      (this.surname = surname),
      (this.birthYear = birthYear),
      (this.citizenship = citizenship),
      (this.occupation = occupation);
    Author1.counter++;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  getAuthorInfo() {
    return `Full name: ${this.name} ${this.surname} \nBirthday: ${this.birthYear} \nCitizenship: ${this.citizenship} \nOccupation: ${this.occupation}`;
  }
  static getCounter() {
    return `Authors count = ${this.counter}`;
  }
}

class Works1 extends Author1 {
  static counterWorks = 0;
  constructor(
    name,
    surname,
    birthYear,
    citizenship,
    occupation,
    work,
    editionYear
  ) {
    super(name, surname, birthYear, citizenship, occupation);

    (this.work = work), (this.editionYear = editionYear);
    Works1.counterWorks++;
  }

  getAuthotWorksInfo() {
    return `${this.getAuthorInfo()} \nWork: ${this.work} \nEdition Year: ${
      this.editionYear
    }`;
  }
  static getCounterWorks() {
    return `Works count = ${this.counterWorks}`;
  }
}

let author1 = new Author1("Wolfgang", "Holbein", 1953, "Germany", "writter");

let work1 = new Works1(
  "Wolfgang",
  "Holbein",
  1953,
  "Germany",
  "writter",
  "Rebel Queen ",
  1990
);

let work2 = new Works1(
  "Wolfgang",
  "Holbein",
  1953,
  "Germany",
  "writter",
  "Anubis",
  2005
);

let work3 = new Works1(
  "Wolfgang",
  "Holbein",
  1953,
  "Germany",
  "writter",
  "Fairy Tale Moon's Heirs",
  1998
);

let work4 = new Works1(
  "Wolfgang",
  "Holbein",
  1952,
  "Germany",
  "writter",
  "The Magic Moon",
  1983
);

console.log(author1);
console.log(author1.getAuthorInfo());
console.log(work1);
console.log(work2);
console.log(work3);
console.log(work3.getAuthotWorksInfo());
console.log(work4.getFullName());
console.log(Author1.getCounter());
console.log(Works1.getCounterWorks());
console.log(
  "-------------------------------------------------------------------------------------"
);

class Author2 {
  static counter = 0;
  constructor(name, surname, birthYear, citizenship, occupation, ...arg) {
    (this.name = name),
      (this.surname = surname),
      (this.birthYear = birthYear),
      (this.citizenship = citizenship),
      (this.occupation = occupation),
      (this.works = arg);
    Author2.counter++;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  getAuthorInfo() {
    return `Full name: ${this.name} ${this.surname} \nBirthday: ${this.birthYear} \nCitizenship: ${this.citizenship} \nOccupation: ${this.occupation}`;
  }

  getWorksInfo() {
    let res = "";
    for (let key of this.works) {
      let { work, editionYear } = key;
      res += `Work Name: ${work}, Edition Year: ${editionYear}\n`;
    }
    return res;
  }

  getAuthorAndWorksInfo() {
    return `Full name: ${this.name} ${this.surname} \nBirthday: ${
      this.birthYear
    } \nCitizenship: ${this.citizenship} \nOccupation: ${
      this.occupation
    } \nWorks: ${this.getWorksInfo()} `;
  }
  static getCounter() {
    return `Authors count = ${this.counter}`;
  }
}

class Works2 {
  static counterWorks = 0;
  constructor(work, editionYear) {
    (this.work = work), (this.editionYear = editionYear);
    Works2.counterWorks++;
  }

  getAuthotWorksInfo() {
    return `Work: ${this.work} \nEdition Year: ${this.editionYear}`;
  }
  static getCounterWorks() {
    return `Works count = ${this.counterWorks}`;
  }
}

let work2_1 = new Works2("Rebel Queen ", 1990);

let work2_2 = new Works2("Anubis", 2005);

let work2_3 = new Works2("Fairy Tale Moon's Heirs", 1998);

let work2_4 = new Works2("The Magic Moon", 1983);
let author2_1 = new Author2(
  "Wolfgang",
  "Holbein",
  1953,
  "Germany",
  "writter",
  work2_1,
  work2_2,
  work2_3,
  work2_4
);

console.log(author2_1);
console.log(work2_1);
console.log(Author2.getCounter());
console.log(Works2.getCounterWorks());
console.log(author2_1.getAuthorInfo());
console.log(work2_1.getAuthotWorksInfo());
console.log(author2_1.getAuthorAndWorksInfo());
console.log(author2_1.getWorksInfo());
