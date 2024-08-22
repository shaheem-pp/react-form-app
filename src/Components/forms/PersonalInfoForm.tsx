import React, {useState} from "react";
import InputField from "./InputField.tsx";

function PersonalInfoForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <>
            <h1 className="display-4 mb-5 text-center">Personal Info</h1>
            <form onSubmit={handleSubmit}>
                <InputField
                    inputType="text"
                    label="First Name"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="custom-class"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <InputField
                    inputType="text"
                    label="Last Name"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="custom-class"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <InputField
                    inputType="email"
                    label="Email"
                    id="email"
                    placeholder="Enter your email"
                    className="custom-class"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputField
                    inputType="tel"
                    label="Phone Number"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="custom-class"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default PersonalInfoForm;
