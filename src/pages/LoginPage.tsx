import AuthPage from "../components/pages/AuthPage";

export default function LoginPage() {
    return (
        <AuthPage formLabel={"Login"} formFields={[
            {
                type: "email",
                label: "Email",
                placeholder: "john.scott@email.com",
                required: true
            },
            {
                type: "password",
                label: "Password",
                placeholder: "****************",
                required: true
            }
        ]}/>
    )
}