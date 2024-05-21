// component handling emailJS logic on form submit from contact page
import emailjs from '@emailjs/browser';

// fill in once they register with the email service
const serviceId = "service_fn3zu57";
const templateId = "template_d0sikel";   
const publicKey = "3k2mEyjS8Of0O5omb";

console.log(serviceId, templateId, publicKey);

const sendEmail = async (name, email, message) => {
    try {
        const res = await emailjs.send(
            serviceId,
            templateId,
            {
                from_name: name,
                from_email: email,
                message: message,
            },
            publicKey
        );

        console.log("email sent successfully", res);
        return;
    } catch (error) {
        console.log("error sending email", error);
        return;
    }
}

export default sendEmail;