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
  
  // The provided learner submission data.
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

function calculateWeightedAverage(ag, submissions){
    //create an array of ids to be used to iterate through submissions
    let listOfLearnersId = [];
    submissions.forEach((submission) =>{
        listOfLearnersId.push(submission.learner_id);
    })
    //remove duplicate ids
    const listUniqLearnersId = Array.from(new Set(listOfLearnersId));
  

    //loop through the list of learners id and access the submissions using each id
    const sumPointsObj = {}; 
    
    for(id of listUniqLearnersId){
        submissions.reduce((totalPoints, obj) =>{
            
            if(obj.learner_id === id){
                
                sumPointsObj.totalPoints +=  obj.submission.score ;
                sumPointsObj.learner_id = id;
            }
            
            return totalPoints;
        }, 0)
        
        const pointsPossible = ag.assignments.reduce((totalPointsPossible, assignmentObj) => {
            // console.log("totalpointspossible: " + totalPointsPossible + " asspointposs: " + assignmentObj.points_possible);
            return (totalPointsPossible + assignmentObj.points_possible);
        }, 0)

        // return (sumOfPoints / pointsPossible);
    }
    console.log(sumPointsObj);
}

 console.log(calculateWeightedAverage(AssignmentGroup, LearnerSubmissions));
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
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  

