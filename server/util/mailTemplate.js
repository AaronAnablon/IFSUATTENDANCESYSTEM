const {OfficialURL}=require("../globalData");

module.exports.Welcome = (firstName) => {
  return `
        <p>Hi ${firstName}, </p>
        <p>Thank you for signing up IFSU ATTENDANCE SYSTEM! Do send me an email to:
        <a href="mailto:ifsu@gmail.com">ifsu@gmail.com</a></p>
        if you have any inquiry, suggestion or found bug.<p>Thank you again and have a nice day ahead!</p>
        <i>Note: This mail is auto-generated for every signup</i>
        <p>
        Thanks, <br/>
        IFSU ATTENDANCE
        </p>
    `;
};


module.exports.KickStudent = (firstName, payload) => {
  return `
        <p>Hi ${firstName}, </p>
        <p>
          Department admin had kicked you out from the course below. 
        </p>
        
        <p>---------------------Course Detail---------------------</p>
        <p>Department ID: <strong>${payload.course.shortID}</strong> </p>
        <p>Department Owner: <strong>${payload.owner.firstName} ${payload.owner.lastName}</strong></p>
        <p>Department Code: <strong>${payload.course.code}</strong> </p>
        <p>Department Name: <strong>${payload.course.name}</strong> </p>
        <p>Department Session: <strong>${payload.course.session}</strong> </p>
        
        Click <a href=${OfficialURL}>here</a> to sign in
        <p>
        Thanks, <br/>
        IFSU ATTENDANCE SYSTEM
        </p>
    `;
};

module.exports.DeleteCourse = (firstName, payload) => {
  return `
        <p>Hi ${firstName}, </p>
        <p>
          Department owner had deleted the department below, hence disappeared in your enrolled department list. Sayonara.
        </p>
      
        <p>---------------------Department Detail---------------------</p>
        <p>Department ID: <strong>${payload.course.shortID}</strong> </p>
        <p>Department Owner: <strong>${payload.owner.firstName} ${payload.owner.lastName}</strong></p>
        <p>Department Code: <strong>${payload.course.code}</strong> </p>
        <p>Department Name: <strong>${payload.course.name}</strong> </p>
        <p>Department Session: <strong>${payload.course.session}</strong> </p>
      
        Click <a href=${OfficialURL}>here</a> to sign in
        <p>
        Thanks, <br/>
        IFSU ATTENDANCE
        </p>
    `;
};

module.exports.WithdrawCourse = (firstName, payload) => {
  return `
    <p>Hi ${firstName}, </p>

    <p>
      A student had withdrawn from your Department registration below. 
    </p>
    
    <p>---------------------Student Detail---------------------</p>
    <p>First Name: <strong>${payload.student.firstName}</strong></p>
    <p>Last Name: <strong>${payload.student.lastName}</strong> </p>
    <p>ID No: <strong>${payload.student.cardID}</strong> </p>
    <p>Email: <strong>${payload.student.email}</strong> </p>
    <br />
    <p>---------------------Enrolled Course Detail---------------------</p>
    <p>Department ID: <strong>${payload.course.shortID}</strong> </p>
    <p>Department Owner: <strong>You</strong></p>
    <p>Department Code: <strong>${payload.course.code}</strong> </p>
    <p>Department Name: <strong>${payload.course.name}</strong> </p>
    <p>Department Session: <strong>${payload.course.session}</strong> </p>

    Click <a href=${OfficialURL}>here</a> to sign in
    <p>
    Thanks, <br/>
    IFSU ATTENDANCE SYSTEM
    </p>
      `;
};

module.exports.CreateAttendance = (firstName, payload) => {
  return `
        <p>Hi ${firstName}, </p>
        <p>
          You have a new attendance. 
        </p>
        
        <p>---------------------Department Detail---------------------</p>
        <p>Department ID: <strong>${payload.course.shortID}</strong> </p>
        <p>Department Owner: <strong>${payload.owner.firstName} ${payload.owner.lastName}</strong></p>
        <p>Department Code: <strong>${payload.course.code}</strong> </p>
        <p>Department Name: <strong>${payload.course.name}</strong> </p>
        <p>Department Session: <strong>${payload.course.session}</strong> </p>
        

        <h3>Attendance Room ID: ${payload.course.attendanceID}</h3>

        Enter room here: <a href=${payload.course.attendanceURL}>here</a>
        Click <a href=${OfficialURL}>here</a> to sign in
        <p>
        Thanks, <br/>
        IFSU ATTENDANCE SYSTEM
        </p>
    `;
};
