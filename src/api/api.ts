import apiRequest from './apiRequest';

export const emailRegisterRequestAPI = (email: string) =>
  apiRequest<void>({
    method: 'post',
    url: 'identity-access/email-registers',
    body: { email },
  });

export const inquiryAPI = (body: {
  email: string;
  customerName: string;
  companyName: string;
  phoneNumber: string;
  companyScale: string;
  content: string;
}) =>
  apiRequest({
    method: 'post',
    url: 'notification/notifications/customer-forms',
    body,
  });
