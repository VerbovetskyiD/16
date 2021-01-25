class Student {
    constructor(studentName, studentSurname, studentDateOfBirth) {
        this.name = studentName;
        this.surname = studentSurname;
        this.dateOfBirth = studentDateOfBirth;
    }

    #presentArr = new Array(30);
    #markArr = new Array(30);

    getAge() {
        const date = new Date();
        return date.getFullYear() - this.dateOfBirth;
    }

    present() {
        const index = this.#arrIndexCheck(this.#presentArr);
        if (index !== -1) this.#presentArr[index] = true;
    }

    absent() {
        const index = this.#arrIndexCheck(this.#presentArr);
        if (index !== -1) this.#presentArr[index] = false;
    }

    mark(mark) {
        const index = this.#arrIndexCheck(this.#markArr);
        if (index !== -1 && mark >= 0 && mark <= 10) this.#markArr[index] = mark;
    }

    averageMark() {
        return this.#getAverage(this.#markArr);
    }

    averagePresence() {
        return this.#getAverage(this.#presentArr);
    }

    summary() {
        const averageMark = this.averageMark();
        const averagePresence = this.averagePresence();
        let summary;
        if (averageMark > 9 && averagePresence > 0.9) {
            summary = 'Good';
        } else if (averageMark < 9 || averagePresence < 0.9) {
            summary = 'Normal';
        } else {
            summary = 'Bad';
        }
        return summary;
    }

    #arrIndexCheck(arr) {
        return arr.findIndex(el => el === undefined);
    }

    #getAverage(arr) {
        return arr.reduce((acc, el) => acc + el) / arr.length;
    }
}

// проверка
const noName = new Student('NoName', 'NoSurname', 1995);
noName.present();
noName.absent();
noName.present();
noName.mark(10);
noName.mark(55);
noName.mark(0);
noName.mark(5);
console.log(noName.averageMark());
console.log(noName.averagePresence());
console.log(noName.getAge());
console.log(noName.summary());
console.log(noName);