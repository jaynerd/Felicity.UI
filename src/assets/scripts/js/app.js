export function getTimeSuffix(hours) {
    return hours >= 12 ? 'PM' : 'AM';
}

export function getZero(value) {
    return (parseInt(value, 10) >= 10 ? '' : '0') + value;
}
