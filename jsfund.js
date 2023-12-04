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

// Calculate weighted average

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
//>>>>>>>>>>>>>>>>>>>>>>>>>>>TO-DO check if this can be done using the method filter
function getPastDueAssignments(ag) {
  const currentDate = new Date();
  return ag.assignments.filter((assignment) => new Date(assignment.due_at) <= currentDate)
                     .map((assignment) => assignment.id);
}
getPastDueAssignments(AssignmentGroup);

// Calculate total points per learner
function calculateTotalPointsLearner(submissions, ag){
  const pastDueAssignments = getPastDueAssignments(ag);

  const listUniqLearnersId = createListLearnersIds (submissions);
  // Loop through the list of learners ids and access the submissions using each id
  const learnersSummaries = []; 
  
  for(const id of listUniqLearnersId){
     let learnerSummary = {
      learner_id: id,
      totalPoints: 0,
     };
     // Iterate through each learners submission check the submission date and add points to total only if the assignment was due in the past.
     submissions.forEach((obj) =>{
        if(obj.learner_id === id && pastDueAssignments.includes(obj.assignment_id)){
        learnerSummary.totalPoints += obj.submission.score;
        }
      });

      learnersSummaries.push(learnerSummary);
  }
  console.log(learnersSummaries);
}


function calculateTotalPointsPossible(ag, submissions){       
        // const pointsPossible = ag.assignments.reduce((totalPointsPossible, assignmentObj) => {
        //     return (totalPointsPossible + assignmentObj.points_possible);
        // }, 0)
       
        // return (sumOfPoints / pointsPossible);
    //}    
  }

 console.log(calculateTotalPointsLearner(LearnerSubmissions, AssignmentGroup));

// Calculate scores for each assignment(% and late submissions)

// Store results(use an array)


//USE HELPERS TO RETURN THE RESULTS
// Create a function invoking the other functions to get learners' data and output results
// The provided course information.

  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
       
      },
      {
     
      }
    ];
  
    return result;
  }
 
  //CALL THE MAIN FUNCTION TO TEST RESULTS
  // const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  

