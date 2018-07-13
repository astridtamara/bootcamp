// @flow
export type Contact = {
    id: number,
    name: string,
    phone: string,
    pict: string,
}

export type State = {
    contactList : Array<Contact>,
    searchValue: string,
    selectedIdx: number,
    isAdd: boolean,
}