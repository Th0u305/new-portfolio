import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type types = {
  name: string;
  email: string;
  message: string;
  reset: () => void;
};

const SendEmail = async ({ name, email, message, reset }: types) => {
  
  const date = new Date();

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const pubKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    return toast.error("Please enter valid email address");
  }

  if (message.length <= 0 || message.length < 5) {
    return toast.error("Please write more than 5 words");
  }

  try {
    const emailParams = {
      name: name,
      email: email,
      time: date,
      message: message,
    };

    const res = await emailjs.send( serviceID || "", templateID || "", emailParams, pubKey );

    if (res.status === 200) {
      toast.success("Message sent successfully!");
      reset();
    }
  } catch (error) {
    toast.error(`${error}`);
  }
};

export default SendEmail;
