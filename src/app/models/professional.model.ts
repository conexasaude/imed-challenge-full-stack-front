export interface Professional {
    id: number,
    crm: string,
    name: string,
    password?: string,
    status: 'unavailable' | 'available'
}