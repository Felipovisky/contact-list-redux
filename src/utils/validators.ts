export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    return phoneRegex.test(phone);
};

export const validateName = (name: string): boolean => {
    return name.length >= 3 && name.length <= 50;
};

export const validateContact = (name: string, email: string, phone: string): boolean => {
    return validateName(name) && validateEmail(email) && validatePhone(phone);
};