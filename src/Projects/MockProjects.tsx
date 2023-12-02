import { Project } from "./Project";

export const MOCK_PROJECTS = [
    new Project({
        id: 1,
        name: 'Johnson-kutch',
        description:
            'fully-configurable intermediate framework.',
        imageUrl: '../logo.svg',
        contractTypeId: 3,
        contractSingedOn: '2013-08-04T22:39:41.473Z',
        budget: 523623,
        isActive: false,
    }),
    new Project({
        id: 2,
        name: 'Wisozk Group',
        description:
        'fully-configurable intermediate framework.',
        imageUrl: '../logo.svg',
        contractTypeId: 3,
        contractSingedOn: '2013-08-04T22:39:41.473Z',
        budget: 523623,
        isActive: false,
    }),
];