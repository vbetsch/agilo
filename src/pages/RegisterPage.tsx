import AuthPage from "../components/pages/AuthPage";

export default function RegisterPage() {
    return (
        <AuthPage formLabel={"Register"} formFields={[
            {
                type: "text",
                label: "Firstname",
                placeholder: "John",
                required: true
            },
            {
                type: "text",
                label: "Lastname",
                placeholder: "Scott",
                required: true
            },
            {
                type: "lastname",
                label: "Email",
                placeholder: "john.scott@email.com",
                required: true
            },
            {
                type: "password",
                label: "Password",
                placeholder: "****************",
                required: true
            },
            {
                type: "password",
                label: "Confirm Password",
                placeholder: "****************",
                required: true
            }
        ]}/>
    )
}