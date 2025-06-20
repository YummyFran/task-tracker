export function timeAgo(timestamp) {
    const now = new Date()
    const past = new Date(timestamp)
    const secondsAgo = Math.floor((now - past) / 1000)

    if (secondsAgo < 60) return `${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`

    const minutesAgo = Math.floor(secondsAgo / 60)
    if (minutesAgo < 60) return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`

    const hoursAgo = Math.floor(minutesAgo / 60)
    if (hoursAgo < 24) return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`

    const daysAgo = Math.floor(hoursAgo / 24)
    if (daysAgo < 30) return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`

    const monthsAgo = Math.floor(daysAgo / 30)
    if (monthsAgo < 12) return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`

    const yearsAgo = Math.floor(monthsAgo / 12)
    return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`
}

export const generateMemberLayout = (members = []) => {
    const count = members.length

    const getFirstName = (index) => members[index].name.split(" ")[0]

    if (count === 0) return ""
    if (count === 1) return getFirstName(0)
    if (count === 2) return `${getFirstName(0)} and ${getFirstName(1)}`

    return `${getFirstName(0)}, and ${count - 1} others`
}