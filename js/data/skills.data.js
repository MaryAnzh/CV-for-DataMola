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
        set: ['JavaScript', 'TypeScript', 'Angular']
    },
    {
        title: 'TOOLS',
        icon: toolsSVG,
        set: ['git', 'WebPack', 'Adobe Illustrator'],
    }
]