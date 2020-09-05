export class User {
    username: string;
    user_id: string;
    BTR_NR: string;
}
export class Kultur  {
    id: string;
    label: string;
    factor: number;
    constructor(id, label, factor) {
        this.factor = factor;
        this.id = id;
        this.label = label;
    }
}

export class Bodenbearbeitung {
    id: string;
    label: string;
    factor: number;

    constructor(id, label, factor) {
        this.id = id;
        this.label = label;
        this.factor = factor;
    }
}
export class KulturProJahr {
    kultur: Kultur;
    jahr: number;

    constructor(kultur: Kultur, jahr: number) {
        this.kultur = kultur;
        this.jahr = jahr;
    }

}
export class BodenbearbeitungProJahr {
    bodenbearbeitung: Bodenbearbeitung;
    jahr: number;

    constructor(bodenbearbeitung: Bodenbearbeitung, jahr: number) {
        this.bodenbearbeitung = bodenbearbeitung;
        this.jahr = jahr;
    }

}
export class Nutzungsflaeche {
    kultur_pro_jahr: KulturProJahr[];
    bodenbearbeitung_pro_jahr: BodenbearbeitungProJahr[];

    constructor() {
        this.kultur_pro_jahr = [];
        this.bodenbearbeitung_pro_jahr = [];
    }

}

export class Bewirtschaftungseinheit {
    KTID_B: string;
    BTR_NR: string;
    BTR_ID: number;
    nutzungsflaechen: Nutzungsflaeche[];
    bewirtschaftungsflaechen_area: any;
    nutzungsflaechen_area: any;
}

