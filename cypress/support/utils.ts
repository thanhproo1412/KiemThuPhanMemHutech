// cypress/support/utils.ts
export default {
    generateData(base: string = 'user_') {
        const timestamp = Date.now();
        return `${base}${timestamp}`;
    },

    formatMonth(input: string | number): string {
        if (typeof input === 'number') return input.toString();

        const num = parseInt(input, 10);
        if (!isNaN(num) && num >= 1 && num <= 12) return num.toString();

        // Map tên tháng sang số
        const monthMap: Record<string, string> = {
            january: "1",
            february: "2",
            march: "3",
            april: "4",
            may: "5",
            june: "6",
            july: "7",
            august: "8",
            september: "9",
            october: "10",
            november: "11",
            december: "12"
        };

        const monthValue = monthMap[input.toLowerCase()];
        if (!monthValue) throw new Error(`Invalid month input: ${input}`);
        return monthValue;
    }
};
