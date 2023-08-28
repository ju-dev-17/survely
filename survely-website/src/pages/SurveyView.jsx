import { useParams } from "react-router-dom";

export default function SurveyView() {
    const { surveyId } = useParams();

    console.log(surveyId ? surveyId : "No survey id is passed");

    return (
        <></>
    );
}
