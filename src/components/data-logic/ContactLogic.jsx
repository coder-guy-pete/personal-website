import { useState } from "react";

export function ContactLogic({ children }) {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ name: false, email: false, message: false });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        if (name === "email") {
            const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
            setErrors({ ...errors, email: !isValidEmail && value !== "" });
        } else {
            setErrors({ ...errors, [name]: !value });
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = !value; // Default error: field is empty
    
        if (name === "email" && value) {
          // Email validation regex
            const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
            error = !isValidEmail;
        }
    
        setErrors({ ...errors, [name]: error });
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasErrors = false;
        const newErrors = { ...errors };

        if (!formData.name) {
            newErrors.name = true;
            hasErrors = true;
        }
        if (!formData.email) {
            newErrors.email = true;
            hasErrors = true;
        }
        if (!formData.message) {
            newErrors.message = true;
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            return;
        }

        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", message: "" });
        };

        return children({ formData, errors, handleChange, handleBlur, handleSubmit });
    }