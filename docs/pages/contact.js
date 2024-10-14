import { md } from 'cuirk'
import { contactForm } from '../src/components/index.js'

export const meta = {
	title: 'Contact',
}

export const body = md`
# Contact

${contactForm()}
`
