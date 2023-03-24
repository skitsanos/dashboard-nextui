export const DATE_FORMAT = 'YYYY-MM-DD';

export const validateEmail = (emailProvided: string) => emailProvided.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

export const validatePassword = (passwordProvided: string) => passwordProvided.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i);