import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1, 2];
  viewMode = 'map'
  coursesTwo = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' }
  ]
  coursesThree = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' }
  ]
  coursesFour;
  canSave = true;
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }

  onAdd() {
    this.coursesThree.push({ id: 4, name: 'course 4' })
  }

  onRemove(course) {
    let index = this.coursesThree.indexOf(course)
    this.coursesThree.splice(index, 1)
  }

  // In Angular a pass the reference of the original attribute of the object,
  // so, if I change it, it changes the original.
  onChange(course) {
    course.name = 'Updated'
    console.log(this.coursesThree)
  }

  loadCourses() {
    this.coursesFour = [
      { id: 1, name: 'course 1' },
      { id: 2, name: 'course 2' },
      { id: 3, name: 'course 3' }
    ]
  }

  trackCourse(index, course) {
    console.log(index)
    console.log(course)
    return course ? course.id : undefined
  }
}
