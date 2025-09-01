import { title } from "process";

export default {
  language: {
    chinese: "Chinese (simplified)",
    english: "English",
  },
  header: {
    student: "Students",
    faculty: "Faculty & Staff",
    families: "Families",
    alumni: "Alumni",
    search: "Search",
    login: "Log In",
    logout: "Log Out",
    backstage: "Backstage",
  },
  home: {
  slogan: "Beyond east or west, for all humanity",
  commitment1: "We are committed to cultivating talents",
  commitment2: "who possess a scientific spirit, humanistic literacy, and a strong physique.",
  moreAbout: "More about UCS IB",
  },
  primaryNav: {
    news: "News",
    academics: "Academics",
    campusLife: "Campus Life",
    college: "College application",
    resource:"Resource",
    admission: "Admission",
    about: "About",
  },
  foreground:{
    academics:{
      course:{
        preIb:'Pre-IB Courses',
        ibdp:'IBDP Courses',
        ibdpCore:'IBDP Core Topics'
      }
    }
  },
  login: {
    title: "Welcome to the school website",
    label: "Sign in",
    reIdentity:"Select the login identity again"
  },
  register: {
    title: "Back to sign in",
    firstLabel: "No account?",
    secondLabel: "Create an account",
  },
  idSelection:{
    student:"student",
    teacher:"teacher",
    parent:"parent",
    admin:"admin",
    title:"Select an identity to log in"
  },
  tip: {
    userName: "Please enter your username",
    account: "Please enter your account",
    phone: "Please enter your phone number",
    password: "Please enter your password",
    confirmPassword: "Please confirm your password",
    schoolName: "Please enter your school name",
    forgetPassword: "Forget Password",
    name: "Please enter your name",
    authCode: "Please enter the authentication code sent to your phone",
    signInNow: "Sign In Now",
    agreement: "Have agreed and read the User Agreement",
    sendCode: "Send Code",
    reSendCode: "reSend Code",
    correctPhone: "Please enter the correct phone number",
    correctCode: "Please enter the correct authentication code",
    passwordNotSame: "Passwords do not match",
    passwordNotEnough:
      "Password must be at least 6 characters long and at most 16 characters long",
    throughAuthCode:
      "Please make sure the password has passed the verification",
    agreementNotChecked: "Please agree to the User Agreement",
    newPassword: "Please enter a new password",
    confirmNewPassword: "Please confirm the new password",
  },
  buttonText: {
    signIn: "Sign In",
    signUp: "Sign Up",
    resetPassword: "Reset Password",
    news:"News",
    academics:"Academics",
    research:"Research",
    resource:"Resource",
    store:"College application",
    college:"College application",
    campusLife:"Campus Life",
    admission:"Admission",
    about:"About",
    search:"Search",
  },
  backstage: {
    title: "Backstage",
    User: {
      title:"User",
      description:"Used to manage user information",
      table:{
        user_name:"username",
        real_name:"realName",
        identity:"identity",
        phone:"phone",
      }
    },
    Notice:{
      title:"Notice",
      description:"More cultural promotion and real-time push of various types of information",
      table:{
        title:"Title",
        subtitle:"Subtitle",
        content:"Content",
        publisher:"Publisher",
        status:"Status",
        publishTime:"Publish Time",
        createTime:"Create Time",
        publishLocation:"Publish Location"
      },
      popup:{
        cover:"Upload Cover",
        uploadTip:"The common formats for uploading covers are JPG and PNG, and some platforms support GIF. The size varies by scene. The resolution (72-300dpi) and file size need to be adjusted according to the platform requirements.",
        required:{
          title:"Title is required",
          subtitle:"Subtitle is required",
          publish_location:"Publish location is required",
          cover:"Cover is required",
        },
        tip:{
          publish:{
            title:'Display Position',
            placeholder:'Please select the display position',
            form:{
              position:'Position'
            }
          },
          publish_location: {
            title: "Publish Tip",
            description: "Do you really want to publish this announcement?"
          },
          delete: {
            title:"Delete Tip",
            description:"Do you really want to remove this announcement?"
          },
          revoke: {
            title: "Revoke Tip",
            description: "Do you really want to revoke this announcement?"
          },
          success:'Operation Success',
          warning:{
            limitOne:'Please select one piece of data for operation',
            onlyOne:'Only one piece of data can be operated on',
            notPositionIndex:"The display code is not filled in"
          }
        }
      }
    }
  },
  message:{
    success:"Successful operation",
    error:"Error",
  },
  messageBox:{
    title:"Prompt Message",
    confirm_prefix:"Are you sure you want to set",
    confirm_center:"as"
  },
  operator:{
    add:'Create',
    publish:'Publish',
    edit:'Edit',
    delete:'Delete',
    save:'Save',
    saveAndCreate:'Save And Create',
    submit:"Submit",
    cancel:"Cancel",
    confirm:'Confirm',
    revoke:'Revoke'
  },
  component:{
    table:{
      empty:"No Data"
    }
  },
  about: {
    teamTitle: "Our Team Members",
    member1: { name: "Nicole Zhao", title: "Head of the UI group", desc: "Expert in design." },
    member2: { name: "Miles Cai", title: "Head of the website team", desc: "" },
    member3: { name: "Matthew Dai", title: "Team Manager", desc: "In charge of managing the progress of the team" }
  }
};

