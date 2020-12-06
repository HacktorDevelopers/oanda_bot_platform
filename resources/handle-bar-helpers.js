module.exports = {
    customif: (options) => {
        return (options.hash.expected === options.hash.val) ? options.fn(this) : options.inverse(this);
    },
    ifEquals: (option1, option2) => {
        return option1 === option2;
    },
    ifNotEquals: (option1, option2) => {
        return option1 !== option2;
    },
    count: (option1) => {
        return option1.length;
    },
    menuActive: (option1, option2) => {
        if (option1 == option2) {
            return 'active';
        }
        return false;
    },
}