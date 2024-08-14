export function convertValueToEnum<T>(str: unknown, enumType: T) {
    return Object.values(enumType).includes(str) ? str : undefined
}
