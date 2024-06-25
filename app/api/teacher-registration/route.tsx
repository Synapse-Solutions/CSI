import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";
import { uploadToS3 } from "@/app/service/upload-resume";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);




export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const requestData = await req.json();

    console.log("requestData====", requestData);

    const {
      teacher_first_name,
      teacher_last_name,
      father_first_name,
      father_last_name,
      date_of_birth,
      languages_known,
      first_language,
      reading_proficiency,
      writing_proficiency,
      speaking_proficiency,
      listening_proficiency,
      education,
    experience,
      interests,
      resume_url,
      resume_file_name,
    } = requestData;

  
      
    // const educationDetails = [];
    // let i = 0;
    // while (requestData[`education.${i}.qualification`] !== undefined) {
    //   const education = {
    //     qualification: requestData[`education.${i}.qualification`] ,
    //     institute: requestData[`education.${i}.institute`],
    //     board: requestData[`education.${i}.board`],
    //     marks: requestData[`education.${i}.marks`],
    //   };
    //   educationDetails.push(education);
    //   i++;
    // }

    // const experienceDetails = [];
    // let j = 0;
    // while (requestData[`experience.${j}.organization`] !== undefined) {
    //   const experience = {
    //     organization: requestData[`experience.${j}.organization`] ,
    //     position: requestData[`experience.${j}.position`],
    //     tenure: requestData[`experience.${j}.tenure`],
    //   };
    //   experienceDetails.push(experience);
    //   j++;
    // }

    // const resumeUrl = await uploadToS3(resume.data, resume.name);

    const resumeResponse = await fetch(resume_url);
    const resumeData = await resumeResponse.arrayBuffer();
    const resumeBase64 = Buffer.from(resumeData).toString('base64');

    const msg = {
        to: process.env.MAIL_TO!,
        from: process.env.MAIL_FROM!,
        subject: "New Teacher Registration Form Submission",
        html: `
          <p><strong>Teacher's Name:</strong> ${teacher_first_name} ${teacher_last_name}</p>
          <p><strong>Father's Name:</strong> ${father_first_name} ${father_last_name}</p>
          <p><strong>Date of Birth:</strong> ${date_of_birth}</p>
          <p><strong>Languages Known:</strong> ${languages_known}</p>
          <p><strong>First Language:</strong> ${first_language}</p>
          <p><strong>English Proficiency:</strong></p>
          <ul>
            <li>Reading: ${reading_proficiency}</li>
            <li>Writing: ${writing_proficiency}</li>
            <li>Speaking: ${speaking_proficiency}</li>
            <li>Listening: ${listening_proficiency}</li>
          </ul>
          <p><strong>Interests/Talents:</strong> ${interests}</p>
          <p><strong>Education Details:</strong></p>
          <ul>
            ${education.map((edu: any) => `
              <li>
                <strong>Qualification:</strong> ${edu.qualification}<br/>
                <strong>Institute:</strong> ${edu.institute}<br/>
                <strong>Board:</strong> ${edu.board}<br/>
                <strong>Marks:</strong> ${edu.marks}
              </li>`).join("")}
          </ul>
          <p><strong>Experience Details:</strong></p>
          <ul>
            ${experience.map((exp: any) => `
              <li>
                <strong>Organization:</strong> ${exp.organization}<br/>
                <strong>Position:</strong> ${exp.position}<br/>
                <strong>Tenure:</strong> ${exp.tenure}
              </li>`).join("")}
          </ul>
        `,
        attachments: [
            {
              content: resumeBase64,
              filename: resume_file_name,
              type: "application/pdf",
              disposition: "attachment"
            }
          ]
      };
 
    await sgMail.send(msg);


    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error.response.body);
    return NextResponse.json({ message: "Failed to send email" });
  }
}
