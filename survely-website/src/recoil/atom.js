import { atom } from 'recoil';

export const surveyFormDataState = atom({
    key: 'surveyFormData',
    default: {
        title: "",
        description: "",
        fields: [
            {
                "type": "text",
                "name": "question",
                "title": "Question",
            },
            {
                "type": "text",
                "name": "question",
                "title": "Question"
            },
            {
                "type": "text",
                "name": "question",
                "title": "Question"
            },
        ]
    },
});

export const surveyFormPermissionState = atom({
    key: "surveyFormPermission",
    default: {
        hasRestrictedAccess: false,
        expire: false
    }
});