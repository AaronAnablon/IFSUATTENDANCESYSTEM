require("dotenv").config();

const mailer = require("nodemailer");
const { google } = require("googleapis");
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_OAUTH_CLIENT_ID,
  process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  process.env.GOOGLE_OAUTH_REDIRECT_URI
);
oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
});

const {
  Welcome,
  KickStudent,
  DeleteCourse,
  WithdrawCourse,
  CreateAttendance,
} = require("./mailTemplate");

//global mail type naming
const { MAIL_TEMPLATE_TYPE } = require("../globalData");

oAuth2Client.generateAuthUrl({
  access_type: "offline",
});

const getEmailData = (to, firstName, template, payload) => {
  let data = null;

  switch (template) {
    case MAIL_TEMPLATE_TYPE.Welcome:
      data = {
        from: "IFSU ATTENDANCE <ifsu@gmail.com>",
        to,
        subject: `Welcome To IFSU ATTENDANCE!`,
        html: Welcome(firstName),
      };
      break;
    case MAIL_TEMPLATE_TYPE.KickStudent:
      data = {
        from: "IFSU ATTENDANCE <ifsu@gmail.com>",
        to,
        subject: `Department ID: ${payload.course.shortID} - You had been kicked out`,
        html: KickStudent(firstName, payload),
      };
      break;
    case MAIL_TEMPLATE_TYPE.DeleteCourse:
      data = {
        from: "IFSU ATTENDANCE <ifsu@gmail.com>",
        to,
        subject: `Department ID: ${payload.course.shortID} - A Department was deleted by Department admin`,
        html: DeleteCourse(firstName, payload),
      };
      break;
    case MAIL_TEMPLATE_TYPE.WithdrawCourse:
      data = {
        from: "IFSU ATTENDANCE <ifsu@gmail.com>",
        to,
        subject: `Department ID: ${payload.course.shortID} - A student/employee had withdrawn from your Department`,
        html: WithdrawCourse(firstName, payload),
      };
      break;
      case MAIL_TEMPLATE_TYPE.CreateAttendance:
        data = {
          from: "IFSU ATTENDANCE <ifsu@gmail.com>",
          to,
          subject: `Department ID: ${payload.course.shortID} - New Attendance`,
          html: CreateAttendance(firstName, payload),
        };
        break;
    default:
      data;
  }
  return data;
};

const sendEmail = async (to, name, type, payload) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const smtpTransport = mailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        type: "OAuth2",
        user: process.env.GOOGLE_OAUTH_USERNAME,
        clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mail = getEmailData(to, name, type, payload);
    smtpTransport.sendMail(mail, function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent to: ${to} successfully: ` + response);
      }
      smtpTransport.close();
    });
  } catch (e) {}
};

module.exports = { sendEmail };
