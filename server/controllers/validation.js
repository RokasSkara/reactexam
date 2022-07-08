/* Validates login/register data to match required pattern */

import Ajv from 'ajv'

const ajv = new Ajv()

const RegSchema = {
    type: "object",
    properties: {
        email: { type: "string", pattern: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}$' },
        password: { type: "string", pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$' }
    },
    required: ["email", "password"],
}

const LogSchema = {
    type: "object",
    properties: {
        email: { type: "string", pattern: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}$' },
        password: { type: "string", pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$' },
    },
    required: ["email", "password"],
}

const validateLog = ajv.compile(LogSchema)
const validate = ajv.compile(RegSchema)

let RegValidation = (data) => {
    const valid = validate(data)
    return valid
}

let LogValidation = (data) => {
    const valid = validateLog(data)
    return valid
}

export default RegValidation
export { LogValidation }