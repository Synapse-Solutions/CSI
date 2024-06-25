import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY || '',
  },
  region: 'us-east-1', // Replace with your AWS region
});

export const uploadToS3 = async (file: any, file_name: any) => {
  console.log("s3", file);
 
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
    Key: `public/resumes/${file_name}`, // Set your desired path
    Body: file,
  };

  try {
    const command = new PutObjectCommand(params);
    const response = await s3.send(command);

    console.log("File is uploaded successfully.");
    return `https://central-school-international-resumes.s3.amazonaws.com/public/resumes/${file_name}`;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};