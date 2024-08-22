import InputField from "./InputField.tsx";

function PersonalInfoForm() {
    return (
        <>
            <h1 className="display-4 mb-5 text-center">Personal Info</h1>
            <form>
                <InputField
                    inputType="text"
                    label="First Name"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="custom-class"
                />
                <InputField
                    inputType="text"
                    label="Last Name"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="custom-class"
                />
                <InputField
                    inputType="email"
                    label="Email"
                    id="email"
                    placeholder="Enter your email"
                    className="custom-class"
                />
                <InputField
                    inputType="tel"
                    label="Phone Number"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="custom-class"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default PersonalInfoForm;