export interface FormValidatorRuleProperties {
    text: string
    condition: boolean
}

const specialsCharacters: string[] = ['?', '&', '$', '@', '~', '-', '_']

const FormValidatorRule = ({text, condition}: FormValidatorRuleProperties) => (
    <div className="form-validator-rule">
        <img className="validator-rule-img" src={condition ?  "/svg/check.svg" : "/svg/cross.svg"} alt="status"/>
        <p className="validator-rule-txt">{text}</p>
    </div>
)

export interface FormValidatorProperties {
    fieldName: string
    fieldValue: string
    limitChar?: number
    containsLowerCase?: boolean
    containsUpperCase?: boolean
    containsSpecialChar?: boolean
}

function containsLowercase(value: string): boolean {
    for (let i = 0; i < value.length; i++) {
        const char = value[i]
        if (char == char.toLowerCase()) {
            return true
        }
    }
    return false
}

function containsUppercase(value: string): boolean {
    for (let i = 0; i < value.length; i++) {
        const char = value[i]
        if (char == char.toUpperCase()) {
            return true
        }
    }
    return false
}

export const FormValidator = ({fieldName, fieldValue, limitChar, containsSpecialChar, containsLowerCase, containsUpperCase}: FormValidatorProperties) => (
    <div className="form-validator">
        <p>Your {fieldName} must contain at least :</p>
        {limitChar && <FormValidatorRule condition={fieldValue.length >= limitChar} text={limitChar + " characters"}/>}
        {containsLowerCase && <FormValidatorRule condition={fieldValue !== "" && containsLowercase(fieldValue)} text={"1 lower case"}/>}
        {containsUpperCase && <FormValidatorRule condition={fieldValue !== "" && containsUppercase(fieldValue)} text={"1 upper case"}/>}
        {containsSpecialChar && <FormValidatorRule condition={specialsCharacters.some((char) => fieldValue.includes(char))} text={`1 special character (${specialsCharacters.toString()})`}/>}
    </div>
)