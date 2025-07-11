<a name="unreleased"></a>
## [Unreleased]


<a name="2.0.0"></a>
## 2.0.0
### Bug Fixes
- update tests to match refactored code and error messages
- add validation for negative exponent with zero base
- add input validation to add function

### Chores
- update CHANGELOG.md
- fix github actions
- update github actions condition
- update CHANGELOG.md
- update CHANGELOG.md
- update CHANGELOG.md
- update CHANGELOG.md
- update CHANGELOG.md
- update CHANGELOG.md
- add github PAT to secrets
- update actions to first release test
- update github action for changelog feature
- update package.json with new scripts and metadata
- add changelog action
- update git changelog configurations
- add git-chglog configuration

### Code Refactoring
- improve code organization and error handling
- improve code structure and organization

### Code Style
- improve code formatting and consistency
- improve code formatting and consistency

### Documentation
- update README with comprehensive API documentation
- add comprehensive README documentation

### Features
- improve reverse function with Unicode support
- add power function for mathematical operations
- add options parameter to add function
- add formatGreeting utility function
- **math:** add multiply function for mathematical operations
- **string:** add string manipulation utilities

### Performance Improvements
- optimize wordCount function for better performance
- optimize formatGreeting with trim() for better performance

### Tests
- add comprehensive tests for string utilities
- add comprehensive tests for math functions
- add tests for formatGreeting function

### BREAKING CHANGE

The reverse function now properly handles Unicode characters.
Old behavior: split('') could break Unicode characters
New behavior: uses Array.from() for proper Unicode support

The add function now accepts an optional options parameter.
Old usage: add(1, 2)
New usage: add(1, 2, { validate: true })


<a name="0.0.4"></a>
## 0.0.4

<a name="0.0.3"></a>
## 0.0.3

<a name="0.0.2"></a>
## 0.0.2

[Unreleased]: https://github.com/ku9nov/npm-test/compare/2.0.0...HEAD
[2.0.0]: https://github.com/ku9nov/npm-test/compare/0.0.4...2.0.0
[0.0.4]: https://github.com/ku9nov/npm-test/compare/0.0.3...0.0.4
[0.0.3]: https://github.com/ku9nov/npm-test/compare/0.0.2...0.0.3
