new Vue({
  el: '#app',
  data: {
    name: 'Dikae',
    course: 'Web Engineer Course',
    acceptancePeriod: 'August 2021',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'Noro Ceo', course: 'Web Engineer Course', acceptancePeriod: 'October 2020' },
      { id: 2, name: 'Tomoya Manager', course: 'Web Engineer Course', acceptancePeriod: 'October 2020' },
      { id: 3, name: 'Diop OU', course: 'Web Engineer Course', acceptancePeriod: 'October 2020' }
    ]
  },
 methods: {
    addStudent: function() {
      var lastStudentPosition = this.students.length - 1;
      let id = this.students[lastStudentPosition].id + 1;
      let name = this.name
      let course = this.course
      let acceptancePeriod = this.acceptancePeriod
      this.students.push({ id,name, course, acceptancePeriod })
    }
  }
})
