import {Model} from "survey-core";
import json from "../pages/survey/json.js";

function useSurveyModel() {
    const survey = new Model(json);
    // eslint-disable-next-line no-unused-vars
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });

    return survey;
}

export default useSurveyModel;