import { atom } from 'recoil';

export const surveyFormDataState = atom({
    key: 'surveyFormData',
    default: {
        title: "",
        description: "",
        fields: [
            {
                "type": "text",
                "name": "Simple Question",
                "title": "Simple Question",
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

export const surveyEmailListState = atom({
    key: "surveyEmailList",
    default: []
});

export const surveyExpirationState = atom({
    key: "surveyExpiration",
    default: {
        startDate: new Date(),
        endDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days in milliseconds
    }
});
