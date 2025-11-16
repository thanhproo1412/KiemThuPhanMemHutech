export default function GetMonthName(date) {

    const getDate = new Date(date)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthIndex = getDate.getMonth();
    return monthNames[monthIndex];

}