var applicantName = prompt(" Enter name of the Applicant : ");

var martialstatus = prompt(" Enter the Martial status : ");

var coupleoffer = martialstatus == 'married' ? " Mr." + applicantName + " is Eligible for Couple's Offer " :
" Sorry Not Eligible for this Offer. " ;

console.log(coupleoffer);