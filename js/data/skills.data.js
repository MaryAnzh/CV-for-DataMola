import { webSVG } from "./svg/web-svg.js"
import { progSVG } from "./svg/prog-svg.js"
import { toolsSVG } from "./svg/tools-svg.js"

export const skills = [
    {
        title: 'WEB',
        icon: webSVG,
        set: [
            'html',
            'css',
            'scss'
        ],
    },
    {
        title: 'LANGUAGES / FRAMEWORKS',
        icon: progSVG,
        set: ['javascript', 'typescript', 'Angular']
    },
    {
        title: 'TOOLS',
        icon: toolsSVG,
        set: ['git', 'webpack', 'Adobe Illustrator'],
    }
]