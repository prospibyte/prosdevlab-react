module.exports = [{"name":"HelloWorld","description":"","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types'; // ES6\n\nfunction HelloWorld({message}) {\n    return <div> Hello {message}!</div>\n}\n\nHelloWorld.propTypes = {\n    /** Message to display */\n    message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: 'World'\n};\n\nexport default HelloWorld;","examples":[{"name":"ExampleHelloWorld","description":"Custom message describing component","code":"import React from 'react';\nimport HelloWorld from 'prosdevlab-react/HelloWorld/HelloWorld';\n\n/** Custom message describing component */\nexport default function ExampleHellowWorld() {\n    return <HelloWorld message=\"World\"/>\n}"}]}]