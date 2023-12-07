// Define data structures
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};
  
// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data. arr[{}{}{}]
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

//DECLARE FUNCTIONS
// Implement data validation logic(Check for errors in course Ids- try...catch)

function validateCourseInfo(ag) {
    try {
        if (ag.course_id !== CourseInfo.id) {
          throw new Error('Error: AssignmentGroup does not belong to its course. Invalid input.');
        }
    } 
    catch (error) {
        console.error(error.message);
    }
}

//create list of learners
function createListLearnersIds (submissions){
    //create an array of ids to be used to iterate through submissions
    let listOfLearnersId = [];
    submissions.forEach((submission) =>{
        listOfLearnersId.push(submission.learner_id);
    })
    //remove duplicate ids
    return Array.from(new Set(listOfLearnersId));
}

// Get assignments due in the past
function getPastDueAssignments(ag) {
    const currentDate = new Date();
    return ag.assignments.filter((assignment) => new Date(assignment.due_at) <= currentDate && assignment
    .points_possible !== 0 && !isNaN(assignment.points_possible))
  .map((assignment) => assignment.id);
}

//Get due date by assignment ID
function getDueDateById(ag, assignmentId){
    for(let assignment of ag.assignments){
        if(assignment.id === assignmentId){
          return assignment.due_at;
        }
    }
}

// Check if the assignment was submitted late
function isLateSubmission(submittedAt, dueAt) {
    const submittedDate = new Date(submittedAt);
    const dueDate = new Date(dueAt);

    // Compare the submitted date with the due date
    return submittedDate > dueDate;
}

// Calculate scores for each assignment(% and late submissions)
function deduct10(points){
    points = points * 0.9;
    return points;
}

// Calculate total points each learner earned
function calculateTotalPointsLearner(submissions, learnerId, ag){
    validateCourseInfo(ag);
    let totalPoints = 0;
    const pastDueAssignments = getPastDueAssignments(ag);

    submissions.forEach((obj) => {
        if(obj.learner_id === learnerId && pastDueAssignments.includes(obj.assignment_id)){
            const isLate = isLateSubmission(obj.submission.submitted_at, getDueDateById(ag, obj.assignment_id));
            if (isLate) {
                totalPoints += deduct10(obj.submission.score);
            } 
            else {
                totalPoints += obj.submission.score;
            }
        }
    });
    return totalPoints;
}

//Calculate percentage
function calculatePercentage(submissions, learnerId, ag){
    validateCourseInfo(ag);
    
  
    const pastDueAssignments = getPastDueAssignments(ag);
    const learnerPercentage = {};

    submissions.forEach((obj) => {

        if(obj.learner_id === learnerId && pastDueAssignments.includes(obj.assignment_id)){         
            const isLate = isLateSubmission(obj.submission.submitted_at, getDueDateById(ag, obj.assignment_id));

            if (isLate) {
            
                const pointsPossible = ag.assignments.find(assignment => assignment.id === obj.assignment_id).points_possible;
              
                learnerPercentage[obj.assignment_id] = deduct10(obj.submission.score)/ pointsPossible;
              
            } else {
                const pointsPossible = ag.assignments.find(assignment => assignment.id === obj.assignment_id).points_possible;
                learnerPercentage[obj.assignment_id] = obj.submission.score / pointsPossible;
            }

        }
    });
    return learnerPercentage;
}


// Calculate the sum of the points of all the assignments due till the current date
function calculateTotalPointsPossible(ag){

    const pastDueAssignments = getPastDueAssignments(ag);
    let sumOfPoints = 0;
    for(let assignment of ag.assignments){
        try {
            if (assignment.points_possible <= 0 || isNaN(assignment.points_possible)) {
              throw new Error(`Error: Assignment "${assignment.name}" has 0 points possible or is not a valid number.`);
            }
            if(pastDueAssignments.includes(assignment.id)){
              sumOfPoints += assignment.points_possible;
            }
            else{
              continue;
            }
        }
          catch(error){
            console.error(error.message);
          }
    }
    return sumOfPoints;
}


 function calculateWeightedAverage (totalScore, pointsPossible){

  const weightedAverage = totalScore / pointsPossible;
  return weightedAverage;
}


//USE HELPERS TO RETURN THE RESULTS
// Create a function invoking the other functions to get learners' data and output results
// The provided course information.
 
function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const listOfLearnersId = createListLearnersIds(submissions);
    const totalPointsPossible = calculateTotalPointsPossible(ag);

    const result = [];
    for (let learnerId of listOfLearnersId) {
        const percentages = calculatePercentage(submissions, learnerId, ag);
        const learnerSummary = { id: learnerId, avg: 0 }; 

        let totalScore = calculateTotalPointsLearner(submissions, learnerId, ag);
        let weightedAverage = calculateWeightedAverage(totalScore, totalPointsPossible);
        learnerSummary.avg = weightedAverage;

        // Add assignment percentages to learnerSummary
        for (let assignment in percentages) {
          learnerSummary[assignment] = percentages[assignment];
        }

        result.push(learnerSummary);
    }
    return result;
}

//CALL THE MAIN FUNCTION TO TEST RESULTS
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
  

