export class Project {
    id: number | undefined;
    name: string = '';
    description: string = '';
    imageUrl: string = '';
    contractTypeId: number | undefined;
    contaractSignedOn: Date = new Date();
    budget: number = 0;
    isActive: boolean = false;
    get isNew(): boolean {
        return this.id == undefined;
    }
    constructor(initializer?: any) {
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.name) this.name = initializer.name;
        if(initializer.description) this.description = initializer.description;
        if(initializer.budget) this.budget = initializer.budget;
        if(initializer.contractTypeId) this.contractTypeId = initializer.contractId;
        if(initializer.imageUrl) this.budget = initializer.imageUrl;
        if(initializer.contractSignedOn)
            this.contaractSignedOn = initializer.contractSignedOn;
        if(initializer.isActive) this.isActive = initializer.isActive;
    }
}