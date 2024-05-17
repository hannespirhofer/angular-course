import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses:Course[] = [...COURSES];

  startDate = new Date();
  title = this.courses[0].description;
  price = 9.9915648646;
  rate = 0.67;
  course = COURSES[0];

  onCourseSelected(course: Course) {

    console.log(course);

  }

}
