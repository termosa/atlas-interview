// https://www.npmjs.com/package/plop

function withModifier(regExp, errorMessage) {
    const validator = (input) => {
        const result = this(input)
        if (result === false || typeof result === 'string') return result
        return regExp.test(input) || errorMessage
    }
    return Object.assign(validator, { with: withModifier })
}

const testName = (input) => /^([a-z]|([a-z]+\-?)+[a-z])$/.test(input) || 'kebab-case is required'
testName.with = withModifier

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = (plop) => {
    plop.setGenerator('component', {
        description: 'React component module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'name of the component module',
                validate: testName,
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/lib/{{name}}',
                base: 'src/templates/component',
                templateFiles: 'src/templates/component/*.hbs',
            },
        ],
    })

    plop.setGenerator('hook', {
        description: 'React hook module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'name of the hook module',
                validate: testName.with(/^use-/, 'should start with "use-"'),
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/lib/{{name}}',
                base: 'src/templates/hook',
                templateFiles: 'src/templates/hook/*.hbs',
            },
        ],
    })

    plop.setGenerator('styles', {
        description: 'Styled component module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'name of the styles module',
                validate: testName.with(/-styles$/, 'should end with "-styles"'),
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/lib/{{name}}',
                base: 'src/templates/styles',
                templateFiles: 'src/templates/styles/*.hbs',
            },
        ],
    })

    plop.setGenerator('function', {
        description: 'Simply, the function',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'name of the function module',
                validate: testName,
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/lib/{{name}}',
                base: 'src/templates/function',
                templateFiles: 'src/templates/function/*.hbs',
            },
        ],
    })

    plop.setGenerator('variable', {
        description: 'Simpler, then the function',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'name of the variable module',
                validate: testName,
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/lib/{{name}}',
                base: 'src/templates/variable',
                templateFiles: 'src/templates/variable/*.hbs',
            },
        ],
    })
}
