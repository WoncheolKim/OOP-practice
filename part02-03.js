class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}