import {ErrorPage} from "../components/templates/ErrorPage";

export const ErrorNotFoundPage = () => (
    <ErrorPage>
        <p className="page-error-code">404</p>
        <p className="page-error-description">Page Not found</p>
    </ErrorPage>
)
