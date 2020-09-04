export class User {
    username: string;
    user_id: string;
}

export class Nutzungsflaeche {

}
export class Bewirtschaftungseinheit {
    ktid_b: string;
    user_id: string;
    nutzungsflaechen: Nutzungsflaeche[];
}

