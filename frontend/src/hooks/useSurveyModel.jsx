import {useEffect, useState} from "react";
import {Model} from "survey-core";
import {useRecoilValue} from "recoil";

import json from "../pages/survey/json.js";
import { surveyFormDataState } from "../recoil/atom.js";

function useSurveyModel() {
    const [jsonState, setJsonState] = useState(json);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const survey = new Model(jsonState);
    const surveyFormData = useRecoilValue(surveyFormDataState);

    useEffect(() => {
        // noinspection JSCheckFunctionSignatures
        setJsonState(prevState => ({
            ...prevState,
            pages: [
                {
                    ...prevState.pages[0],
                    name: surveyFormData.title,
                    title: surveyFormData.title,
                    description: surveyFormData.description,
                    elements: surveyFormData.fields
                }
            ]
        }));
    }, [survey, surveyFormData]);

    survey.mode = "display";

    return survey;
}

export default useSurveyModel;