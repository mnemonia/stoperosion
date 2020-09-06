export class User {
    username: string;
    user_id: string;
    BTR_NR: string;
}
export class Kultur  {
    KUL_ID: string;
    label: string;
    factor: number;
    constructor(id, label, factor) {
        this.factor = factor;
        this.KUL_ID = id;
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
export class BewirtschaftungProJahr {
    jahr: number;
    hauptnutzungKultur: Kultur;
    hauptnutzungBodenbearbeitung: Bodenbearbeitung;
    zwischennutzungKultur: Kultur;
    zwischennutzungBodenbearbeitung: Bodenbearbeitung;

    constructor(j: number) {
        this.jahr = j;
    }

}
export class Nutzungsflaeche {
    // kultur_pro_jahr: KulturProJahr[];
    // bodenbearbeitung_pro_jahr: BodenbearbeitungProJahr[];
    bewirtschaftung_pro_jahr: BewirtschaftungProJahr[];

}

export class Bewirtschaftungseinheit {
    KTID_B: string;
    BTR_NR: string;
    BTR_ID: number;
    nutzungsflaechen: Nutzungsflaeche[];
    bewirtschaftungsflaechen_area: any;
    nutzungsflaechen_area: any;
}


