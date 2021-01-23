export interface BranchDetail {
    ifsc: string,
    branch: string,
    address: string,
    city: string,
    district: string,
    state: string,
    bank_id: number,
}

export interface BranchSearch {
    results: BranchDetail[],
    count: number,
    next: string,
    previous: string,
    tableFormatData?: object
}
