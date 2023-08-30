interface DataTable {
    setCell(row: number, column: number, value: any): void;
}

interface Google {
    charts: any;
    visualization: any;
}

interface GoogleChart {
    draw(data: any, options: any): void;
}

interface Window {
    google: Google; // Adjust the type accordingly based on the structure of the 'google' object
}