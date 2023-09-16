let courseName = "100 days code" ;
let coursePrise = 100
let courseGoals = ["web dev", "programieren", "ux"];


let course = {
  name : "100 days code",
  price : 100,
  goals : ["web dev", "programieren", "ux"]
};

function getElement(ary,indx){
  return ary[indx];
}

alert(getElement(courseGoals,2));