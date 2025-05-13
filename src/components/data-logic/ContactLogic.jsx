import { useState } from "react";
import { toaster } from "../ui/toaster"

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

    const handleSubmit = async (e) => {
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

        try {
            const scriptURL = "https://script.google.com/macros/s/AKfycbzpPyxf-gloVz2CHBj3eSaklpgEWwFN6LnxnJureZ46-PuuRDOQztZFjqvNOjIwCXmXsg/exec";
            const formPayload = new FormData();

            formPayload.append("name", formData.name);
            formPayload.append("email", formData.email);
            formPayload.append("message", formData.message);

            const response = await fetch(scriptURL, {
                method: "POST",
                body: formPayload,
            });
            
            if (response.ok) {
                toaster.create({
                    title: "Contact form successfully submitted",
                    type: "success",
                    duration: 4000,
                })
                setFormData({ name: "", email: "", message: "" });
            } else {
                console.error("Failed to submit form:", response.statusText);
                toaster.create({
                    title: "Contact form submission failed",
                    type: "error",
                    duration: 4000,
                })
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    return children({ formData, errors, handleChange, handleBlur, handleSubmit });
}