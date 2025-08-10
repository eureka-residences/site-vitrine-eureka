export interface IPaymentMethod {
    id: string,
    name: string,
    description: string,
    icon: string,
    color: string,
    bgColor: string,
    selectedBg: string,
    prefix: string,
}

export interface IPaymentMethodMinimal {
    method: string,
    phoneNumber: string,
}