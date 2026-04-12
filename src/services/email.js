import api from './api';

export const sendEmail = async (data) => {
  try {
    const response = await api.post('/email/send', {
      ...data,
      service: process.env.REACT_APP_EMAIL_SERVICE,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to send email');
  }
};

export const sendContactForm = async (formData) => {
  // Using FormSubmit service (formsubmit.co)
  const form = new FormData();
  Object.keys(formData).forEach((key) => {
    form.append(key, formData[key]);
  });

  try {
    const response = await fetch('https://formsubmit.co/your-email@example.com', {
      method: 'POST',
      body: form,
    });
    return response.ok;
  } catch (error) {
    throw new Error('Failed to submit form');
  }
};
