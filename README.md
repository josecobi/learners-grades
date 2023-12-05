# JavaScript Learners Grades Tracker

The JavaScript Learning Tracker is a tool designed to process and analyze learner submissions for a JavaScript course.
Features
## 1. Data Validation

  The validateCourseAssignment function ensures data integrity by checking if the assignment group (AssignmentGroup) belongs to the specified course (CourseInfo). It throws an error if a mismatch is detected, providing clear feedback about the invalid input.

## 2. Learner Data Processing

  The getLearnerData function processes learner submissions, calculating key metrics for each learner. It creates a list of unique learner IDs, calculates total points considering late submissions with a 10% deduction, computes weighted averages, and determines assignment percentages.

## 3. Assignment Due Date Handling

  The getDueDateById function retrieves the due date of a specific assignment based on its ID, facilitating effective handling of assignment deadlines.

## 4. Scoring Logic

  The code includes logic for scoring assignments, applying a 10% deduction for late submissions.

## 5. Percentage Calculation

  The calculatePercentage function computes the percentage score for each assignment, considering possible points and late submissions.

## 6. Total Points Calculation

  The calculateTotalPointsLearner and calculateTotalPointsPossible functions calculate the total points each learner earned and the sum of points possible for all assignments due till the current date, respectively.

## Usage

To utilize this tool, provide the necessary course information (CourseInfo), assignment group data (AssignmentGroup), and learner submissions (LearnerSubmissions). The functions offer valuable insights into learner performance and assignment progress.
Instructions

    
