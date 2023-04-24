import {ErrorPage} from "../components/templates/ErrorPage";

export default function ErrorNotFoundPage() {
    return (
        <ErrorPage>
            <p className="page-error-code">404</p>
            <p className="page-error-description">Page Not found</p>
        </ErrorPage>
    )
}