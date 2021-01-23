export default letter => {
    const charCode = letter.charCodeAt();
    if (charCode >= 1041 && charCode <= 1055) {
        return {
            background: '#F5D6D9',
            color: '#F38181',
        };
    }
    if (charCode >= 1049 && charCode <= 1063) {
        return {
            background: '#F8ECD5',
            color: '#F1A32F',
        };
    }
    if (charCode >= 1064 && charCode <= 1071) {
        return {
            background: '#DAD5F8',
            color: '#816CFF',
        };
    }
    if (charCode >= 60 && charCode <= 70) {
        return {
            background: '#ad53bc',
            color: '#e3bfe7',
        };
    }

    if (charCode > 70 && charCode <= 80) {
        return {
            background: '#ff7496',
            color: '#fff7ff',
        };
    }

    if (charCode > 80 && charCode <= 90) {
        return {
            background: '#f58282',
            color: '#ffe88d',
        };
    }

    return {
        background: '#a4caf6',
        color: '#2A86FF',
    };
};
